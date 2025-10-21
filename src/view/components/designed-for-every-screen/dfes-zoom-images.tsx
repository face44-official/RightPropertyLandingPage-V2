import desktopVisual from "@/assets/v3/experience/dfes/desktops.webp";
import tabletsVisual from "@/assets/v3/experience/dfes/tablets.webp";
import phonesVisual from "@/assets/v3/experience/dfes/phones.webp";
import kiosksVisual from "@/assets/v3/experience/dfes/kiosk.webp";
import laptopsVisual from "@/assets/v3/experience/dfes/laptops.webp";
import tvVisual from "@/assets/v3/experience/dfes/tv.webp";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function DfesZoomImages({ nextTimeline }: { nextTimeline: () => gsap.core.Timeline }) {
        // const lenis = useLenis();
        const masterTl = useRef<gsap.core.Timeline>(null)
        const tl = useRef<gsap.core.Timeline>(null)
    useEffect(() => {
        setTimeout(() => {
            masterTl.current = gsap.timeline()
            tl.current = gsap.timeline({

                scrollTrigger: {
                    trigger: "#dfes-content-container",
                    start: "center center",
                    end: "+=1000",
                    scrub: 0,
                    pin: true,
                    invalidateOnRefresh: true,
                    pinSpacing:true
                }
            })
            tl.current.to("#desktop-zoom-visual", {
                z: 600,
                duration: 1,
                ease: "power3.In"
            })
            tl.current.to("#tablet-zoom-visual", {
                z: 600,
                duration: 0.4,
                ease: "power3.In"
            }, "0")
            tl.current.to("#phone-zoom-visual", {
                z: 600,
                duration: 0.75,
                ease: "power3.In"
            }, "0.3")
            tl.current.to("#laptop-zoom-visual", {
                z: 1200,
                duration: 1,
                ease: "power3.In"
            }, "0.1")
            tl.current.to("#kiosk-zoom-visual", {
                z: 600,
                duration: 1,
                ease: "power3.In"
            }, "0.15")
            tl.current.to("#tv-zoom-visual", {
                z: 600,
                duration: 1,
                ease: "power3.In"
            }, "0.2")

            tl.current.add(gsap.to(".visual-element", {
                opacity: 0,
                duration: 0.1,
                ease: "power3.In"
            }), "1")
            masterTl.current.add(tl.current, 0)
            masterTl.current.add(nextTimeline(), '>')
        }, 300);


        return () => {
            masterTl.current?.kill();
            tl.current?.kill();
        };

    }, [nextTimeline])
    return (
        <div className="absolute left-1/2 -translate-x-1/2 w-[1680px] min-h-[1000px] perspective-[100svh]">
            
            <img id="desktop-zoom-visual" className="visual-element transform-3d absolute left-[17.5rem] top-[41.4375rem] w-[14.68rem] h-auto object-contain" src={desktopVisual} alt="desktopVisual" />
            <img id="tablet-zoom-visual" className="visual-element absolute left-[56.25rem] top-[9.75rem] w-[13rem] h-auto object-contain " src={tabletsVisual} alt="tabletsVisual" />
            <img id="phone-zoom-visual" className="visual-element transform-3d absolute top-[37.5rem] left-[60.4375rem] w-[31.125rem] h-auto object-contain" src={phonesVisual} alt="phonesVisual" />
            <img id="laptop-zoom-visual" className="visual-element transform-3d absolute -top-[6.5625rem] left-[79rem] w-[13.875rem] h-auto object-contain" src={laptopsVisual} alt="laptopVisual" />
            <img id="kiosk-zoom-visual" className="visual-element transform-3d absolute -bottom-[9.375rem] left-[40.625rem] w-[13.125rem] h-auto object-contain" src={kiosksVisual} alt="kioskVisual" />
            <img id="tv-zoom-visual" className="visual-element transform-3d absolute top-[3.875rem] left-[9rem] w-[23.125rem] h-auto object-contain" src={tvVisual} alt="tvVisual" />
        </div>
    )
}