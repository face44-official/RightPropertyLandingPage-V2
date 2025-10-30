import gRoad from "@/assets/v3/g_road.svg";
import SimpleSetupGradientPath from "./simple-setup-gradient-path";
import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BinarySection, { BinaryBlockImage } from "../binary-section";
import softwareMinds from "@/assets/v3/software_minds.webp";
import { interpolateColor } from "@/lib/utils";
import purpleCheck from "@/assets/v3/purple_check.svg";
import SimpleSetupMobileGradient from "./simple-setup-mobile-gradient";

gsap.registerPlugin(ScrollTrigger);

export default function SimpleSetupSection() {
  const pathRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const motionTimeline = useRef<GSAPTimeline>(null);

  const items = [
    {
      icon: (
        <img
          src={purpleCheck}
          alt="Checkmark icon for plug in content feature"
          className="w-[2.5rem] lg:w-6 h-auto object-contain 4k:w-[3rem]"
        />
      ),
      title: "Plug in your content",
      description:
        "Upload floor plans, renders, brochures, videos, and even 3D tours.",
    },
    {
      icon: (
        <img
          src={purpleCheck}
          alt="Checkmark icon for team support feature"
          className="w-[2.5rem] lg:w-6 h-auto object-contain 4k:w-[3rem]"
        />
      ),
      title: "We’ve got you covered",
      description: "No visuals or assets? Our team can produce what’s needed.",
    },
    {
      icon: (
        <img
          src={purpleCheck}
          alt="Checkmark icon for easy updates feature"
          className="w-[2.5rem] lg:w-6 h-auto object-contain 4k:w-[3rem]"
        />
      ),
      title: "Easy to update anytime",
      description:
        "Need to make changes? Just a few clicks — no waiting, no developers.",
    },
  ];

  const startMotionPath = useCallback(() => {
    if (!gradientRef.current || !pathRef.current) return;
    motionTimeline.current?.kill();

    const is4k = window.matchMedia("(min-width: 2000px)").matches;
    const CONFIG = is4k
      ? {
          offsetX: 240,
          offsetY: -220,
          xBias: 16,
          yBias: 64,
          sizeTo: { w: 1600, h: 1600 },
        }
      : {
          offsetX: 200,
          offsetY: -180,
          xBias: 0,
          yBias: 0,
          sizeTo: { w: 1445, h: 1048 },
        };

    gsap.set(gradientRef.current, {
      width: is4k ? 1400 : 1200,
      height: is4k ? 1400 : 1200,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#simple-setup",
        start: "center-=20% center",
        end: "center top",
        scrub: 1,
      },
    });
    motionTimeline.current = tl;

    const follower = { x: 0, y: 0 };

    const moveAnim = gsap.to(follower, {
      ease: "power3.out",
      motionPath: {
        path: pathRef.current,
        offsetX: CONFIG.offsetX,
        offsetY: CONFIG.offsetY,
        autoRotate: true,
        start: 1,
        end: 0,
      },
      onUpdate: function () {
        const progress = this.progress();
        const el = gradientRef.current;
        if (!el) return;

        el.style.left = `${follower.x + CONFIG.xBias}px`;
        el.style.top = `${follower.y + CONFIG.yBias}px`;

        const startColor = interpolateColor("#DBE8FF", "#E7DFF2", progress);
        const midColor = interpolateColor("#E8F4FF", "#E7DFF2", progress);
        el.style.background = `radial-gradient(50% 50% at 50% 50%, ${startColor} 0%, ${midColor} 25.96%, rgba(255,255,255,0) 100%)`;
      },
    });

    const sizeAnim = gsap.to(gradientRef.current, {
      width: CONFIG.sizeTo.w,
      height: CONFIG.sizeTo.h,
      ease: "none",
    });

    tl.add(moveAnim, 0).add(sizeAnim, 0);
  }, []);

  useEffect(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    setTimeout(() => startMotionPath(), 300);
    return () => {
      // Cleanup for this specific media query
      motionTimeline.current?.kill();
    };
  });

  // Cleanup for the matchMedia instance itself
  return () => {
    mm.revert(); // 👈 properly revert gsap.matchMedia
    motionTimeline.current?.kill();
  };
}, [startMotionPath]);


  return (
    <section
      id="simple-setup"
      className="content-visibility-auto"
      aria-label="Simple setup process for Right Property platform"
    >
      {/* MOBILE */}
      <div className="w-[100vw] h-[25.6875rem] overflow-hidden hidden lg:block 4k:h-[30rem]">
        <div className="relative w-full max-w-[343px] mx-auto overflow-visible">
          <div className="absolute -top-[3rem] -right-[3.75rem]">
            <SimpleSetupMobileGradient />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="
          rp-container relative z-[-1]
          lg:h-auto!
          [height:108.375rem]
          4k:[height:clamp(108.375rem,calc(108.375rem+((100vw-2000px)/2000px)*21.625rem),130rem)]
        "
      >
        <div className="
          flex justify-start gap-[8.4375rem] w-[41.875rem]
          lg:w-full
          4k:w-[55rem]
          4k:[gap:clamp(8.4375rem,calc(8.4375rem+((100vw-2000px)/2000px)*1.5625rem),10rem)]
        ">
          {/* BACKGROUND */}
          <div className="
            absolute -top-[32.5rem] -left-[2.5rem] z-[-1]
            4k:[top:clamp(-32.5rem,calc(-32.5rem-((100vw-2000px)/2000px)*7.5rem),-40rem)]
            4k:[left:clamp(-2.5rem,calc(-2.5rem-((100vw-2000px)/2000px)*1.5rem),-4rem)]
          ">
            <div className="
              w-[133.8125rem] h-[176rem] lg:hidden
              4k:[width:clamp(133.8125rem,calc(133.8125rem+((100vw-2000px)/2000px)*16.1875rem),150rem)]
              4k:[height:clamp(176rem,calc(176rem+((100vw-2000px)/2000px)*24rem),200rem)]
            ">
              <img
                className="w-full h-full"
                src={gRoad}
                alt="Right Property simple setup process visualization"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* PATH + GRADIENT */}
          <div
            className="
              absolute top-[25rem] right-[12rem]
              4k:[top:clamp(25rem,calc(25rem+((100vw-2000px)/2000px)*5rem),30rem)]
              4k:[right:clamp(12rem,calc(12rem+((100vw-2000px)/2000px)*3rem),15rem)]
            "
            ref={(el) => {
              if (el) {
                const path = el.querySelector("path");
                if (path) pathRef.current = path;
              }
            }}
          >
            <SimpleSetupGradientPath />
          </div>

          <div
            ref={gradientRef}
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #DBE8FF 0%, #E8F4FF 25.96%, rgba(255,255,255,0) 100%)",
            }}
            className="
              absolute -top-[12rem] -right-[31rem] w-[1425.84px] h-[1425.84px]
              lg:hidden z-[-2]
              4k:[width:clamp(1425.84px,calc(1425.84px+((100vw-2000px)/2000px)*174.16px),1600px)]
              4k:[height:clamp(1425.84px,calc(1425.84px+((100vw-2000px)/2000px)*174.16px),1600px)]
              4k:[top:clamp(-12rem,calc(-12rem-((100vw-2000px)/2000px)*2rem),-14rem)]
              4k:[right:clamp(-31rem,calc(-31rem-((100vw-2000px)/2000px)*4rem),-35rem)]
            "
          ></div>

          {/* BINARY BLOCK */}
          <div className="
            absolute left-[35rem] bottom-[16.875rem] lg:hidden
            4k:[left:clamp(35rem,calc(35rem+((100vw-2000px)/2000px)*7rem),42rem)]
            4k:[bottom:clamp(16.875rem,calc(16.875rem+((100vw-2000px)/2000px)*3.125rem),20rem)]
          ">
            <BinarySection
              subHeader="Did you know?"
              title="Built by software minds"
              description="No visuals or assets? Our team can produce what’s needed."
              image={<BinaryBlockImage path={softwareMinds} />}
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="
            pt-[10rem] pl-[5rem] lg:p-4
            4k:[padding-top:clamp(10rem,calc(10rem+((100vw-2000px)/2000px)*2rem),12rem)]
            4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*2rem),7rem)]
          ">
            <p className="
              mb-8 lg:mb-[1.5rem]
              font-geist-mono font-normal uppercase text-primary-black
              leading-[150%] tracking-[0.02em]
              text-[16px] lg:text-[14px]
              4k:[font-size:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*0.5rem),1.5rem)]
            ">
              Presentation
            </p>

            <h2 className="
              mb-8 lg:mb-[1.5rem]
              font-general-sans font-semibold text-primary-black
              leading-[130%] -tracking-[0.01em]
              text-[40px] lg:text-[32px]
              4k:[font-size:clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*2.5rem),5rem)]
              4k:mb-[2rem] 4k:leading-[120%]
            ">
              Simple Setup
            </h2>

            <p className="
              mb-[5rem] lg:mb-[2rem]
              font-geist font-normal text-dark-gray
              leading-[140%] -tracking-[0.01em]
              text-[32px] lg:text-[24px]
              4k:[font-size:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)]
              4k:mb-[6rem]
            ">
              The process is straightforward, flexible, and built to get you moving fast.
            </p>

            {/* ITEMS */}
            <div className="flex flex-col gap-8 4k:[gap:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*0.5rem),2.5rem)]">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex gap-6 items-start
                    lg:gap-[0.75rem]
                    4k:[gap:clamp(1.25rem,calc(1.25rem+((100vw-2000px)/2000px)*0.25rem),1.5rem)]
                  "
                >
                  {item.icon}
                  <div>
                    <h3 className="
                      font-geist font-medium text-primary-black
                      leading-[140%]
                      text-[28px] lg:text-[20px]
                      4k:[font-size:clamp(1.75rem,calc(1.75rem+((100vw-2000px)/2000px)*1rem),2.75rem)]
                    ">
                      {item.title}
                    </h3>
                    <p className="
                      font-geist font-normal text-primary-black
                      leading-[140%]
                      text-[24px] lg:text-base
                      4k:[font-size:clamp(1.5rem,calc(1.5rem+((100vw-2000px)/2000px)*1rem),2.5rem)]
                    ">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE BINARY */}
            <div className="hidden lg:block py-[7.5rem] relative">
              <BinarySection
                subHeader="Did you know?"
                title="Built by software minds"
                description="No visuals or assets? Our team can produce what’s needed."
                image={<BinaryBlockImage path={softwareMinds} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
