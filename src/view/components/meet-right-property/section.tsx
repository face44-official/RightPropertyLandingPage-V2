import {gsap} from "gsap";
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
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
        <section ref={ref} id="meet-right-property" className="content-visibility-auto rp-container pb-[19.75rem] flex gap-[3.25rem] lg:gap-0 lg:flex-col items-start justify-center pt-[13.75rem]  lg:py-0" aria-label="Meet Right Property features">
            <div className='max-w-[53.75rem] lg:max-w-full'>
                <div className="pl-[1.25rem] flex flex-col justify-start  lg:p-4 lg:pt-0 lg:justify-start lg:h-auto min-h-[30rem] lg:min-h-0 lg:mb-[7.5rem]">
                    <div className="mt-[0] lg:mt-3 flex flex-col w-full lg:w-full">
                        <h2 className="mb-[2rem] font-geist-mono font-normal text-16 leading-[150%] tracking-[4%] uppercase text-squid-ink lg:text-16 lg:mb-[1.25rem]">
                            Meet Right Property
                        </h2>
                        <div
                            data-bg-color="#C4C4C4"
                            data-fg-color="#000000"
                            className="reveal-type mb-[2.5rem] font-general-sans font-medium text-40 leading-[120%] -tracking-[0.01em] text-[#D7D7D7] lg:text-black lg:text-28 lg:mb-[2rem] meet-right-property-text">
                            Property sales require more than just listings, 3D models and
                            brochures - it's about
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
                        <p className='mb-[2.5rem] lg:mb-[2rem] font-geist font-normal text-32 leading-[140%] -tracking-[0.01em] lg:leading-[130%]'>
                            Right Property gives you precisely what you need to make your sales and marketing efforts truly count.
                        </p>
                        <h3 className="font-geist-mono font-normal text-16 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                            Trusted by <span className="hidden lg:inline"><br />
                            </span> <span className="font-semibold">forward-thinking developers</span>
                        </h3>
                    </div>

                </div>
            </div>

        </section>
    );
}
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
