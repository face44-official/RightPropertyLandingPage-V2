import { useCallback, useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

interface UseMotionPathProps {
  trigger?: string;
  startOffset?: string;
  endOffset?: string;
  scrollScrub?: boolean | number;
  markers?: boolean;
  maskRadius?: number;
  responsiveScale?: boolean; // ✅ NEW optional prop
}

export const useMotionPath = ({
  trigger = ".trigger",
  startOffset = "top+=250px top",
  endOffset = "+=100%",
  scrollScrub = true,
  markers = false,
  maskRadius = 500,
  responsiveScale = true, // ✅ enabled by default
}: UseMotionPathProps = {}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const motionTimeline = useRef<gsap.core.Timeline | null>(null);
  const $passedTrigger = useRef(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const inertiaAnimation = useRef<gsap.core.Tween | null>(null);

  // ✅ determine responsive scale for 4K
  const getScaleFactor = useCallback(() => {
    if (!responsiveScale) return 1;
    const width = window.innerWidth;
    // smooth mapping 1920 → 3840 = 1 → 1.35
    return gsap.utils.clamp(1, 1.35, 1 + ((width - 1920) / (3840 - 1920)) * 0.35);
  }, [responsiveScale]);

  // ---------------------------------------------------------------------------

  const calculateOffsets = useCallback(() => {
    if (!divRef.current || !pathRef.current)
      return { offsetX: 550, offsetY: 350 };

    const containerRect = divRef.current.getBoundingClientRect();
    const svgContainer = pathRef.current.closest("svg");
    if (!svgContainer) return { offsetX: 550, offsetY: 350 };

    const svgParent = svgContainer.parentElement;
    if (!svgParent) return { offsetX: 550, offsetY: 350 };

    const parentRect = svgParent.getBoundingClientRect();
    const offsetX = parentRect.left - containerRect.left;
    const offsetY = parentRect.top - containerRect.top;
    return { offsetX, offsetY };
  }, []);

  const updateMaskPosition = useCallback(() => {
    if (divRef.current) {
      divRef.current.style.setProperty("--mask-x", `${currentPosition.current.x}px`);
      divRef.current.style.setProperty("--mask-y", `${currentPosition.current.y}px`);
    }
  }, []);

  const startInertiaAnimation = useCallback(() => {
    inertiaAnimation.current?.kill();
    inertiaAnimation.current = gsap.to(currentPosition.current, {
      duration: 1.5,
      ease: "power2.out",
      x: mousePosition.current.x,
      y: mousePosition.current.y,
      onUpdate: updateMaskPosition,
      overwrite: true,
    });
  }, [updateMaskPosition]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        if (divRef.current) {
          const { left, top } = divRef.current.getBoundingClientRect();
          mousePosition.current.x = e.clientX - left;
          mousePosition.current.y = e.clientY - top;
          startInertiaAnimation();
        }
      });
    },
    [startInertiaAnimation]
  );

  // ---------------------------------------------------------------------------

  const startMotionPath = useCallback(() => {
    if (!divRef.current || !pathRef.current) return;

    motionTimeline.current?.kill();

    const { offsetX, offsetY } = calculateOffsets();
    const scale = getScaleFactor(); // ✅ apply 4K scale

    gsap.set(divRef.current, {
      scale,
      transformOrigin: "top left",
    });

    const follower = { x: 0, y: 0 };

    motionTimeline.current = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger,
        start: startOffset,
        end: endOffset,
        scrub: scrollScrub,
        markers,
        invalidateOnRefresh: true,
      },
    });

    motionTimeline.current.to(follower, {
      ease: "power3.out",
      motionPath: {
        path: pathRef.current,
        offsetX: offsetX,
        offsetY: offsetY - 80,
        autoRotate: false,
      },
      onUpdate() {
        if (divRef.current) {
          divRef.current.style.setProperty("--mask-x", `${follower.x}px`);
          divRef.current.style.setProperty("--mask-y", `${follower.y}px`);
        }
      },
    });
  }, [
    trigger,
    startOffset,
    endOffset,
    scrollScrub,
    markers,
    calculateOffsets,
    getScaleFactor,
  ]);

  // ---------------------------------------------------------------------------

  const moveToInitialPosition = useCallback(() => {
    if (!divRef.current || !pathRef.current) return;

    window.removeEventListener("mousemove", handleMouseMove);
    inertiaAnimation.current?.kill();
    inertiaAnimation.current = null;

    const { offsetX, offsetY } = calculateOffsets();
    const initialPoint = pathRef.current.getPointAtLength(0);
    const initialX = initialPoint.x + offsetX;
    const initialY = initialPoint.y + offsetY;

    gsap.to({}, {
      duration: 1,
      ease: "power2.out",
      onUpdate() {
        const progress = this.progress();
        if (divRef.current) {
          const currentX =
            parseFloat(getComputedStyle(divRef.current).getPropertyValue("--mask-x")) ||
            448;
          const currentY =
            parseFloat(getComputedStyle(divRef.current).getPropertyValue("--mask-y")) ||
            -50;
          const x = currentX + (initialX - currentX) * progress;
          const y = currentY + (initialY - currentY) * progress;
          divRef.current.style.setProperty("--mask-x", `${x}px`);
          divRef.current.style.setProperty("--mask-y", `${y}px`);
        }
      },
    });
  }, [handleMouseMove, calculateOffsets]);

  const lenisHandler = useCallback(
    (lenis: Lenis) => {
      if (lenis.progress >= 0.001) {
        if (!$passedTrigger.current) {
          $passedTrigger.current = true;
          moveToInitialPosition();
        }
      } else {
        $passedTrigger.current = false;
        window.addEventListener("mousemove", handleMouseMove);
        if (divRef.current) {
          const currentX =
            parseFloat(getComputedStyle(divRef.current).getPropertyValue("--mask-x")) ||
            0;
          const currentY =
            parseFloat(getComputedStyle(divRef.current).getPropertyValue("--mask-y")) ||
            0;
          currentPosition.current.x = currentX;
          currentPosition.current.y = currentY;
        }
      }
    },
    [handleMouseMove, moveToInitialPosition]
  );

  const initializeMotionPath = useCallback(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      setTimeout(() => {
        startMotionPath();
        if (maskRadius) {
          const mask = document.getElementsByClassName("mask")[0] as HTMLDivElement;
          if (mask) {
            mask.style.setProperty("--mask-r", `${maskRadius}px`);
          }
        }
      }, 10);
    });
  }, [startMotionPath, maskRadius]);

  // ---------------------------------------------------------------------------

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (motionTimeline.current && !$passedTrigger.current) {
          startMotionPath();
        }
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(resizeTimeout);
      inertiaAnimation.current?.kill();
      inertiaAnimation.current = null;
      motionTimeline.current?.kill();
    };
  }, [handleMouseMove, startMotionPath]);

  useLenis(lenisHandler, [lenisHandler]);

  return {
    divRef,
    pathRef,
    initializeMotionPath,
    startMotionPath,
    moveToInitialPosition,
    handleMouseMove,
  };
};
