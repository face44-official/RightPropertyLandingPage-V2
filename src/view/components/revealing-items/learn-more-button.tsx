export default function LearnMoreButton() {
  return (
    <button
      onClick={() => {}}
      className="
        relative cursor-pointer pointer-events-auto will-change-transform
        text-left transition-all duration-300 ease-in-out
        bg-[#BADEF3] hover:bg-darker-blue text-[#232323]
        font-geist font-semibold uppercase leading-[130%] tracking-[0%]
        px-[1.625rem] py-[1.34375rem] rounded-[65px] text-base

        4k:[padding-left:clamp(1.625rem,calc(1.625rem+((100vw-2050px)/2000px)*1.625rem),3.25rem)]
        4k:[padding-right:clamp(1.625rem,calc(1.625rem+((100vw-2050px)/2000px)*1.625rem),3.25rem)]
        4k:[padding-top:clamp(1.34375rem,calc(1.34375rem+((100vw-2050px)/2000px)*1.34375rem),2.6875rem)]
        4k:[padding-bottom:clamp(1.34375rem,calc(1.34375rem+((100vw-2050px)/2000px)*1.34375rem),2.6875rem)]
        4k:[border-radius:clamp(65px,calc(65px+((100vw-2050px)/2000px)*65px),130px)]
        4k:[font-size:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
      "
    >
      Learn more
    </button>
  );
}
