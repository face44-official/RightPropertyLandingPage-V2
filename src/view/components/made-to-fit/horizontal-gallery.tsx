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
  const horizontalPinTl = useRef<gsap.core.Timeline>(null);

  const horizontalPin = useCallback(() => {
    const inner = document?.querySelector(galleryInnerSelector);
    const items = gsap.utils.toArray(
      inner?.querySelectorAll(".item") || []
    ) as HTMLElement[];

    if (!inner || items.length === 0) return;

    // ---------- Dynamic responsive parameters ----------
    const isMobile = window.innerWidth <= 768;
    const is4K = window.innerWidth >= 2000;

    const mobileOffsetStep = window.innerWidth / 12;
    const mobileElementWidth = window.innerWidth * 0.68;

    // Offset and gap scaling
    const offsetStep = isMobile
      ? mobileOffsetStep
      : is4K
      ? 140 // Slightly larger step for 4K
      : 96;
    const gapStep = isMobile
      ? 60
      : is4K
      ? window.innerWidth * 0.035 // Slightly tighter gap ratio for wide view
      : window.innerWidth * 0.053;

    // Initial vertical staggering
    items.forEach((el, i) => {
      gsap.set(el, { y: offsetStep * i });
    });

    // ---------- Scroll distance ----------
    const scrollDistance = isMobile
      ? mobileElementWidth * (items.length - 1.5) + gapStep * (items.length - 1.5)
      : is4K
      ? (880 * (items.length - 2.8) + gapStep * (items.length - 2.8)) // bigger cards need more scroll distance
      : (680 * (items.length - 2.8) + gapStep * (items.length - 2.8));

    const slideDuration = 1;
    const totalDuration = slideDuration * (items.length + 1);

    // ---------- Timeline setup ----------
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
      "start+=0"
    );
  }, [galleryInnerSelector, pinId, pinSelector]);

  // ---------- Mount ----------
  useEffect(() => {
    setTimeout(() => {
      horizontalPin();
    }, 100);

    return () => {
      if (horizontalPinTl.current) {
        horizontalPinTl.current?.scrollTrigger?.kill();
        horizontalPinTl.current.kill();
      }
    };
  }, [images, horizontalPin]);

  // ---------- Resize refresh ----------
  useEffect(() => {
    const handleResize = () => {
      horizontalPinTl.current?.scrollTrigger?.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [horizontalPin]);

  return (
    <div className="gallery z-[8] relative min-h-full lg:min-h-[75vw] overflow-visible max-w-[100vw]">
      <div className="max-w-[1680px] 4k:max-w-[1920px] mx-auto w-full">
        <div className="gallery__inner flex h-full gap-[3.75rem] lg:gap-[5.3vw] 4k:gap-[6vw]">
          {images.map((image, index) => (
            <img
              src={image}
              key={index}
              className="
                item w-[42.375rem] h-[42.375rem]
                lg:w-[68vw] lg:h-[68vw]
                4k:w-[55rem] 4k:h-[55rem]
                object-cover relative rounded-[1rem] 4k:rounded-[1.5rem]
              "
              alt={`Right Property gallery image ${index + 1} of ${images.length}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
