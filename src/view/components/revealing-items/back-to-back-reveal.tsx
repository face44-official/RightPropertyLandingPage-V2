import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { flippingCardContents } from "./flipping-card-contents";
import FlippingCardContent from "./flipping-card-content";
import RevealItemsIndicator from "./reveal-items-indicator";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import revealItem1Overlay from "@/assets/v3/reveal_item_1_overlay.webp";
import revealItem2Overlay from "@/assets/v3/reveal_item_2_overlay.webp";
import revealItem3Overlay from "@/assets/v3/reveal_item_3_overlay.webp";
import revealItem4Overlay from "@/assets/v3/reveal_item_4_overlay.webp";
import revealItem5Overlay from "@/assets/v3/reveal_item_5_overlay.webp";
import revealItem6Overlay from "@/assets/v3/reveal_item_6_overlay.webp";
import revealItem1Road from "@/assets/v3/reveal_item_1_road.svg";
import revealItem2Road from "@/assets/v3/reveal_item_2_road.svg";
import revealItem3Road from "@/assets/v3/reveal_item_3_road.svg";
import revealItem5Road from "@/assets/v3/reveal_item_5_road.svg";
import cmsVideo from "@/assets/v3/cms.webm";
import emailMarketingVideo from "@/assets/v3/email_marketing.webm";
import interactiveVideo from "@/assets/v3/interactive_website.webm";
import marketingOption1 from "@/assets/v3/marketing_option1.webm";
import websiteTemplates from "@/assets/v3/website_templates.webm";
import seoVideo from "@/assets/v3/seo.webm";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function BackToBackReveal() {
  const $ref = useRef<HTMLDivElement>(null);
  const $pinRef = useRef<HTMLDivElement>(null);
  const $cardRef = useRef<HTMLDivElement>(null);
  const $previousIndexRef = useRef<number>(0);
  const cardContents = flippingCardContents;
  const [currentItem, setCurrentItem] = useState(0);
  const $flipTl = useRef<GSAPTimeline>(null);
  const $direction = useRef<1 | -1>(null);
  const animationQueue = useRef<Array<{ direction: 1 | -1; index: number }>>(
    []
  );
  const isAnimating = useRef(false);

  const $cardSectionRef1 = useRef<HTMLDivElement>(null);
  const $cardSectionRef2 = useRef<HTMLDivElement>(null);
  const $cardSectionRef3 = useRef<HTMLDivElement>(null);
  const $cardSectionRef4 = useRef<HTMLDivElement>(null);
  const $cardSectionRef5 = useRef<HTMLDivElement>(null);
  const $cardSectionRef6 = useRef<HTMLDivElement>(null);

    useEffect(() => {
    let pinTl: GSAPTimeline | null = null;
    let tlList: GSAPTimeline[] = [];
    let resizeTimeout: NodeJS.Timeout | null = null;

    const refList = [
      $cardSectionRef1,
      $cardSectionRef2,
      $cardSectionRef3,
      $cardSectionRef4,
      $cardSectionRef5,
      $cardSectionRef6,
    ];

    const initAnimations = () => {
      // Kill any existing triggers for this section
      tlList.forEach((tl) => {
        tl.scrollTrigger?.kill();
        tl.kill();
      });
      pinTl?.scrollTrigger?.kill();
      pinTl?.kill();

      const container = document.querySelector("#why-right-property");
      if (!container) return;

      // Skip setup if hidden (e.g. lg:hidden)
      const isHidden = window.getComputedStyle(container).display === "none";
      if (isHidden) return;

      // --- Rebuild pin ---
      pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#why-right-property",
          start: "top top",
          pin: $pinRef.current,
          end: "bottom bottom",
          scrub: true,
          id: "back-to-back-reveal",
        },
      });

      // --- Rebuild each section trigger ---
      tlList = refList.map((ref, index) => {
        const use_index = index + 0;
        return gsap.timeline({
          scrollTrigger: {
            trigger: ref.current!,
            start: "top top+=25%",
            end: "bottom bottom",
            id: `back-to-back-reveal-${use_index}`,
            refreshPriority: 5 + index,
            scrub: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onEnter: (self) => {
              $direction.current = self.direction as 1 | -1;
              setCurrentItem(use_index);
              $previousIndexRef.current = index;
            },
            onLeaveBack: () => {
              if (use_index === 0) return;
              $direction.current = -1;
              setCurrentItem(use_index - 1);
              $previousIndexRef.current = index;
            },
          },
        });
      });

      // Refresh only these triggers (no global refresh)
      pinTl.scrollTrigger?.refresh();
      tlList.forEach((tl) => tl.scrollTrigger?.refresh());
    };

    // --- Initialize once on mount ---
    const initTimeout = setTimeout(initAnimations, 100);

    // --- Handle resize with debounce ---
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        initAnimations();
      }, 200);
    };

    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      clearTimeout(initTimeout);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);

      tlList.forEach((tl) => {
        tl.scrollTrigger?.kill();
        tl.kill();
      });
      pinTl?.scrollTrigger?.kill();
      pinTl?.kill();

      animationQueue.current = [];
      isAnimating.current = false;
      $flipTl.current?.kill();
    };
  }, []);
  
  // useEffect(() => {
  //   let pinTl: GSAPTimeline | null = null;
  //   let tlList: GSAPTimeline[] = [];
  //   const refList = [
  //     $cardSectionRef1,
  //     $cardSectionRef2,
  //     $cardSectionRef3,
  //     $cardSectionRef4,
  //     $cardSectionRef5,
  //     $cardSectionRef6,
  //   ];
  //   setTimeout(() => {
  //     pinTl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#why-right-property",
  //         start: "top top",
  //         pin: $pinRef.current,
  //         end: "bottom bottom",
  //         scrub: true,
  //         id: "back-to-back-reveal",
  //       },
  //     });
  //     tlList = Array.from({ length: 6 }, (_, index) => {
  //       const use_index = index + 0;
  //       return gsap.timeline({
  //         scrollTrigger: {
  //           trigger: refList[use_index].current!,
  //           start: "top top+=25%",
  //           end: "bottom bottom",
  //           id: `back-to-back-reveal-${use_index}`,
  //           refreshPriority: 5 + index,
  //           scrub: true,
  //           invalidateOnRefresh: true,
  //           anticipatePin: 1,
  //           onEnter: (self) => {
  //             $direction.current = self.direction as 1 | -1;
  //             setCurrentItem(use_index);
  //             $previousIndexRef.current = index;
  //           },
  //           onLeaveBack: () => {
  //             if (use_index === 0) return;
  //             $direction.current = -1;
  //             setCurrentItem(use_index - 1);
  //             $previousIndexRef.current = index;
  //           },
  //         },
  //       });
  //     });
  //   }, 100);

  //   return () => {
  //     tlList.forEach((tl) => tl.kill());
  //     animationQueue.current = [];
  //     isAnimating.current = false;
  //     $flipTl.current?.kill();
  //     pinTl?.kill();
  //   };
  // }, []);
  

  return (
    <section
      id="why-right-property"
      ref={$ref}
      className="
        relative lg:hidden content-visibility-auto
        h-[600vh] xl:h-[610vh] 4k:h-[700vh]
      "
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #EDF7FC 20.67%)",
      }}
    >
      <div className="desktop-rp-container mx-auto w-full relative z-[50]">
        {/* PINNED CARD AREA */}
        <div
          ref={$pinRef}
          className="
            absolute top-[215px] left-[90px]
          "
        >
          <div
            ref={$cardRef}
            className="
              card quickflip relative
              w-[48.9375rem] h-[561px]
              4k:[width:clamp(48.9375rem,calc(48.9375rem+((100vw-2050px)/2000px)*48.9375rem),97.875rem)]
              4k:[height:clamp(561px,calc(561px+((100vw-2050px)/2000px)*561px),1122px)]
            "
            style={{ perspective: "800px", transformStyle: "preserve-3d" }}
          >
            <div className="qf-card card-front relative top-0 left-0 w-full h-full backface-hidden transform-3d origin-center">
              <FlippingCardContent
                key={`flipping-card-content-${currentItem}`}
                {...cardContents[currentItem]}
              />
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 xl:top-[150px] -left-[4.375rem] 4k:-left-[5.5rem]">
            <RevealItemsIndicator
              items={cardContents.length}
              currentItem={currentItem}
            />
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="rp-container">
        <VideoContainer
          sectionRef={$cardSectionRef1}
          videoUrl={marketingOption1}
        >
          <div className="absolute w-[109.25rem] h-[93.125rem] -left-[53.125rem] -top-[20.75rem] z-[-1] 4k:w-[124rem] 4k:h-[106rem] 4k:-left-[60rem] 4k:-top-[35rem]">
            <img src={revealItem1Road} className="h-full w-full" alt="" />
          </div>
          <img
            src={revealItem1Overlay}
            className="absolute -top-[7.375rem] left-[3rem] w-[41.9375rem] h-auto object-contain 4k:-top-[9rem] 4k:left-[3.5rem] 4k:w-[50rem]"
            alt="Marketing feature overlay decoration"
          />
        </VideoContainer>

        <VideoContainer
          sectionRef={$cardSectionRef2}
          videoUrl={interactiveVideo}
        >
          <div className="absolute w-[108.75rem] h-[93.125rem] -left-[57.875rem] -top-[30.75rem] z-[-1] 4k:w-[124rem] 4k:h-[106rem] 4k:-left-[64rem] 4k:-top-[35rem]">
            <img src={revealItem2Road} className="h-full w-full" alt="" />
          </div>
          <img
            src={revealItem2Overlay}
            className="absolute -top-[13.625rem] left-[5.625rem] w-[41rem] h-auto object-contain 4k:-top-[16rem] 4k:left-[6.5rem] 4k:w-[50rem]"
            alt="Interactive website feature overlay decoration"
          />
        </VideoContainer>

        <VideoContainer
          sectionRef={$cardSectionRef3}
          videoUrl={websiteTemplates}
        >
          <div className="absolute w-[108.75rem] h-[93.125rem] -right-[10.675rem] -bottom-[36.25rem] z-[-1] 4k:w-[124rem] 4k:h-[106rem] 4k:-right-[12rem] 4k:-bottom-[42rem]">
            <img src={revealItem3Road} className="h-full w-full" alt="" />
          </div>
          <img
            src={revealItem3Overlay}
            className="absolute left-[13.75rem] -top-[1.25rem] -translate-y-full w-[24.375rem] h-auto object-contain 4k:left-[16rem] 4k:-top-[2rem] 4k:w-[30rem]"
            alt="Website templates feature overlay decoration"
          />
        </VideoContainer>

        <VideoContainer sectionRef={$cardSectionRef4} videoUrl={cmsVideo}>
          <img
            src={revealItem4Overlay}
            className="absolute top-[15.75rem] left-[3.75rem] w-[11.5625rem] h-auto object-contain 4k:top-[18rem] 4k:left-[4.5rem] 4k:w-[14rem]"
            alt="CMS feature overlay decoration"
          />
          <GreenGradient />
          <BlueGradient />
        </VideoContainer>

        <VideoContainer
          sectionRef={$cardSectionRef5}
          videoUrl={emailMarketingVideo}
        >
          <BlueGradient />
          <div className="absolute w-[105.0625rem] h-[93.125rem] -left-[57.9375rem] -top-[30.125rem] z-[-1] 4k:w-[120rem] 4k:h-[106rem] 4k:-left-[64rem] 4k:-top-[35rem]">
            <img src={revealItem5Road} className="h-full w-full" alt="" />
          </div>
          <img
            src={revealItem5Overlay}
            className="absolute -top-[21.25rem] left-[13.75rem] w-[24.0625rem] h-auto object-contain 4k:-top-[24rem] 4k:left-[16rem] 4k:w-[30rem]"
            alt="Email marketing feature overlay decoration"
          />
        </VideoContainer>

        <VideoContainer sectionRef={$cardSectionRef6} videoUrl={seoVideo}>
          <img
            src={revealItem6Overlay}
            className="absolute top-[20.75rem] left-[3.75rem] w-[33.375rem] h-auto object-contain 4k:top-[24rem] 4k:left-[4.5rem] 4k:w-[40rem]"
            alt="SEO feature overlay decoration"
          />
          <BlueGradient />
        </VideoContainer>
      </div>
    </section>
  );
}

