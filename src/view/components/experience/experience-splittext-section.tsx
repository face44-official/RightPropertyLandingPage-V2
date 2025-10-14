import {gsap} from "gsap";
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { withRevealText } from "../common/with-reveal-text";
gsap.registerPlugin(SplitText, ScrollTrigger);

const ExperienceSplitText = ({ ref }: { ref?: React.Ref<HTMLDivElement>; }) => {

    return (
        <div className=" pb-[20rem] lg:pb-[7.5rem]">
            <div id='splittext-pin' >
                <section ref={ref} id="experience-splittext-section" className="rp-container flex items-center justify-center lg:px-4  " aria-label="Experience Features">
                    <div className='max-w-[57rem] lg:max-w-full'>
                        <div 
                                     data-bg-color="#C4C4C4"
                            data-fg-color="#000000"
                        className='reveal-type text-[#D7D7D7] mb-[2.5rem] font-general-sans font-medium text-40 lg:text-28 lg:text-[#232323] leading-[140%] -tracking-[0.01em] experience-splittext-section-text'>
                            Whether you're pitching in a marketing suite or walking a client through a tablet, how you present matters. Right Property gives you exactly what you need to showcase your project.
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
export const ExperienceSplitTextSection = withRevealText(ExperienceSplitText);
