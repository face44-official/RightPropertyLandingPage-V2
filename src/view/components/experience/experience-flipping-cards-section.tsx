import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlippingCardContent from "../revealing-items/flipping-card-content";
import RevealItemsIndicator from "../revealing-items/reveal-items-indicator";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import revealItem1Overlay from "@/assets/v3/experience/experience_video_overlay_1.webp"
import revealItem2Overlay from "@/assets/v3/experience/experience_video_overlay_2.webp"
import storytelling from "@/assets/v3/experience/storytelling.webm"
import behindthescenes from "@/assets/v3/experience/behind_the_scenes.webm"
import { cn } from "@/lib/utils";
gsap.registerPlugin(ScrollTrigger, Flip);

const flippingCardContents = [
    {
        title: "Storytelling that Sells",
        description: "Forget static presentations. With Right Property, salespeople guide each conversation fluidly—opening site plans, maps, galleries, unit details, videos, and even virtual tours at the right moment. It’s non-linear, intuitive, and powerful.",
        useButton: false,
    },
    {
        title: "Smart Behind the Scenes",
        description: "As buyers engage with your project, Right Property logs meaningful moments—from what they view to what they ask. Each interaction builds a richer profile, while sales rep activity is logged for performance insights and KPI tracking.",
        useButton: true,
    },
]
export default function ExperienceFlippingCardsSection() {
    const $ref = useRef<HTMLDivElement>(null);
    const $pinRef = useRef<HTMLDivElement>(null);
    const $cardRef = useRef<HTMLDivElement>(null);
    const cardContents = flippingCardContents;
    const [currentItem, setCurrentItem] = useState(0);
    const $cardSectionRef1 = useRef<HTMLDivElement>(null);
    const $cardSectionRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let pinTl: GSAPTimeline | null = null;
        pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#experience-flipping-cards',
                start: "top top",
                pin: $pinRef.current,
                end: "bottom bottom",
                scrub: true,
                id: "experience-flipping-cards",
                onUpdate: (self) => {
                    if (self.progress > 0.5) {
                        setCurrentItem(1);
                    } else {
                        setCurrentItem(0);
                    }
                },
            },
        })

        return () => {
            if (pinTl && pinTl.kill) {
                pinTl.kill();
            }
        };
    }, [])

    return <section id="experience-flipping-cards" ref={$ref} className="relative h-[200vh]  lg:hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EDF7FC 20.67%)" }}>
        {/* <BlueGradient className="left-[11.375rem] top-[62.1875rem]" />
        <BlueGradient className="-left-[26.425rem] top-[7.0625rem] w-[137.8125rem] h-[137.8125rem]" /> */}
        <div className="absolute bottom-0 left-0 right-0 h-[20rem] bg-gradient-to-b from-transparent to-white z-[1]"></div>
        <div className="max-w-[1680px] mx-auto w-full relative z-[50]">
            <div ref={$pinRef} className="absolute top-[215px] left-[109px]" >
                <div ref={$cardRef} className="card quickflip relative w-[48.9375rem] h-[561px]" style={{ perspective: "800px", transformStyle: "preserve-3d" }}>
                    <div className="qf-card card-front relative top-0 left-0 w-full h-full backface-hidden transform-3d origin-center">
                        <FlippingCardContent key={currentItem} {...cardContents[currentItem]} />
                    </div>
                </div>

                <div className="absolute top-[7.8125rem] -left-[4.375rem]">
                    <RevealItemsIndicator key={currentItem} items={cardContents.length} currentItem={currentItem} />
                </div>
            </div>
        </div>
        <div className="rp-container">
            <VideoContainer sectionRef={$cardSectionRef1} videoUrl={storytelling}>
                <img src={revealItem1Overlay} className=" absolute -top-[4.8125rem] left-[4.8125rem] w-[32.25rem] h-auto object-contain" alt="Storytelling video overlay decoration" />
            </VideoContainer>
            <VideoContainer sectionRef={$cardSectionRef2} videoUrl={behindthescenes}>
                <img src={revealItem2Overlay} className=" absolute -top-[3.625rem] left-[3.3125rem] w-[9.625rem] h-auto object-contain" alt="Behind the scenes video overlay decoration" />
            </VideoContainer>
        </div>

    </section>
}

export const BlueGradient = ({ className }: { className: string }) => {
    const classNames = cn("z-[-1] absolute top-1/2 -translate-y-1/2 -left-[150%] w-[102.1875rem] h-[102.1875rem]", className)
    return <div className={classNames} style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(197, 230, 255, 0.72) 0%, rgba(200, 229, 255, 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)" }}>

    </div>
}
export const VideoContainer = ({
    children,
    videoUrl,
    sectionRef
}: {
    sectionRef: React.RefObject<HTMLDivElement | null>,
    videoUrl: string
    children: React.ReactNode,
    road?: string
}) => {
    return <div ref={sectionRef} className="relative w-full h-[100vh] flex items-center justify-end pr-[6.875rem]">

        <div className="relative">
            <video src={videoUrl} autoPlay muted loop playsInline className=" w-[40.1875rem] h-[26.75rem] object-cover" />
            {children}
        </div>

    </div>
}
