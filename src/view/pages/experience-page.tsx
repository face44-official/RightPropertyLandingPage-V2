import ExperienceImmersiveSection from "../components/experience/experience-immersive-section";
import ExperienceSpaceSection from "../components/experience/experience-space-section";
import ExperienceSplitTextSection from "../components/experience/experience-splittext-section";
import FastVisualEfficientSection from "../components/experience/fast-visual-efficient-section";
import ItsDifferentSection from "../components/experience/its-different-section";
import BodyText from "../components/ui/body-text";
import { TitleBig } from "../components/ui/title";
import spaceDesktop from "@/assets/v3/experience/presentation_hero_space.png";
import surfaceDesktop from "@/assets/v3/experience/surface_screen_1.png";
import ExperienceDesignedForEveryScreenSection from "../components/experience/experience-designed-for-every-screen-section";
import ExperienceSurfaceSection from "../components/experience/experience-surface-section";
import ExperienceFlippingCardsSection from "../components/experience/experience-flipping-cards-section";
import ExperienceCarousel from "../components/experience/experience-carousel";
import ScheduleADemoSection from "../components/schedule-a-demo/section";
import mobileHeroRoad1 from "@/assets/v3/experience/mobile_hero_road_1.png";
import mobileHeroRoad2 from "@/assets/v3/experience/mobile_hero_road_2.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroSubPagesRoad from "../components/hero/hero-sub-pages-road";
export default function ExperiencePage() {
    const leftImageRef = useRef<HTMLImageElement>(null);
    const rightImageRef = useRef<HTMLImageElement>(null);
    const setInitialPositions = () => {
        if (window.innerWidth < 769) {
            return;
        }
        if (leftImageRef.current && rightImageRef.current) {
            gsap.set(leftImageRef.current, { left: '-7.8125rem' });
            gsap.set(rightImageRef.current, { right: '-7.8125rem' });
        }
    }
    useEffect(() => {
        setInitialPositions();
    }, []);
    const highlightLeftImage = () => {
        if (window.innerWidth < 769) {
            return;
        }
        if (leftImageRef.current) {
            gsap.to(leftImageRef.current, {
                left: '50%',
                transform: 'translateX(-50%)',
                duration: 1,
                ease: "power2.inOut",
                zIndex: 10,
                scale: 1.15,
            })
            gsap.set(rightImageRef.current, { zIndex: 0 })
        }
        gsap.to(rightImageRef.current, {
            scale: 0.65,
            duration: 1,
            ease: "power2.inOut",
            zIndex: 0,
        })
    }
    const highlightRightImage = () => {
        if (window.innerWidth < 769) {
            return;
        }
        if (rightImageRef.current) {
            gsap.to(rightImageRef.current, {
                right: '50%',
                transform: 'translateX(50%)',
                duration: 1,
                scale: 1.15,
                ease: "power2.inOut",
                zIndex: 10,
            })
            gsap.set(leftImageRef.current, { zIndex: 0 })

        }
        gsap.to(leftImageRef.current, {
            scale: 0.65,
            duration: 1,
            ease: "power2.inOut",
            zIndex: 0,
        })
    }
    const leftOnMouseEnter = () => {
        if (window.innerWidth < 769) {
            return;
        }
        highlightLeftImage();
    }
    const leftOnMouseLeave = () => {
        if (window.innerWidth < 769) {
            return;
        }
        gsap.to(leftImageRef.current, {
            left: '-7.8125rem',
            transform: 'translateX(0%)',
            duration: 1,
            ease: "power2.inOut",
            zIndex: 0,
            scale: 1,
        })
        gsap.to(rightImageRef.current, {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
            zIndex: 0,
        })
    }
    const rightOnMouseLeave = () => {
        if (window.innerWidth < 769) {
            return;
        }
        gsap.to(rightImageRef.current, {
            right: '-7.8125rem',
            transform: 'translateX(0%)',
            duration: 1,
            ease: "power2.inOut",
            zIndex: 0,
            scale: 1,
        })
        gsap.to(leftImageRef.current, {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
            zIndex: 0,
        })
    }
    const rightOnMouseEnter = () => {
        if (window.innerWidth < 769) {
            return;
        }
        highlightRightImage();
    }
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

            <div className="flex justify-center overflow-hidden mb-[14.5625rem]">
                <div className="rp-container max-w-[1680px] w-[100vw]  mb-[14.5625rem] min-h-[70vh]  justify-center lg:flex-col">
                    <div ref={leftImageRef} onMouseEnter={leftOnMouseEnter} onMouseLeave={leftOnMouseLeave} className="absolute lg:relative  w-[62.25rem] lg:w-full ">
                        <img className="w-full h-auto lg:w-full" src={surfaceDesktop} alt="space" />
                        <div className="font-general-sans font-medium text-24 lg:text-base -tracking-[0.01em]  absolute bottom-[2rem] lg:bottom-0 left-1/2 -translate-x-1/2">
                            Surface
                        </div>
                    </div>
                    <div ref={rightImageRef} onMouseEnter={rightOnMouseEnter} onMouseLeave={rightOnMouseLeave} className="absolute lg:relative w-[62.25rem] lg:w-full">
                        <img src={spaceDesktop} alt="space" className="w-full h-auto lg:w-full" />
                        <div className="font-general-sans font-medium text-24 lg:text-base -tracking-[0.01em] absolute bottom-[2rem] lg:bottom-0 left-1/2 -translate-x-1/2">
                            Space
                        </div>
                    </div>

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

        </div>
    </main>

}