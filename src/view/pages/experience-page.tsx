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
import HeroSubPagesRoad from "../components/hero/hero-sub-pages-road";
import { ExperienceSplitTextSection } from "../components/experience/experience-splittext-section";
import ExperienceHeroVideos from "../components/experience/experience-hero-videos";
import HeroSubPagesMobileRoad from "../components/hero/hero-sub-pages-mobile-road";
export default function ExperiencePage() {


    return <main className="relative z-[10]">
        <HeroSubPagesRoad />
        <HeroSubPagesMobileRoad />
        <div id="experience-page" className="relative z-[20] pt-[14.56rem] lg:pt-[6rem] flex flex-col justify-center">

            <div className="flex flex-col items-center justify-center">
                <TitleBig className="mb-[2rem] flex flex-col items-center justify-center">
                    <div>Present Smarter.</div>
                    <div>Your Way.</div>

                </TitleBig>
                <BodyText className="w-[46.75rem] lg:w-[21.4375rem] text-center font-normal">
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