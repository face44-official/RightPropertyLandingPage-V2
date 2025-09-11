import gsap from "gsap";
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function MarketingSplitTextSection() {
    useEffect(() => {
        let tl: gsap.core.Timeline;
        const matchMedia = gsap.matchMedia();

        const splitAnimation = () => {
            const splitText = new SplitText(".marketing-splittext-section-text", {
                type: "chars",
                linesClass: "line"
            })

            tl = gsap.timeline({
                onComplete: () => {
                    // Refresh other ScrollTriggers after this completes
                    ScrollTrigger.refresh();
                },
                scrollTrigger: {
                    trigger: "#splittext-pin",
                    start: "center center",
                    end: "+=1800px",
                    pin: '#splittext-pin',
                    scrub: true,
                    pinSpacing: true,
                    id: "marketing-splittext-section",
                    refreshPriority: 10, // Highest priority
                }
            }).set(
                splitText.chars,
                {
                    color: () => "#232323",
                    stagger: 0.1
                },
                0.1
            );
        }

        matchMedia.add(
            "(min-width: 769px)",
            () => {
                splitAnimation();
            },
        );





        return () => {
            if (tl) {
                tl.kill();
            }
            // Clean up ScrollTrigger
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.id === "marketing-splittext-section") {
                    trigger.kill();
                }
            });
        };

    }, [])
    return (
        <div className="pb-[20rem] lg:pb-[7.5rem]">
            <div id='splittext-pin' >
                <section id="marketing-splittext-section" className="rp-container flex items-center justify-center lg:px-4  " aria-label="Experience Features">
                    <div className='max-w-[57rem] lg:max-w-full'>
                        <h2 className="mb-[2rem] font-geist-mono font-normal text-16 leading-[150%] tracking-[2%] uppercase text-squid-ink lg:text-14 lg:mb-[1.25rem]">
                            MARKETING
                        </h2>
                        <p className='text-[#D7D7D7] mb-[2.5rem] font-general-sans font-medium text-40 lg:text-28 lg:text-[#232323] leading-[140%] -tracking-[0.01em] marketing-splittext-section-text'>
                            Right Property gives your team a full-featured, SEO-ready website experience that mirrors your in-person presentation—plus powerful tools to launch campaigns, track leads, and drive conversions. No extra tools needed.
                        </p>
                        <h3 className="font-geist-mono font-normal text-16 leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                            Trusted by <span className="hidden lg:inline"><br />
                            </span> <span className="font-semibold">forward-thinking developers</span>
                        </h3>

                    </div>

                </section>
            </div>
        </div>


    );
}
