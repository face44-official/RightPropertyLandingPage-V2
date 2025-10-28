import { gsap } from "gsap";

export const CONFIG = {
    nodeCount: 7,
    radiusRatio: 0.39,
    lineGapRatio: 0.9,
    duration: 0.5,
    ease: "power2.out",
    stroke: "#77C5F2",
    strokeOpacity: 0.7,
    strokeWidth: 2,
    initialSize: 130,
    finalSize: 820,
    entranceDuration: 3,
    initialNodeSize: 7,
    finalNodeSize: 14,
    zoomScale: 1.9,
    zoomDuration: 1,
    zoomNodeSize: 192,
};

// Convert polar coordinates to cartesian
export const polar = (cx: number, cy: number, deg: number, r: number) => {
    const a = (deg * Math.PI) / 180;
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
};

// Resize SVG to match container
export const resizeSvg = (stageRef: HTMLDivElement, wiresRef: SVGSVGElement) => {
    const rect = stageRef.getBoundingClientRect();
    wiresRef.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
    wiresRef.setAttribute("width", String(rect.width));
    wiresRef.setAttribute("height", String(rect.height));
};

// Get center coordinates and dimensions
export const getCenter = (stageRef: HTMLDivElement) => {
    const rect = stageRef.getBoundingClientRect();
    return { cx: rect.width / 2, cy: rect.height / 2, w: rect.width, h: rect.height };
};

// Calculate circle layout positions
export const calculateCircleLayout = (stageRef: HTMLDivElement) => {
    const { cx, cy, w, h } = getCenter(stageRef);
    const r = Math.min(w, h) * CONFIG.radiusRatio;
    const step = 360 / CONFIG.nodeCount;
    const start = -90;
    
    return { cx, cy, r, start, step };
};

// Calculate line layout positions
export const calculateLinePositions = (
    leftAdjacentX: number,
    leftAdjacentY: number,
    rightAdjacentX: number,
    rightAdjacentY: number,
    centerIndex: number
) => {
    // Calculate the gap - divide by 2 since adjacent nodes are 2 gaps apart
    const baseGap = (rightAdjacentX - leftAdjacentX) / 2;
    const gapMultiplier = 2; // Increase gap by 50% (adjust this multiplier as needed)
    const gap = baseGap * gapMultiplier;
    
    // Adjust left position to keep center node at same x when gap increases
    const centerPosition = centerIndex - 1;
    const adjustedLeftX = leftAdjacentX - (gap - baseGap);
    
    // Use the average Y as the alignment line
    const alignmentY = (leftAdjacentY + rightAdjacentY) / 2;
    
    // Build line order: [4, 5, 6, 0, 1, 2, 3] for 7 nodes
    const lineOrder = buildLineOrder();
    
    const targetPositions: Array<{ index: number; x: number; y: number }> = [];
    
    lineOrder.forEach((nodeIndex, positionIndex) => {
        const x = adjustedLeftX + ((positionIndex - centerPosition) * gap);
        targetPositions.push({ index: nodeIndex, x, y: alignmentY });
    });
    
    return { targetPositions, lineOrder, gap };
};

// Build line order preserving circular proximity
export const buildLineOrder = () => {
    const lineOrder: number[] = [];
    
    // Add left side (counterclockwise from node 0): [4, 5, 6] for 7 nodes
    const leftCount = Math.ceil((CONFIG.nodeCount - 1) / 2);
    const leftStartIndex = CONFIG.nodeCount - leftCount;
    for (let i = 0; i < leftCount; i++) {
        lineOrder.push(leftStartIndex + i);
    }
    
    // Add first node (center)
    lineOrder.push(0);
    
    // Add right side (clockwise from node 0): 1, 2, ...
    const rightCount = Math.floor((CONFIG.nodeCount - 1) / 2);
    for (let i = 1; i <= rightCount; i++) {
        lineOrder.push(i);
    }
    
    return lineOrder;
};

