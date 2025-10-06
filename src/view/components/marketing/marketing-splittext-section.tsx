import gsap from "gsap";
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { withRevealText } from "../common/with-reveal-text";
gsap.registerPlugin(SplitText, ScrollTrigger);

const MarketingSplitText = ({ ref }: { ref?: React.Ref<HTMLDivElement>; }) => {

    return (
        <div className=" pb-[20rem] lg:pb-[7.5rem]">
            <div id='splittext-pin' >
                <section ref={ref} id="experience-splittext-section" className="rp-container flex items-center justify-center lg:px-4  " aria-label="Experience Features">
                    <div className='max-w-[57rem] lg:max-w-full'>
                        <h2 className="mb-[2rem] font-geist-mono font-normal text-16 leading-[150%] tracking-[4%] uppercase text-squid-ink lg:text-14 lg:mb-[1.25rem]">
                            MARKETING
                        </h2>
                        <div
                            data-bg-color="#C4C4C4"
                            data-fg-color="#000000"
                            className='reveal-type text-[#D7D7D7] mb-[2.5rem] font-general-sans font-medium text-40 lg:text-28 lg:text-[#232323] leading-[140%] -tracking-[0.01em] experience-splittext-section-text'
                            role="paragraph">
                            Right Property gives your team a full-featured, SEO-ready website experience that mirrors your in-person presentation—plus powerful tools to launch campaigns, track leads, and drive conversions. No extra tools needed.
                        </div>
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
export const MarketingSplitTextSection = withRevealText(MarketingSplitText);
