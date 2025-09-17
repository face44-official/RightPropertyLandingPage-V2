import road from "@/assets/v3/common/reverse_road.png";
import { useEffect } from "react";
import HeroSubPageHighlightPath from "./hero-sub-page-highlight-path";
import { useMotionPath } from "@/lib/useMotionPath";

export default function HeroSubPagesRoad() {

    const { divRef, pathRef, initializeMotionPath } = useMotionPath({
        trigger: ".trigger-road",
        startOffset: "top top",
        endOffset: "+=100%",
        scrollScrub: true,
        markers: false
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

    return (
        <div ref={divRef} className="w-[100vw] h-[139.625rem]! mask left-1/2 -translate-x-1/2">
            <div className="rp-container ">
                <img src={road} className="trigger-road absolute w-[47.8125rem] h-[95.25rem] top-[5.6956rem] left-[46.0456rem] z-[-1]" alt="Hero Sub Pages Road" />
                <img src={road} className="absolute w-[47.8125rem] h-[95.25rem] top-[44.4243rem] left-[8.7962rem] z-[-1]" alt="Hero Sub Pages Road" />
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