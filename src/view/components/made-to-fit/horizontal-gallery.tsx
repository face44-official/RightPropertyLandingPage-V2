import { useCallback, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export default function HorizontalGallery({
  images,
  pinId = "horizontal-gallery",
  galleryInnerSelector = ".gallery__inner",
  pinSelector = "#made-to-fit",
}: {
  images: string[];
  pinId?: string;
  galleryInnerSelector?: string;
  pinSelector?: string;
}) {

   const horizontalPinTl = useRef<gsap.core.Timeline | null>(null);

  const horizontalPin = useCallback(() => {
    if (horizontalPinTl.current) {
      horizontalPinTl.current.scrollTrigger?.kill();
      horizontalPinTl.current.kill();
      horizontalPinTl.current = null;
    }

    const inner = document.querySelector(galleryInnerSelector);
    const items = gsap.utils.toArray(
      inner?.querySelectorAll(".item") || []
    ) as HTMLElement[];

    if (!inner || items.length === 0) return;

    const isMobile = window.innerWidth <= 768;
    const is4K = window.innerWidth >= 3840;

    const mobileOffsetStep = window.innerWidth / 12;
    const mobileElementWidth = window.innerWidth * 0.68;

    const offsetStep = isMobile ? mobileOffsetStep : is4K ? 180 : 96;

    const gapStep = isMobile
      ? 60
      : is4K
      ? window.innerWidth * 0.045
      : window.innerWidth * 0.053;

    items.forEach((el, i) => {
      gsap.set(el, { y: offsetStep * i });
    });

    const baseWidth = isMobile ? mobileElementWidth : is4K ? 1100 : 680;

    const compensation = isMobile
      ? window.innerWidth - baseWidth * 0.95
      : is4K
      ? window.innerWidth - baseWidth * 2.2
      : window.innerWidth - baseWidth * 1.1;

    const scrollDistance =
      (baseWidth + gapStep) * (items.length - 1) - compensation;

    const totalDuration = (items.length + 1) * 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: inner,
        start: "center center",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: pinSelector,
        pinSpacing: true,
        id: pinId,
        refreshPriority: 10,
      },
    });

    tl.to(
      inner,
      {
        x: () => `-${scrollDistance}px`,
        y: () => `-${offsetStep * (items.length - 2.8)}px`,
        ease: "none",
        duration: totalDuration,
      },
      0
    );

    horizontalPinTl.current = tl;
  }, [galleryInnerSelector, pinId, pinSelector]);


  useLayoutEffect(() => {
    if (!images || images.length === 0) return;

    const inner = document.querySelector(galleryInnerSelector);
    if (!inner) return;

    const imgs = inner.querySelectorAll("img");
    let loadedCount = 0;

    const checkLoad = () => {
      loadedCount++;
      if (loadedCount === imgs.length) {

        requestAnimationFrame(() => {
          horizontalPin();
          ScrollTrigger.refresh();
        });
      }
    };

    imgs.forEach((img) => {
      if (img.complete) checkLoad();
      else img.addEventListener("load", checkLoad);
    });

    return () => {
      imgs.forEach((img) => img.removeEventListener("load", checkLoad));
      if (horizontalPinTl.current) {
        horizontalPinTl.current.scrollTrigger?.kill();
        horizontalPinTl.current.kill();
        horizontalPinTl.current = null;
      }
    };
  }, [images, horizontalPin, galleryInnerSelector]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isTouch = ScrollTrigger.isTouch === 1;

    if (isIOS || isTouch) return;

    let resizeTimeout: any;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        horizontalPin(); 
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [horizontalPin]);

  return (
    <div className="gallery relative z-[8] overflow-visible min-h-full lg:min-h-[75vw] max-w-[100vw]">
      <div className="rp-container pl-[5rem] mx-auto w-full 4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)] lg:px-4">
        <div className="gallery__inner flex h-full gap-[3.75rem] lg:gap-[5vw] 4k:[gap:clamp(3.75rem,calc(3.75rem+((100vw-2050px)/2000px)*3.75rem),7.5rem)]">
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              alt={`Right Property gallery image ${index + 1} of ${
                images.length
              }`}
              className="
                item relative object-cover rounded-[1rem]
                w-[42.375rem] h-[42.375rem]
                lg:w-[68vw] lg:h-[68vw]
                4k:[width:clamp(42.375rem,calc(42.375rem+((100vw-2050px)/2000px)*42.375rem),84.75rem)]
                4k:[height:clamp(42.375rem,calc(42.375rem+((100vw-2050px)/2000px)*42.375rem),84.75rem)]
                4k:[border-radius:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
