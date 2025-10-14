import BodyText from "../ui/body-text";
import { TitleMedium } from "../ui/title";
import spaceFullImage from "@/assets/v3/experience/experience_space_bg.webp";
export default function ExperienceSpaceSection() {
    return (
        <div className="bg-black  pb-[9.375rem] lg:pb-[3.75rem] relative z-[7]">
            <section id="experience-space" aria-label="Choose the experience">
                <div className="group relative mt-[7.5rem] lg:mt-[4rem] mb-[2.5rem] max-w-[1650px] mx-auto lg:max-w-full">
                    <div className="w-full h-auto overflow-hidden">
                        <img src={spaceFullImage} alt="Right Property Space 3D interactive experience interface" className="w-full h-auto group-hover:scale-105 transition-all duration-600 ease-in-out" />
                    </div>
                    <div className="absolute left-[5rem] top-[4rem] lg:top-6 lg:left-6">
                        <TitleMedium className="text-white">Space</TitleMedium>
                        <div className="font-geist text-[1.375rem] lg:text-[1rem] font-regular leading-[140%] text-white">Fast, efficient, and visually powerful</div>
                    </div>
                </div>
                <LayoutWrapper>
                    <BodyText className="w-[52.625rem] lg:w-full text-white">
                        Go deeper with real-time 3D site plans. Space delivers a fully interactive experience that makes your project tangible. It takes more time to set up, but it’s worth it—for the most memorable buyer journey you can offer.
                    </BodyText>
                </LayoutWrapper>
            </section>
        </div>

    )
}

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="rp-container px-[5rem] lg:px-4">
            {children}
        </div>
    )
}