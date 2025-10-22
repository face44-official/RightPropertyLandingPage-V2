import BookADemoButton from "../book-a-demo-button";
import representive from "@/assets/v3/representive.webp";
export default function ScheduleADemoSection({ displayGradient = true }: { displayGradient?: boolean }) {
    return <section className="relative h-[100vh] lg:h-auto min-h-[100vh] flex items-center justify-center py-[7.5rem] px-[5rem] lg:pt-[3.75rem] lg:px-4 max-w-[100vw]  content-visibility-auto" aria-label="Schedule a demo meeting with Right Property team">
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
        {displayGradient && <svg className="lg:hidden absolute z-[-1]" width="1680" height="1411" viewBox="0 0 1680 1411" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="929.5" cy="705.5" rx="972.5" ry="705.5" fill="url(#paint0_radial_1824_4589)" />
            <defs>
                <radialGradient id="paint0_radial_1824_4589" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(929.5 705.5) rotate(90) scale(705.5 972.5)">
                    <stop stop-color="#E7DFF2" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
        }
        {displayGradient && <svg className="hidden lg:block absolute z-[-1]" viewBox="0 0 375 1536" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="187.5" cy="768" rx="1058.5" ry="768" fill="url(#paint0_radial_767_7640)" />
            <defs>
                <radialGradient id="paint0_radial_767_7640" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(187.5 768) rotate(90) scale(768 1058.5)">
                    <stop stop-color="#E7DFF2" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
        }
    </section>
}