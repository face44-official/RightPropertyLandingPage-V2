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

  useEffect(() => {
    let mouseEnabled = true;
    let maskRadius = 400;

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

      // --- Animation Loop ---
      const animate = () => {
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

        const gradient = `radial-gradient(circle ${maskRadius}px at ${x}px ${y}px, black 30%, transparent 80%)`;
        mask.style.maskImage = gradient;
        mask.style.webkitMaskImage = gradient;

        rafIdRef.current = requestAnimationFrame(animate);
      };

      animate();

      // --- Scroll-based tween ---
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
          start: "top+=200 top",
          end: () => container.offsetTop + container.offsetHeight,
          scrub: true,
          markers: false,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.1) maskRadius = 400 - 50 * (progress / 0.1);
            else if (progress < 0.8)
              maskRadius = 350 - 150 * ((progress - 0.1) / 0.7);
            else maskRadius = 200 - 150 * ((progress - 0.8) / 0.2);
            maskRadius = Math.max(maskRadius, 50);
          },
          onEnter: () => {
            mouseEnabled = false;
          },
          onEnterBack: () => {
            mouseEnabled = false;
          },
          onLeave: () => {
            mouseEnabled = true;
          },
          onLeaveBack: () => {
            mouseEnabled = true;
          },
        },
      });

      // --- Mouse Movement ---
      const handleMouseMove = (e: MouseEvent) => {
        if (!mouseEnabled) return;
        const rect = container.getBoundingClientRect();
        const offsetX =
          ((e.clientX - rect.left - maskPos.x) / rect.width) * 200;
        const offsetY =
          ((e.clientY - rect.top - maskPos.y) / rect.height) * 200;
        target.x = Math.max(Math.min(offsetX, 100), -100);
        target.y = Math.max(Math.min(offsetY, 100), -100);
      };

      container.addEventListener("mousemove", handleMouseMove);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
        if (scrollTweenRef.current) scrollTweenRef.current.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    };

    // --- Initialize ---
    let cleanup = initAnimation();

    // --- Handle Resize ---
    const handleResize = () => {
      if (cleanup) cleanup();
      cleanup = initAnimation();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const heroRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const updateTransform = () => {
      const width = window.innerWidth;
      const minWidth = 768;
      const maxWidth = 1500;

      // --- Range values ---
      const minScale = 0.45; // 768px
      const maxScale = 1; // 1300px
      const minRight = 3;
      const maxRight = 40;
      const minTop = -500; // 768px
      const maxTop = -80; // 1300px

      // Clamp t between 0–1
      let t = 0;
      if (width <= minWidth) t = 0;
      else if (width >= maxWidth) t = 1;
      else t = (width - minWidth) / (maxWidth - minWidth);

      // Apply easing to exaggerate the mid-range (900–1100px)
      const easeInOutQuad = (x: number) =>
        x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
      const easedT = easeInOutQuad(t);

      const scale = minScale + easedT * (maxScale - minScale);
      const right = minRight + easedT * (maxRight - minRight);
      const top = minTop + easedT * (maxTop - minTop);

      if (heroRef.current) {
        heroRef.current.style.transform = `scale(${scale})`;
        heroRef.current.style.right = `${right}%`;
        heroRef.current.style.top = `${top}px`;
      }
    };

    updateTransform();
    window.addEventListener("resize", updateTransform);
    return () => window.removeEventListener("resize", updateTransform);
  }, []);

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
                className="absolute -top-20  right-[40%] overflow-hidden 4k:[top:clamp(-5rem,calc(-5rem+((100vw-2050px)/2000px)*-10rem),-15rem)] 4k:[right:clamp(40%,calc(40%+((100vw-2050px)/2000px)*-5%),35%)]"
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