// Draw circular arc wires using quadratic Bézier curves
export const drawArcWires = (
    wiresRef: SVGSVGElement,
    cx: number,
    cy: number,
    r: number,
    count: number,
    startDeg: number,
    stepDeg: number
) => {
    // Clear and create container group
    wiresRef.innerHTML = "";
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("fill", "none");
    g.setAttribute("stroke", CONFIG.stroke);
    g.setAttribute("stroke-opacity", String(CONFIG.strokeOpacity));
    g.setAttribute("strokeWidth", String(CONFIG.strokeWidth));

    // Create separate path for each segment using quadratic Bézier curve
    for (let i = 0; i < count; i++) {
        const a1 = startDeg + stepDeg * i;
        const a2 = startDeg + stepDeg * (i + 1);
        const p1 = polar(cx, cy, a1, r);
        const p2 = polar(cx, cy, a2, r);
        
        // Calculate control point at intersection of tangent lines
        const a1Rad = (a1 * Math.PI) / 180;
        const a2Rad = (a2 * Math.PI) / 180;
        
        // Tangent directions (perpendicular to radius)
        const t1x = -Math.sin(a1Rad);
        const t1y = Math.cos(a1Rad);
        const t2x = -Math.sin(a2Rad);
        const t2y = Math.cos(a2Rad);
        
        // Find intersection of tangent lines
        const denom = t1x * t2y - t1y * t2x;
        if (Math.abs(denom) > 0.001) {
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const s = (dx * t2y - dy * t2x) / denom;
            const control = {
                x: p1.x + s * t1x,
                y: p1.y + s * t1y
            };
            
            const d = `M ${p1.x} ${p1.y} Q ${control.x} ${control.y} ${p2.x} ${p2.y}`;
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", d);
            g.appendChild(path);
        }
    }

    wiresRef.appendChild(g);
};

// Update arc paths to follow their adjacent nodes with curvature factor
export const updateArcsFollowingNodes = (
    wiresRef: SVGSVGElement,
    nodeRefs: HTMLDivElement[],
    arcDirections: number[],
    curvatureFactor: number,
    clonedNodes: HTMLDivElement[] = []
) => {
    const g = wiresRef.querySelector("g");
    if (!g) return;

    const paths = g.querySelectorAll("path");
    if (paths.length === 0) return;

    // Combine original nodes with cloned nodes for wire updates
    const allNodes = [...nodeRefs, ...clonedNodes];

    // Update each arc based on its connected nodes' current positions
    paths.forEach((path, i) => {
        let nodeIndex1: number;
        let nodeIndex2: number;
        
        if (i < CONFIG.nodeCount) {
            // Original arcs
            nodeIndex1 = i;
            nodeIndex2 = (i + 1) % CONFIG.nodeCount;
        } else {
            // Extended arcs for cloned nodes - skip if no clones exist
            if (clonedNodes.length === 0) return;
            
            const extendedIndex = i - CONFIG.nodeCount;
            const lineOrder = buildLineOrder(); // [4,5,6,0,1,2,3]
            
            if (extendedIndex === 0) {
                // Arc from last original node (3) to first clone (4)
                nodeIndex1 = lineOrder[lineOrder.length - 1]; // 3
                nodeIndex2 = CONFIG.nodeCount; // First clone index
            } else {
                // Arc between clones
                nodeIndex1 = CONFIG.nodeCount + extendedIndex - 1;
                nodeIndex2 = CONFIG.nodeCount + extendedIndex;
            }
        }
        
        const node1 = allNodes[nodeIndex1];
        const node2 = allNodes[nodeIndex2];
        
        if (!node1 || !node2) {
            console.log('Missing node:', { i, nodeIndex1, nodeIndex2, node1: !!node1, node2: !!node2, allNodesLength: allNodes.length });
            return;
        }
        
        // Get current node positions from GSAP transforms
        const p1 = {
            x: gsap.getProperty(node1, "x") as number,
            y: gsap.getProperty(node1, "y") as number
        };
        const p2 = {
            x: gsap.getProperty(node2, "x") as number,
            y: gsap.getProperty(node2, "y") as number
        };
        
        // Calculate control point - interpolate from curved to straight (midpoint)
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        
        let control: { x: number; y: number };
        
        if (curvatureFactor > 0) {
            // Vector from p1 to p2
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist > 0.001) {
                // Use stored arc direction to maintain consistent curve orientation
                const direction = arcDirections[i] || 1;
                
                // Perpendicular vector
                let perpX = -dy * direction;
                let perpY = dx * direction;
                
                // Normalize perpendicular
                const perpDist = Math.sqrt(perpX * perpX + perpY * perpY);
                perpX /= perpDist;
                perpY /= perpDist;
                
                // Calculate maximum curve offset
                const maxOffset = dist * 0.24;
                
                // Full curved control point
                const curvedControlX = midX + perpX * maxOffset;
                const curvedControlY = midY + perpY * maxOffset;
                
                // Interpolate between curved control point and midpoint
                control = {
                    x: midX + (curvedControlX - midX) * curvatureFactor,
                    y: midY + (curvedControlY - midY) * curvatureFactor
                };
            } else {
                control = { x: midX, y: midY };
            }
        } else {
            // Curvature is 0, use midpoint (straight line)
            control = { x: midX, y: midY };
        }
        
        // Update path
        const d = `M ${p1.x} ${p1.y} Q ${control.x} ${control.y} ${p2.x} ${p2.y}`;
        path.setAttribute("d", d);
    });
};

