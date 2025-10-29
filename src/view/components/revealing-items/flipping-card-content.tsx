import BookADemoButton from "../book-a-demo-button";
import ShowBookingHoc from "../show-booking-hoc";
import LearnMoreButton from "./learn-more-button";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface FlippingCardContentProps {
  subHeading?: string;
  title: string;
  description: string;
  useBookButton?: boolean;
  useButton?: boolean;
}

export default function FlippingCardContent({
  subHeading,
  title,
  description,
  useBookButton = false,
  useButton = true,
}: FlippingCardContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const targets = [
      subHeadingRef.current,
      titleRef.current,
      descriptionRef.current,
    ].filter(Boolean) as HTMLElement[];

    const splits: SplitText[] = [];
    const srs: HTMLElement[] = [];

    const ensureAccessibleTwin = (el: HTMLElement, idx: number) => {
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (!text) return;

      const existingId = el.getAttribute("data-sr-id");
      if (!existingId) {
        const srId = `sr-${el.tagName.toLowerCase()}-${idx}-${Math.random()
          .toString(36)
          .slice(2)}`;

        const sr = document.createElement(el.tagName.toLowerCase());
        sr.id = srId;
        sr.textContent = text;
        sr.className = "sr-only";
        sr.setAttribute("data-injected-sr", "true");

        el.insertAdjacentElement("beforebegin", sr);
        srs.push(sr);

        el.setAttribute("aria-hidden", "true");
        el.removeAttribute("aria-label");
        el.removeAttribute("aria-labelledby");
        el.setAttribute("data-sr-id", srId);
      }
    };

    targets.forEach((el, i) => ensureAccessibleTwin(el, i));

    targets.forEach((el) => {
      const split = new SplitText(el, { type: "lines,chars" });
      splits.push(split);

      gsap.set(split.lines, { overflow: "hidden", lineHeight: "1.2em" });
      gsap.set(split.chars, { y: "200%" });

      gsap.to(split.chars, {
        y: "0%",
        duration: 1,
        ease: "power2.out",
        stagger: 0.005,
      });
    });

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0 }
      );
    }

    return () => {
      splits.forEach((s) => s.revert());
      targets.forEach((el) => {
        el.removeAttribute("aria-hidden");
        el.removeAttribute("data-sr-id");
      });
    };
  }, [subHeading, title, description, useBookButton, useButton]);

  return (
    <div
      ref={containerRef}
      className="
        p-[3.75rem] bg-white w-[48.9375rem]
        4k:w-[60rem] 4k:p-[4.5rem] 4k:rounded-[20px]
      "
    >
      <div className="card-content">
        {subHeading && (
          <p
            ref={subHeadingRef}
            className="
              mb-8 font-geist-mono font-normal uppercase text-primary-black overflow-hidden
              text-16 leading-[150%] tracking-[0.04em]
              4k:mb-[2rem] 4k:text-[clamp(1.125rem,0.8vw+0.5rem,1.5rem)]
            "
          >
            {subHeading}
          </p>
        )}

        <h2
          ref={titleRef}
          className="
            mb-8 lg:mb-6 font-general-sans font-semibold tracking-[0em] text-primary-black overflow-hidden pr-16
            text-40 lg:text-40 leading-[130%]
            4k:mb-[2rem] 4k:pr-[5rem] 4k:text-[clamp(2.5rem,1.6vw+1rem,5rem)]
          "
        >
          {title}
        </h2>

        <p
          ref={descriptionRef}
          className="
            mb-[2.5rem] font-geist font-normal text-dark-gray overflow-hidden
            text-32 lg:text-18 tracking-[0em] leading-[140%]
            4k:mb-[3rem] 4k:text-[clamp(1.75rem,1vw+0.5rem,2.25rem)] 4k:leading-[150%]
          "
        >
          {description}
        </p>

        {useButton && (
          <div ref={buttonRef} className="lg:hidden">
            {" "}
            {useBookButton ? (
              <BookADemoButton />
            ) : (
              <ShowBookingHoc>
                <LearnMoreButton />
              </ShowBookingHoc>
            )}{" "}
          </div>
        )}
      </div>
    </div>
  );
}
