import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    const inner = document.querySelector(galleryInnerSelector);
    const items = gsap.utils.toArray(
      inner?.querySelectorAll(".item") || []
    ) as HTMLElement[];

    if (!inner || items.length === 0) return;

    // --------- Responsive parameters ---------
    const isMobile = window.innerWidth <= 768;
    const is4K = window.innerWidth >= 3840; // proper 4K threshold

    const mobileOffsetStep = window.innerWidth / 12;
    const mobileElementWidth = window.innerWidth * 0.68;

    // Vertical offset between images
    const offsetStep = isMobile
      ? mobileOffsetStep
      : is4K
      ? 180 // increased vertical separation for 4K
      : 96;

    // Horizontal gap scaling
    const gapStep = isMobile
      ? 60
      : is4K
      ? window.innerWidth * 0.045 // visually balanced for 4K wide screens
      : window.innerWidth * 0.053;

    // Apply initial Y offset for stacked layout
    items.forEach((el, i) => {
      gsap.set(el, { y: offsetStep * i });
    });

    // --------- Scroll distance ---------
    const baseWidth = isMobile
      ? mobileElementWidth
      : is4K
      ? 1100 // each image width on 4K
      : 680;

    let compensation;

    if (isMobile) {
      compensation = window.innerWidth - baseWidth * 0.95;
    } else if (is4K) {
      // more accurate correction: accounts for container padding and visual offset
      compensation = window.innerWidth - baseWidth * 2.2;
    } else {
      compensation = window.innerWidth - baseWidth * 1.1;
    }

    const scrollDistance =
      (baseWidth + gapStep) * (items.length - 1) - compensation;

    const slideDuration = 1;
    const totalDuration = slideDuration * (items.length + 1);

    // --------- Timeline setup ---------
    horizontalPinTl.current = gsap.timeline({
      scrollTrigger: {
        trigger: inner,
        start: "center center",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: pinSelector,
        pinSpacing: true,
        id: pinId,
        invalidateOnRefresh: true,
        refreshPriority: 10,
      },
    });

    horizontalPinTl.current.to(
      inner,
      {
        x: () => `-${scrollDistance}px`,
        y: () => `-${offsetStep * (items.length - 2.8)}px`,
        ease: "none",
        duration: totalDuration,
      },
      "start"
    );
  }, [galleryInnerSelector, pinId, pinSelector]);

  // --------- Mount ---------
  useEffect(() => {
    setTimeout(() => {
      horizontalPin();
    }, 150);

    return () => {
      horizontalPinTl.current?.scrollTrigger?.kill();
      horizontalPinTl.current?.kill();
    };
  }, [images, horizontalPin]);

  // --------- Resize refresh ---------
  useEffect(() => {
    const handleResize = () => {
      horizontalPinTl.current?.scrollTrigger?.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="gallery relative z-[8] overflow-visible min-h-full lg:min-h-[75vw] max-w-[100vw]">
      <div className="rp-container pl-[5rem] mx-auto w-full 4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),10rem)] lg:px-4">
        <div className="gallery__inner flex h-full gap-[3.75rem] lg:gap-[5vw] 4k:[gap:clamp(3.75rem,calc(3.75rem+((100vw-2000px)/2000px)*3.75rem),7.5rem)]">
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
                4k:[width:clamp(42.375rem,calc(42.375rem+((100vw-2000px)/2000px)*42.375rem),84.75rem)]
                4k:[height:clamp(42.375rem,calc(42.375rem+((100vw-2000px)/2000px)*42.375rem),84.75rem)]
                4k:[border-radius:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*1rem),2rem)]
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
}
