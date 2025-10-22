import desktopVisual from "@/assets/v3/experience/dfes/desktops.webp";
import tabletsVisual from "@/assets/v3/experience/dfes/tablets.webp";
import phonesVisual from "@/assets/v3/experience/dfes/phones.webp";
import kiosksVisual from "@/assets/v3/experience/dfes/kiosk.webp";
import laptopsVisual from "@/assets/v3/experience/dfes/laptops.webp";
import tvVisual from "@/assets/v3/experience/dfes/tv.webp";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
const images = [
    kiosksVisual,
    phonesVisual,
    tvVisual,
    laptopsVisual,
    desktopVisual,
    tabletsVisual,

]
export const DesignForEveryScreenContent = ({ currentImage, isVisible }: { currentImage: number, isVisible: boolean }) => {
    const currentImageSrc = images[currentImage];
    const $ref = useRef<HTMLImageElement>(null);
    const $contentRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (!$contentRef.current ) return;
        gsap.to($contentRef.current, {
            opacity: isVisible ? 1 : 0,
            duration: 1.2,
            ease: "power3.Out"
        });
    }, [isVisible])
    useLayoutEffect(() => {
        if (!$ref.current) return;
        
        gsap.to($ref.current, {
            opacity: isVisible ? 1 : 0,
            duration: 1.2,
            ease: "power3.Out"
        });
    }, [currentImageSrc, isVisible])
    return (
        <div className="flex gap-[4rem] rp-container py-[10rem]">
            <div ref={$contentRef} className="p-[5rem] opacity-0">
                <div className="mb-[2rem] w-[43.3125rem] h-[31.25rem]">
                    <div className="font-general-sans font-semibold text-40 tracking-[0em] leading-[130%] text-raisin-black">
                        Designed for Every Screen
                    </div>
                    <div className="mb-[4.125rem] font-geist font-normal text-32 tracking-[0em] leading-[130%] text-tundora">
                        Whether you’re in a marketing suite with a huge wall screen, at a sales office touchscreen, or using a laptop or tablet, Right Property adapts beautifully. Your team controls what to show and how—switching between media, views, and stories instantly.
                    </div>
                    <div className="w-[30.1875rem] font-geist text-28 tracking-[0em] leading-[130%] text-raisin-black">
                        Surface and Space work across diverse range of environments.
                    </div>
                </div>
            </div>
            <div className="flex-grow h-[46.4375rem]">
                <img key={currentImage} ref={$ref} src={currentImageSrc} alt="Current Image" className="opacity-0 w-full h-full object-cover" />
            </div>
        </div>

    );
};