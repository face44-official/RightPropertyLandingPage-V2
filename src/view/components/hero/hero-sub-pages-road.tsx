import { useEffect } from "react";
import HeroSubPageHighlightPath from "./hero-sub-page-highlight-path";
import { useMotionPath } from "@/lib/useMotionPath";
import { cn } from "@/lib/utils";

export default function HeroSubPagesRoad({svgPath = '/presentation_roads.svg',svgClassName}: {svgPath?: string,svgClassName?: string}) {

    const { divRef, pathRef, initializeMotionPath } = useMotionPath({
        trigger: ".trigger-road",
        startOffset: "top top",
        endOffset: "+=100%",
        scrollScrub: 1,
        markers: false,
        maskRadius: 350
    })
    useEffect(() => {
        initializeMotionPath()
    }, [])
    // useEffect(() => {
    //     if (divRef.current) {
    //         divRef.current.style.setProperty('--mask-x', '46.0456rem')
    //         divRef.current.style.setProperty('--mask-y', '5.6956rem')
    //     }
    // }, [])

    // const handleMouseMove = useCallback((e: MouseEvent) => {
    //     if (divRef.current) {
    //         const { left, top } = divRef.current.getBoundingClientRect()
    //         const x = e.clientX - left
    //         const y = e.clientY - top
    //         divRef.current.style.setProperty('--mask-x', `${x}px`)
    //         divRef.current.style.setProperty('--mask-y', `${y}px`)
    //     }
    // }, [])

    // useEffect(() => {



    //     window.addEventListener('mousemove', handleMouseMove)

    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove)
    //     }
    // }, [handleMouseMove,])
    const svgClassNameFinal = cn("trigger-road absolute w-[89.75rem] h-[121.125rem] top-[9.5rem] left-[10.625rem] z-[-1]", svgClassName)
    return (
        <div ref={divRef} className="lg:hidden w-[100vw] overflow-hidden h-[139.625rem]! mask left-1/2 -translate-x-1/2">
            <div className="rp-container ">
                <div className={svgClassNameFinal}>
                <img src={svgPath} className="w-full h-full" alt="Hero Sub Pages Road" />

                </div>
                <div className=" absolute top-[22rem] left-[17.65625rem]">
                    <div className="rp-container">
                        <div ref={(el) => {
                            if (el) {
                                const path = el.querySelector('path')
                                if (path) pathRef.current = path
                            }
                        }}>
                            <HeroSubPageHighlightPath ref={pathRef} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlight"></div>

        </div>
    )
}