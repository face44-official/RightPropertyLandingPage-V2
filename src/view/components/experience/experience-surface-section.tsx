import BodyText from "../ui/body-text";
import Caption from "../ui/caption";
import { TitleMedium } from "../ui/title";
import surfaceFullImage from "@/assets/v3/experience/surface_full.png";
export default function ExperienceSurfaceSection() {
    return (
        <section id="experience-surface" className=" !mb-[20.375rem] lg:!mb-[3.75rem]" aria-label="Choose the experience">
            <LayoutWrapper>
                <Caption className=" uppercase mb-[2rem]">choose the presentation experience</Caption>
                <TitleMedium className="w-[40.8125rem] lg:w-full mb-[2.5rem]">Right Property offers two powerful ways to present</TitleMedium>
            </LayoutWrapper>

            <div className="group relative mb-[2.5rem] max-w-[1650px] mx-auto lg:max-w-full">
                <div className="w-full h-auto overflow-hidden">
                    <img src={surfaceFullImage} alt="surface full" className="w-full h-auto group-hover:scale-105 transition-all duration-600 ease-in-out" />
                </div>
                <div className="absolute left-[5rem] top-[4rem] lg:top-6 lg:left-6">
                    <TitleMedium>Surface</TitleMedium>
                    <div className="font-geist text-[1.375rem]  lg:text-[1rem] font-regular leading-[140%] text-[#434343]">Fast, efficient, and visually powerful</div>
                </div>
            </div>
            <LayoutWrapper>
                <BodyText className="rp-container w-[52.625rem] lg:w-full ">
                    Start presenting in as little as 48 hours. Surface uses your existing 2D materials—renders, brochures, floor plans, availability lists—and gives you a dynamic, non-linear interface built for big screens and fast sales cycles.
                </BodyText>
            </LayoutWrapper>
        </section>
    )
}

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="rp-container px-[5rem] lg:px-4">
            {children}
        </div>
    )
}