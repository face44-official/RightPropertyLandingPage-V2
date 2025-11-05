import { cn } from "@/lib/utils";
import ShowBookingHoc from "./show-booking-hoc";

export default function BookADemoButton({ className }: { className?: string }) {
  const cnClass = cn(
    `
    group relative cursor-pointer overflow-hidden will-change-transform
    transition-all duration-300 ease-in-out
    text-left font-geist font-semibold uppercase
    bg-[#FF9985] text-primary-black
    rounded-[65px] leading-[130%] tracking-[0%]
    pl-[2.25rem] hover:pl-[5.25rem]
    w-[14.5625rem] h-[4rem]
    lg:w-full lg:h-[3rem] lg:pl-0 lg:flex lg:items-center lg:justify-center
    `,
    `
    4k:[width:clamp(14.5625rem,calc(14.5625rem+((100vw-2000px)/2000px)*14.5625rem),29.125rem)]
    4k:[height:clamp(4rem,calc(4rem+((100vw-2000px)/2000px)*4rem),8rem)]
    4k:[border-radius:clamp(65px,calc(65px+((100vw-2000px)/2000px)*65px),130px)]
    text-2k-4k
    4k:[letter-spacing:clamp(0em,calc(0em+((100vw-2000px)/2000px)*0.05em),0.05em)]
    4k:[padding-left:clamp(2.25rem,calc(2.25rem+((100vw-2000px)/2000px)*2.25rem),4.5rem)]
    hover:4k:[padding-left:clamp(5.25rem,calc(5.25rem+((100vw-2000px)/2000px)*5.25rem),10.5rem)]
    `,
    className
  );

  return (
    <ShowBookingHoc>
      <button className={cnClass}>
        {/* TEXT */}
        <span className="relative z-[10] transition-all duration-300 ease-in-out">
          Book a demo
        </span>
        <div
          className="
            absolute top-1/2 translate-y-[-50%] right-[5px]
            flex items-center justify-center rounded-full
            bg-[#EF716E]
            transition-all duration-300 ease-in-out
            w-[3.5rem] h-[3.375rem] group-hover:w-[10.875rem]
            lg:w-[2.463125rem] lg:h-[2.375rem]
            4k:[right:clamp(5px,calc(5px+((100vw-2000px)/2000px)*5px),10px)]
            4k:[width:clamp(3.5rem,calc(3.5rem+((100vw-2000px)/2000px)*3.5rem),7rem)]
            4k:[height:clamp(3.375rem,calc(3.375rem+((100vw-2000px)/2000px)*3.375rem),6.75rem)]
            group-hover:4k:[width:clamp(10.875rem,calc(10.875rem+((100vw-2000px)/2000px)*10.875rem),21.75rem)]
          "
        >
          <svg
            className="transition-transform duration-300 ease-in-out group-hover:translate-x-[14em] 4k:group-hover:translate-x-[28em]
                       4k:[width:clamp(24px,calc(24px+((100vw-2000px)/2000px)*24px),48px)]
                       4k:[height:clamp(25px,calc(25px+((100vw-2000px)/2000px)*25px),50px)] xl:w-[18px] xl:h-[19px]"
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

        <svg
          className="
    absolute left-[1.125rem] top-1/2 -translate-y-1/2
    transition-all duration-300 ease-in-out
    -translate-x-[5rem] group-hover:translate-x-0
    4k:[left:clamp(1.125rem,calc(1.125rem+((100vw-2000px)/2000px)*1.125rem),2.25rem)]
    4k:[-translate-x:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),10rem)]
    4k:[width:clamp(24px,calc(24px+((100vw-2000px)/2000px)*24px),48px)]
    4k:[height:clamp(25px,calc(25px+((100vw-2000px)/2000px)*25px),50px)]
  "
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
