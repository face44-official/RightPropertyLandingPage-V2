import BookADemoButton from "../book-a-demo-button";
import representive from "@/assets/v3/representive.webp";
import footerDesktopBg from "@/assets/v3/common/footer_desktop_bg.svg";
import footerMobileBg from "@/assets/v3/common/footer_mobile_bg.svg";
export default function ScheduleADemoSection({ displayGradient = true }: { displayGradient?: boolean }) {
    return <section className="relative lg:h-auto min-h-[100vh] flex items-center justify-center py-[7.5rem] px-[5rem] lg:pt-[3.75rem] lg:px-4 max-w-[100vw] overflow-hidden" aria-label="Schedule a demo meeting with Right Property team">
        <div className="relative rp-container w-[1011px] overflow-hidden bg-white p-[3.75rem] lg:pb-[1.5rem] lg:pt-[1rem] lg:w-full  lg:px-0" style={{ boxShadow: '3px 32px 58.5px rgba(134, 101, 177, 0.1)' }}>
            <img src={representive} alt="Representative" className="absolute top-[2.3125rem] -right-[1rem] w-[18.625rem]  lg:w-[13.75rem] lg:static object-contain h-auto lg:scale-x-[-1] lg:top-0" />
            <div className="inline-block lg:p-[1rem]">
                <p className="mb-8 lg:mb-[1rem] font-geist text-base lg:text-14 font-medium leading-[150%] tracking-[0.02em] uppercase lg:pt-[1rem]">
                    Let's take a seat
                </p>
                <h3 className="mb-8 lg:mb-[0.75rem] font-general-sans text-40 lg:text-40 font-semibold leading-[130%] tracking-[0.01em]">
                    Schedule<div className="hidden lg:inline"><br /></div> a demo meeting
                </h3>
                <p className="mb-[3.125rem] lg:mb-[2rem] font-geist text-32 lg:text-24 font-normal leading-[140%] tracking-[0] w-[37.5rem] lg:w-full">
                    We'd be happy to meet and discuss how we can transform your business.
                </p>
                <BookADemoButton />
            </div>
        </div>
        {displayGradient && <img className="lg:hidden absolute z-[-1]" src={footerDesktopBg} alt="Footer Desktop Background" />
        }
        {displayGradient && <div className="hidden lg:block absolute z-[-1] w-[100vw] h-auto">
            <img className="w-full h-auto" src={footerMobileBg} alt="Footer Mobile Background" />
        </div>}
    </section>
}