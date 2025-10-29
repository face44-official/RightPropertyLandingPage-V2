import itsDifferentBg from "@/assets/v3/experience/its_different_bg.webp"
import itsDifferentBgMobile from "@/assets/v3/experience/its-different-mobile.webp"
import Accessibility from "@/view/components/accessiblity"
import { Parallax } from "../parallax"
import startIcon from '@/assets/v3/star_icon.svg';
import spaceIcon from '@/assets/v3/space_icon.svg';
export default function ItsDifferentSection() {

    const items = [
        {
            title: <span>Flexible<br/>Navigation</span>,
            description: "Open any section at any time. Showcase site plans, compare units, or revisit highlights as questions arise—no forced sequence.",
            icon: <img src={startIcon} alt="Flexible navigation feature icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        },
        {
            title: <span>Built for<br/>Real Conversations</span>,
            description: "Switch from structured to spontaneous. Whether it’s zooming into floor plans or jumping into a virtual tour, you’re always presentation-ready.",
            icon: <img src={spaceIcon} alt="Real conversations feature icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        }
    ]

    return (
        <div className="mb-[12.5rem] lg:mb-[3rem] bg-[#EEF1F7]">
            <section className="rp-container lg:bg-none!  lg:h-auto! relative" style={{ width: "100%", height: "auto", backgroundImage: `url(${itsDifferentBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <img src={itsDifferentBgMobile} alt="Right Property natural presentation experience mobile background" className="z-[-1] w-full h-auto hidden lg:block mb-[2.5rem]" />
                <div className="flex p-[7.5rem] justify-end lg:p-4">
                    <Parallax id="present-smarter-section" speed={1.3}>
                        <div className="w-[49.375rem] lg:w-full 4k:w-[60rem]">
                            <Accessibility title="It’s Different but Feels Natural" subHeading="Presentation" description="Forget static slides and rigid scripts. Right Property gives you full control to explore, compare, and present content on your terms—without breaking the flow." items={items} />
                        </div>
                    </Parallax>
                </div>
                <div className="p-4 hidden lg:block absolute bottom-0  z-[-1]">
                    <div className="w-full h-[15rem] bg-white ">

                    </div>
                </div>
            </section>
        </div>


    )
}





