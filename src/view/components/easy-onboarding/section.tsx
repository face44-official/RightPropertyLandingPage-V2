import easyOnboarding from "@/assets/v3/easy_onboarding_desktop.svg";
import EasyOnboardingPath from "./easy-onboarding-path";
import { useCallback, useEffect, useRef } from "react";
import BinarySection, { BinaryBlockImage } from "../binary-section";
import automated from "@/assets/v3/automated.webp";
import { interpolateColor } from "@/lib/utils";
import purpleCheck from "@/assets/v3/purple_check.svg";
import { gsap } from "gsap";
import mobileRoad3 from "@/assets/v3/mobile_road_3.webp";

export default function EasyOnboardingSection() {
  const pathRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const motionTimeline = useRef<GSAPTimeline>(null);

  const items = [
    {
      icon: (
        <img
          src={purpleCheck}
          alt="Checkmark icon for 48 hour launch feature"
          className="w-[2.5rem] lg:w-6 h-auto object-contain 4k:w-[3rem]"
        />
      ),
      title: "Live in 48 hours",
      description:
        "Launch your 2D setup in as little as two days. No delays, no complex handovers.",
    },
    {
      icon: (
        <img
          src={purpleCheck}
          alt="Checkmark icon for transparent pricing feature"
          className="w-[2.5rem] lg:w-6 h-auto object-contain 4k:w-[3rem]"
        />
      ),
      title: "Transparent pricing, always",
      description:
        "No hidden costs, no vague estimates. What you see is what you pay.",
    },
    {
      icon: (
        <img
          src={purpleCheck}
          alt="Checkmark icon for scalable growth feature"
          className="w-[2.5rem] lg:w-6 h-auto object-contain 4k:w-[3rem]"
        />
      ),
      title: "Built to grow with you",
      description:
        "Whether you’re showcasing 10 units or 300, the experience stays the same.",
    },
  ];

  const startMotionPath = useCallback(() => {
    if (!gradientRef.current || !pathRef.current) return;

    motionTimeline.current?.kill();

    const vw = window.innerWidth;
    const scaleFactor = Math.min(vw / 2000, 2); // proportional scale (2k base → 4k = 2x)

    const CONFIG = {
      offsetX: 0,
      offsetY: 150 * scaleFactor, // ✅ scale vertical offset
      sizeTo: {
        w: 1445 * scaleFactor,
        h: 580 * scaleFactor,
      },
    };

    gsap.set(gradientRef.current, {
      width: 1000 * scaleFactor,
      height: 1000 * scaleFactor,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#easy-onboarding",
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
        start: 0,
        end: 1,
      },
      onUpdate: function () {
        const el = gradientRef.current;
        if (!el) return;
        el.style.left = `${follower.x}px`;
        el.style.top = `${follower.y}px`;

        const progress = this.progress();
        const startColor = interpolateColor("#C4EEE3", "#E7DFF2", progress);
        const midColor = interpolateColor("#EFF9FF", "#F5F2F9", progress);
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
    });
    return () => {
      if (motionTimeline.current) motionTimeline.current.kill();
    };
  }, [startMotionPath]);

  return (
    <section id="easy-onboarding" className="content-visibility-auto">
      {/* MOBILE BACKGROUND */}
      <div
        className="
      hidden lg:block relative w-full mx-auto overflow-visible
      h-[24.125rem]
      4k:[height:clamp(24.125rem,calc(24.125rem+((100vw-2000px)/2000px)*24.125rem),48.25rem)]
    "
      >
        <div
          className="
        absolute -bottom-[125px]
        4k:[bottom:clamp(-125px,calc(-125px-((100vw-2000px)/2000px)*125px),-250px)]
      "
        >
          <img
            src={mobileRoad3}
            alt="Right Property onboarding process mobile visualization"
            className="
          object-cover
          w-[701px] h-[739px]
          4k:[width:clamp(701px,calc(701px+((100vw-2000px)/2000px)*701px),1402px)]
          4k:[height:clamp(739px,calc(739px+((100vw-2000px)/2000px)*739px),1478px)]
        "
          />
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div
        className="
      rp-container relative lg:h-auto
      [height:75.75rem] 2xl:h-[75.75rem]
      4k:[height:clamp(80.75rem,calc(80.75rem+((100vw-2000px)/2000px)*80.75rem),160.5rem)]
    "
      >
        {/* PATH IMAGE */}
        <img
          src={easyOnboarding}
          alt="Right Property easy onboarding process visualization"
          loading="lazy"
          decoding="async"
          width="987"
          height="1286"
          className="
        absolute lg:hidden z-[-1]
        top-[0rem] -left-[4.375rem] w-[61.6875rem] h-[70.375rem] 2xl:w-[65rem] 2xl:h-[71rem]
        4k:[width:clamp(60.6875rem,calc(60.6875rem+((100vw-2000px)/2000px)*60.6875rem),90.375rem)]
        4k:[height:clamp(75.375rem,calc(75.375rem+((100vw-2000px)/2000px)*75.375rem),150.75rem)]
        4k:[top:clamp(0rem,calc(0rem+((100vw-2000px)/2000px)*0rem),0rem)]
        4k:[left:clamp(-4.375rem,calc(-4.375rem-((100vw-2000px)/2000px)*4.375rem),-8.75rem)]
      "
        />

        {/* SVG PATH */}
        <div
          className="
        absolute top-[43.3125rem] left-[40.75rem]
        4k:[top:clamp(43.3125rem,calc(43.3125rem+((100vw-2000px)/2000px)*43.3125rem),86.625rem)]
        4k:[left:clamp(40.75rem,calc(40.75rem+((100vw-2000px)/2000px)*40.75rem),81.5rem)]
      "
          ref={(el) => {
            const path = el?.querySelector("path");
            if (path) pathRef.current = path;
          }}
        >
          <EasyOnboardingPath />
        </div>

        {/* GRADIENT GLOW */}
        <div
          ref={gradientRef}
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #C4EEE3 0%, #EFF9FF 50.13%, rgba(255,255,255,0) 100%)",
          }}
          className="
        absolute lg:hidden z-[-2]
        top-[15.75rem] left-[10.625rem] w-[55.375rem] h-[55.375rem]
        4k:[width:clamp(55.375rem,calc(55.375rem+((100vw-2000px)/2000px)*55.375rem),110.75rem)]
        4k:[height:clamp(55.375rem,calc(55.375rem+((100vw-2000px)/2000px)*55.375rem),110.75rem)]
        4k:[top:clamp(15.75rem,calc(15.75rem+((100vw-2000px)/2000px)*15.75rem),31.5rem)]
        4k:[left:clamp(10.625rem,calc(10.625rem+((100vw-2000px)/2000px)*10.625rem),21.25rem)]
      "
        ></div>

        {/* RIGHT BINARY BLOCK */}
        <div
          className="
            absolute lg:hidden left-1/2 -translate-x-1/2 bottom-[10.125rem]
            2xl:bottom-[10.125rem]
            4k:[bottom:clamp(8.125rem,calc(8.125rem+((100vw-2050px)/2000px)*8.125rem),16.25rem)]
          "
        >
          <BinarySection
            subHeader="Did you know?"
            title="Built by software minds"
            description="No visuals or assets? Our team can produce what’s needed."
            image={<BinaryBlockImage path={automated} />}
          />
        </div>

        {/* TEXT CONTENT */}
        <div
          className="
        flex justify-end relative z-[10] lg:p-4
        pr-[10rem] pt-[5rem]
        4k:[padding-right:clamp(0rem,calc(0rem+((100vw-2000px)/2000px)*0rem),0rem)]
        4k:[padding-top:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),10rem)]
      "
        >
          <div
            className="
          w-[41.875rem] lg:w-full
          4k:[width:clamp(41.875rem,calc(41.875rem+((100vw-2000px)/2000px)*41.875rem),83.75rem)]
        "
          >
            <p
              className="
            mb-5 lg:mb-[1.5rem] font-geist-mono font-normal uppercase
            text-14 lg:text-14 leading-[150%] tracking-[0.02em] text-primary-black
            text-fluid-4k-14
            4k:[margin-bottom:clamp(1.3rem,calc(1.3rem+((100vw-2000px)/2000px)*1.3rem),2.6rem)]
          "
            >
              Presentation
            </p>

            <h2
              className="
            mb-5 lg:mb-[1.5rem] font-general-sans font-semibold text-primary-black
            leading-[130%] -tracking-[0.01em] text-40 lg:text-32
            text-fluid-4k-40
            4k:[margin-bottom:clamp(1.3rem,calc(1.3rem+((100vw-2000px)/2000px)*1.3rem),2.6rem)]
          "
            >
              Easy Onboarding
            </h2>

            <p
              className="
            mb-[3rem] lg:mb-[2rem] font-geist font-normal text-dark-gray leading-[140%]
            text-18 lg:text-18
            text-2k-4k-18
            4k:[margin-bottom:clamp(3rem,calc(3rem+((100vw-2000px)/2000px)*3rem),6rem)]
          "
            >
              Get started in hours, scale on your terms, and pay only for what
              you need—no surprises.
            </p>

            {/* FEATURES LIST */}
            <div className="flex flex-col gap-8 lg:gap-5 4k:[gap:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)]">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="
                flex items-start gap-5 lg:gap-[0.75rem]
                4k:[gap:clamp(1.5rem,calc(1.5rem+((100vw-2000px)/2000px)*1.5rem),3rem)]
              "
                >
                  {item.icon}
                  <div>
                    <h3
                      className="
                    mb-2 font-geist font-medium text-primary-black leading-[140%]
                    text-24 lg:text-20
                    text-2k-4k-24
                    4k:[margin-bottom:clamp(0.5rem,calc(0.5rem+((100vw-2000px)/2000px)*0.5rem),1rem)]
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
            <div
              className="
            hidden lg:block relative
            py-[7.5rem]
            4k:[padding-top:clamp(7.5rem,calc(7.5rem+((100vw-2000px)/2000px)*7.5rem),15rem)]
            4k:[padding-bottom:clamp(7.5rem,calc(7.5rem+((100vw-2000px)/2000px)*7.5rem),15rem)]
          "
            >
              <BinarySection
                subHeader="Did you know?"
                title="Automated where it matters"
                description="We simplify the complex. Many steps you'd expect to handle manually are fully automated behind the scenes."
                image={<BinaryBlockImage path={automated} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
