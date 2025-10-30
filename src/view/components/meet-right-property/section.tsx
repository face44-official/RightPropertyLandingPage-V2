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
        pb-[19.75rem] pt-[13.75rem]
        flex gap-[3.25rem] items-start justify-center
        lg:gap-0 lg:flex-col lg:py-0 lg:pb-[0rem]
        4k:pb-[24rem] 4k:pt-[16rem] 4k:gap-[4rem]
      "
    >
      <div className="max-w-[53.75rem] lg:max-w-full 4k:max-w-[65rem]">
        <div className="pl-[1.25rem] flex flex-col justify-start min-h-[30rem] lg:p-4 lg:pt-0 lg:min-h-0 lg:mb-[7.5rem] 4k:pl-[2rem] 4k:min-h-[36rem]">
          <div className="mt-0 flex flex-col w-full lg:mt-3">
            
            {/* Subheading */}
            <h2 className="
              mb-[2rem] font-geist-mono font-normal uppercase text-squid-ink
              text-16 leading-[150%] tracking-[4%]
              lg:text-16 lg:mb-[1.25rem]
              text-2k-4k
            ">
              Meet Right Property
            </h2>

            {/* Main heading */}
            <div
              data-bg-color="#C4C4C4"
              data-fg-color="#000000"
              className="
                reveal-type font-general-sans font-medium text-[#D7D7D7] lg:text-black
                mb-[2.5rem] lg:mb-[2rem]
                text-40 leading-[120%] -tracking-[0.01em] lg:text-28
                4k:[font-size:clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*2.5rem),5rem)] 4k:leading-[130%] 4k:mb-[3rem]
                meet-right-property-text
              "
            >
              Property sales require more than just listings, 3D models and brochures – it's about
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
            <p className="
              mb-[2.5rem] font-geist font-normal text-32 leading-[140%] -tracking-[0.01em]
              lg:mb-[2rem] lg:leading-[130%] lg:text-24
              4k:[font-size:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)] 4k:mb-[3rem]
            ">
              Right Property gives you precisely what you need to make your sales and marketing efforts truly count.
            </p>

            {/* Footer heading */}
            <h3 className="
              font-geist-mono font-normal uppercase text-squid-ink text-16 tracking-[0.04em]
              leading-[150%] lg:text-14
              text-2k-4k
            ">
              Trusted by <span className="hidden lg:inline"><br/></span>
              <span className="font-semibold">forward-thinking developers</span>
            </h3>

          </div>
        </div>
      </div>
    </section>
  );
};

export const MeetRightProperty = withRevealText(MeetRightPropertySection);

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
      className={cn(circleNumber({ size, borderColor, bgColor }), className)}
      data-fill-color={fillColor}
      data-circle={circleNo}
    >
      {children}
    </span>
  );
};

export type CircleNumberVariants = Parameters<typeof circleNumber>[0];