/* Gradients — scaled for 4K */
export const GreenGradient = () => {
  return (
    <div
      className="
        z-[-1] absolute top-[3.375rem] -left-[4.5625rem]
        w-[55.375rem] h-[55.375rem]
        4k:top-[4rem] 4k:-left-[5.5rem] 4k:w-[65rem] 4k:h-[65rem]
      "
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #C4EEE3 0%, #EFF9FF 50.13%, rgba(255, 255, 255, 0) 100%)",
      }}
    />
  );
};

export const BlueGradient = () => {
  return (
    <div
      className="
        z-[-1] absolute top-1/2 -translate-y-1/2 -left-[150%]
        w-[113.5rem] h-[113.5rem]
        4k:-left-[160%] 4k:w-[130rem] 4k:h-[130rem]
      "
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(197, 230, 255, 0.72) 0%, rgba(200, 229, 255, 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)",
      }}
    />
  );
};

export const VideoContainer = ({
  children,
  road,
  roadClass,
  videoUrl,
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  videoUrl: string;
  children: React.ReactNode;
  road?: string;
  roadClass?: string;
}) => {
  return (
    <div
      className="relative w-full h-[100vh] 4k:h-[100vh] flex items-center justify-end pr-[5.875rem] 4k:[padding-right:clamp(5.875rem,calc(5.875rem+((100vw-2050px)/2000px)*5.875rem),11.75rem)]"
      ref={sectionRef}
    >
      {road && (
        <img
          src={road}
          alt="Right Property feature section background road decoration"
          className={cn(
            "absolute left-0 top-0 w-full h-auto object-contain",
            roadClass
          )}
        />
      )}

      <div className="relative will-change-transform">
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="
            w-[40.1875rem] h-[26.75rem] object-cover
            4k:[width:clamp(40.1875rem,calc(40.1875rem+((100vw-2050px)/2000px)*41.8125rem),65rem)]
            4k:[height:clamp(26.75rem,calc(26.75rem+((100vw-2050px)/2000px)*25.25rem),52rem)]
          "
        />
        {children}
      </div>
    </div>
  );
};
