import { useCallback, useLayoutEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery({
    images,
    pinId = "horizontal-gallery",
    galleryInnerSelector = ".gallery__inner",
    pinSelector = "#made-to-fit",

}: {
    images: string[],
    pinId?: string,
    galleryInnerSelector?: string,
    pinSelector?: string,
}) {
    const horizontalPinTl = useRef<gsap.core.Timeline>(null);


    const horizontalPin = useCallback(() => {
        console.log("horizontalPin");
        const inner = document?.querySelector(galleryInnerSelector);
        const items = gsap.utils.toArray(inner?.querySelectorAll(".item") || []) as HTMLElement[];

        if (!inner || items.length === 0) return;
        const mobileOffsetStep = window.innerWidth/12;
        const mobileElementWidth = window.innerWidth * 0.68;
        const offsetStep = window.innerWidth <= 768 ? mobileOffsetStep : 96; // pixels each one starts lower than the last
        const gapStep = window.innerWidth <= 768 ? 60 : window.innerWidth * 0.053; // gap between items

        // 1) set up initial vertical offsets
        items.forEach((el, i) => {
            gsap.set(el, { y: offsetStep * (i) });
        });

        // Calculate scroll distance more precisely
        const scrollDistance = window.innerWidth <= 768 ? (mobileElementWidth * (items.length - 1.5) + gapStep * (items.length - 1.5)) : (680 * (items.length - 2.8) + gapStep * (items.length - 2.8));
        const slideDuration = 1
        // timeline length = one chunk per slide
        const totalDuration = slideDuration * (items.length + 1)
        horizontalPinTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: inner,
                start: "center center",
                end: () => `+=${scrollDistance}`,
                scrub: 1, // Add some smoothness
                pin: pinSelector,
                pinSpacing: true,
                id: pinId,
                invalidateOnRefresh: true,
                refreshPriority: 10,
            },
        });

        // Horizontal movement with precise calculation
        horizontalPinTl.current.to(inner, {
            x: () => `-${scrollDistance}px`,
            y: () => `-${offsetStep * (items.length - 2.8)}px`,
            // x: () => -(inner?.scrollWidth ?? 0) * 0.6,
            ease: "none",
            duration: totalDuration
        }, 'start+=0');
    }, [galleryInnerSelector, pinId, pinSelector])
    useLayoutEffect(() => {
        // Wait for DOM to be ready
        horizontalPin();
        return () => {

            // Clean up any ScrollTriggers for this component
            if (horizontalPinTl.current) {
                horizontalPinTl.current?.scrollTrigger?.kill();
                horizontalPinTl.current.kill();
            }
        };
    }, [images, horizontalPin])
    useLayoutEffect(() => {
        const handleResize = () => {
            // Debounce resize to avoid excessive recalculations
            horizontalPinTl.current?.refresh();
            horizontalPinTl.current?.scrollTrigger?.refresh();
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [horizontalPin])
    return <div className="gallery z-[8] relative min-h-full lg:min-h-[75vw]  overflow-visible max-w-[100vw]">
        <div className="max-w-[1680px] mx-auto w-full">
            <div className="gallery__inner flex h-full gap-[3.75rem] lg:gap-[5.3vw]">
                {images.map((image, index) => (
                    <img src={image} key={index} className="item w-[42.375rem] h-[42.375rem] lg:w-[68vw] lg:h-[68vw] object-cover relative" alt={`Right Property gallery image ${index + 1} of ${images.length}`} />
                ))}
            </div>
        </div>
    </div>
}