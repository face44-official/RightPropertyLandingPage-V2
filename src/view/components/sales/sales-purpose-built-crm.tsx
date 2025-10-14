
import Accessibility from "@/view/components/accessiblity"
import crmBg from "@/assets/v3/sales/a_crm_bg_desktop.webp"
import crmBgMobile from "@/assets/v3/sales/a_crm_mobile.webp"
import { Parallax } from "../parallax"
import startIcon from '@/assets/v3/star_icon.svg';
import spaceIcon from '@/assets/v3/space_icon.svg';
export default function SalesPurposeBuiltCrmSection() {

    const items = [
        {
            title: <span>Smart & Simplified<br/>Lead Tracking</span>,
            description: "Log every inquiry instantly and never lose sight of a potential deal opportunity. Track prospects from first contact to successful close.",
            icon: <img src={startIcon} alt="Lead tracking feature icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        },
        {
            title: <span>Clear & Seamless<br/>Team Alignment</span>,
            description: "Keep everyone on the same page with shared notes, updates, and detailed progress tracking—no extra tools needed.",
            icon: <img src={spaceIcon} alt="Team alignment feature icon" className="w-[5rem] lg:w-[3.5rem] h-auto object-contain" />
        }
    ]

    return (
        <div className="mb-[12.5rem] lg:mb-[3rem] bg-[#EEF1F7] relative">
            <section className="rp-container lg:bg-none! lg:h-auto! relative z-[8]" style={{ width: "100%", height: "auto", backgroundImage: `url(${crmBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <img src={crmBgMobile} alt="Right Property CRM platform mobile background" className="z-[-1] w-full h-auto hidden lg:block mb-[2.5rem]" />
                <div className="flex p-[7.5rem] justify-end lg:p-4">
                    <Parallax id="present-smarter-section" speed={1.3}>
                        <div className="w-[49.375rem] lg:w-full">
                            <Accessibility title="A CRM You’ll Actually Want to Use" subHeading="Purpose-Built CRM" description="Forget bloated systems that no one touches. Right Property’s built-in CRM is made for real estate sales—intuitive, lightweight, and focused on the data that truly matters. Log every lead, follow up faster, and keep your team aligned effortlessly." items={items} />
                        </div>
                    </Parallax>
                </div>

            </section>
            <div className="hidden lg:block absolute bottom-0 w-full h-[15rem] bg-white z-[0]">

            </div>
        </div>


    )
}





