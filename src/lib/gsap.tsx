import { useLayoutEffect } from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
export default function GSAP() {
    const lenis = useLenis()
    useLayoutEffect(() => {
        // Initialize a new Lenis instance for smooth scrolling
        // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
        lenis!.on('scroll', ScrollTrigger.update);
        ScrollTrigger.clearScrollMemory('manual')

        // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // This ensures Lenis's smooth scroll animation updates on each GSAP tick
        gsap.ticker.add((time) => {
            lenis!.raf(time * 1000); // Convert time from seconds to milliseconds
        });

        // Disable lag smoothing in GSAP to prevent any delay in scroll animations
        gsap.ticker.lagSmoothing(0);
    }, [lenis])
    return null;
}