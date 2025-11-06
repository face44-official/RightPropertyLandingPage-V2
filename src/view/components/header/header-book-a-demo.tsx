import ShowBookingHoc from "../show-booking-hoc";

export default function HeaderBookADemo() {
  return (
    <ShowBookingHoc>
      <button
        onClick={() => {}}
        className="
          hover:bg-pale-blue will-change-transform pointer-events-auto 
          transition-all duration-300 ease-in-out cursor-pointer 
          border border-[#BADEF3] bg-[#BADEF342]
          font-geist font-semibold uppercase text-[#232323]
          leading-[130%] tracking-[0%] rounded-[65px]
          py-[15px] px-[25px] text-14
          text-fluid-4k-14
          4k:[padding-top:clamp(15px,calc(15px+((100vw-2050px)/2000px)*15px),30px)]
          4k:[padding-bottom:clamp(15px,calc(15px+((100vw-2050px)/2000px)*15px),30px)]
          4k:[padding-left:clamp(25px,calc(25px+((100vw-2050px)/2000px)*25px),50px)]
          4k:[padding-right:clamp(25px,calc(25px+((100vw-2050px)/2000px)*25px),50px)]
        "
      >
        Book a Demo
      </button>
    </ShowBookingHoc>
  );
}
