import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import laptopImage from "@/assets/gallery/laptop_optimized.webp";
import lounge01 from "@/assets/gallery/lounge01_optimized.webp";
import lounge02 from "@/assets/gallery/lounge02_optimized.webp";
import lounge03 from "@/assets/gallery/lounge03_optimized.webp";
import lounge04 from "@/assets/gallery/lounge04_optimized.webp";

import HorizontalGallery from "./horizontal-gallery";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function MadeToFit() {
  const imagesSources = [laptopImage, lounge01, lounge02, lounge03, lounge04];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    >
      <div
        className="
          rp-container relative z-[10]
          lg:px-0 lg:pt-[3.75rem] lg:pb-[2.5rem] pl-[5rem] pr-[5rem]
          4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
          4k:[padding-right:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
        "
      >
        <p
          className="
            mb-6 font-geist-mono font-medium uppercase text-[#E2E2E2]
            text-fluid-4k-14 text-14 lg:text-sm leading-[140%] tracking-[0.02em]
          "
        >
          An experience that matters
        </p>

        <h2
          className="
            text-[#E2E2E2] font-general-sans font-semibold tracking-[0.01em]
            text-40 lg:text-28 leading-[140%] lg:leading-[130%]
            mb-[3.75rem] lg:mb-0
            text-fluid-4k-40
          "
        >
          Made to Fit, Wherever
          <br />
          You Work
        </h2>
      </div>

      {/* ----------------------------- */}
      {/*   MOBILE → SWIPER SLIDER     */}
      {/* ----------------------------- */}
      {/* ----------------------------- */}
      {/*   MOBILE → SWIPER SLIDER     */}
      {/* ----------------------------- */}
      {isMobile ? (
        <div className="mt-10 rp-container overflow-visible">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1.35}
            centeredSlides={true}
            spaceBetween={20}
            grabCursor={true}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            className="mobile-swiper"
          >
            {imagesSources.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="w-full rounded-xl overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <div className="flex items-center justify-end gap-2 mt-6 pr-2">
            <button className="flex items-center justify-center swiper-prev-btn w-[2.5rem] h-[2.5rem] rounded-full border border-[#FF947E80] opacity-70">
              <ArrowLeft size={21} className="text-[#EF716E]" />
            </button>
            <button className="flex items-center justify-center swiper-next-btn w-[2.5rem] h-[2.5rem] rounded-full border border-[#FF947E80] opacity-70">
              <ArrowRight size={21} className="text-[#EF716E]" />
            </button>
          </div> */}
        </div>
      ) : (
        <HorizontalGallery images={imagesSources} />
      )}
    </section>
  );
}
