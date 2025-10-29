import Accessibility from "@/view/components/accessiblity";
import convertMoreLeads from "@/assets/v3/convert_more_leads_desktop.webp"
import convertMoreLeadsMobile from "@/assets/v3/mobile_insights.webp"
import startIcon from '@/assets/v3/star_icon.svg';
import spaceIcon from '@/assets/v3/space_icon.svg';
import { Parallax } from "../parallax";
export default function ConvertMoreLeadsSection() {
    const items = [
        {
            icon: <img src={startIcon} alt="Performance tracking feature icon" className="w-[5rem] h-auto object-contain" />,
            title: <span>Track performance,<br />improve results</span>,
            description: "See how your team performs, track KPIs, and optimize what works—without manual effort.",
        },
        {
            icon: <img src={spaceIcon} alt="User-centered platform feature icon" className="w-[5rem] h-auto object-contain" />,
            title: <span>User-centered and<br />intuitive platform</span>,
            description: "No clutter, no complexity. It’s just a CRM that’s intuitive, focused, and easy to use from day one.",
        }
    ]
    return (
        <div className="mb-[30rem] lg:mb-[0] bg-[#EEF1F7] h-[45.25rem] lg:h-auto overflow-visible relative content-visibility-auto">


            <section className="">
                <div className="relative hidden lg:block">
                    <img src={convertMoreLeadsMobile} alt="Right Property lead conversion insights mobile view" className="z-[-1] w-full h-auto rp-container" />
                    <div className="absolute right-0 bottom-[0] w-[375px] h-[68px]" style={{ background: "linear-gradient(180deg, rgba(238, 241, 247, 0) 0%, #EEF1F7 100%)" }} />
                </div>
                <div className="rp-container lg:bg-none! lg:h-auto! relative z-[8] flex p-[7.5rem] justify-start lg:p-4">
                    <img src={convertMoreLeads} alt="Right Property lead conversion insights desktop background" className="z-[-1] h-[63.25rem] absolute top-0 left-0 w-full lg:hidden" />

                    <Parallax id="convert-more-leads-section" speed={1.3}>
                        <div className="w-[49.375rem] lg:w-full 4k:w-[60rem]">

                            <Accessibility subHeading="SALES" title="Convert more leads with smarter sales insights" description="Track what matters, follow up smarter, and close with confidence—powered by a CRM made for property sales." items={items} />
                        </div>
                    </Parallax>
                </div>

            </section>

            <div className="hidden lg:block absolute bottom-0 w-full h-[13rem] bg-white z-[5]">

            </div>
        </div>
    )
}