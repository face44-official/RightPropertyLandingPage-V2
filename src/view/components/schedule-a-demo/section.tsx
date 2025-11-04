import BookADemoButton from "../book-a-demo-button";
import representive from "@/assets/v3/representive.webp";
import footerDesktopBg from "@/assets/v3/common/footer_desktop_bg.svg";
import footerMobileBg from "@/assets/v3/common/footer_mobile_bg.svg";

export default function ScheduleADemoSection({
  displayGradient = true,
}: {
  displayGradient?: boolean;
}) {
  return (
    <section
      className="
        relative flex items-center justify-center
        lg:h-auto
        py-[18rem] xl:py-[14rem] px-[5rem]
        4k:[padding-block:clamp(15rem,calc(15rem+((100vw-2000px)/2000px)*15rem),30rem)]
        4k:[padding-inline:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),10rem)]
        lg:pt-[3.75rem] lg:px-4
        max-w-[100vw] overflow-hidden
      "
      aria-label="Schedule a demo meeting with Right Property team"
    >
      <div
        className="
          relative rp-container bg-white overflow-hidden
          w-[63.1875rem] lg:w-full
          p-[3.75rem] lg:pt-[1rem] lg:pb-[1.5rem] lg:px-0
          4k:[width:clamp(63.1875rem,calc(63.1875rem+((100vw-2000px)/2000px)*63.1875rem),126.375rem)]
          4k:[padding:clamp(3.75rem,calc(3.75rem+((100vw-2000px)/2000px)*3.75rem),7.5rem)]
        "
        style={{
          boxShadow: "3px 32px 58.5px rgba(134, 101, 177, 0.1)",
        }}
      >
        {/* Representative image */}
        <img
          src={representive}
          alt="Representative"
          className="
            absolute top-[2.3125rem] -right-[1rem]
            w-[18.625rem] h-auto object-contain
            lg:w-[13.75rem] lg:static lg:scale-x-[-1] lg:top-0
            4k:[top:clamp(2.3125rem,calc(2.3125rem+((100vw-2000px)/2000px)*2.3125rem),4.625rem)]
            4k:[right:clamp(-1rem,calc(-1rem-((100vw-2000px)/2000px)*2rem),-3rem)]
            4k:[width:clamp(18.625rem,calc(18.625rem+((100vw-2000px)/2000px)*18.625rem),37.25rem)]
          "
        />

        {/* Text content */}
        <div className="inline-block lg:p-[1rem]">
          <p
            className="
              mb-8 lg:mb-[1rem]
              font-geist font-medium uppercase tracking-[0.02em]
              text-base lg:text-14
              text-2k-4k
              4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)]
              leading-[150%] lg:pt-[1rem]
            "
          >
            Let's take a seat
          </p>

          <h3
            className="
              mb-8 lg:mb-[0.75rem]
              font-general-sans font-semibold text-[#232323]
              text-40 lg:text-40
              text-fluid-4k-40
              4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)]
              leading-[130%] tracking-[0.01em]
            "
          >
            Schedule
            <div className="hidden lg:inline">
              <br />
            </div>{" "}
            a demo meeting
          </h3>

          <p
            className="
              mb-[3.125rem] lg:mb-[2rem]
              font-geist font-normal
              text-32 lg:text-24
              text-fluid-4k-32
              4k:[margin-bottom:clamp(3.125rem,calc(3.125rem+((100vw-2000px)/2000px)*3.125rem),6.25rem)]
              leading-[140%] tracking-[0]
              w-[37.5rem] lg:w-full
              4k:[width:clamp(37.5rem,calc(37.5rem+((100vw-2000px)/2000px)*37.5rem),75rem)]
            "
          >
            We'd be happy to meet and discuss how we can transform your business.
          </p>

          <BookADemoButton />
        </div>
      </div>

      {/* Background gradients */}
      {displayGradient && (
        <img
          className="lg:hidden absolute z-[-1] w-[73%] h-auto"
          src={footerDesktopBg}
          alt="Footer Desktop Background"
        />
      )}

      {displayGradient && (
        <div className="hidden lg:block absolute z-[-1] w-[100vw] h-auto">
          <img
            className="w-full h-auto"
            src={footerMobileBg}
            alt="Footer Mobile Background"
          />
        </div>
      )}
    </section>
  );
}
