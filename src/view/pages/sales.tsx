import appleProXdr from "@/assets/v3/sales/apple_pro_xdr.png";
import { TitleBig } from "../components/ui/title";
import SalesSplitTextSection from "../components/sales/sales-splittext-section";
import SalesPurposeBuiltCrmSection from "../components/sales/sales-purpose-built-crm";
import TwoColumnTextImageBlock from "../components/ui/two-column-text-image-block";
import understandEveryClickDesktop from "@/assets/v3/sales/understand_every_click_desktop.png";
import OneColumnTitleImageDescription from "../components/ui/one-column-title-image-description";
import trackPerformanceDesktop from "@/assets/v3/sales/track_performance_desktop.png";
import salesInSyncDesktop from "@/assets/v3/sales/sales_in_sync_desktop.png";
import ScheduleADemoSection from "../components/schedule-a-demo/section";
export default function SalesPage() {
    return <main id="sales-page" className="relative z-[20] pt-[14.56rem] lg:pt-[6rem] flex flex-col justify-center">
        <TitleBig className="w-[49.75rem] lg:w-full lg:px-4 mb-[4rem] lg:mb-[1.875rem] mx-auto text-center">Sales Tools Built for Real Estate, Not for Complexity</TitleBig>
        <img src={appleProXdr} className="w-[62.5rem] h-auto mb-[9.375rem] lg:w-full lg:px-4 mx-auto" alt="apple pro xdr" />
        <SalesSplitTextSection />
        <SalesPurposeBuiltCrmSection />
        <TwoColumnTextImageBlock className="" title={<div>Understand Buyer<br className="hidden lg:inline"/> Intent <br className="lg:hidden"/>with Every Click.</div>} description="Right Property keeps track of every action during presentations and online visits. From unit views to video watches, Right Property creates a timeline of interest—so you know exactly when and how to follow up." image={understandEveryClickDesktop} variant="image-right" />
        <OneColumnTitleImageDescription className="pb-[31.25rem] lg:pb-[10rem]" title="Track Performance. Improve Strategy." description={<div className="w-[46.75rem] lg:w-full">Keep track of your team's performance with detailed analytics. Right Property shows you who's engaging, who's not, and what's working—so you can support your reps and close more deals.</div>} image={trackPerformanceDesktop} />
        <TwoColumnTextImageBlock className="" title={<div>Your Sales and <br className="hidden lg:inline"/>Marketing, <br className="lg:hidden"/>Finally in Sync.</div>} description="Lead behavior on your website reflects instantly in the CRM. Campaign insights turn into qualified conversations. Sales and marketing work together—for real." image={salesInSyncDesktop} variant="image-right" />
        <ScheduleADemoSection />
    </main>
}