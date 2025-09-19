import ExperienceImmersiveSection from "../components/experience/experience-immersive-section";
import ExperienceSpaceSection from "../components/experience/experience-space-section";
import FastVisualEfficientSection from "../components/experience/fast-visual-efficient-section";
import ItsDifferentSection from "../components/experience/its-different-section";
import BodyText from "../components/ui/body-text";
import { TitleBig } from "../components/ui/title";

import ExperienceDesignedForEveryScreenSection from "../components/experience/experience-designed-for-every-screen-section";
import ExperienceSurfaceSection from "../components/experience/experience-surface-section";
import ExperienceFlippingCardsSection from "../components/experience/experience-flipping-cards-section";
import ExperienceCarousel from "../components/experience/experience-carousel";
import ScheduleADemoSection from "../components/schedule-a-demo/section";
import mobileHeroRoad1 from "@/assets/v3/experience/mobile_hero_road_1.png";
import mobileHeroRoad2 from "@/assets/v3/experience/mobile_hero_road_2.png";
import HeroSubPagesRoad from "../components/hero/hero-sub-pages-road";
import { ExperienceSplitTextSection } from "../components/experience/experience-splittext-section";
import ExperienceHeroVideos from "../components/experience/experience-hero-videos";
export default function ExperiencePage() {

    
    return <main>
        <HeroSubPagesRoad />
        <div id="experience-page" className="relative z-[20] pt-[14.56rem] lg:pt-[6rem] flex flex-col justify-center">

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

            <ExperienceHeroVideos />

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

        </div>
    </main>

}