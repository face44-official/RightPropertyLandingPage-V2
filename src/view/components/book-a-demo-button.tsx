
import { cn } from "@/lib/utils";
import ShowBookingHoc from "./show-booking-hoc";

export default function BookADemoButton({ className }: { className?: string }) {
    const cnClass = cn('group will-change-transform transition-all duration-300 overflow-hidden  ease-in-out cursor-pointer text-left pl-[2.25rem] hover:pl-[5.25rem] w-[14.5625rem] lg:w-full lg:pl-0 lg:flex lg:items-center lg:justify-center h-[4rem] lg:h-[3rem] lg:text-sm rounded-[65px] bg-[#FF9985] font-geist font-semibold text-base leading-[130%] tracking-[0%] uppercase relative', className)
    return (
        <ShowBookingHoc>
            <button onClick={() => { }} className={cnClass}>
                <span className="z-[10] relative  transition-all duration-300 ease-in-out text-primary-black">
                    Book a demo
                </span>
                <div className=" z-[8] group-hover:w-[10.875rem] transition-all duration-300 ease-in-out  w-[3.5rem] h-[3.375rem] lg:w-[2.463125rem] lg:h-[2.375rem] absolute bg-[#EF716E] rounded-full flex items-center justify-center top-[5px] right-[5px]">
                    <svg className="transition-all duration-300 ease-in-out group-hover:translate-x-[15em]" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12.5H19" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 5.5L19 12.5L12 19.5" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                </div>
                <svg className="transition-all duration-300 ease-in-out absolute left-[1.125rem] top-1/2 -translate-y-1/2 -translate-x-[4rem] group-hover:translate-x-0" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12.5H19" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5.5L19 12.5L12 19.5" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </ShowBookingHoc>
    )
}