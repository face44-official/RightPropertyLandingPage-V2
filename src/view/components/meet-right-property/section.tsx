import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { withRevealText } from "../common/with-reveal-text";
import type { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { circleNumber } from "./circle-variants";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface Props {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

const MeetRightPropertySection = ({ ref }: Props) => {
  return (
    <section
      ref={ref}
      id="meet-right-property"
      aria-label="Meet Right Property features"
      className="
        content-visibility-auto rp-container
        pb-[12.75rem] pt-[10.75rem] 2xl:pt-[10rem] 2xl:pb-[10.75rem]
        flex gap-[3.25rem] items-start justify-center
        lg:gap-0 lg:flex-col lg:py-0 lg:pb-[0rem]
        4k:[padding-bottom:clamp(7.75rem,calc(7.75rem+((100vw-2050px)/2000px)*7.75rem),14.5rem)]
        4k:[padding-top:clamp(7.75rem,calc(7.75rem+((100vw-2050px)/2000px)*7.75rem),14.5rem)]
        4k:[gap:clamp(2.25rem,calc(2.25rem+((100vw-2050px)/2000px)*2.25rem),4.5rem)]
      "
    >
      <div className="max-w-[60rem] lg:max-w-full 4k:[max-width:clamp(60rem,calc(60rem+((100vw-2050px)/2000px)*60rem),107.5rem)]">
        <div className="pl-[1.25rem] flex flex-col justify-start min-h-[30rem] lg:p-4 lg:pt-0 lg:min-h-0 lg:mb-[7.5rem] 4k:[padding-left:clamp(1.25rem,calc(1.25rem+((100vw-2050px)/2000px)*1.25rem),2.5rem)] 4k:[min-height:clamp(30rem,calc(30rem+((100vw-2050px)/2000px)*30rem),60rem)]">
          <div className="mt-0 flex flex-col w-full lg:mt-3">
            {/* Subheading */}
            <h2
              className="
                mb-[2rem] font-geist-mono font-normal uppercase text-squid-ink
                text-14 leading-[150%] tracking-[0.04em]
                lg:text-[14px] lg:mb-[1.25rem]
                text-fluid-4k-14
                4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2050px)/2000px)*2rem),4rem)]
              "
            >
              Meet Right Property
            </h2>

            {/* Main heading */}
            <div
              data-bg-color="#CBDDEA"
              data-fg-color="#000000"
              className="
                reveal-type font-general-sans font-medium text-[#D7D7D7] lg:text-black
                mb-[2rem] lg:mb-[2rem]
                text-40 leading-[120%] -tracking-[0.01em]
                lg:text-[28px]
                text-fluid-4k-40
                4k:[line-height:clamp(120%,calc(120%+((100vw-2050px)/2000px)*10%),130%)]
                4k:[margin-bottom:clamp(2.5rem,calc(2.5rem+((100vw-2050px)/2000px)*2.5rem),5rem)]
              "
            >
              Property sales require more than just listings, 3D models and
              brochures – it's about
              <span className="block lg:hidden"></span>
              <CircleNumber
                borderColor="lightPurple"
                className="circle-fill mr-2 lg:mx-2 mb-1"
                fillColor="#E4D6F6"
                circleNo="1"
              >
                1
              </CircleNumber>
              connecting with buyers,
              <CircleNumber
                borderColor="lightOrange"
                className="circle-fill mx-2 mb-1"
                fillColor="#FAD9BF"
                circleNo="2"
              >
                2
              </CircleNumber>
              tracking every opportunity, and
              <CircleNumber
                borderColor="lightGreen"
                className="circle-fill mx-2 mb-1"
                fillColor="#C0E3D5"
                circleNo="3"
              >
                3
              </CircleNumber>
              turning interest into action.
            </div>

            {/* Paragraph */}
            <p
              className="
                mb-[2rem] font-geist font-normal text-24 leading-[140%] text-dark-gray -tracking-[0.01em]
                lg:mb-[2rem] lg:leading-[130%] lg:text-18
                text-2k-4k-24
                4k:[margin-bottom:clamp(2.5rem,calc(2.5rem+((100vw-2050px)/2000px)*2.5rem),5rem)]
              "
            >
              Right Property gives you precisely what you need to make your
              sales and marketing efforts truly count.
            </p>

            {/* Footer heading */}
            <h3
              className="
                font-geist-mono font-normal uppercase text-squid-ink
                text-14 tracking-[0.04em] leading-[150%]
                lg:text-[14px]
                text-fluid-4k-14
                4k:[line-height:clamp(150%,calc(150%+((100vw-2050px)/2000px)*10%),160%)]
              "
            >
              Trusted by{" "}
              <span className="hidden lg:inline">
                <br />
              </span>
              <span className="font-semibold">forward-thinking developers</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MeetRightProperty = withRevealText(MeetRightPropertySection);

/* -------------------------------------------------------------------------- */
/*                             CIRCLE NUMBER 4K FIX                           */
/* -------------------------------------------------------------------------- */

type CircleNumberProps = {
  children: ReactNode;
  className?: string;
  fillColor?: string;
  circleNo?: string;
} & CircleNumberVariants;

export const CircleNumber: FC<CircleNumberProps> = ({
  children,
  className,
  size,
  borderColor,
  bgColor,
  fillColor,
  circleNo,
}) => {
  return (
    <span
      className={cn(
        circleNumber({ size, borderColor, bgColor }),
        `
          inline-flex items-center justify-center rounded-full
          border-[2px] w-[1.875rem] h-[1.875rem]
          font-geist font-medium text-[1rem] text-black
          leading-[1]
          4k:[width:clamp(1.875rem,calc(1.875rem+((100vw-2050px)/2000px)*1.875rem),3.75rem)]
          4k:[height:clamp(1.875rem,calc(1.875rem+((100vw-2050px)/2000px)*1.875rem),3.75rem)]
          4k:[border-width:clamp(2px,calc(2px+((100vw-2050px)/2000px)*2px),4px)]
          4k:[font-size:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
        `,
        className
      )}
      data-fill-color={fillColor}
      data-circle={circleNo}
      style={{
        backgroundColor: fillColor ?? "transparent",
      }}
    >
      {children}
    </span>
  );
};

export type CircleNumberVariants = Parameters<typeof circleNumber>[0];
