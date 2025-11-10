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
    py-[11rem] xl:py-[6rem] px-[5rem]
    4k:[padding-block:clamp(9rem,calc(9rem+((100vw-2050px)/2000px)*9rem),18rem)]
    4k:[padding-inline:clamp(9rem,calc(9rem+((100vw-2050px)/2000px)*9rem),18rem)]
    lg:pt-[3.75rem] lg:px-4
    max-w-[100vw] overflow-hidden
    transition-all duration-500
    before:content-[''] before:absolute before:inset-0 before:z-[1]
    before:pointer-events-none
    before:opacity-100
    before:transition-opacity before:duration-700
    before:bg-[radial-gradient(50%_50%_at_50%_50%,#E7DFF2_0%,rgba(255,255,255,0)_100%)]
    before:mix-blend-multiply
  "
      aria-label="Schedule a demo meeting with Right Property team"
    >
      <div
        className="
      relative rp-container bg-white overflow-hidden z-[2]
      w-[54.1875rem] lg:w-full
      p-[2.5rem] lg:pt-[1rem] lg:pb-[1.5rem] lg:px-0
      4k:[width:clamp(54.1875rem,calc(54.1875rem+((100vw-2050px)/2000px)*54.1875rem),108.375rem)]
      4k:[padding:clamp(2.5rem,calc(2.5rem+((100vw-2050px)/2000px)*2.5rem),5rem)]
      transition-all duration-500
      hover:shadow-[3px_51px_109.4px_29px_#7E669D4F]
    "
      >
        {/* Representative image */}
        <img
          src={representive}
          alt="Representative"
          className="
            absolute top-[2.3125rem] -right-[1rem]
            w-[16.25rem] h-auto object-contain
            lg:w-[13.75rem] lg:static lg:scale-x-[-1] lg:top-0
            4k:[top:clamp(2.3125rem,calc(2.3125rem+((100vw-2050px)/2000px)*2.3125rem),4.625rem)]
            4k:[right:clamp(-1rem,calc(-1rem-((100vw-2050px)/2000px)*2rem),-3rem)]
            4k:[width:clamp(16.25rem,calc(16.25rem+((100vw-2050px)/2000px)*16.25rem),37.25rem)]
          "
        />

        {/* Text content */}
        <div className="inline-block lg:p-[0.75rem]">
          <p
            className="
              mb-4 lg:mb-[1rem]
              font-geist font-medium uppercase tracking-[0.02em]
              text-14
              text-fluid-4k-14
              4k:[margin-bottom:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
              leading-[150%] lg:pt-[1rem]
            "
          >
            Let's take a seat
          </p>

          <h3
            className="
              mb-4 lg:mb-[0.75rem]
              font-general-sans font-semibold text-[#232323]
              text-40 lg:text-40
              text-fluid-4k-40
              4k:[margin-bottom:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
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
              mb-[2rem] lg:mb-[1rem]
              font-geist font-normal
              text-18
              text-2k-4k-18
              4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2050px)/2000px)*2rem),4rem)]
              leading-[140%] tracking-[0]
              w-[37.5rem] lg:w-full
              4k:[width:clamp(37.5rem,calc(37.5rem+((100vw-2050px)/2000px)*37.5rem),75rem)]
            "
          >
            We'd be happy to meet and discuss how we can transform your
            business.
          </p>

          <BookADemoButton className="sm:justify-start sm:pl-[1.5rem]" />
        </div>
      </div>

      {/* Background gradients */}
      {displayGradient && (
        <img
          className="lg:hidden absolute z-[-1] w-[50%] h-auto"
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
