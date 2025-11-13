import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import { MeetRightProperty } from "../components/meet-right-property/section";
import EnhancedPresentationsSection from "../components/enhanced-presentations/section";
import BackToBackReveal from "../components/revealing-items/back-to-back-reveal";
import ChoosePresentationSection from "../components/choose-presentation/section";
import ConvertMoreLeadsSection from "../components/convert-more-leads/section";
import EasyOnboardingSection from "../components/easy-onboarding/section";
import FaqSection from "../components/faq/section";
import FeaturesCarousel from "../components/features-carousel";
import MadeToFit from "../components/made-to-fit/section";
import PresentSmarterSection from "../components/present-smarter/section";
import ScheduleADemoSection from "../components/schedule-a-demo/section";
import SimpleSetupSection from "../components/simple-setup/section";
// import MaskPath from "../components/enhanced-presentations/mask-path"
import { useMotionPath } from "../../lib/useMotionPath";
// import HeroRoad from "../components/common/hero-road"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import HeroRoadSvg from "../../assets/hero-test.svg?react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function HomePage() {
  const { initializeMotionPath } = useMotionPath({
    trigger: ".trigger",
    startOffset: "top top",
    endOffset: "+=200%",
    scrollScrub: true,
    markers: false,
    responsiveScale: true,
  });

  useEffect(() => {
    initializeMotionPath();
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const scrollTweenRef = useRef<GSAPTween | null>(null);
  const heroRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const updateTransform = () => {
      const width = window.innerWidth;

      // --- Range setup ---
      const minWidth = 769;
      const maxWidth = 3840;

      // --- Scale logic (3-phase) ---
      let scale: number;
      if (width <= 1350) {
        const t = (width - minWidth) / (1350 - minWidth);
        scale = 0.5 + t * (1 - 0.5);
      } else if (width <= 1920) {
        scale = 1;
      } else {
        const t = (width - 1920) / (maxWidth - 1920);
        scale = 1 + t * (1.5 - 1);
      }

      const clampedWidth = Math.min(Math.max(width, minWidth), maxWidth);

      // --- Top interpolation ---
      let top: number;

      if (width >= 1300 && width <= 1500) {
        top = -100; // fixed
      } else if (width >= 1000 && width < 1300) {
        // linear interpolation between 1000 → 1300px
        const t = (width - 1000) / (1300 - 1000);
        const topAt1000 = -330;
        const topAt1300 = -100;
        top = topAt1000 + t * (topAt1300 - topAt1000);
      } else if (width >= 769 && width < 1000) {
        // linear interpolation 769 → 1000px
        const t = (width - 769) / (1000 - 769);
        const topAt769 = -560;
        const topAt1000 = -330;
        top = topAt769 + t * (topAt1000 - topAt769);
      } else {
        // width > 1500 → normal interpolation
        const clampedWidth = Math.min(Math.max(width, minWidth), maxWidth);
        const minTop = -340; // base
        const maxTop = 850;
        const tTop = (clampedWidth - minWidth) / (maxWidth - minWidth);
        top = minTop + tTop * (maxTop - minTop);
      }

      // --- Right interpolation ---
      const rightAtMin = 23.5; // 769px
      const rightAt950 = 22; // 1000px
      const rightAt1000 = 23.1; // 1000px
      const rightAt1050 = 23.1; // 1050px
      const rightAt1100 = 23.9; // 1100px

      const rightAt1250 = 24.2; // 1250px
      const rightAt1500 = 22.2; // 1500px
      const rightAt2000 = 15.2; // 2000px
      const rightAt2500 = 13.3; // 2500px
      const rightAt3000 = 11.3; // 3000px
      const rightAt3500 = 11.2; // 3500px
      const rightAt4000 = 10.3; // 3840–4K
      let right: number;

      if (width >= 3840) {
        right = rightAt4000; // max 4K fixed
      } else if (width >= 3500) {
        // 3500 → 3840: 11.2 → 10.3
        const t = (width - 3500) / (3840 - 3500);
        right = rightAt3500 + t * (rightAt4000 - rightAt3500);
      } else if (width >= 3000) {
        // 3000 → 3500: 11.3 → 11.2
        const t = (width - 3000) / (3500 - 3000);
        right = rightAt3000 + t * (rightAt3500 - rightAt3000);
      } else if (width >= 2500) {
        // 2500 → 3000: 13.3 → 11.3
        const t = (width - 2500) / (3000 - 2500);
        right = rightAt2500 + t * (rightAt3000 - rightAt2500);
      } else if (width >= 2000) {
        // 2000 → 2500: 12.2 → 13.3
        const t = (width - 2000) / (2500 - 2000);
        right = rightAt2000 + t * (rightAt2500 - rightAt2000);
      } else if (width >= 1500) {
        // 2000 → 2500: 12.2 → 13.3
        const t = (width - 1500) / (2000 - 1500);
        right = rightAt1500 + t * (rightAt2000 - rightAt1500);
      } else if (width >= 1250) {
        // 2000 → 2500: 12.2 → 13.3
        const t = (width - 1250) / (1500 - 1250);
        right = rightAt1250 + t * (rightAt1500 - rightAt1250);
      } else if (width >= 1100) {
        // 2000 → 2500: 12.2 → 13.3
        const t = (width - 1100) / (1250 - 1100);
        right = rightAt1100 + t * (rightAt1250 - rightAt1100);
      } else if (width >= 1050) {
        // 2000 → 2500: 12.2 → 13.3
        const t = (width - 1050) / (1100 - 1050);
        right = rightAt1050 + t * (rightAt1100 - rightAt1050);
      } else if (width >= 1000) {
        // 2000 → 2500: 12.2 → 13.3
        const t = (width - 1000) / (1050 - 1000);
        right = rightAt1000 + t * (rightAt1050 - rightAt1000);
      } else if (width >= 950) {
        // 2000 → 2500: 12.2 → 13.3
        const t = (width - 950) / (1000 - 950);
        right = rightAt950 + t * (rightAt1000 - rightAt950);
      } else {
        // 769 → 2000: 14 → 12.2
        const t = (clampedWidth - minWidth) / (2000 - minWidth);
        right = rightAtMin + t * (rightAt2000 - rightAtMin);
      }

      // --- Apply styles ---
      if (heroRef.current) {
        heroRef.current.style.transform = `scale(${scale})`;
        heroRef.current.style.top = `${top}px`;
        heroRef.current.style.right = `${right}%`;
      }
    };

    updateTransform();
    window.addEventListener("resize", updateTransform);
    return () => window.removeEventListener("resize", updateTransform);
  }, []);

  useEffect(() => {
    let mouseEnabled = true;
    let maskRadius = 600;
    let cleanup: any;
    let resizeTimeout: NodeJS.Timeout | null = null;

    // --- Responsive radius segmented ---
    const getResponsiveRadius = () => {
      const minWidth = 769;
      const mid1 = 1350;
      const mid2 = 1920;
      const maxWidth = 3840;
      const w = window.innerWidth;

      if (w <= minWidth) return 150;
      if (w <= mid1) {
        // 769 → 1350: 150 → 400 (increasing)
        const t = (w - minWidth) / (mid1 - minWidth);
        return 150 + t * (400 - 150);
      }
      if (w <= mid2) return 400; // constant 400 between 1350–1920
      if (w >= maxWidth) return 600;

      // 1920 → 3840: 400 → 600 (increasing)
      const t = (w - mid2) / (maxWidth - mid2);
      return 400 + t * (600 - 400);
    };

    // --- Scroll-based continuous decrease ---
    const getScrollRadius = (responsiveRadius: number, progress: number) => {
      // Define end radius based on initial responsive size
      let endRadius = responsiveRadius;
      if (responsiveRadius >= 500) endRadius = 150;
      else if (responsiveRadius >= 400) endRadius = 120;
      else if (responsiveRadius >= 300) endRadius = 100;
      else if (responsiveRadius >= 200) endRadius = 80;
      else if (responsiveRadius >= 150) endRadius = 60;

      // Smooth interpolation
      const t = Math.min(Math.max(progress, 0), 1);
      const easedT = 1 - Math.pow(1 - t, 2); // easeOutQuad

      return responsiveRadius + (endRadius - responsiveRadius) * easedT;
    };

    const initAnimation = () => {
      const container = containerRef.current;
      const mask = maskRef.current;
      if (!container || !mask) return;

      interface Vector2D {
        x: number;
        y: number;
      }

      const maskPos: Vector2D = { x: 0, y: 0 };
      const offset: Vector2D = { x: 0, y: 0 };
      const target: Vector2D = { x: 0, y: 0 };
      const velocity: Vector2D = { x: 0, y: 0 };

      const stiffness = 0.02;
      const damping = 0.9;
      const maxSpeed = 8;

      let scrollProgress = 0;

      // --- Animation Loop (smooth 60fps) ---
      const animate = () => {
        console.log("animate calling");
        const ax = (target.x - offset.x) * stiffness;
        const ay = (target.y - offset.y) * stiffness;

        velocity.x += ax;
        velocity.y += ay;

        velocity.x = Math.max(Math.min(velocity.x, maxSpeed), -maxSpeed);
        velocity.y = Math.max(Math.min(velocity.y, maxSpeed), -maxSpeed);

        velocity.x *= damping;
        velocity.y *= damping;

        offset.x += velocity.x;
        offset.y += velocity.y;

        const x = maskPos.x + offset.x;
        const y = maskPos.y + offset.y;

        // Calculate mask radius based on width + scroll
        const responsiveRadius = getResponsiveRadius();
        maskRadius = getScrollRadius(responsiveRadius, scrollProgress);

        const gradient = `radial-gradient(circle ${maskRadius}px at ${x}px ${y}px, black 30%, transparent 80%)`;
        mask.style.maskImage = gradient;

        rafIdRef.current = requestAnimationFrame(animate);
      };

      animate();

      const scrollStart =
        window.innerWidth <= 1200 ? "top+=200 top" : "top+=400 top";

      // --- Scroll Tween with GSAP Motion Path ---
      if (scrollTweenRef.current) scrollTweenRef.current.kill();
      scrollTweenRef.current = gsap.to(maskPos, {
        motionPath: {
          path: "#motionPath",
          align: "#motionPath",
          alignOrigin: [0.5, 0.5],
          curviness: 1.5,
          autoRotate: false,
        },
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: scrollStart,
          end: () => container.offsetTop + container.offsetHeight,
          scrub: true,
          markers: false,
          onUpdate: (self) => {
            scrollProgress = self.progress;
          },
          onEnter: () => (mouseEnabled = false),
          onEnterBack: () => (mouseEnabled = false),
          onLeave: () => (mouseEnabled = true),
          onLeaveBack: () => (mouseEnabled = true),
        },
      });

      // --- Mouse Movement ---
      const handleMouseMove = (e: MouseEvent) => {
        if (!mouseEnabled) return;
        const rect = container.getBoundingClientRect();
        const responsiveRadius = getResponsiveRadius();

        const maxOffset =
          responsiveRadius >= 600
            ? 150
            : responsiveRadius >= 400
            ? 100
            : responsiveRadius >= 300
            ? 60
            : responsiveRadius >= 200
            ? 40
            : 20;

        const offsetX =
          ((e.clientX - rect.left - maskPos.x) / rect.width) * maxOffset * 2;
        const offsetY =
          ((e.clientY - rect.top - maskPos.y) / rect.height) * maxOffset * 2;

        target.x = Math.max(Math.min(offsetX, maxOffset), -maxOffset);
        target.y = Math.max(Math.min(offsetY, maxOffset), -maxOffset);
      };

      container.addEventListener("mousemove", handleMouseMove);

      // Cleanup
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
        if (scrollTweenRef.current) {
          scrollTweenRef.current.kill();
          if (scrollTweenRef.current.scrollTrigger)
            scrollTweenRef.current.scrollTrigger.kill();
          scrollTweenRef.current = null;
        }
        // if (scrollTweenRef.current) scrollTweenRef.current.kill();
        // ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    };

    // --- Initialize ---
    cleanup = initAnimation();

    // const handleResize = () => {
    //   if (cleanup) cleanup();
    //   cleanup = initAnimation();
    // };
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (cleanup) cleanup();
        cleanup = initAnimation();
      }, 200); // 200ms debounce delay
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /// ------------ Old animation code ------------------  //
  // const maskRef = useRef<HTMLDivElement | null>(null);
  // const rafIdRef = useRef<number | null>(null);
  // const scrollTweenRef = useRef<GSAPTween | null>(null);

  // useEffect(() => {
  //   let mouseEnabled = true;
  //   let maskRadius = 400;

  //   const initAnimation = () => {
  //     const container = containerRef.current;
  //     const mask = maskRef.current;
  //     if (!container || !mask) return;

  //     interface Vector2D {
  //       x: number;
  //       y: number;
  //     }
  //     const maskPos: Vector2D = { x: 0, y: 0 };
  //     const offset: Vector2D = { x: 0, y: 0 };
  //     const target: Vector2D = { x: 0, y: 0 };
  //     const velocity: Vector2D = { x: 0, y: 0 };

  //     const stiffness = 0.02;
  //     const damping = 0.9;
  //     const maxSpeed = 8;

  //     // --- Animation Loop ---
  //     const animate = () => {
  //       const ax = (target.x - offset.x) * stiffness;
  //       const ay = (target.y - offset.y) * stiffness;

  //       velocity.x += ax;
  //       velocity.y += ay;

  //       velocity.x = Math.max(Math.min(velocity.x, maxSpeed), -maxSpeed);
  //       velocity.y = Math.max(Math.min(velocity.y, maxSpeed), -maxSpeed);

  //       velocity.x *= damping;
  //       velocity.y *= damping;

  //       offset.x += velocity.x;
  //       offset.y += velocity.y;

  //       const x = maskPos.x + offset.x;
  //       const y = maskPos.y + offset.y;

  //       const gradient = `radial-gradient(circle ${maskRadius}px at ${x}px ${y}px, black 30%, transparent 80%)`;
  //       mask.style.maskImage = gradient;
  //       mask.style.webkitMaskImage = gradient;

  //       rafIdRef.current = requestAnimationFrame(animate);
  //     };

  //     animate();

  //     // --- Scroll-based tween ---
  //     if (scrollTweenRef.current) scrollTweenRef.current.kill();

  //     scrollTweenRef.current = gsap.to(maskPos, {
  //       motionPath: {
  //         path: "#motionPath",
  //         align: "#motionPath",
  //         alignOrigin: [0.5, 0.5],
  //         curviness: 1.5,
  //         autoRotate: false,
  //       },
  //       duration: 2,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: container,
  //         start: "top+=200 top",
  //         end: () => container.offsetTop + container.offsetHeight,
  //         scrub: true,
  //         markers: false,
  //         onUpdate: (self) => {
  //           const progress = self.progress;
  //           if (progress < 0.1) maskRadius = 400 - 50 * (progress / 0.1);
  //           else if (progress < 0.8)
  //             maskRadius = 350 - 150 * ((progress - 0.1) / 0.7);
  //           else maskRadius = 200 - 150 * ((progress - 0.8) / 0.2);
  //           maskRadius = Math.max(maskRadius, 50);
  //         },
  //         onEnter: () => {
  //           mouseEnabled = false;
  //         },
  //         onEnterBack: () => {
  //           mouseEnabled = false;
  //         },
  //         onLeave: () => {
  //           mouseEnabled = true;
  //         },
  //         onLeaveBack: () => {
  //           mouseEnabled = true;
  //         },
  //       },
  //     });

  //     // --- Mouse Movement ---
  //     const handleMouseMove = (e: MouseEvent) => {
  //       if (!mouseEnabled) return;
  //       const rect = container.getBoundingClientRect();
  //       const offsetX =
  //         ((e.clientX - rect.left - maskPos.x) / rect.width) * 200;
  //       const offsetY =
  //         ((e.clientY - rect.top - maskPos.y) / rect.height) * 200;
  //       target.x = Math.max(Math.min(offsetX, 100), -100);
  //       target.y = Math.max(Math.min(offsetY, 100), -100);
  //     };

  //     container.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       container.removeEventListener("mousemove", handleMouseMove);
  //       if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
  //       rafIdRef.current = null;
  //       if (scrollTweenRef.current) scrollTweenRef.current.kill();
  //       ScrollTrigger.getAll().forEach((t) => t.kill());
  //     };
  //   };

  //   // --- Initialize ---
  //   let cleanup = initAnimation();

  //   // --- Handle Resize ---
  //   const handleResize = () => {
  //     if (cleanup) cleanup();
  //     cleanup = initAnimation();
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     if (cleanup) cleanup();
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const heroRef = useRef<SVGSVGElement | null>(null);

  // useEffect(() => {
  //   const updateTransform = () => {
  //     const width = window.innerWidth;
  //     const minWidth = 768;
  //     const maxWidth = 1500;

  //     // --- Range values ---
  //     const minScale = 0.45; // 768px
  //     const maxScale = 1; // 1300px
  //     const minRight = 3;
  //     const maxRight = 40;
  //     const minTop = -500; // 768px
  //     const maxTop = -80; // 1300px

  //     // Clamp t between 0–1
  //     let t = 0;
  //     if (width <= minWidth) t = 0;
  //     else if (width >= maxWidth) t = 1;
  //     else t = (width - minWidth) / (maxWidth - minWidth);

  //     // Apply easing to exaggerate the mid-range (900–1100px)
  //     const easeInOutQuad = (x: number) =>
  //       x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  //     const easedT = easeInOutQuad(t);

  //     const scale = minScale + easedT * (maxScale - minScale);
  //     const right = minRight + easedT * (maxRight - minRight);
  //     const top = minTop + easedT * (maxTop - minTop);

  //     if (heroRef.current) {
  //       heroRef.current.style.transform = `scale(${scale})`;
  //       heroRef.current.style.right = `${right}%`;
  //       heroRef.current.style.top = `${top}px`;
  //     }
  //   };

  //   updateTransform();
  //   window.addEventListener("resize", updateTransform);
  //   return () => window.removeEventListener("resize", updateTransform);
  // }, []);

  return (
    <div className="relative">
      <Helmet>
        <title>
          Right Property | Marketing Suite for Real Estate Developers
        </title>
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main
        role="main"
        className="relative z-[10] 4k:max-w-[100vw] 4k:overflow-x-hidden"
        aria-label="Right Property homepage content"
      >
        <div className="relative z-[20]">
          <div ref={containerRef} className="first-two relative h-full w-full">
            <div
              ref={maskRef}
              className="absolute inset-0 bg-linear-to-r from-[#BADEF3]/30 to-[#53B5EE]/30 pointer-events-none lg:hidden"
              style={{
                maskImage:
                  "radial-gradient(circle 400px at 50% 50%, black 30%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(circle 400px at 50% 50%, black 30%, transparent 80%)",
              }}
            >
              <HeroRoadSvg
                ref={heroRef}
                className="absolute top-[800px] overflow-hidden w-full"
              />
            </div>
            {/* HERO ROAD + MASK */}
            {/* <div
              ref={divRef}
              className="
                lg:hidden transition-colors duration-300 z-[8]
                absolute top-0 left-0 w-full h-auto inline-block
                mask max-w-[100vw] overflow-hidden
              "
            >
              <div className="rp-container relative content-visiblity-auto">
                <HeroRoad
                  className="
                    w-[56.37rem] h-auto trigger
                    -translate-y-[2.5rem] translate-x-[2.5rem]
                    4k:[width:clamp(60.37rem,calc(60.37rem+((100vw-2050px)/2000px)*60.63rem),65rem)]
                    4k:translate-x-[clamp(0rem,calc(0rem+((100vw-2050px)/2000px)*0rem),0rem)]
                    4k:-translate-y-[clamp(3rem,calc(3rem+((100vw-2050px)/2000px)*1rem),4rem)]
                  "
                />

                <div
                  className="
                    z-[8] absolute top-[23.4375rem] left-[8.5rem]
                    4k:[top:clamp(23.4375rem,calc(23.4375rem+((100vw-2050px)/2000px)*6.5625rem),30rem)]
                    4k:[left:clamp(8.5rem,calc(8.5rem+((100vw-2050px)/2000px)*3.5rem),12rem)]
                  "
                >
                  <div className="rp-container">
                    <div
                      ref={(el) => {
                        if (el) {
                          const path = el.querySelector("path");
                          if (path) pathRef.current = path;
                        }
                      }}
                    >
                      <MaskPath />
                    </div>
                  </div>
                </div>
              </div>

              <div className="highlight" />
            </div> */}

            {/* FIRST TWO SECTIONS */}
            <div className="relative z-[10]">
              <EnhancedPresentationsSection />
              <MeetRightProperty />
            </div>
          </div>

          <PresentSmarterSection />
          <ChoosePresentationSection />
          <SimpleSetupSection />
          <ConvertMoreLeadsSection />
          <EasyOnboardingSection />
          <FeaturesCarousel />
          <BackToBackReveal />
          <MadeToFit />
          <FaqSection />
          <ScheduleADemoSection />
        </div>
      </main>
    </div>
  );
}
