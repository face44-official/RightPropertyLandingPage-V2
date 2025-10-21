import { useRef, useState, useCallback, useLayoutEffect } from "react";
import { gsap } from "gsap";
import {
    CONFIG,
    polar,
    resizeSvg,
    calculateCircleLayout,
    calculateLinePositions,
    buildLineOrder,
    drawArcWires,
    updateArcsFollowingNodes,
    calculateArcDirections,
    extendWiresForClones,
    removeExtendedWires,
} from "./dfes-circular-helpers";
import desktopIcon from "@/assets/v3/experience/dfes/icons/desktop.svg";
import tabletIcon from "@/assets/v3/experience/dfes/icons/tablet.svg";
import phoneIcon from "@/assets/v3/experience/dfes/icons/phone.svg";
import laptopIcon from "@/assets/v3/experience/dfes/icons/laptop.svg";
import tvIcon from "@/assets/v3/experience/dfes/icons/tv.svg";
import kioskIcon from "@/assets/v3/experience/dfes/icons/kiosk.svg";
import ellipseIcon from "@/assets/v3/experience/dfes/icons/ellipse.svg";
import { DesignForEveryScreenContent } from "./design-for-every-screen-content";
import DfesZoomImages from "./dfes-zoom-images";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const environments = [
    { icon: kioskIcon, width: 6 },
    { icon: phoneIcon, width: 5 },
    { icon: tvIcon, width: 10 },
    { icon: laptopIcon, width: 12 },
    { icon: desktopIcon, width: 9 },
    { icon: tabletIcon, width: 6 },
    { icon: desktopIcon, width: 9 },

];

