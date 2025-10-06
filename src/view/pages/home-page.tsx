import { Helmet } from "react-helmet"
import { useEffect } from "react"
import  { MeetRightProperty } from "../components/meet-right-property/section"
import EnhancedPresentationsSection from "../components/enhanced-presentations/section"
import BackToBackReveal from "../components/revealing-items/back-to-back-reveal"
import ChoosePresentationSection from "../components/choose-presentation/section"
import ConvertMoreLeadsSection from "../components/convert-more-leads/section"
import EasyOnboardingSection from "../components/easy-onboarding/section"
import FaqSection from "../components/faq/section"
import FeaturesCarousel from "../components/features-carousel"
import MadeToFit from "../components/made-to-fit/section"
import PresentSmarterSection from "../components/present-smarter/section"
import ScheduleADemoSection from "../components/schedule-a-demo/section"
import SimpleSetupSection from "../components/simple-setup/section"
import MaskPath from "../components/enhanced-presentations/mask-path"
import { useMotionPath } from "../../lib/useMotionPath"
import HeroRoad from "../components/common/hero-road"
export default function HomePage() {
    // Use the motion path hook
    const { divRef, pathRef, initializeMotionPath } = useMotionPath({
        trigger: ".trigger",
        startOffset: "top+=250px top",
        endOffset: "+=100%",
        scrollScrub: true,
        markers: false
    })

    useEffect(() => {
        initializeMotionPath()
    }, [])

    return (
        <div className="relative">
            <Helmet>
                <title>Right Property | Marketing Suite for Real Estate Developers</title>
                <meta name="robots" content="index, follow" />
            </Helmet>


            <main role="main" className="relative z-[10]" aria-label="Right Property homepage content">
                <div className="relative z-[20]">
                    <div id="first-two">
                        <div ref={divRef} className="lg:hidden transition-colors duration-300 z-[8] absolute top-0 left-0 w-full  h-auto inline-block mask max-w-[100vw] overflow-hidden">
                            <div className="rp-container relative content-visiblity-auto">
                                <HeroRoad className="w-[62.37rem] h-auto trigger -translate-y-[2.5rem] translate-x-[2.5rem] " />
                                {/* <img src={heroRoad} alt="Hero road" className="w-[100vw] h-auto trigger" /> */}
                                <div className="z-[8] absolute top-[23.4375rem] left-[8.5rem]">
                                    <div className="rp-container ">
                                        <div ref={(el) => {
                                            if (el) {
                                                const path = el.querySelector('path')
                                                if (path) pathRef.current = path
                                            }
                                        }}>
                                            <MaskPath />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="highlight"></div>
                        </div>

                        <div className="relative z-[10]">
                            <EnhancedPresentationsSection />
                            <MeetRightProperty />
                        </div>
                    </div>

                    <PresentSmarterSection />
                    <ChoosePresentationSection />
                    <SimpleSetupSection />
                    <ConvertMoreLeadsSection />
                    <EasyOnboardingSection />
                    <FeaturesCarousel />
                    <BackToBackReveal />
                    <MadeToFit />
                    <FaqSection />
                    <ScheduleADemoSection />
                </div>

            </main>
        </div>
    )
}