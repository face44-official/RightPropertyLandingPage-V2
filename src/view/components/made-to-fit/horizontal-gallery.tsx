import { useCallback, useEffect, useLayoutEffect, useRef } from "react"
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
    useEffect(() => {
        // Wait for DOM to be ready
        const timeoutId = setTimeout(() => {
            horizontalPin();

        }, 200); // Increased timeout for stability

        return () => {
            clearTimeout(timeoutId);
          
            // Clean up any ScrollTriggers for this component
            if(horizontalPinTl.current) {
                horizontalPinTl.current?.scrollTrigger?.kill();
                horizontalPinTl.current.kill();
            }
        };
    }, [images])

    const horizontalPin = useCallback(() => {
        console.log("horizontalPin");
        const inner = document?.querySelector(galleryInnerSelector);
        const items = gsap.utils.toArray(inner?.querySelectorAll(".item") || []) as HTMLElement[];
        
        if ( !inner || items.length === 0) return;
        
        const offsetStep = window.innerWidth <= 768 ? 36 : 96; // pixels each one starts lower than the last

      
        // 1) set up initial vertical offsets
        items.forEach((el, i) => {
            gsap.set(el, { y: offsetStep * (i)});
        });

        // Calculate scroll distance more precisely
        const scrollDistance = (680*(items.length-2.8) + 60* (items.length-2.8));
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
                pinSpacing:true,
                id: pinId,
                invalidateOnRefresh: true,
                refreshPriority: 10,
            },
        });
        
        // Horizontal movement with precise calculation
        horizontalPinTl.current.to(inner, {
            x: () => `-${scrollDistance}px`,
            y : () => `-${offsetStep*(items.length-2.8)}px`,
            // x: () => -(inner?.scrollWidth ?? 0) * 0.6,
            ease: "none",
            duration: totalDuration
        }, 'start+=0');
    },[galleryInnerSelector, pinId, pinSelector])

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
    return <div className="gallery z-[8] relative min-h-full lg:min-h-[10vh] overflow-visible max-w-[100vw]">
        <div className="max-w-[1680px] mx-auto w-full">
            <div className="gallery__inner flex h-full gap-[3.75rem]">
                {images.map((image, index) => (
                    <img src={image} key={index} className="item w-[42.375rem] h-[42.375rem] lg:w-[13.875rem] lg:h-[13.875rem] object-cover relative" />
                ))}
            </div>
        </div>
    </div>
}