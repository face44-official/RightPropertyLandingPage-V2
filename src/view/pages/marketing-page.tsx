import MarketingPowerhouseSection from "../components/marketing/marketing-powehouse-section";
import MarketingSplitTextSection from "../components/marketing/marketing-splittext-section";
import seeInPersonImage from "@/assets/v3/marketing/see_in_person_image.png";
import { TitleBig } from "../components/ui/title";
import macbookImage from "@/assets/v3/marketing/macbook_pro.png";
import TwoColumnTextImageBlock from "../components/ui/two-column-text-image-block";
import templatesImage from "@/assets/v3/marketing/templates.png";
import emailImage from "@/assets/v3/marketing/email_photo.png";
import automated from "@/assets/v3/automated.png"
import BinarySection, { BinaryBlockImage } from "../components/binary-section";
import ScheduleADemoSection from "../components/schedule-a-demo/section";
import MarketingEverythingConnects from "../components/marketing/marketing-everything-connects";
import OneColumnTitleImageDescription from "../components/ui/one-column-title-image-description";
import leadPresentationImage from "@/assets/v3/marketing/lead_presentation.png";
import homeInsideImage from "@/assets/v3/marketing/home_inside.png";
import homeInsideOverlay1 from "@/assets/v3/marketing/home_inside_overlay_1.png";
import homeInsideOverlay2 from "@/assets/v3/marketing/home_inside_overlay_2.png";
export default function MarketingPage() {
    return <main id="sales-page" className="relative z-[20] pt-[14.56rem] lg:pt-[6rem] flex flex-col justify-center">
        <TitleBig className="w-[54.5rem] lg:w-full lg:px-4 mb-[3.75rem] lg:mb-[1.875rem] mx-auto text-center">Marketing That Connects Directly to Sales.</TitleBig>
        <img src={macbookImage} className="w-[62.5rem] h-auto mb-[19.5rem] lg:w-full lg:px-4 mx-auto" alt="apple pro xdr" />
        <MarketingSplitTextSection />
        <MarketingPowerhouseSection />
        <TwoColumnTextImageBlock className="pb-[24.1875rem]" title="What Buyers See in Person, They See Online." description="Bring your immersive presentations to the web. From site plans to media galleries, the website reflects your project in a professional, interactive format—ready to convert." image={seeInPersonImage} variant={"image-left"} />
        <OneColumnTitleImageDescription className="pb-[32.8125rem]" title="Ready-Made Templates. Full Creative Control." description="Choose from ready-to-use templates or fully customize your campaign pages with a powerful but intuitive CMS. Keep your brand consistent and your setup hassle-free." image={templatesImage} />
        <TwoColumnTextImageBlock title="Create and Send Campaigns Without Leaving the Platform." description="Engage prospects with beautifully designed emails and automation tools—all built in. Whether launching a campaign or nurturing leads, you’re in control." image={emailImage} variant={"image-right"} />
        <div className="lg:px-4">
            <BinarySection className="py-[25.75rem]" subHeader="Did you know?" title="Automated where it matters" description="We simplify the complex. Many steps you'd expect to handle manually are fully automated behind the scenes." image={<BinaryBlockImage path={automated} />} />

        </div>
        <MarketingEverythingConnects />
        <OneColumnTitleImageDescription className="pb-[32.8125rem]" title={<div className="w-[36.25rem] lg:w-full">
            What Buyers See in Person, They See Online.
        </div>} description={<div className="w-[42.9325rem] lg:w-full">
            Bring your immersive presentations to the web. From site plans to media galleries, the website reflects your project in a professional, interactive format—ready to convert.
        </div>} image={<TheySeeOnlineImage/>} />
        <ScheduleADemoSection />
    </main>
}


const TheySeeOnlineImage = () => {
    return (
        <div className="flex lg:flex-col gap-[1.625rem] lg:gap-4">
            <img src={leadPresentationImage} alt="They See Online" className="w-[46.625rem] h-auto lg:w-full" />
            <div className="relative">
                <img src={homeInsideImage} alt="They See Online" className="w-[46.25rem] h-auto lg:w-full" />
                <img src={homeInsideOverlay1} alt="They See Online" className="absolute -top-[4.81rem] -left-[4rem] w-[7.56rem] h-auto lg:w-full" />
                <img src={homeInsideOverlay2} alt="They See Online" className="absolute -bottom-[6.31rem] right-[5rem] w-[10rem] h-auto lg:w-full" />
            </div>
        </div>
    )
}