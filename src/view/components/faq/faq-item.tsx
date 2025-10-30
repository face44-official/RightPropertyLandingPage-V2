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
        p-[2.5rem] lg:p-6 4k:p-[3.5rem]
        transition-all duration-300
        hover:bg-[rgba(187,135,255,0.15)]
      "
      style={{ background: "rgba(187, 135, 255, 0.1)" }}
    >
      {/* Question Row */}
      <div
        className="
          flex items-center justify-between
          gap-[5.625rem] lg:gap-6 4k:gap-[7rem]
        "
      >
        <h3
          className="
            font-geist font-medium
            text-24 lg:text-base 4k:text-[clamp(1.75rem,2vw,2rem)]
            leading-[140%] -tracking-[0.02em]
          "
        >
          {question}
        </h3>

        <div
          className="
            shrink-0
            w-[64px] h-[64px]
            lg:w-[2.5rem] lg:h-[2.5rem]
            4k:w-[80px] 4k:h-[80px]
            rounded-full border border-[#FF947E]
            flex items-center justify-center
          "
        >
          <svg
            ref={iconRef}
            className="w-[1.5rem] h-[1.5rem] 4k:w-[2rem] 4k:h-[2rem] transition-transform"
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
          h-0 overflow-hidden mt-[0.75rem]
          font-geist font-normal
          text-18 lg:text-base 4k:text-[1.3rem]
          leading-[140%] tracking-[0%]
        "
      >
        {answer}
      </div>
    </div>
  );
}