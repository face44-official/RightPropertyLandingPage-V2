import BookADemoButton from "../book-a-demo-button";
import ShowBookingHoc from "../show-booking-hoc";
import LearnMoreButton from "./learn-more-button";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

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
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }
      );
    }, contentRef);

    return () => {
      ctx.revert();
    };
  }, [subHeading, title, description, useButton, useBookButton]);

  return (
    <div
      ref={containerRef}
      className="
        bg-white p-[3.75rem] w-[48.9375rem]
        4k:[width:clamp(40.9375rem,calc(40.9375rem+((100vw-2050px)/2000px)*40.9375rem),80.875rem)]
        4k:[padding:clamp(3.75rem,calc(3.75rem+((100vw-2050px)/2000px)*3.75rem),7.5rem)]
        4k:[border-radius:clamp(0px,calc(0px+((100vw-2050px)/2000px)*40px),40px)]
      "
    >
      <div ref={contentRef} className="card-content pr-40 lg:pr-0 4k:pr-0">
        {subHeading && (
          <p
            className="
              mb-5 font-geist-mono font-normal uppercase text-primary-black
              text-14 leading-[150%] tracking-[0.04em]
              4k:[margin-bottom:clamp(1.3rem,calc(1.3rem+((100vw-2050px)/2000px)*1.3rem),2.6rem)]
              text-fluid-4k-14
            "
          >
            {subHeading}
          </p>
        )}

        <h2
          className="
            mb-5 lg:mb-6 font-general-sans font-semibold text-primary-black pr-16
            text-40 leading-[130%]
            4k:[margin-bottom:clamp(1.3rem,calc(1.3rem+((100vw-2050px)/2000px)*1.3rem),2.6rem)]
            4k:[padding-right:clamp(4rem,calc(4rem+((100vw-2050px)/2000px)*4rem),8rem)]
            text-fluid-4k-40
          "
        >
          {title}
        </h2>

        <p
          className="
            mb-[3rem] font-geist font-normal text-dark-gray
            text-18 tracking-[0em] leading-[140%]
            4k:[margin-bottom:clamp(3rem,calc(3rem+((100vw-2050px)/2000px)*3rem),6rem)]
            text-2k-4k-18
            4k:[line-height:clamp(140%,calc(140%+((100vw-2050px)/2000px)*10%),150%)]
          "
        >
          {description}
        </p>

        {useButton && (
          <div className="lg:hidden">
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
