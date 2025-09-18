import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import FlippingCardContent from "../revealing-items/flipping-card-content";
import RevealItemsIndicator from "../revealing-items/reveal-items-indicator";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import revealItem1Overlay from "@/assets/v3/experience/experience_video_overlay_1.png"
import revealItem2Overlay from "@/assets/v3/experience/experience_video_overlay_2.png"
import interactiveVideo from "@/assets/v3/interactive_website.webm"
import marketingOption1 from "@/assets/v3/marketing_option1.webm"
import { cn } from "@/lib/utils";
gsap.registerPlugin(ScrollTrigger, Flip);

const flippingCardContents = [
    {
        title: "Storytelling  that Sells",
        description: "Forget static presentations. With Right Property, salespeople guide each conversation fluidly—opening site plans, maps, galleries, unit details, videos, and even virtual tours at the right moment. It’s non-linear, intuitive, and powerful.",
        useButton: false,
    },
    {
        title: "Smart Behind the Scenes",
        description: "As buyers engage with your project, Right Property logs meaningful moments—from what they view to what they ask. Each interaction builds a richer profile, while sales rep activity is logged for performance insights and KPI tracking.",
        useButton: true,
    },
]
export default function ExperienceFlippingCardsSection({
}: {
    }) {
    const $ref = useRef<HTMLDivElement>(null);
    const $pinRef = useRef<HTMLDivElement>(null);
    const $cardRef = useRef<HTMLDivElement>(null);
    const $previousIndexRef = useRef<number>(0);
    const cardContents = flippingCardContents;
    const [currentItem, setCurrentItem] = useState(0);
    const $flipTl = useRef<GSAPTimeline>(null);
    const [frontFaceContent, setFrontFaceContent] = useState(flippingCardContents[0]);
    const [backFaceContent, setBackFaceContent] = useState(flippingCardContents[1]);
    const $direction = useRef<1 | -1>(null);
    const animationQueue = useRef<Array<{ direction: 1 | -1, index: number }>>([]);
    const isAnimating = useRef(false);
    const $cardSectionRef1 = useRef<HTMLDivElement>(null);
    const $cardSectionRef2 = useRef<HTMLDivElement>(null);
    const refList = [
        $cardSectionRef1,
        $cardSectionRef2,
    ];
    const processAnimationQueue = () => {
        if (isAnimating.current || animationQueue.current.length === 0) return;

        const nextAnimation = animationQueue.current.shift();
        if (!nextAnimation) return;

        executeFlipAnimation(nextAnimation.direction, nextAnimation.index);
    };

    const queueFlipAnimation = (direction: 1 | -1, index: number) => {
        // Add to queue
        animationQueue.current.push({ direction, index });
        // Process queue
        processAnimationQueue();
    };

    const executeFlipAnimation = (direction: 1 | -1, targetIndex: number) => {
        if (isAnimating.current) return;

        isAnimating.current = true;
        const timing = 1;
        const rotationX = direction === 1 ? "-=180" : "+=180";

        $flipTl.current = gsap.timeline({
            onStart: () => {
                const totalCards = cardContents.length;
                if (direction === 1) {
                    if (targetIndex == totalCards - 1) {
                        if (targetIndex % 2 != 0) {
                            setBackFaceContent(cardContents[targetIndex]);

                        } else {
                            setFrontFaceContent(cardContents[targetIndex]);

                        }
                    } else {
                        if (targetIndex % 2 != 0) {
                            setBackFaceContent(cardContents[(targetIndex)]);

                        } else {
                            setFrontFaceContent(cardContents[((targetIndex))]);

                        }
                    }
                } else {

                    if (targetIndex == 0) {
                        if (targetIndex % 2 != 0) {
                            setBackFaceContent(cardContents[(targetIndex)]);

                        } else {
                            setFrontFaceContent(cardContents[(targetIndex)]);

                        }
                    } else {
                        if (targetIndex % 2 != 0) {
                            setBackFaceContent(cardContents[targetIndex]);

                        } else {
                            setFrontFaceContent(cardContents[targetIndex]);

                        }
                    }
                }

            },
            onComplete: () => {
                isAnimating.current = false;
                // Process next animation in queue
                setTimeout(() => processAnimationQueue(), 0);
            }
        });
        $flipTl.current.to(".qf-card", { rotationX, duration: timing });
        $flipTl.current.to(".quickflip", { z: 50, duration: timing / 2, yoyo: true, repeat: 1 }, 0);
    };
    useEffect(() => {
        if ($direction.current !== null) {
            queueFlipAnimation($direction.current, currentItem);
        }
    }, [currentItem])
    useEffect(() => {
        let tlList: gsap.core.Timeline[] = [];
        gsap.timeline({
            scrollTrigger: {
                trigger: '#experience-flipping-cards',
                start: "top top",
                pin: $pinRef.current,
                end: "bottom bottom",
                scrub: true,
                id: "experience-flipping-cards",
            },
        })
        ScrollTrigger.refresh();
        tlList = Array.from({ length: 2 }, (_, index) => {
            const use_index = index + 0;
            return gsap.timeline({
                scrollTrigger: {
                    trigger: refList[use_index].current,
                    start: "top top+=25%",
                    end: "bottom bottom",
                    id: `experience-flipping-cards-${use_index}`,
                    refreshPriority: 2,
                    scrub: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    pinSpacing: true,
                    onEnter: (self) => {
                        $direction.current = self.direction as 1 | -1;
                        setCurrentItem(use_index);
                        $previousIndexRef.current = index;
                    },
                    onLeaveBack: () => {
                        if (use_index == 0) return;
                        $direction.current = -1;
                        setCurrentItem(use_index - 1);
                        $previousIndexRef.current = index;
                    },
                }
            });
        })



        return () => {
            // Clean up timeline and ScrollTrigger
            tlList.forEach(tl => {
                tl.kill();
            });
            // Clear animation queue
            animationQueue.current = [];
            isAnimating.current = false;
            // Clean up any remaining flip timelines
            if ($flipTl.current) {
                $flipTl.current.kill();
            }
        };
    }, [])
    return <section id="experience-flipping-cards" ref={$ref} className="relative h-[200vh]  lg:hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EDF7FC 20.67%)" }}>
        {/* <BlueGradient className="left-[11.375rem] top-[62.1875rem]" />
        <BlueGradient className="-left-[26.425rem] top-[7.0625rem] w-[137.8125rem] h-[137.8125rem]" /> */}
        <div className="max-w-[1680px] mx-auto w-full relative z-[50]">
            <div ref={$pinRef} className="absolute top-[215px] left-[109px]" >
                <div ref={$cardRef} className="card quickflip relative w-[48.9375rem] h-[561px]" style={{ perspective: "800px", transformStyle: "preserve-3d" }}>
                    <div className="qf-card card-front relative top-0 left-0 w-full h-full backface-hidden transform-3d origin-center">
                        <FlippingCardContent {...frontFaceContent} />
                    </div>
                    <div className="qf-card card-back absolute top-0 left-0 w-full h-full backface-hidden transform-3d origin-center rotate-y-180 rotate-z-180">
                        <FlippingCardContent {...backFaceContent} />
                    </div>
                </div>

                <div className="absolute top-[7.8125rem] -left-[4.375rem]">
                    <RevealItemsIndicator items={cardContents.length} currentItem={currentItem} />
                </div>
            </div>
        </div>
        <div className="rp-container">
            <VideoContainer sectionRef={$cardSectionRef1} videoUrl={marketingOption1}>
                <img src={revealItem1Overlay} className=" absolute -top-[4.8125rem] left-[4.8125rem] w-[32.25rem] h-auto object-contain" />
            </VideoContainer>
            <VideoContainer sectionRef={$cardSectionRef2} videoUrl={interactiveVideo}>
                <img src={revealItem2Overlay} className=" absolute -top-[3.625rem] left-[3.3125rem] w-[9.625rem] h-auto object-contain" />
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
