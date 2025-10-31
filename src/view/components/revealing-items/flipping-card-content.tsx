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
        el.insertAdjacentElement("beforebegin", sr);
        srs.push(sr);
        el.setAttribute("aria-hidden", "true");
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
    bg-white p-[3.75rem] w-[48.9375rem]
    4k:h-full
    4k:[width:clamp(48.9375rem,calc(48.9375rem+((100vw-2000px)/2000px)*48.9375rem),97.875rem)]
    4k:[padding:clamp(3.75rem,calc(3.75rem+((100vw-2000px)/2000px)*3.75rem),7.5rem)]
    4k:[border-radius:clamp(0px,calc(0px+((100vw-2000px)/2000px)*40px),40px)]
  "
    >
      <div className="card-content">
        {subHeading && (
          <p
            ref={subHeadingRef}
            className="
          mb-8 font-geist-mono font-normal uppercase text-primary-black overflow-hidden
          text-16 leading-[150%] tracking-[0.04em]
          4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)]
          text-2k-4k
        "
          >
            {subHeading}
          </p>
        )}

        <h2
          ref={titleRef}
          className="
        mb-8 lg:mb-6 font-general-sans font-semibold text-primary-black overflow-hidden pr-16
        text-40 leading-[130%]
        4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)]
        4k:[padding-right:clamp(4rem,calc(4rem+((100vw-2000px)/2000px)*4rem),8rem)]
        text-fluid-4k-40
      "
        >
          {title}
        </h2>

        <p
          ref={descriptionRef}
          className="
        mb-[2.5rem] font-geist font-normal text-dark-gray overflow-hidden
        text-32 tracking-[0em] leading-[140%]
        4k:[margin-bottom:clamp(3rem,calc(3rem+((100vw-2000px)/2000px)*3rem),5rem)]
        text-fluid-4k-32
        4k:[line-height:clamp(140%,calc(140%+((100vw-2000px)/2000px)*10%),150%)]
      "
        >
          {description}
        </p>

        {useButton && (
          <div ref={buttonRef} className="lg:hidden">
            {useBookButton ? (
              <BookADemoButton />
            ) : (
              <ShowBookingHoc>
                <LearnMoreButton />
              </ShowBookingHoc>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
