import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SalesDynamicGradient() {
    const gradientRef = useRef<HTMLDivElement>(null)
    const pathRef = useRef<SVGPathElement>(null)
    const motionTimeline = useRef<gsap.core.Timeline | null>(null)
    const startMotionPath = useCallback(() => {
        if (gradientRef.current && pathRef.current) {
            // Stop any existing motion path animation
            if (motionTimeline.current) {
                motionTimeline.current.kill()
            }
            motionTimeline.current = gsap.timeline({
                scrollTrigger: {
                    trigger: pathRef.current,
                    start: "top+=10% center",
                    end: 'bottom center',
                    // end: '+=' + ((window.innerHeight * 3) + 50),
                    scrub: 1,
                },
                defaults: {
                    duration: 100
                },

            })
            motionTimeline.current.to(gradientRef.current, {
                ease: "none",
                motionPath: {
                    path: pathRef.current,
                    align: pathRef.current,
                    alignOrigin: [0.5, 0.5],
                    start: 1,
                    end: 0,
                },
                duration: 1000
            })

            gsap.to(gradientRef.current, {
                ease: "none",
                immediateRender: false,
                "--gradient-r": 231,
                "--gradient-g": 223,
                "--gradient-b": 242,
                scrollTrigger: {
                    trigger: pathRef.current,
                    start: "bottom-=25% center",
                    end: 'bottom center',
                    // end: '+=' + ((window.innerHeight * 3) + 50),
                    scrub: true,
                },
            })


        }
    }, [gradientRef, pathRef])
    useEffect(() => {
        const mm = gsap.matchMedia();
        // gsap.set(gradientRef.current, {
        //     alpha: 0,
        // })
        mm.add('(min-width: 769px)', () => {
            setTimeout(() => {
                startMotionPath()
            }, 300)
        })
    }, [startMotionPath])
    return (
        <div id='sales-dynamic-gradient'>

            <svg id='path-element' className="absolute z-[-1] top-[269.625rem] left-[41%] w-[33.5rem] h-auto" viewBox="0 0 536 3932" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef} d="M86.9999 3931.5C267.497 3600.07 232.54 3323.9 9.49953 3031C-36.208 2523.74 96.1066 2314.39 396.5 1950.5C696.893 1586.61 475.197 656.27 54.4998 0.5"  />
            </svg>
            <div 
                ref={gradientRef} 
                className="will-change-transform absolute w-[1441px] h-[1441px] top-[269.625rem] left-[41%] -translate-x-1/2 -translate-y-1/2" 
                style={{ 
                    // @ts-expect-error --gradient-r, --gradient-g, --gradient-b are custom properties
                    '--gradient-r': 197,
                    '--gradient-g': 230,
                    '--gradient-b': 255,
                    backgroundImage: "radial-gradient(50% 50% at 50% 50%, rgba(var(--gradient-r), var(--gradient-g), var(--gradient-b), 0.72) 0%, rgba(var(--gradient-r), var(--gradient-g), var(--gradient-b), 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)" 
                }}>

            </div>
        </div>
    )
}

