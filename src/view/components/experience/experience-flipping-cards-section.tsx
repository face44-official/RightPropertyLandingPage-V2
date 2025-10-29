import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlippingCardContent from "../revealing-items/flipping-card-content";
import RevealItemsIndicator from "../revealing-items/reveal-items-indicator";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import revealItem1Overlay from "@/assets/v3/experience/experience_video_overlay_1.webp";
import revealItem2Overlay from "@/assets/v3/experience/experience_video_overlay_2.webp";
import storytelling from "@/assets/v3/experience/storytelling.webm";
import behindthescenes from "@/assets/v3/experience/behind_the_scenes.webm";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, Flip);

const flippingCardContents = [
  {
    title: "Storytelling that Sells",
    description:
      "Forget static presentations. With Right Property, salespeople guide each conversation fluidly—opening site plans, maps, galleries, unit details, videos, and even virtual tours at the right moment. It’s non-linear, intuitive, and powerful.",
    useButton: false,
  },
  {
    title: "Smart Behind the Scenes",
    description:
      "As buyers engage with your project, Right Property logs meaningful moments—from what they view to what they ask. Each interaction builds a richer profile, while sales rep activity is logged for performance insights and KPI tracking.",
    useButton: true,
  },
];

export default function ExperienceFlippingCardsSection() {
  const $ref = useRef<HTMLDivElement>(null);
  const $pinRef = useRef<HTMLDivElement>(null);
  const $cardRef = useRef<HTMLDivElement>(null);
  const cardContents = flippingCardContents;
  const [currentItem, setCurrentItem] = useState(0);
  const $cardSectionRef1 = useRef<HTMLDivElement>(null);
  const $cardSectionRef2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    return gsap.timeline({
      scrollTrigger: {
        trigger: "#experience-flipping-cards",
        start: "top top",
        pin: $pinRef.current,
        end: "bottom bottom",
        scrub: true,
        id: "experience-flipping-cards",
        onUpdate: (self) => {
          setCurrentItem(self.progress > 0.5 ? 1 : 0);
        },
      },
    });
  });

  return (
    <section
      id="experience-flipping-cards"
      ref={$ref}
      className="
        relative lg:hidden
        h-[200vh] 4k:h-[220vh]
      "
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EDF7FC 20.67%)" }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-[20rem] bg-gradient-to-b from-transparent to-white z-[1]" />
      <div className="max-w-[1680px] mx-auto w-full relative z-[50]">
        <div
          ref={$pinRef}
          className="
            absolute top-[215px] left-[109px]
            4k:top-[240px] 4k:left-[140px]
          "
        >
          <div
            ref={$cardRef}
            className="
              card quickflip relative
              w-[48.9375rem] h-[561px]
              4k:w-[60rem] 4k:h-[640px]
            "
            style={{ perspective: "800px", transformStyle: "preserve-3d" }}
          >
            <div className="qf-card card-front relative top-0 left-0 w-full h-full backface-hidden transform-3d origin-center">
              <FlippingCardContent key={currentItem} {...cardContents[currentItem]} />
            </div>
          </div>

          <div className="absolute top-[7.8125rem] -left-[4.375rem] 4k:top-[9rem] 4k:-left-[5.5rem]">
            <RevealItemsIndicator key={currentItem} items={cardContents.length} currentItem={currentItem} />
          </div>
        </div>
      </div>

      <div className="rp-container">
        <VideoContainer sectionRef={$cardSectionRef1} videoUrl={storytelling}>
          <img
            src={revealItem1Overlay}
            className="
              absolute -top-[4.8125rem] left-[4.8125rem] w-[32.25rem] h-auto object-contain
              4k:-top-[5.75rem] 4k:left-[5.25rem] 4k:w-[38rem]
            "
            alt="Storytelling video overlay decoration"
          />
        </VideoContainer>

        <VideoContainer sectionRef={$cardSectionRef2} videoUrl={behindthescenes}>
          <img
            src={revealItem2Overlay}
            className="
              absolute -top-[3.625rem] left-[3.3125rem] w-[9.625rem] h-auto object-contain
              4k:-top-[4.5rem] 4k:left-[3.75rem] 4k:w-[12rem]
            "
            alt="Behind the scenes video overlay decoration"
          />
        </VideoContainer>
      </div>
    </section>
  );
}

export const BlueGradient = ({ className }: { className: string }) => {
  const classNames = cn(
    `
      z-[-1] absolute top-1/2 -translate-y-1/2 -left-[150%]
      w-[102.1875rem] h-[102.1875rem]
      4k:-left-[160%] 4k:w-[120rem] 4k:h-[120rem]
    `,
    className
  );
  return (
    <div
      className={classNames}
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(197, 230, 255, 0.72) 0%, rgba(200, 229, 255, 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)",
      }}
    />
  );
};

export const VideoContainer = ({
  children,
  videoUrl,
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  videoUrl: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      ref={sectionRef}
      className="
        relative w-full h-[100vh] flex items-center justify-end pr-[6.875rem]
        4k:h-[110vh] 4k:pr-[8rem]
      "
    >
      <div className="relative">
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="
            w-[40.1875rem] h-[26.75rem] object-cover
            4k:w-[48rem] 4k:h-[32rem]
          "
        />
        {children}
      </div>
    </div>
  );
};
