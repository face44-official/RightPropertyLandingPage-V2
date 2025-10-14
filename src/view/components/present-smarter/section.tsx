import presentSmarterBg from "@/assets/v3/present_smarter_desktop.webp"
import presentSmarterBgMobile from "@/assets/v3/mobile_present_smarter.webp"
import Accessibility from "@/view/components/accessiblity"
import { Parallax } from "../parallax"
import startIcon from '@/assets/v3/star_icon.svg';
import spaceIcon from '@/assets/v3/space_icon.svg';
export default function PresentSmarterSection() {

    const items = [
        {
            title: <span>Interactive &<br />Non-linear storytelling</span>,
            description: "Break the limitations of traditional presentations. Let your audience explore freely, follow their curiosity, and experience your project in a way that fits the moment.",
            icon: <img src={startIcon} alt="interactive storytelling icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        },
        {
            title: <span>Ready for Every Screen,<br />Every Space</span>,
            description: "Whether it’s a large-scale presentation in a sales suite or a one-on-one meeting on a tablet, Right Property adapts to the setting—without losing impact.",
            icon: <img src={spaceIcon} alt="responsive design icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        }
    ]

    return (
        <div className="mb-[30rem] lg:mb-[3rem] bg-[#EEF1F7] h-[80vh] lg:h-auto overflow-visible relative content-visibility-auto">
            <section className="">
                <img src={presentSmarterBgMobile} alt="present smarter" className="z-[-1] w-full h-auto hidden lg:block mb-[2.5rem] rp-container" />
                <div className="lg:bg-none! lg:h-auto! relative z-[8] flex p-[7.5rem] pl-[48vw] justify-start lg:p-4">
                    <img src={presentSmarterBg} alt="present smarter" className="absolute left-0 top-0 w-[50vw] object-cover h-[80vh] object-top lg:hidden" />

                    <Parallax id="present-smarter-section" speed={1.3}>
                        <div className="w-[49.375rem] lg:w-full">
                            <Accessibility title="Present smarter, your way" subHeading="Presentation" description="A property is more than floor plans and price lists - it’s an experience waiting to be brought to life. Our technology turns presentations into interactive journeys, tailored for any setting." items={items} />
                        </div>
                    </Parallax>
                </div>

            </section>
            <div className="hidden lg:block absolute bottom-0 w-full h-[15rem] bg-white z-[0]">

            </div>
        </div>


    )
}





