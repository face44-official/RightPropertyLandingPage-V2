import laptopImage from "@/assets/gallery/laptop_optimized.webp";
import lounge01 from "@/assets/gallery/lounge01_optimized.webp";
import lounge02 from "@/assets/gallery/lounge02_optimized.webp";
import lounge03 from "@/assets/gallery/lounge03_optimized.webp";
import lounge04 from "@/assets/gallery/lounge04_optimized.webp";
import HorizontalGallery from "./horizontal-gallery";

export default function MadeToFit() {
  const imagesSources = [laptopImage, lounge01, lounge02, lounge03, lounge04];

  return (
    <section
      id="made-to-fit"
      className="
        bg-black text-white overflow-hidden content-visibility-auto
        min-h-full
        pt-[7.5rem] px-[5rem] pb-[9rem]
        lg:p-4
        4k:[padding-top:clamp(7.5rem,calc(7.5rem+((100vw-2050px)/2000px)*7.5rem),15rem)]
        4k:[padding-bottom:clamp(9rem,calc(9rem+((100vw-2050px)/2000px)*9rem),18rem)]
        4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
        4k:[padding-right:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
      "
      aria-label="Right Property platform adaptability showcase"
    >
      <div
        className="
          rp-container relative z-[10]
          lg:px-0 lg:pt-[3.75rem] lg:pb-[2.5rem] pl-[5rem] pr-[5rem]
          4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
          4k:[padding-right:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
        "
        style={{ height: "auto" }}
      >
        <p
          className="
            mb-6 font-geist-mono font-medium uppercase text-[#E2E2E2]
            text-fluid-4k-14 text-14 lg:text-sm leading-[140%] tracking-[0.02em]
            4k:[margin-bottom:clamp(1.3rem,calc(1.3rem+((100vw-2050px)/2000px)*1.3rem),2.6rem)]
          "
        >
          An experience that matters
        </p>

        <h2
          className="
            text-[#E2E2E2] font-general-sans font-semibold tracking-[0.01em]
            text-40 lg:text-32 leading-[140%] lg:leading-[130%]
            mb-[3.75rem] lg:mb-0
            4k:[margin-bottom:clamp(3.75rem,calc(3.75rem+((100vw-2050px)/2000px)*3.75rem),7.5rem)]
            text-fluid-4k-40
          "
        >
          Made to Fit, Wherever
          <br />
          You Work
        </h2>
      </div>

      <HorizontalGallery images={imagesSources} />
    </section>
  );
}
