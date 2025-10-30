import laptopImage from "@/assets/gallery/laptop_optimized.webp";
import lounge01 from "@/assets/gallery/lounge01_optimized.webp";
import lounge02 from "@/assets/gallery/lounge02_optimized.webp";
import lounge03 from "@/assets/gallery/lounge03_optimized.webp";
import lounge04 from "@/assets/gallery/lounge04_optimized.webp";
import HorizontalGallery from "./horizontal-gallery";
export default function MadeToFit() {

    const imagesSources = [
        laptopImage,
        lounge01,
        lounge02,
        lounge03,
        lounge04
    ]


    return (
        <section id="made-to-fit" className="bg-black min-h-full overflow-hidden  text-white pt-[7.5rem] px-[5rem] pb-[9rem] lg:p-4 content-visibility-auto 4k:pt-[10rem] 4k:px-[8rem] 4k:pb-[12rem]" aria-label="Right Property platform adaptability showcase">
            <div className="rp-container relative z-[10] lg:px-0 lg:pt-[3.75rem] lg:pb-[2.5rem] 4k:max-w-[1800px" style={{ height: "auto" }}>
                <p className="mb-8 font-geist-mono text-base lg:font-sm 4k:text-[clamp(1.125rem,0.8vw+0.5rem,1.5rem)] font-medium leading-[140%] text-[#E2E2E2] tracking-[0.02em] uppercase">
                    An experience that matters
                </p>
                <h2 className="mb-[3.75rem] lg:mb-[0] 4k:mb-[7rem] text-[#E2E2E2] font-general-sans text-40 lg:text-32 4k:text-[clamp(2.5rem,1.5vw+1rem,5rem)] font-semibold leading-[140%] lg:leading-[130%] tracking-[0.01em]">
                    Made to Fit, Wherever<br />You Work
                </h2>
            </div>
            <HorizontalGallery images={imagesSources} />
        </section>

    )
}