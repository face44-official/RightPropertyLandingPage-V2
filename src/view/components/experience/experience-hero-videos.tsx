import { useEffect, useRef } from "react";
import space from "@/assets/v3/experience/space.webm";
import surface from "@/assets/v3/experience/surface.webm";

import heroFrame from '@/assets/v3/hero-frame.webp';

import {gsap} from "gsap";
export default function ExperienceHeroVideos() {
    const leftImageRef = useRef<HTMLImageElement>(null);
    const rightImageRef = useRef<HTMLImageElement>(null);
    const $isAnimating = useRef(false);
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
    const setIsAnimating = (value: boolean) => {
        $isAnimating.current = value;
    }
    const highlightLeftImage = () => {
        if (window.innerWidth < 769) {
            return;
        }
     
        if (leftImageRef.current && !$isAnimating.current) {
            gsap.to(leftImageRef.current, {
                left: '50%',
                transform: 'translateX(-50%)',
                duration: 1,
                ease: "power2.inOut",
                zIndex: 10,
                scale: 1,
                onStart: () => {
                    setIsAnimating(true);
                },
                onComplete: () => {
                    setIsAnimating(false);
                }
            })
            gsap.set(rightImageRef.current, { zIndex: 0 })
        }
        if($isAnimating.current) {
            return;
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
        
        if (rightImageRef.current && !$isAnimating.current) {
            gsap.to(rightImageRef.current, {
                right: '50%',
                transform: 'translateX(50%)',
                duration: 1,
                scale: 1,
                ease: "power2.inOut",
                zIndex: 10,
                onStart: () => {
                    setIsAnimating(true);
                },
                onComplete: () => {
                    setIsAnimating(false);
                }
            })
            gsap.set(leftImageRef.current, { zIndex: 0 })

        }
        if($isAnimating.current) {
            return;
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
        if (window.innerWidth < 769 ) {
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
        console.log('rightOnMouseLeave');
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
    return (
        <div className="flex justify-center overflow-hidden mb-[14.5625rem] lg:mb-[15.3125rem]">
            <div className="rp-container max-w-[1680px] w-[100vw]  mb-[14.5625rem] min-h-[70vh] lg:min-h-[unset]  justify-center lg:flex-col">
                <div ref={leftImageRef} onMouseEnter={leftOnMouseEnter} onMouseLeave={leftOnMouseLeave} className="absolute lg:relative  w-[62.25rem] lg:w-full ">
                    <div className="relative">
                        <video
                            src={surface}
                            className={`absolute w-[55.4rem] lg:w-[88%] top-[5rem] lg:top-[13%] left-[3.5rem] lg:left-[6%] z-[-1]  h-auto  `}
                            width="1200"
                            height="800"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        />
                        <img src={heroFrame} fetchPriority='high' className="w-[62.21rem] max-w-[1200px] h-auto lg:max-w-full lg:w-auto " alt="Right Property Surface presentation interface frame" />
                        <div className="font-general-sans font-medium text-24 lg:text-base -tracking-[0.01em]  absolute bottom-[2rem] lg:bottom-0 left-1/2 -translate-x-1/2">
                            Surface
                        </div>
                    </div>

                </div>
                <div ref={rightImageRef} onMouseEnter={rightOnMouseEnter} onMouseLeave={rightOnMouseLeave} className="absolute lg:relative w-[62.25rem] lg:w-full">
                    <div className="relative">
                        <video
                            src={space}
                            className={`absolute w-[55.4rem] lg:w-[88%] top-[5rem] lg:top-[13%] left-[3.5rem] lg:left-[6%] z-[-1]  h-auto `}
                            width="1200"
                            height="800"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                        />
                        <img src={heroFrame} fetchPriority='high' className="w-[62.21rem] max-w-[1200px] h-auto lg:max-w-full lg:w-auto " alt="Right Property Space presentation interface frame" />

                        <div className="font-general-sans font-medium text-24 lg:text-base -tracking-[0.01em] absolute bottom-[2rem] lg:bottom-0 left-1/2 -translate-x-1/2">
                            Space
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}