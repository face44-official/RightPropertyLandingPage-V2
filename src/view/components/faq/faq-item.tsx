import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function FaqItem({
  question,
  answer,
}: {
  question: string | React.ReactNode;
  answer: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const horizontalRef = useRef<SVGPathElement>(null);

  const handleClick = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      gsap.to(answerRef.current, {
        height: "auto",
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(horizontalRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });
      gsap.to(iconRef.current, {
        rotate: 90,
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(horizontalRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div
      onClick={handleClick}
      className="
        text-[#E2E2E2] cursor-pointer flex flex-col
        py-[2.25rem] pl-[2.5rem] pr-[1.75rem] lg:p-5 mb-[30px] lg:mb-4 rounded-[20px]
        4k:[padding:clamp(2.5rem,calc(2.5rem+((100vw-2050px)/2000px)*2.5rem),5rem)]
        4k:[padding-right:clamp(1.75rem,calc(1.75rem+((100vw-2050px)/2000px)*1.75rem),3.5rem)]
        transition-all duration-300 ease-in-out
        hover:bg-[rgba(187,135,255,0.15)]
        4k:[margin-bottom:clamp(1.875rem,calc(1.875rem+((100vw-2050px)/2000px)*1.875rem),3.75rem)]
      "
      style={{ background: "#BB87FF1A" }}
    >
      {/* Question Row */}
      <div
        className="
          flex items-center justify-between
          gap-[5.625rem] lg:gap-6
          min-h-[40px] lg:min-h-[2.5rem]
          4k:[gap:clamp(5.625rem,calc(5.625rem+((100vw-2050px)/2000px)*3.375rem),9rem)]
  "
      >
        <h3
          className="
            font-geist font-regular
            text-20 lg:text-base
            leading-[140%] -tracking-[0.02em]
            text-2k-4k-20
            4k:[line-height:clamp(140%,calc(140%+((100vw-2050px)/2000px)*10%),150%)]
          "
        >
          {question}
        </h3>

        <div
          className="
            shrink-0 flex items-center justify-center
            w-[46px] h-[46px] lg:w-[2.5rem] lg:h-[2.5rem]
            4k:[width:clamp(46px,calc(46px+((100vw-2050px)/2000px)*46px),92px)]
            4k:[height:clamp(46px,calc(46px+((100vw-2050px)/2000px)*46px),92px)]
            rounded-full border border-[#FF947E]
            transition-all duration-300
          "
        >
          <svg
            ref={iconRef}
            className="
              w-[1rem] h-[1rem]
              4k:[width:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
              4k:[height:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
              transition-transform
            "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 12.0039L24 12.0039" stroke="#EF716E" strokeWidth="2" />
            <path
              ref={horizontalRef}
              d="M12.0078 23.998L12.0078 -0.00195441"
              stroke="#EF716E"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Answer */}
      <div
        ref={answerRef}
        className="
          h-0 overflow-hidden
          font-geist font-normal
          text-base text-fluid-4k-14
          leading-[140%] tracking-[0%]
        "
      >
        {answer}
      </div>
    </div>
  );
}
