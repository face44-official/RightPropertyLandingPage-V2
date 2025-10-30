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
        min-h-[100vh] lg:h-auto
        py-[7.5rem] px-[5rem]
        4k:py-[10rem] 4k:px-[10rem] 4k:min-h-[100vh]
        lg:pt-[3.75rem] lg:px-4
        max-w-[100vw] overflow-hidden
      "
      aria-label='Schedule a demo meeting with Right Property team'
    >
      <div
        className="
          relative rp-container bg-white overflow-hidden
          w-[1011px] lg:w-full
          p-[3.75rem] lg:pt-[1rem] lg:pb-[1.5rem] lg:px-0
          4k:w-[1280px] 4k:p-[5rem]
        "
        style={{
          boxShadow: "3px 32px 58.5px rgba(134, 101, 177, 0.1)",
        }}
      >
        {/* Representative image */}
        <img
          src={representive}
          alt='Representative'
          className="
            absolute top-[2.3125rem] -right-[1rem]
            w-[18.625rem] h-auto object-contain
            lg:w-[13.75rem] lg:static lg:scale-x-[-1] lg:top-0
            4k:w-[25rem] 4k:top-[3rem] 4k:-right-[3rem]
          "
        />

        {/* Text content */}
        <div className="inline-block lg:p-[1rem]">
          <p
            className="
              mb-8 lg:mb-[1rem]
              font-geist font-medium uppercase tracking-[0.02em]
              text-base lg:text-14 4k:text-[1.25rem]
              leading-[150%] lg:pt-[1rem]
            "
          >
            Let's take a seat
          </p>

          <h3
            className="
              mb-8 lg:mb-[0.75rem]
              font-general-sans font-semibold
              text-40 lg:text-40
              4k:text-[clamp(2.75rem,3.5vw,4.5rem)]
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
              4k:text-[clamp(1.75rem,2vw,2.25rem)]
              leading-[140%] tracking-[0]
              w-[37.5rem] lg:w-full 4k:w-[50rem]
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
          className="lg:hidden absolute z-[-1] w-full h-auto"
          src={footerDesktopBg}
          alt='Footer Desktop Background'
        />
      )}

      {displayGradient && (
        <div className="hidden lg:block absolute z-[-1] w-[100vw] h-auto">
          <img
            className="w-full h-auto"
            src={footerMobileBg}
            alt='Footer Mobile Background'
          />
        </div>
      )}
    </section>
  );
}
