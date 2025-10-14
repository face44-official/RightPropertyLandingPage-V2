import gRoad from "@/assets/v3/g_road.svg";
import SimpleSetupGradientPath from "./simple-setup-gradient-path";
import { useCallback, useEffect, useRef } from "react";
import {gsap} from "gsap";
import BinarySection, { BinaryBlockImage } from "../binary-section";
import softwareMinds from "@/assets/v3/software_minds.webp"
import { interpolateColor } from "@/lib/utils";
import purpleCheck from "@/assets/v3/purple_check.svg";
import SimpleSetupMobileGradient from "./simple-setup-mobile-gradient";
// Helper function to interpolate between two colors

export default function SimpleSetupSection() {
    const pathRef = useRef<SVGPathElement>(null)
    const gradientRef = useRef<HTMLDivElement>(null)
    const motionTimeline = useRef<GSAPTimeline>(null)
    const items: { icon: React.ReactNode, title: string, description: string }[] = [
        {
            icon: <img src={purpleCheck} alt="Checkmark icon for plug in content feature" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "Plug in your content",
            description: "Upload floor plans, renders, brochures, videos, and even 3D tour.",
        },
        {
            icon: <img src={purpleCheck} alt="Checkmark icon for team support feature" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "We’ve got you covered",
            description: "No visuals or assets? Our team can produce what’s needed.",
        },
        {
            icon: <img src={purpleCheck} alt="Checkmark icon for easy updates feature" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "Easy to update anytime",
            description: "Need to make changes?Just a few clicks. No waiting, no developers.",
        }
    ]
    const startMotionPath = useCallback(() => {
        if (gradientRef.current && pathRef.current) {
            // Stop any existing motion path animation
            if (motionTimeline.current) {
                motionTimeline.current.kill()
            }
            motionTimeline.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#simple-setup",
                    start: "center-=20% center",
                    end: 'center top',
                    // end: '+=' + ((window.innerHeight * 3) + 50),
                    scrub: 1,
                }
            });
            // Create a dummy object to animate along the path
            const follower = { x: 0, y: 0 }

            const moveAnim = gsap.to(follower, {
                ease: "power3.out",
                motionPath: {
                    path: pathRef.current,
                    offsetX: 200, // Container offset
                    offsetY: -180, // Container offset
                    autoRotate: true,
                    start: 1,
                    end: 0,
                },
                onUpdate: function () {
                    const progress = this.progress()
                    if (gradientRef.current) {
                        gradientRef.current.style.setProperty('left', `${follower.x}px`)
                        gradientRef.current.style.setProperty('top', `${follower.y}px`)

                        // Animate gradient colors based on scroll progress
                        const blueToGreenProgress = progress // 0 to 1
                        const startColor = interpolateColor('#DBE8FF', '#E7DFF2', blueToGreenProgress)
                        // Keep middle color opaque by interpolating to a light purple instead of transparent
                        const middleColor = interpolateColor('#E8F4FF', '#E7DFF2', blueToGreenProgress)

                        gradientRef.current.style.background = `radial-gradient(50% 50% at 50% 50%, ${startColor} 0%, ${middleColor} 25.96%, rgba(255, 255, 255, 0) 100%)`
                        console.log(progress)
                    }
                    /* gradient */

// position: absolute;
// width: 1425.84px;
// height: 1425.84px;
// left: 761.51px;
// top: calc(50% - 1425.84px/2 - 359.08px);

// background: radial-gradient(50% 50% at 50% 50%, #DBE8FF 0%, #E8F4FF 25.96%, rgba(255, 255, 255, 0) 100%);


// /* purple */

// position: absolute;
// width: 1445px;
// height: 1048.28px;
// left: 256.11px;
// top: calc(50% - 1048.28px/2 + 330.14px);

// background: radial-gradient(50% 50% at 50% 50%, #E7DFF2 0%, rgba(255, 255, 255, 0) 100%);


                }
            })
            const anim = gsap.to(gradientRef.current, {
                width: "1445px",
                height: "1048px",
            })
            motionTimeline.current.add(moveAnim, 0)
            motionTimeline.current.add(anim, 0)
        }
    }, [gradientRef, pathRef])
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add('(min-width: 769px)', () => {
            setTimeout(() => {
                startMotionPath()
            }, 300)
        })
    }, [startMotionPath])
    return (
        <section id="simple-setup" className="content-visibility-auto" aria-label="Simple setup process for Right Property platform">
            <div className="w-[100vw] h-[25.6875rem] overflow-hidden hidden lg:block">
                <div className="relative w-full max-w-[343px] mx-auto overflow-visible">
                    <div className="absolute -top-[3rem] -right-[3.75rem]">
                        <SimpleSetupMobileGradient />
                    </div>
                </div>

            </div>
            <div className="rp-container lg:h-auto! relative z-[-1]" style={{ height: "108.375rem" }}>

                <div className="flex justify-start gap-[8.4375rem] w-[41.875rem] lg:w-full">
                    <div className="absolute -top-[32.5rem] -left-[2.5rem] z-[-1]">
                        <div className=' w-[133.8125rem] h-[176rem]  lg:hidden '  >
                            <img className="w-full h-full" src={gRoad} alt="Right Property simple setup process visualization with animated path" loading="lazy" decoding="async" />
                        </div>
                    </div>
                    <div className="absolute top-[25rem] right-[12rem]" ref={(el) => {
                        if (el) {
                            const path = el.querySelector('path')
                            if (path) pathRef.current = path
                        }
                    }}>
                        <SimpleSetupGradientPath />
                    </div>
                    <div ref={gradientRef} style={{ background: "radial-gradient(50% 50% at 50% 50%, #DBE8FF 0%, #E8F4FF 25.96%, rgba(255, 255, 255, 0) 100%)" }} className="absolute -top-[12rem] -right-[31rem] w-[1425.84px] h-[1425.84px] lg:hidden z-[-2]"></div>

                    <div className="absolute left-[35rem] bottom-[16.875rem] lg:hidden">
                        <BinarySection subHeader="Did you know?" title="Built by software minds" description="No visuals or assets? Our team can produce what’s needed." image={<BinaryBlockImage path={softwareMinds} />} />
                    </div>
                    <div className="pt-[10rem] pl-[5rem] lg:p-4">
                        <p className="mb-8 lg:mb-[1.5rem] font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.02em] uppercase text-squid-ink">
                            {"Presentation"}
                        </p>
                        <h2 className="mb-8 lg:mb-[1.5rem] font-general-sans font-semibold text-40 lg:text-32 -tracking-[0.01em] leading-[130%] text-squid-ink">
                            {"Simple Setup"}
                        </h2>
                        <p className="mb-[5rem] lg:mb-[2rem] font-geist font-normal text-32 lg:text-24 -tracking-[0.01em] leading-[140%] text-squid-ink">
                            {"The process is straightforward, flexible, and built to get you moving fast."}
                        </p>

                        <div className="flex flex-col gap-8">
                            {items.map((item) => (
                                <div className="flex gap-6 lg:gap-[0.75rem] items-start">
                                    {item.icon}
                                    <div>
                                        <h3 className='font-geist font-medium text-28 lg:text-20 leading-[140%] text-squid-ink'>
                                            {item.title}
                                        </h3>
                                        <p className='font-geist font-normal text-24 lg:text-base leading-[140%] text-squid-ink'>
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="hidden lg:block py-[7.5rem] relative ">
                            <BinarySection subHeader="Did you know?" title="Built by software minds" description="No visuals or assets? Our team can produce what’s needed." image={<BinaryBlockImage path={softwareMinds} />} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

