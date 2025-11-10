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
          className="w-[2.5rem] lg:w-6 h-auto object-contain 4k:[width:clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*2.5rem),5rem)]"
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
          className="w-[2.5rem] lg:w-6 h-auto object-contain 4k:[width:clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*2.5rem),5rem)]"
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
          className="w-[2.5rem] lg:w-6 h-auto object-contain 4k:[width:clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*2.5rem),5rem)]"
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

  const vw = window.innerWidth;
  // proportional scale factor (2k base → 4k = 2x)
  const scaleFactor = Math.min(vw / 2000, 2);

  const CONFIG = {
    offsetX: 300 * scaleFactor,
    offsetY: -180 * scaleFactor,
    xBias: 0 * scaleFactor,
    yBias: 0 * scaleFactor,
    sizeTo: {
      w: 1445 * scaleFactor,
      h: 1048 * scaleFactor,
    },
  };

  // Set gradient initial size
  gsap.set(gradientRef.current, {
    width: 1200 * scaleFactor,
    height: 1200 * scaleFactor,
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
      return () => motionTimeline.current?.kill();
    });
    return () => {
      mm.revert();
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
      <div className="w-[100vw] h-[25.6875rem] overflow-hidden hidden lg:block 4k:[height:clamp(25.6875rem,calc(25.6875rem+((100vw-2000px)/2000px)*25.6875rem),51.375rem)]">
        <div className="relative w-full max-w-[343px] mx-auto overflow-visible">
          <div className="absolute -top-[3rem] -right-[3.75rem]">
            <SimpleSetupMobileGradient />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div
        className="
          rp-container relative z-[0]
          lg:h-auto!
          [height:85rem]
          4k:[height:clamp(85rem,calc(85rem+((100vw-2050px)/2000px)*85rem),170rem)]
        "
      >
        <div
          className="
            flex justify-start gap-[8.4375rem] w-[41.875rem]
            lg:w-full
            4k:[width:clamp(41.875rem,calc(41.875rem+((100vw-2000px)/2000px)*41.875rem),83.75rem)]
            4k:[gap:clamp(8.4375rem,calc(8.4375rem+((100vw-2000px)/2000px)*8.4375rem),16.875rem)]
          "
        >
          {/* BACKGROUND */}
          <div
            className="
              absolute -top-[40.5rem] -left-12 z-[-1]
              4k:[top:clamp(-35.5rem,calc(-35.5rem-((100vw-2000px)/2000px)*35.5rem),-70rem)]
            "
          >
            <div
              className="
                w-[140.8125rem] h-[196rem] 2xl:w-[133.8125rem] 2xl:h-[190rem] lg:hidden
                4k:[width:clamp(150.8125rem,calc(150.8125rem+((100vw-2000px)/2000px)*150.8125rem),300.625rem)]
                4k:[height:clamp(180rem,calc(180rem+((100vw-2050px)/2000px)*180rem),360rem)]
              "
            >
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
              4k:[top:clamp(25rem,calc(25rem+((100vw-2000px)/2000px)*25rem),50rem)]
              4k:[right:clamp(12rem,calc(12rem+((100vw-2000px)/2000px)*12rem),24rem)]
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

          {/* GRADIENT BACKDROP */}
          <div
            ref={gradientRef}
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #DBE8FF 0%, #E8F4FF 25.96%, rgba(255,255,255,0) 100%)",
            }}
            className="
              absolute -top-[12rem] -right-[31rem] w-[1425.84px] h-[1425.84px]
              lg:hidden z-[-2]
              4k:[width:clamp(1425.84px,calc(1425.84px+((100vw-2000px)/2000px)*1425.84px),2851.68px)]
              4k:[height:clamp(1425.84px,calc(1425.84px+((100vw-2000px)/2000px)*1425.84px),2851.68px)]
              4k:[top:clamp(-12rem,calc(-12rem-((100vw-2000px)/2000px)*12rem),-24rem)]
              4k:[right:clamp(-31rem,calc(-31rem-((100vw-2000px)/2000px)*31rem),-62rem)]
            "
          ></div>

          {/* BINARY BLOCK */}
          <div
            className="
              absolute lg:hidden left-1/2 -translate-x-1/2 bottom-[14.875rem]
              4k:[bottom:clamp(14.875rem,calc(14.875rem+((100vw-2000px)/2000px)*14.875rem),28.75rem)]
            "
          >
            <BinarySection
              subHeader="Did you know?"
              title="Built by software minds"
              description="No visuals or assets? Our team can produce what’s needed."
              image={<BinaryBlockImage path={softwareMinds} />}
            />
          </div>

          {/* TEXT CONTENT */}
          <div
            className="
              pt-[10rem] pl-[5rem] lg:p-4
              4k:[padding-top:clamp(10rem,calc(10rem+((100vw-2000px)/2000px)*10rem),20rem)]
              4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),10rem)]
            "
          >
            <p
              className="
                mb-5 lg:mb-[1.5rem]
                font-geist-mono font-normal uppercase text-primary-black
                leading-[150%] tracking-[0.02em]
                text-14 lg:text-14
                text-fluid-4k-14
                4k:[margin-bottom:clamp(1.3rem,calc(1.3rem+((100vw-2000px)/2000px)*1.3rem),2.6rem)]
              "
            >
              Presentation
            </p>

            <h2
              className="
                mb-5 lg:mb-[1.5rem]
                font-general-sans font-semibold text-primary-black
                leading-[130%] -tracking-[0.01em]
                text-40 lg:text-32
                text-fluid-4k-40
                4k:[margin-bottom:clamp(1.3rem,calc(1.3rem+((100vw-2000px)/2000px)*1.3rem),2.6rem)]
                4k:leading-[120%]
              "
            >
              Simple Setup
            </h2>

            <p
              className="
                mb-[3rem] lg:mb-[2rem]
                font-geist font-normal text-dark-gray
                leading-[140%] -tracking-[0.01em]
                text-18 lg:text-18
                text-2k-4k-18
                4k:[margin-bottom:clamp(3rem,calc(3rem+((100vw-2000px)/2000px)*3rem),6rem)]
              "
            >
              The process is straightforward, flexible, and built to get you moving fast.
            </p>

            {/* ITEMS */}
            <div className="flex flex-col gap-8 4k:[gap:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)]">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex gap-5 items-start
                    lg:gap-[0.75rem]
                    4k:[gap:clamp(1.5rem,calc(1.5rem+((100vw-2000px)/2000px)*1.5rem),3rem)]
                  "
                >
                  {item.icon}
                  <div>
                    <h3
                      className="
                        font-geist font-medium text-primary-black leading-[140%]
                        text-24 lg:text-20
                        text-2k-4k-24
                      "
                    >
                      {item.title}
                    </h3>
                    <p
                      className="
                        font-geist font-normal text-primary-black leading-[140%]
                        text-18 lg:text-base
                        text-2k-4k-18
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE BINARY */}
            <div className="hidden lg:block py-[7.5rem] relative 4k:[padding-top:clamp(7.5rem,calc(7.5rem+((100vw-2000px)/2000px)*7.5rem),15rem)] 4k:[padding-bottom:clamp(7.5rem,calc(7.5rem+((100vw-2000px)/2000px)*7.5rem),15rem)]">
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
