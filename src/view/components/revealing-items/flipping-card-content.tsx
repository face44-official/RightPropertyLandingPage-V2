import BookADemoButton from "../book-a-demo-button";
import ShowBookingHoc from "../show-booking-hoc";
import LearnMoreButton from "./learn-more-button";
import { useLayoutEffect, useRef } from "react";
import {gsap} from "gsap";
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

    const targets = [subHeadingRef.current, titleRef.current, descriptionRef.current].filter(
      Boolean,
    ) as HTMLElement[];

    const splits: SplitText[] = [];
    const srs: HTMLElement[] = [];

    // helper: inject an sr-only semantic twin and mark animated node decorative
    const ensureAccessibleTwin = (el: HTMLElement, idx: number) => {
      // Capture clean text before SplitText mutates DOM
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (!text) return;

      // Avoid duplicates if effect re-runs
      const existingId = el.getAttribute("data-sr-id");
      if (!existingId) {
        const srId = `sr-${el.tagName.toLowerCase()}-${idx}-${Math.random()
          .toString(36)
          .slice(2)}`;

        // Create a same-tag semantic twin (<p>→<p>, <h2>→<h2>)
        const sr = document.createElement(el.tagName.toLowerCase());
        sr.id = srId;
        sr.textContent = text;
        sr.className = "sr-only"; // Tailwind; if not using Tailwind, add your own visually-hidden class.
        sr.setAttribute("data-injected-sr", "true");

        // Insert immediately before the animated node
        el.insertAdjacentElement("beforebegin", sr);
        srs.push(sr);

        // Mark animated node as decorative and strip any names
        el.setAttribute("aria-hidden", "true");
        el.removeAttribute("aria-label");
        el.removeAttribute("aria-labelledby");
        el.setAttribute("data-sr-id", srId);
      }
    };

    // Build SR twins first, then animate decorative nodes
    targets.forEach((el, i) => ensureAccessibleTwin(el, i));

    // Now apply SplitText to the decorative nodes
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
        { opacity: 1, y: 0, duration: 0.8, delay: 0 },
      );
    }

    // Cleanup on unmount/re-render: revert SplitText wrappers but keep sr-only twins
    return () => {
      splits.forEach((s) => s.revert());
      // (We keep the SR twins; they’re harmless and avoid flicker. If you prefer, remove them here.)
      // srs.forEach((sr) => sr.remove());
      targets.forEach((el) => {
        el.removeAttribute("aria-hidden");
        el.removeAttribute("data-sr-id");
      });
    };
  }, [subHeading, title, description, useBookButton, useButton]);

  return (
    <div ref={containerRef} className="p-[3.75rem] bg-white w-[48.9375rem]">
      <div className="card-content">
        {subHeading && (
          <p
            ref={subHeadingRef}
            className="mb-8 font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.04em] uppercase text-squid-ink overflow-hidden"
          >
            {subHeading}
          </p>
        )}

        <h2
          ref={titleRef}
          className="mb-8 lg:mb-6 font-general-sans font-semibold text-40 lg:text-40 tracking-[0em] leading-[130%] text-squid-ink overflow-hidden"
        >
          {title}
        </h2>

        <p
          ref={descriptionRef}
          className="mb-[2.5rem] font-geist font-normal text-32 lg:text-18 tracking-[0em] leading-[140%] text-squid-ink overflow-hidden"
        >
          {description}
        </p>

        {useButton && (
          <div ref={buttonRef} className="lg:hidden">
            {useBookButton ? <BookADemoButton /> : <ShowBookingHoc><LearnMoreButton /></ShowBookingHoc>}
          </div>
        )}
      </div>
    </div>
  );
}