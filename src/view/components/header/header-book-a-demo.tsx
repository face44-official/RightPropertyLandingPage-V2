import ShowBookingHoc from "../show-booking-hoc";

export default function HeaderBookADemo() {
  return (
    <ShowBookingHoc>
      <button
        onClick={() => {}}
        className="
      hover:bg-pale-blue will-change-transform pointer-events-auto transition-all duration-300 ease-in-out
      cursor-pointer border border-[#BADEF3] bg-[#BADEF342]
      font-geist font-semibold uppercase text-[#232323]
      w-[9.25rem] h-[3.125rem] text-[14px] leading-[130%] tracking-[0%] rounded-[65px]
      4k:text-[clamp(1.125rem,0.8vw+0.5rem,1rem)] 4k:w-[10.5rem] 4k:h-[3.75rem] 4k:tracking-[0.03em]
    "
      >
        Book a Demo
      </button>
    </ShowBookingHoc>
  );
}
