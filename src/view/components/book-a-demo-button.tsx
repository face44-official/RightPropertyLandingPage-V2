import { cn } from "@/lib/utils";
import ShowBookingHoc from "./show-booking-hoc";

export default function BookADemoButton({ className }: { className?: string }) {
  const cnClass = cn(
    // Base styles
    "group will-change-transform transition-all duration-300 overflow-hidden ease-in-out cursor-pointer text-left pl-[2.25rem] hover:pl-[5.25rem] w-[14.5625rem] lg:w-full lg:pl-0 lg:flex lg:items-center lg:justify-center h-[4rem] lg:h-[3rem] lg:text-sm rounded-[65px] bg-[#FF9985] font-geist font-semibold text-base leading-[130%] tracking-[0%] uppercase relative",
    // Scale everything on 4K screens
    "4k:text-lg 4k:h-[4.5rem] 4k:w-[16rem] 4k:pl-[2.75rem] 4k:hover:pl-[6rem] 4k:tracking-[0.03em] 4k:[font-size:clamp(var(--minSize),calc(var(--minSize)+((100vw-var(--minVw))/(var(--maxVw)-var(--minVw)))*(var(--maxSize)-var(--minSize))),var(--maxSize))]",
    className
  );

  return (
    <ShowBookingHoc>
      <button onClick={() => {}} className={cnClass}>
        {/* Text */}
        <span className="z-[10] relative transition-all duration-300 ease-in-out text-primary-black">
          Book a demo
        </span>

        {/* Right-side expanding circle */}
        <div className="z-[8] absolute top-[5px] right-[5px] flex items-center justify-center bg-[#EF716E] rounded-full transition-all duration-300 ease-in-out
          w-[3.5rem] h-[3.375rem] group-hover:w-[10.875rem]
          lg:w-[2.463125rem] lg:h-[2.375rem]
          4k:w-[4rem] 4k:h-[3.875rem] 4k:top-[6px] 4k:right-[6px] 4k:group-hover:w-[12rem]">
          <svg
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-[14em] 4k:group-hover:translate-x-[16em]"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12.5H19"
              stroke="#232323"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5.5L19 12.5L12 19.5"
              stroke="#232323"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Left-side arrow entrance */}
        <svg
          className="transition-all duration-300 ease-in-out absolute left-[1.125rem] top-1/2 -translate-y-1/2 -translate-x-[4rem] group-hover:translate-x-0 4k:left-[1.5rem] 4k:-translate-x-[5rem]"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12.5H19"
            stroke="#232323"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5.5L19 12.5L12 19.5"
            stroke="#232323"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </ShowBookingHoc>
  );
}
