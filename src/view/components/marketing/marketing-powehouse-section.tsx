
import Accessibility from "@/view/components/accessiblity"

import presentSmarterBg from "@/assets/v3/marketing/marketing_powerhouse_bg.webp"
import presentSmarterBgMobile from "@/assets/v3/marketing/powerhouse_mobile.webp"
import { Parallax } from "../parallax"
import startIcon from '@/assets/v3/star_icon.svg';
import spaceIcon from '@/assets/v3/space_icon.svg';
export default function MarketingPowerhouseSection() {

    const items = [
        {
            title: "One-Click Website Launch",
            description: "Spin up a full project website with a single click using the same assets from your Surface or Space setup.",
            icon: <img src={startIcon} alt="One-click website launch feature icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        },
        {
            title: "Complete Marketing Platform",
            description: "More than a simple page—it’s a complete marketing platform, seamlessly connected to your built-in CRM.",
            icon: <img src={spaceIcon} alt="Complete marketing platform feature icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        }
    ]

    return (
        <div className="mb-[12.5rem] lg:mb-[3rem] bg-[#EEF1F7] relative">
            <section className="rp-container lg:bg-none! lg:h-auto! relative z-[8]" style={{ width: "100%", height: "auto", backgroundImage: `url(${presentSmarterBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <img src={presentSmarterBgMobile} alt="Marketing powerhouse mobile background" className="z-[-1] w-full h-auto hidden lg:block mb-[2.5rem]" />
                <div className="flex p-[7.5rem] justify-end lg:p-4">
                    <Parallax id="present-smarter-section" speed={1.3}>
                        <div className="w-[49.375rem] lg:w-full">
                            <Accessibility title="More than a Website— A Marketing Powerhouse." subHeading="One-Click Website Launch" description="With just one click, you can launch a full project website using the same assets from your Surface or Space setup. It’s not a basic landing page—it’s a complete marketing platform, seamlessly linked to your built-in CRM." items={items} />
                        </div>
                    </Parallax>
                </div>

            </section>
            <div className="hidden lg:block absolute bottom-0 w-full h-[15rem] bg-white z-[0]">

            </div>
        </div>


    )
}





