import gRoad from "@/assets/v3/g_road.svg";
import SimpleSetupGradientPath from "./simple-setup-gradient-path";
import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import BinarySection, { BinaryBlockImage } from "../binary-section";
import softwareMinds from "@/assets/v3/software_minds.webp";
import { interpolateColor } from "@/lib/utils";
import purpleCheck from "@/assets/v3/purple_check.svg";
import SimpleSetupMobileGradient from "./simple-setup-mobile-gradient";

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
        "Upload floor plans, renders, brochures, videos, and even 3D tour.",
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
        "Need to make changes? Just a few clicks. No waiting, no developers.",
    },
  ];

  const startMotionPath = useCallback(() => {
    if (!gradientRef.current || !pathRef.current) return;

    // Kill any running timeline
    motionTimeline.current?.kill();

    // Responsive config
    const is4k = window.matchMedia("(min-width: 2000px)").matches;

    const CONFIG = is4k
      ? {
          offsetX: 240, // was 200
          offsetY: -220, // was -180
          xBias: 16, // subtle horizontal nudge
          yBias: 64, // subtle vertical nudge (move glow lower)
          sizeTo: { w: 1600, h: 1600 }, // was ~1445/1048
        }
      : {
          offsetX: 200,
          offsetY: -180,
          xBias: 0,
          yBias: 0,
          sizeTo: { w: 1445, h: 1048 },
        };

    // Optional: ensure a sane starting size before the tween
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

        // Position follow (with small 4k bias)
        el.style.left = `${follower.x + CONFIG.xBias}px`;
        el.style.top = `${follower.y + CONFIG.yBias}px`;

        // Color interpolation
        const startColor = interpolateColor("#DBE8FF", "#E7DFF2", progress);
        const middleColor = interpolateColor("#E8F4FF", "#E7DFF2", progress);
        el.style.background = `radial-gradient(50% 50% at 50% 50%, ${startColor} 0%, ${middleColor} 25.96%, rgba(255, 255, 255, 0) 100%)`;
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
        className="rp-container lg:h-auto! relative z-[-1] 4k:h-[130rem]!"
        style={{ height: "108.375rem" }}
      >
        <div className="flex justify-start gap-[8.4375rem] w-[41.875rem] lg:w-full 4k:w-[55rem] 4k:gap-[10rem]">
          {/* Background */}
          <div className="absolute -top-[32.5rem] -left-[2.5rem] z-[-1] 4k:-top-[40rem] 4k:-left-[4rem]">
            <div className="w-[133.8125rem] h-[176rem] lg:hidden 4k:w-[150rem] 4k:h-[200rem]">
              <img
                className="w-full h-full"
                src={gRoad}
                alt="Right Property simple setup process visualization"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Path + Gradient */}
          <div
            className="absolute top-[25rem] right-[12rem] 4k:top-[30rem] 4k:right-[15rem]"
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
            className="absolute -top-[12rem] -right-[31rem] w-[1425.84px] h-[1425.84px] lg:hidden z-[-2] 4k:w-[1600px] 4k:h-[1600px] 4k:-top-[14rem] 4k:-right-[35rem]"
          ></div>

          {/* Binary Block */}
          <div className="absolute left-[35rem] bottom-[16.875rem] lg:hidden 4k:left-[42rem] 4k:bottom-[20rem]">
            <BinarySection
              subHeader="Did you know?"
              title="Built by software minds"
              description="No visuals or assets? Our team can produce what’s needed."
              image={<BinaryBlockImage path={softwareMinds} />}
            />
          </div>

          {/* Text Content */}
          <div className="pt-[10rem] pl-[5rem] lg:p-4 4k:pt-[12rem] 4k:pl-[7rem]">
            <p className="mb-8 lg:mb-[1.5rem] font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.02em] uppercase text-primary-black 4k:text-[clamp(1.125rem,0.8vw+0.5rem,1.5rem)]">
              Presentation
            </p>

            <h2 className="mb-8 lg:mb-[1.5rem] font-general-sans font-semibold text-40 lg:text-32 -tracking-[0.01em] leading-[130%] text-primary-black 4k:text-[clamp(2.5rem,1.5vw+1rem,5rem)] 4k:mb-[2rem]">
              Simple Setup
            </h2>

            <p className="mb-[5rem] lg:mb-[2rem] font-geist font-normal text-32 lg:text-24 -tracking-[0.01em] leading-[140%] text-dark-gray 4k:text-[clamp(1.75rem,1vw+0.5rem,2.25rem)] 4k:mb-[6rem]">
              The process is straightforward, flexible, and built to get you
              moving fast.
            </p>

            {/* Items */}
            <div className="flex flex-col gap-8 4k:gap-[2.5rem]">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 lg:gap-[0.75rem] items-start 4k:gap-[1.5rem]"
                >
                  {item.icon}
                  <div>
                    <h3 className="font-geist font-medium text-28 lg:text-20 leading-[140%] text-primary-black 4k:text-[clamp(1.75rem,1vw+0.5rem,2.25rem)]">
                      {item.title}
                    </h3>
                    <p className="font-geist font-normal text-24 lg:text-base leading-[140%] text-primary-black 4k:text-[clamp(1.5rem,0.9vw+0.5rem,2rem)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Binary */}
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
