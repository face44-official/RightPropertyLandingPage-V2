import Button from "@/view/components/button";
import ShowBookingHoc from "./show-booking-hoc";
import BookADemoButton from "@/view/components/book-a-demo-button";

/* Root */
export const AccessibilityRoot = ({
  children,
}: {
  children: React.ReactNode;
}) => <div className="lg:px-4">{children}</div>;

/* Header Information */
export const AccessibilityHeaderInformation = ({
  subHeading,
  title,
  description,
}: {
  subHeading: string;
  title: string;
  description: string;
}) => (
  <>
    <p
      className="
      mb-4 font-geist-mono font-normal uppercase text-squid-ink
      leading-[150%] tracking-[0.04em]
      text-[16px] lg:text-[14px]
      4k:[font-size:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
    "
    >
      {subHeading}
    </p>

    <h2
      className="
      mb-[2.5rem] lg:mb-6 font-general-sans font-semibold text-squid-ink
      tracking-[0em] leading-[100%]
      text-[64px] lg:text-[40px]
      4k:[font-size:clamp(4rem,calc(4rem+((100vw-2050px)/2000px)*4rem),8rem)]
      4k:[margin-bottom:clamp(2.5rem,calc(2.5rem+((100vw-2050px)/2000px)*2.5rem),5rem)]
    "
    >
      {title}
    </h2>

    <p
      className="
      mb-6 font-geist font-normal text-squid-ink
      tracking-[0em] leading-[140%]
      text-[20px] lg:text-[18px]
      4k:[font-size:clamp(1.25rem,calc(1.25rem+((100vw-2050px)/2000px)*1.25rem),2.5rem)]
      4k:[margin-bottom:clamp(1.5rem,calc(1.5rem+((100vw-2050px)/2000px)*1.5rem),3rem)]
    "
    >
      {description}
    </p>
  </>
);

/* Button */
export const AccessibilityButton = ({ className }: { className?: string }) => (
  <ShowBookingHoc>
    <div className={className}>
      <Button label="Book a Demo" variant="primaryLight" />
    </div>
  </ShowBookingHoc>
);

/* Items */
export const AccessibilityItems = ({
  items,
}: {
  items: { icon: React.ReactNode; title: string; description: string }[];
}) => (
  <div
    className="
    flex flex-col gap-12 w-[26.25rem] lg:w-full
    4k:[gap:clamp(3rem,calc(3rem+((100vw-2050px)/2000px)*3rem),6rem)]
    4k:[width:clamp(26.25rem,calc(26.25rem+((100vw-2050px)/2000px)*26.25rem),52.5rem)]
  "
  >
    {items.map((item, i) => (
      <div
        key={i}
        className="
        flex lg:flex-col items-start
        gap-8 lg:gap-3
        4k:[gap:clamp(2rem,calc(2rem+((100vw-2050px)/2000px)*2rem),4rem)]
      "
      >
        {item.icon}
        <div>
          <h3
            className="
            mb-1 font-geist font-medium text-squid-ink
            leading-[140%]
            text-[18px]
            4k:[font-size:clamp(1.125rem,calc(1.125rem+((100vw-2050px)/2000px)*1.125rem),2.25rem)]
          "
          >
            {item.title}
          </h3>
          <p
            className="
            font-geist font-normal text-squid-ink
            leading-[140%]
            text-[16px]
            4k:[font-size:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
          "
          >
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

/* Main Section */
export default function Accessibility({
  subHeading,
  title,
  description,
  items,
}: {
  subHeading: string;
  title: string;
  description: string;
  items: {
    icon: React.ReactNode;
    title: string | React.ReactNode;
    description: string;
  }[];
}) {
  const itemColors = ["#E4D6F6", "#FAD9BF"];

  return (
    <div
      className="
      bg-white p-[3.35rem] lg:p-[1.5rem]
      4k:[padding:clamp(3.35rem,calc(3.35rem+((100vw-2050px)/2000px)*3.35rem),6.7rem)]
    "
    >
      <p
        className="
        mb-5 lg:mb-4 font-geist-mono font-normal uppercase text-primary-black
        leading-[150%] tracking-[0.04em]
        text-14 lg:text-[14px]
        text-fluid-4k-14
        4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2050px)/2000px)*2rem),4rem)]
      "
      >
        {subHeading}
      </p>

      <h2
        className="
        mb-5 lg:mb-[1.5rem] font-general-sans font-semibold text-primary-black
        leading-[130%] tracking-[0em]
        text-40 lg:text-32
        text-fluid-4k-40
        4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2050px)/2000px)*2rem),4rem)]
      "
      >
        {title}
      </h2>

      <p
        className="
        mb-[2.5rem] lg:mb-[2rem]
        font-geist font-normal text-dark-gray
        leading-[140%] tracking-[0em]
        text-24
        text-2k-4k-24
        4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2050px)/2000px)*2rem),5rem)]
      "
      >
        {description}
      </p>

      <div>
        <BookADemoButton className="sm:justify-start sm:pl-[1.5rem]" />
      </div>
      <div className="mb-[3.75rem] lg:mb-[2rem] 4k:[margin-bottom:clamp(4rem,calc(4rem+((100vw-2050px)/2000px)*4rem),7rem)]"></div>

      {/* Items */}
      <div
        className="
        flex flex-col gap-[1.9375rem] lg:w-full
        4k:[gap:clamp(1.9375rem,calc(1.9375rem+((100vw-2050px)/2000px)*1.9375rem),3.875rem)]
      "
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col items-start
              gap-[2rem] lg:gap-[1.5rem]
              4k:[gap:clamp(2rem,calc(2rem+((100vw-2050px)/2000px)*2rem),5rem)]
              p-[2.5rem] lg:p-[1.5rem]
              4k:[padding:clamp(2rem,calc(2rem+((100vw-2050px)/2000px)*2rem),5rem)]
              rounded-[20px]
              4k:[border-radius:clamp(20px,calc(20px+((100vw-2050px)/2000px)*20px),40px)]
              hover:shadow-[0px_6px_13.2px_0px_#0000000F] transition-shadow duration-300
            "
            style={{ border: `1px solid ${itemColors[index]}` }}
          >
            <div
              className="
              flex items-center gap-8
              lg:flex-col lg:items-start lg:gap-4
              4k:[gap:clamp(2rem,calc(2rem+((100vw-2050px)/2000px)*2rem),4rem)]
            "
            >
              {item.icon}

              <h3
                className="
                mb-1 font-geist font-medium text-primary-black
                leading-[140%] tracking-[-0.02em]
                text-24 lg:text-20
                text-2k-4k-24
              "
              >
                {item.title}
              </h3>
            </div>

            <p
              className="
              font-geist font-normal text-primary-black leading-[140%]
              tracking-[-0.01em] pr-[1rem]
              text-18 lg:text-base
              text-2k-4k-18
              4k:[padding-right:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
            "
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
