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
    if (gradientRef.current && pathRef.current) {
      if (motionTimeline.current) motionTimeline.current.kill();

      motionTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#easy-onboarding",
          start: "center-=20% center",
          end: "center top",
          scrub: 1,
        },
      });

      const follower = { x: 0, y: 0 };

      const moveAnim = gsap.to(follower, {
        ease: "power3.out",
        motionPath: {
          path: pathRef.current,
          offsetX: 0,
          offsetY: 150,
          autoRotate: true,
          start: 0,
          end: 1,
        },
        onUpdate: function () {
          const progress = this.progress();
          if (gradientRef.current) {
            gradientRef.current.style.setProperty("left", `${follower.x}px`);
            gradientRef.current.style.setProperty("top", `${follower.y}px`);

            const startColor = interpolateColor(
              "#C4EEE3",
              "#E7DFF2",
              progress
            );
            const middleColor = interpolateColor(
              "#EFF9FF",
              "#F5F2F9",
              progress
            );
            gradientRef.current.style.background = `radial-gradient(50% 50% at 50% 50%, ${startColor} 0%, ${middleColor} 25.96%, rgba(255, 255, 255, 0) 100%)`;
          }
        },
      });

      const anim = gsap.to(gradientRef.current, {
        width: "1445px",
        height: "1048px",
      });

      motionTimeline.current.add(moveAnim, 0);
      motionTimeline.current.add(anim, 0);
    }
  }, [gradientRef, pathRef]);

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
      {/* mobile background */}
      <div className="hidden lg:block relative w-full h-[24.125rem] mx-auto overflow-visible 4k:h-[30rem]">
        <div className="absolute -bottom-[125px] 4k:-bottom-[150px]">
          <img
            src={mobileRoad3}
            className="w-[701px] h-[739px] object-cover 4k:w-[850px] 4k:h-[880px]"
            alt="Right Property onboarding process mobile visualization"
          />
        </div>
      </div>

      <div
        className="rp-container relative lg:h-auto"
        style={{ height: "98.75rem" }}
      >
        {/* path & gradient visuals */}
        <img
          className="absolute top-[5rem] -left-[4.375rem] w-[61.6875rem] h-[80.375rem] lg:hidden z-[-1] 4k:w-[72rem] 4k:h-[95rem] 4k:top-[6rem] 4k:-left-[5rem]"
          src={easyOnboarding}
          alt="Right Property easy onboarding process visualization with animated path"
          loading="lazy"
          decoding="async"
          width="987"
          height="1286"
        />
        <div
          className="absolute top-[43.3125rem] left-[40.75rem] 4k:top-[50rem] 4k:left-[48rem]"
          ref={(el) => {
            if (el) {
              const path = el.querySelector("path");
              if (path) pathRef.current = path;
            }
          }}
        >
          <EasyOnboardingPath />
        </div>

        <div
          ref={gradientRef}
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #C4EEE3 0%, #EFF9FF 50.13%, rgba(255, 255, 255, 0) 100%)",
          }}
          className="lg:hidden absolute z-[-2] top-[15.75rem] left-[10.625rem] w-[55.375rem] h-[55.375rem] 4k:w-[65rem] 4k:h-[65rem] 4k:top-[18rem] 4k:left-[12rem]"
        ></div>

        {/* Right-side binary block */}
        <div className="absolute left-[35rem] bottom-[7.125rem] lg:hidden 4k:left-[42rem] 4k:bottom-[0rem]">
          <BinarySection
            subHeader="Did you know?"
            title="Built by software minds"
            description="No visuals or assets? Our team can produce what’s needed."
            image={<BinaryBlockImage path={automated} />}
          />
        </div>

        {/* Text and items */}
        <div className="flex justify-end pr-[10rem] pt-[10rem] lg:p-4 relative z-[10] 4k:pr-[12rem] 4k:pt-[12rem]">
          <div className="w-[41.875rem] lg:w-full lg:p-4 4k:w-[55rem]">
            <p className="mb-8 lg:mb-[1.5rem] font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.02em] uppercase text-primary-black 4k:text-[clamp(1.125rem,0.8vw+0.5rem,1.5rem)] 4k:mb-[2rem]">
              Presentation
            </p>

            <h2 className="mb-8 lg:mb-[1.5rem] font-general-sans font-semibold text-40 lg:text-32 -tracking-[0.01em] leading-[130%] text-primary-black 4k:text-[clamp(2.5rem,1.5vw+1rem,4rem)] 4k:mb-[2rem]">
              Easy Onboarding
            </h2>

            <p className="mb-[5rem] lg:mb-[2rem] font-geist font-normal text-32 lg:text-24 -tracking-[0.01em] leading-[140%] text-dark-gray 4k:text-[clamp(1.75rem,1vw+0.5rem,2.25rem)] 4k:mb-[6rem]">
              Get started in hours, scale on your terms, and pay only for what you
              need—no surprises.
            </p>

            <div className="flex flex-col gap-8 4k:gap-[2.5rem]">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-6 lg:gap-[0.75rem] items-start 4k:gap-[1.5rem]">
                  {item.icon}
                  <div>
                    <h3 className="font-geist mb-2 font-medium text-28 lg:text-20 leading-[140%] text-primary-black 4k:text-[clamp(1.75rem,1vw+0.5rem,2.25rem)]">
                      {item.title}
                    </h3>
                    <p className="font-geist font-normal text-24 lg:text-base leading-[140%] text-primary-black 4k:text-[clamp(1.5rem,0.9vw+0.5rem,2rem)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:block py-[7.5rem]">
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
