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
    text-[14px] leading-[130%] tracking-[0%] rounded-[65px]
    py-[15px] px-[25px] [--minVw:2000px] [--maxVw:4000px]
    [--minSize:14px] [--maxSize:1.8rem]
    4k:[font-size:clamp(var(--minSize),calc(var(--minSize)+((100vw-var(--minVw))/(var(--maxVw)-var(--minVw)))*(var(--maxSize)-var(--minSize))),var(--maxSize))]
  "
      >
        Book a Demo
      </button>
    </ShowBookingHoc>
  );
}