// Calculate and store arc directions for consistent curvature
export const calculateArcDirections = (
    targetPositions: Array<{ index: number; x: number; y: number }>,
    gap: number,
    wiresRef: SVGSVGElement
) => {
    const arcDirections: number[] = [];
    
    const wiresGroup = wiresRef.querySelector("g");
    const paths = wiresGroup?.querySelectorAll("path");
    
    for (let i = 0; i < CONFIG.nodeCount; i++) {
        const nodeIndex1 = i;
        const nodeIndex2 = (i + 1) % CONFIG.nodeCount;
        
        // Get TARGET positions
        const target1 = targetPositions.find(t => t.index === nodeIndex1);
        const target2 = targetPositions.find(t => t.index === nodeIndex2);
        
        if (!target1 || !target2) {
            arcDirections.push(1);
            continue;
        }
        
        // Vector from target1 to target2
        const dx = target2.x - target1.x;
        const distance = Math.abs(dx);
        
        // Check if this arc spans edge nodes
        const totalLineWidth = gap * (CONFIG.nodeCount - 1);
        const isEdgeArc = distance > totalLineWidth * 0.6;
        
        // Immediately hide edge-spanning arcs
        if (isEdgeArc && paths && paths[i]) {
            paths[i].setAttribute("opacity", "0");
        }
        
        // Determine direction for downward curvature
        const perp1Y = dx;
        const pointsDownward = perp1Y > 0;
        
        arcDirections.push(pointsDownward ? -1 : 1);
    }
    
    return arcDirections;
};

// Extend wires to connect to cloned nodes
export const extendWiresForClones = (wiresRef: SVGSVGElement, cloneCount: number) => {
    const g = wiresRef.querySelector("g");
    if (!g) return;
    
    // Add paths for connections to cloned nodes
    for (let i = 0; i < cloneCount; i++) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M 0 0 Q 0 0 0 0"); // Initial dummy path
        g.appendChild(path);
    }
};

// Remove extended wire paths
export const removeExtendedWires = (wiresRef: SVGSVGElement, cloneCount: number) => {
    const g = wiresRef.querySelector("g");
    if (!g) return;
    
    const paths = Array.from(g.querySelectorAll("path"));
    // Remove the last cloneCount paths
    for (let i = 0; i < cloneCount; i++) {
        const lastPath = paths[paths.length - 1 - i];
        if (lastPath) lastPath.remove();
    }
};

