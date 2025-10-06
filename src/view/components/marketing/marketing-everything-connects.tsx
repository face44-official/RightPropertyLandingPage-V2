
import Accessibility from "@/view/components/accessiblity"

import everythingConnectsBg from "@/assets/v3/convert_more_leads_desktop.webp"
import everythingConnectsMobile from "@/assets/v3/mobile_insights.webp"
import { Parallax } from "../parallax"
import startIcon from '@/assets/v3/star_icon.webp';
import spaceIcon from '@/assets/v3/space_icon.webp';
export default function MarketingEverythingConnects() {
    
    const items = [
        {
            title: "Understand Every Buyer Move",
            description: "Capture each interaction as it happens and feed it into your CRM for a complete picture of buyer intent.",
            icon: <img src={startIcon} alt="Buyer tracking feature icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        },
        {
            title: "Close Deals Faster & Smarter",
            description: "Turn real-time insights into decisive action, guiding every prospect seamlessly from first click to close.",
            icon: <img src={spaceIcon} alt="Deal closing feature icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        }
    ]

    return (
        <div className="mb-[12.5rem] lg:mb-[3rem] bg-[#EEF1F7] h-[63.25rem] lg:h-auto relative z-[20]">
            <section className="rp-container lg:bg-none! lg:h-auto! relative" style={{ width: "100%",height:"auto", backgroundImage: `url(${everythingConnectsBg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                <img src={everythingConnectsMobile} alt="CRM connection insights mobile background" className="z-[-1] w-full h-auto hidden lg:block mb-[2.5rem]" />
                <div className="flex p-[7.5rem] justify-start lg:p-4">
                    <Parallax id="present-smarter-section" speed={1.3}>
                        <div className="w-[49.375rem] lg:w-full">
                            <Accessibility title="From Click to Close—Everything Connects." subHeading="CRM-Connected Tracking" description="Website behavior flows directly into your CRM. No disconnected tools. Just real-time insight into what buyers want—and how to turn that into action." items={items} />
                        </div>
                    </Parallax>
                </div>
                
            </section>
            <div className="hidden lg:block absolute bottom-0 w-full h-[15rem] bg-white z-[-1]">

                </div>
        </div>


    )
}





