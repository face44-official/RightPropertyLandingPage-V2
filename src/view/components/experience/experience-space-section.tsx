import BodyText from "../ui/body-text";
import { TitleMedium } from "../ui/title";
import spaceFullImage from "@/assets/v3/experience/experience_space_bg.png";
export default function ExperienceSpaceSection() {
    return (
        <div className="bg-black  pb-[9.375rem] lg:pb-[3.75rem]">
            <section id="experience-space" className="rp-container lg:px-4" aria-label="Choose the experience">
                <div className="relative mt-[7.5rem] lg:mt-[4rem] mb-[2.5rem]">
                    <img src={spaceFullImage} alt="surface full" className="w-full h-auto" />
                    <div className="absolute left-[5rem] top-[4rem] lg:top-6 lg:left-6">
                        <TitleMedium className="text-white">Space</TitleMedium>
                        <div className="font-geist text-[1.375rem] lg:text-[1rem] font-regular leading-[140%] text-white">Fast, efficient, and visually powerful</div>
                    </div>
                </div>
                <BodyText className="w-[52.625rem] lg:w-full text-white">
                    Go deeper with real-time 3D site plans. Space delivers a fully interactive experience that makes your project tangible. It takes more time to set up, but it’s worth it—for the most memorable buyer journey you can offer.
                </BodyText>
            </section>
        </div>

    )
}