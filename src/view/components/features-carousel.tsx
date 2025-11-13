"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import {
  EmailMarketingVideo,
  InteractiveWebsiteVideo,
  MarketingVideo,
  PowerfulCMSVideo,
  SeoReadyVideo,
  WebsiteTemplatesVideo,
} from "./sliding-sections/slide-videos/slide-videos";
import SlideElement from "./sliding-sections/slide-element";
import SlideBody from "./sliding-sections/slide-body";

const carouselContents = [
  {
    caption: "Marketing",
    title: "Level up your marketing instantly",
    description:
      "Right Property extends your marketing beyond the sales office. Seamless digital marketing, connected to sales.",
    buttonType: "book",
    video: <MarketingVideo />,
  },
  {
    caption: "Marketing",
    title: "Interactive Website",
    description:
      "Providing a fully interactive project website that mirrors the in-person experience.",
    video: <InteractiveWebsiteVideo />,
  },
  {
    caption: "Marketing",
    title: "Ready-to-Use Templates",
    description:
      "Switch between ready-to-use templates or customize campaign pages.",
    video: <WebsiteTemplatesVideo />,
  },
  {
    caption: "Marketing",
    title: "Powerful & Intuitive CMS",
    description:
      "Powerful yet intuitive CMS to reflect your project's branding on every platform.",
    video: <PowerfulCMSVideo />,
  },
  {
    caption: "Marketing",
    title: "Email Campaign Management",
    description:
      "Built-in email creation and campaign management, reaching potential buyers has never been easier.",
    video: <EmailMarketingVideo />,
  },
  {
    caption: "Marketing",
    title: "SEO Ready Projects",
    description:
      "SEO-ready out of the box, ensuring your project ranks higher and attracts the right audience.",
    video: <SeoReadyVideo />,
  },
];

export default function FeaturesCarousel() {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  // ✅ Re-assign pagination element after mount
  useEffect(() => {
    const swiperEl = document.querySelector(".features-swiper") as HTMLElement;
    if (swiperEl && paginationRef.current) {
      const swiperInstance = (swiperEl as any).swiper;
      if (swiperInstance) {
        swiperInstance.params.pagination.el = paginationRef.current;
        swiperInstance.pagination.init();
        swiperInstance.pagination.render();
        swiperInstance.pagination.update();
      }
    }
  }, []);

  return (
    <section className="hidden lg:block px-4 relative overflow-hidden pb-[7.5rem] lg:pb-20 content-visibility-auto">
      {/* Background gradient */}
      <div
        className="z-[-1] absolute top-1/2 w-[2205px] h-[2205px] 4k:w-[3000px] 4k:h-[3000px] -translate-y-1/2 left-1/2 -translate-x-[30%] lg:bg-[linear-gradient(to_bottom,white_20%,rgba(197,230,255,0.9)_100%,rgba(200,229,255,0.85)_75%,rgba(178,216,255,1)_0%)]!"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(197, 230, 255, 0.72) 0%, rgba(200, 229, 255, 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)",
        }}
      />

      {/* Swiper */}
      <Swiper
        className="features-swiper rp-container pt-[10rem] pb-[1.5rem] lg:pt-4 lg:pb-3"
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          el: paginationRef.current,
        }}
      >
        {carouselContents.map((content, index) => (
          <SwiperSlide key={index}>
            <SlideElement>
              {content.video}
              <SlideBody {...content} />
            </SlideElement>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={paginationRef}
        className="custom-swiper-pagination flex justify-center gap-3 mt-6"
      ></div>
    </section>
  );
}