const DfesCircularUpdated = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const stageRef = useRef<HTMLDivElement>(null);
    const nodesRef = useRef<HTMLDivElement>(null);
    const wiresRef = useRef<SVGSVGElement>(null);
    const nodeRefs = useRef<HTMLDivElement[]>([]);
    const imageRefs = useRef<HTMLDivElement[]>([]);
    const ellipseRefs = useRef<HTMLDivElement[]>([]);
    const hasAnimated = useRef(false);
    const clonedNodes = useRef<HTMLDivElement[]>([]);
    const [imageIndex, setImageIndex] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const masterTlRef = useRef<any>(null);

    // Store the perpendicular direction for each arc (1 for counterclockwise, -1 for clockwise)
    // This ensures curves don't flip during animation
    const arcDirections = useRef<number[]>([]);

    // Circle layout
    const positionCircle = () => {
        if (!stageRef.current) return { cx: 280, cy: 280, r: 109.2, start: -90, step: 51.43 };

        const { cx, cy, r, start, step } = calculateCircleLayout(stageRef.current);

        nodeRefs.current.forEach((el, i) => {
            if (!el) return;
            const { x, y } = polar(cx, cy, start + step * i, r);
            gsap.to(el, { x, y, duration: 0, ease: CONFIG.ease });
        });

        return { cx, cy, r, start, step };
    };



    const playTextAnimation = () => {
        const mainTl = gsap.timeline()

        const textsFadeOut = gsap.timeline({
            duration: 1,
        })
        textsFadeOut.to(".title-first-group", {
            opacity: 0,
            duration: 1,
            ease: "power3.Out"
        })
        textsFadeOut.to(".title-second-group", {
            opacity: 0,
            duration: 1,
            ease: "power3.Out"
        }, "<")
        const tl = gsap.timeline({
            duration: 1,
        })
        tl.to(".title-first-group", {
            x: -150,
            duration: 1,
            ease: "power3.Out"
        })
        tl.to(".title-second-group", {
            x: 150,
            duration: 1,
            ease: "power3.Out"
        }, "<")
        tl.add(textsFadeOut, 1)
        mainTl.add(tl, 0)
        mainTl.add(textsFadeOut, 1)
        return mainTl;
    }

    // Entrance animation
    const playEntranceAnimation = () => {
        if (!stageRef.current || !nodesRef.current || hasAnimated.current) return;
        hasAnimated.current = true;

        const tl = gsap.timeline({

        });

        // Calculate center based on initial size
        const initialCx = CONFIG.initialSize / 2;
        const initialCy = CONFIG.initialSize / 2;

        // Position nodes in initial small circle
        const initialRadius = CONFIG.initialSize * CONFIG.radiusRatio;
        const step = 360 / CONFIG.nodeCount;
        const start = -90;

        // Set ALL initial states before animation starts
        gsap.set(stageRef.current, {
            width: CONFIG.initialSize,
            height: CONFIG.initialSize,
            opacity: 0
        });
        gsap.set(nodesRef.current, { rotation: 0 });

        nodeRefs.current.forEach((el, i) => {
            if (!el) return;
            const { x, y } = polar(initialCx, initialCy, start + step * i, initialRadius);
            gsap.set(el, {
                x,
                y,
                width: CONFIG.initialNodeSize,
                height: CONFIG.initialNodeSize
            });
        });

        // Set images to hidden initially
        imageRefs.current.forEach((img) => {
            if (!img) return;
            gsap.set(img, { opacity: 0, scale: 0.5 });
        });

        ellipseRefs.current.forEach((el) => {
            if (!el) return;
            gsap.set(el, { opacity: 0, scale: 0.5 });
        });

        // Update SVG for initial size
        if (wiresRef.current) {
            resizeSvg(stageRef.current, wiresRef.current);
            drawArcWires(wiresRef.current, initialCx, initialCy, initialRadius, CONFIG.nodeCount, start, step);
        }

        // Animate
        tl.to(stageRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        })
            .to(nodesRef.current, {
                rotation: 360,
                duration: CONFIG.entranceDuration,
                ease: "none",
                repeat: 0
            }, 0.5)
            .to(stageRef.current, {
                width: CONFIG.finalSize,
                height: CONFIG.finalSize,
                duration: CONFIG.entranceDuration - 0.5,
                ease: "power2.inOut",
                onUpdate: () => {
                    // Update node positions during resize
                    const currentSize = stageRef.current?.offsetWidth || CONFIG.initialSize;
                    const currentRadius = currentSize * CONFIG.radiusRatio;
                    const centerPoint = { cx: currentSize / 2, cy: currentSize / 2 };

                    nodeRefs.current.forEach((el, i) => {
                        if (!el) return;
                        const { x, y } = polar(centerPoint.cx, centerPoint.cy, start + step * i, currentRadius);
                        gsap.set(el, { x, y });
                    });

                    // Update wires
                    if (stageRef.current && wiresRef.current) {
                        resizeSvg(stageRef.current, wiresRef.current);
                        drawArcWires(wiresRef.current, centerPoint.cx, centerPoint.cy, currentRadius, CONFIG.nodeCount, start, step);
                    }
                }
            }, 0.5)
            .to(nodeRefs.current.filter(Boolean), {
                width: CONFIG.finalNodeSize,
                height: CONFIG.finalNodeSize,
                duration: CONFIG.entranceDuration - 0.5,
                ease: "power2.inOut"
            }, 0.5)
            .to(imageRefs.current.filter(Boolean), {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)",
            }, CONFIG.entranceDuration - 0.5)
            .to(ellipseRefs.current.filter(Boolean), {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)",
            }, CONFIG.entranceDuration - 1.5);

        return tl;
    }

    // Zoom animation - scale up and position to show only first node
    const playZoomAnimation = () => {
        if (!stageRef.current) return;

        const tl = gsap.timeline({
            delay: 0.5
        });

        // Goal: Component moves down with 57% empty space ABOVE the first node
        // Visible component occupies bottom 43% of viewport
        const viewportHeight = window.innerHeight;
        const emptySpaceRatio = 0.62;
        const emptySpaceHeight = viewportHeight * emptySpaceRatio; // 57% empty space above

        // Calculate where first node is in the circle
        const stageSize = CONFIG.finalSize;
        const circleRadius = stageSize * CONFIG.radiusRatio;

        // First node is at top of circle (-90 degrees), at distance circleRadius from center
        // After scaling, distance from stage center to first node becomes:
        const scaledNodeDistanceFromCenter = circleRadius * CONFIG.zoomScale;

        // We want first node positioned at the boundary of empty space
        // nodeTargetY = where we want the first node to appear on screen
        const nodeTargetY = emptySpaceHeight;

        // Stage center is initially at: viewportHeight/2
        // After y offset, stage center is at: viewportHeight/2 + yOffset
        // First node position is: (viewportHeight/2 + yOffset) - scaledNodeDistanceFromCenter
        // We want: (viewportHeight/2 + yOffset) - scaledNodeDistanceFromCenter = nodeTargetY
        // Therefore: yOffset = nodeTargetY - viewportHeight/2 + scaledNodeDistanceFromCenter

        const yOffset = nodeTargetY - (viewportHeight / 2) + scaledNodeDistanceFromCenter;

        tl.to(stageRef.current, {
            scale: CONFIG.zoomScale,
            y: yOffset,
            duration: CONFIG.zoomDuration,
            ease: "power2.inOut"
        })
            // Counter-scale nodes to maintain their visual size
            .to(nodeRefs.current.filter(Boolean), {
                scale: 1 / CONFIG.zoomScale,
                duration: CONFIG.zoomDuration,
                ease: "power2.inOut"
            }, "<");

        return tl;
    };


    // Switch to line mode animation
    const switchLineMode = () => {
        if (!stageRef.current || !wiresRef.current) return;

        const mainTl = gsap.timeline({

        });
        const tl = gsap.timeline({ delay: 0.5 });

        // Defer position calculations until just before animation starts
        const targetPositions: { index: number, x: number, y: number }[] = [];
        let gap = 0;
        const curvatureState = { factor: 1 };

        tl.call(() => {
            // Guard against unmounted component
            if (!wiresRef.current) return;

            // Read positions just before animation starts
            const lineOrder = buildLineOrder();
            const centerIndex = lineOrder.indexOf(0);
            const leftAdjacentNodeIndex = lineOrder[centerIndex - 1];
            const rightAdjacentNodeIndex = lineOrder[centerIndex + 1];

            const leftAdjacentNode = nodeRefs.current[leftAdjacentNodeIndex];
            const rightAdjacentNode = nodeRefs.current[rightAdjacentNodeIndex];

            if (!leftAdjacentNode || !rightAdjacentNode) return;

            const leftAdjacentX = gsap.getProperty(leftAdjacentNode, "x") as number;
            const leftAdjacentY = gsap.getProperty(leftAdjacentNode, "y") as number;
            const rightAdjacentX = gsap.getProperty(rightAdjacentNode, "x") as number;
            const rightAdjacentY = gsap.getProperty(rightAdjacentNode, "y") as number;

            const result = calculateLinePositions(
                leftAdjacentX,
                leftAdjacentY,
                rightAdjacentX,
                rightAdjacentY,
                centerIndex
            );

            result.targetPositions.forEach(target => {
                targetPositions.push(target);
            });
            gap = result.gap;

            arcDirections.current = calculateArcDirections(targetPositions, gap, wiresRef.current);
        });

        // Animate nodes to their target positions
        nodeRefs.current.forEach((node, nodeIndex) => {
            if (!node) return;
            // @ts-expect-error targetPositions
            tl.to(node, {
                x: () => {
                    const target = targetPositions.find(t => t.index === nodeIndex);
                    return target ? target.x : gsap.getProperty(node, "x");
                },
                y: () => {
                    const target = targetPositions.find(t => t.index === nodeIndex);
                    return target ? target.y : gsap.getProperty(node, "y");
                },
                duration: 1,
                ease: "power2.inOut"
            }, 0.001);
        });

        // Animate curvature factor
        tl.to(curvatureState, {
            factor: 0,
            duration: 0.5,
            ease: "power2.in",
        }, 0.001);

        // Update arcs once per frame
        tl.eventCallback("onUpdate", () => {
            // Guard against unmounted component
            if (!wiresRef.current || !nodesRef.current) return;

            if (wiresRef.current) {
                updateArcsFollowingNodes(
                    wiresRef.current,
                    nodeRefs.current,
                    arcDirections.current,
                    curvatureState.factor,
                    clonedNodes.current
                );
            }
        });

        mainTl.add(tl, 0);
        return mainTl;
    }

    // Main layout function
    const layout = useCallback(() => {
        if (!stageRef.current || !wiresRef.current) return;
        resizeSvg(stageRef.current, wiresRef.current);
        const geom = positionCircle();
        drawArcWires(wiresRef.current, geom.cx, geom.cy, geom.r, CONFIG.nodeCount, geom.start, geom.step);

    }, []);

    const moveHorizontalAnimation = () => {
        let lineWidth = 0;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#dfes-content-container",
                start: "center+=2 center",
                end: "+=2000",
                scrub: 0,
                pinSpacing: true,
                pin: true,
                onUpdate: (self) => {
                    // Guard against unmounted component
                    if (!wiresRef.current || !nodesRef.current) return;

                    const currentProgress = self.progress;
                    const direction = self.direction;
                    const imageIndex = Math.floor((currentProgress * 0.9) * 6);
                    setImageIndex(imageIndex);
                    // Update wires to follow nodes
                    if (wiresRef.current) {
                        updateArcsFollowingNodes(
                            wiresRef.current,
                            nodeRefs.current,
                            arcDirections.current,
                            0, // curvatureFactor is 0 for straight lines
                            clonedNodes.current
                        );
                    }

                    // If scrolling backwards and clones exist
                    if (direction === -1 && currentProgress === 0 && clonedNodes.current.length > 0) {
                        // Remove extended wires
                        if (wiresRef.current) {
                            removeExtendedWires(wiresRef.current, clonedNodes.current.length);
                        }

                        // Remove clones
                        clonedNodes.current.forEach(clone => {
                            clone.remove();
                        });
                        clonedNodes.current = [];

                        // Remove extended arc directions
                        arcDirections.current = arcDirections.current.slice(0, CONFIG.nodeCount);
                    }
                    // If scrolling forward and no clones exist yet
                    else if (direction === 1 && currentProgress > 0 && clonedNodes.current.length === 0 && nodesRef.current) {
                        const lineOrder = buildLineOrder(); // [4,5,6,0,1,2,3]
                        const firstTwoIndices = lineOrder.slice(0, 2); // [4, 5]

                        // Calculate gap between nodes
                        const firstNode = nodeRefs.current[lineOrder[0]];
                        const secondNode = nodeRefs.current[lineOrder[1]];
                        const firstX = gsap.getProperty(firstNode, "x") as number;
                        const secondX = gsap.getProperty(secondNode, "x") as number;
                        const gap = secondX - firstX;

                        firstTwoIndices.forEach((nodeIndex, idx) => {
                            const originalNode = nodeRefs.current[nodeIndex];
                            if (!originalNode) return;

                            const clone = originalNode.cloneNode(true) as HTMLDivElement;
                            clone.style.position = 'absolute';

                            // Get the last node's position
                            const lastNodeIndex = lineOrder[lineOrder.length - 1];
                            const lastNode = nodeRefs.current[lastNodeIndex];
                            const lastNodeX = gsap.getProperty(lastNode, "x") as number;
                            const lastNodeY = gsap.getProperty(lastNode, "y") as number;

                            // Calculate position for clone (continue the line)
                            const cloneOffset = (idx + 1) * gap;
                            gsap.set(clone, {
                                x: lastNodeX + cloneOffset,
                                y: lastNodeY
                            });

                            nodesRef.current?.appendChild(clone);
                            clonedNodes.current.push(clone);
                        });

                        // Extend wires for cloned nodes
                        if (wiresRef.current) {
                            extendWiresForClones(wiresRef.current, firstTwoIndices.length);
                        }

                        // Add arc directions for new connections (all downward = -1 for horizontal lines)
                        for (let i = 0; i < firstTwoIndices.length; i++) {
                            arcDirections.current.push(-1);
                        }

                        // Immediately update wires to connect to new clones
                        if (wiresRef.current) {
                            updateArcsFollowingNodes(
                                wiresRef.current,
                                nodeRefs.current,
                                arcDirections.current,
                                0,
                                clonedNodes.current
                            );
                        }
                    }
                },
            }
        })

        tl.to(stageRef.current, {
            x: () => {
                lineWidth = wiresRef.current?.querySelector("path")?.getTotalLength() ?? 0;
                return -(lineWidth * 9.5);
            },
            ease: "none"
        }, 0)
        return tl;
    }




    // Resize handlers
    useLayoutEffect(() => {
        const handleResize = () => layout();
        const handleOrient = () => setTimeout(layout, 60);

        window.addEventListener("resize", handleResize, { passive: true });
        window.addEventListener("orientationchange", handleOrient, { passive: true });

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("orientationchange", handleOrient);
        };
    }, [layout]);

    // Initialize master timeline
    useLayoutEffect(() => {
        if (!stageRef.current || !nodesRef.current) return;

        // Wait for scroll position to settle after navigation
        const initTimer = setTimeout(() => {

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const all = ScrollTrigger.getAll();
                    all.forEach(trigger => {
                        trigger.refresh();
                    });

                    const ctx = gsap.context(() => {
                        const firstTl = gsap.timeline({
                            scrollTrigger: {
                                trigger: "#dfes-content-container",
                                start: "center center",
                                end: "+=1000",
                                scrub: 0,
                                pin: true,
                                invalidateOnRefresh: true,
                                pinSpacing: true
                            }
                        })
                        firstTl.to("#desktop-zoom-visual", {
                            z: 600,
                            duration: 1,
                            ease: "power3.In"
                        })
                        firstTl.to("#tablet-zoom-visual", {
                            z: 600,
                            duration: 0.4,
                            ease: "power3.In"
                        }, "0")
                        firstTl.to("#phone-zoom-visual", {
                            z: 600,
                            duration: 0.75,
                            ease: "power3.In"
                        }, "0.3")
                        firstTl.to("#laptop-zoom-visual", {
                            z: 1200,
                            duration: 1,
                            ease: "power3.In"
                        }, "0.1")
                        firstTl.to("#kiosk-zoom-visual", {
                            z: 600,
                            duration: 1,
                            ease: "power3.In"
                        }, "0.15")
                        firstTl.to("#tv-zoom-visual", {
                            z: 600,
                            duration: 1,
                            ease: "power3.In"
                        }, "0.2")

                        firstTl.add(gsap.to(".visual-element", {
                            opacity: 0,
                            duration: 0.1,
                            ease: "power3.In"
                        }), "1")
                        const tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: "#dfes-content-container",
                                start: "center+=1 center",
                                end: "+=2000",
                                scrub: 0,
                                pin: true,
                                invalidateOnRefresh: true,
                                pinSpacing: true,
                                onLeave: () => {
                                    setIsContentVisible(true)
                                },
                                onEnterBack: () => {
                                    setIsContentVisible(false)
                                }
                            }
                        })
                        tl.add(playTextAnimation())
                        tl.add(playEntranceAnimation()!, ">-=1")
                        tl.add(playZoomAnimation()!, ">")
                        tl.add(switchLineMode()!, ">")
                        tl.add(moveHorizontalAnimation()!, ">")
                    });

                    masterTlRef.current = ctx;
                });
            });
        }, 1000); // Wait slightly longer than header's scroll reset (300ms)

        return () => {
            clearTimeout(initTimer);
            if (masterTlRef.current) {
                masterTlRef.current.revert();
                masterTlRef.current = null;
            }
        };
    }, []);

    return (
        <div id="dfes-content-container" className="relative w-full  py-[10rem]   max-w-screen overflow-hidden">
            <DfesZoomImages />
            <DesignForEveryScreenContent currentImage={imageIndex} isVisible={isContentVisible} />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-general-sans font-semibold -tracking-[0.01em] text-60 leading-[130%] text-raisin-black">
                    <div className="title-first-group inline-block">Designed for </div>{" "}<div className="inline-block title-second-group">Every Screen</div>
                </div>
            </div>

            <div
                ref={stageRef}
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-xl opacity-0"
            >
                <svg
                    ref={wiresRef}
                    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                    aria-hidden="true"
                />
                <div ref={nodesRef} className="absolute inset-0">
                    {Array.from({ length: CONFIG.nodeCount }).map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) nodeRefs.current[i] = el;
                            }}
                            className="absolute w-[0.875rem] h-[0.875rem] bg-[#77C5F2] rounded-full shadow-lg grid place-items-center -translate-x-1/2 -translate-y-1/2"
                        >
                            <div ref={(el) => {
                                if (el) imageRefs.current[i] = el;

                            }} style={{ width: `${environments[i].width}rem`, transform: "translate(-50%, -50%)" }} className={`h-auto absolute top-1/2 left-1/2`}>
                                <img

                                    src={environments[i].icon}
                                    className="w-full h-full"
                                    alt={`Environment ${i + 1}`}
                                />
                            </div>
                            <div ref={(el) => {
                                if (el) ellipseRefs.current[i] = el;
                            }} className="w-[9.375rem] h-[9.375rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]">
                                <img src={ellipseIcon} className="w-full h-full" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

DfesCircularUpdated.displayName = "DfesCircularUpdated";

export default DfesCircularUpdated;