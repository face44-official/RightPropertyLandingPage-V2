import ExperienceImmersiveSection from "../components/experience/experience-immersive-section";
import ExperienceSpaceSection from "../components/experience/experience-space-section";
import ExperienceSplitTextSection from "../components/experience/experience-splittext-section";
import FastVisualEfficientSection from "../components/experience/fast-visual-efficient-section";
import ItsDifferentSection from "../components/experience/its-different-section";
import BodyText from "../components/ui/body-text";
import { TitleBig } from "../components/ui/title";
import spaceDesktop from "@/assets/v3/experience/space_screen_1.png";
import surfaceDesktop from "@/assets/v3/experience/surface_screen_1.png";
import ExperienceDesignedForEveryScreenSection from "../components/experience/experience-designed-for-every-screen-section";
import ExperienceSurfaceSection from "../components/experience/experience-surface-section";
import ExperienceFlippingCardsSection from "../components/experience/experience-flipping-cards-section";
import ExperienceCarousel from "../components/experience/experience-carousel";
import ScheduleADemoSection from "../components/schedule-a-demo/section";
import mobileHeroRoad1 from "@/assets/v3/experience/mobile_hero_road_1.png";
import mobileHeroRoad2 from "@/assets/v3/experience/mobile_hero_road_2.png";
export default function ExperiencePage() {
    return <main id="experience-page" className="relative z-[20] pt-[14.56rem] lg:pt-[6rem] flex flex-col justify-center">
        <img src={mobileHeroRoad1} alt="experience bg" className="absolute top-[14rem] -right-[3.25rem] w-[15rem] h-auto hidden lg:block" />
        <img src={mobileHeroRoad2} alt="experience bg" className="absolute top-[50.9375rem] -left-[3.25rem] w-[15rem] h-[15rem] object-cover hidden lg:block" />
        <div className="flex flex-col items-center justify-center">
            <TitleBig className="mb-[2rem] flex flex-col items-center justify-center">
                <div>Present Smarter.</div>
                <div>Your Way.</div>

            </TitleBig>
            <BodyText className="w-[46.75rem] lg:w-[21.4375rem] lg:text-center font-normal">
                Showcase your project with impact—through Surface or Space, built for modern property sales.
            </BodyText>

        </div>
        <div className="flex mb-[14.5625rem] max-w-[100vw] overflow-hidden justify-center lg:flex-col">
            <div className="-mr-[2.5rem] lg:-mr-0">
                <img src={spaceDesktop} alt="space" className="w-[62.25rem] lg:w-full h-auto" />
            </div>
            <div className="-ml-[2.5rem] lg:-ml-0">
                <img src={surfaceDesktop} alt="space" className="w-[62.25rem] lg:w-full h-auto" />
            </div>
        </div>
        <ExperienceSplitTextSection />
        <ItsDifferentSection />
        <ExperienceSurfaceSection />
        <FastVisualEfficientSection />
     

        <ExperienceSpaceSection />
        <ExperienceImmersiveSection />
        <ExperienceDesignedForEveryScreenSection />

        <ExperienceFlippingCardsSection />
        <ExperienceCarousel />
        <ScheduleADemoSection />

    </main>
}