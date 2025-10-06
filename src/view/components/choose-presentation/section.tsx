import surfaceImage from '@/assets/v3/surface.png'
import spaceImage from '@/assets/v3/space.png'

export default function ChoosePresentationSection() {
    return (
        <section id="experiences" className="content-visibility-auto" aria-label="Choose between Surface 2D and Space 3D presentation modes">
            <div className="flex flex-col items-start justify-start lg:px-0 lg:items-start">
                <div className='rp-container w-full'>
                    <p className=" pl-[5rem] mb-8 lg:mb-[1.5rem] font-geist-mono font-medium text-16 lg:text-14 lg:px-4 lg:text-start lg:text-sm leading-[150%] tracking-[0.04em] uppercase text-squid-ink">Choose the Presentation Experience</p>
                    <h2 className="w-[46.875rem] lg:w-full pl-[5rem] mb-[2.5rem] lg:mb-[2rem]  font-geist font-semibold text-40 lg:text-32 lg:px-4 leading-[140%] lg:leading-[130%] text-squid-ink">
                        Right Property offers two powerful ways to present
                    </h2>
                </div>

                <div className="flex w-full  lg:flex-col lg:gap-0 mobile-rp-container lg:m-auto">
                    <div className="group relative grow basis-[100%] overflow-hidden">
                        <img src={surfaceImage} alt="surface" className="w-full h-auto group-hover:scale-105 transition-all duration-600 ease-in-out" />
                        <div style={{ background: "linear-gradient(360deg, rgba(255, 255, 255, 0) -6.49%, #F1F1F1 86.98%)" }} className="z-[1] absolute top-0 left-0 w-full h-[16.825rem]"></div>
                        <div className='absolute left-[5rem] top-[4.0625rem] lg:top-6 lg:left-6'>
                            <h3 className="mb-3 font-general-sans font-light text-46 lg:text-36 lg:px-0 leading-[100%] text-squid-ink relative z-[2]">
                                surface
                            </h3>
                            <p className="mb-[6.625rem] lg:mb-[2.5rem] lg:px-0] font-geist font-normal text-base leading-[140%] text-squid-ink relative z-[2]">
                                2D, fast, cost-effective, and easy to set up
                            </p>
                        </div>

                    </div>
                    <div className="group relative grow basis-[100%] overflow-hidden">
                        <img src={spaceImage} alt="space" className="w-full h-auto group-hover:scale-105 transition-all duration-600 ease-in-out" />
                        <div style={{ background: "linear-gradient(360deg, rgba(0, 0, 0, 0) -6.49%, #000000 86.98%)" }} className="z-[1] absolute top-0 left-0 w-full h-[16.825rem]"></div>
                        <div className='absolute left-[5rem] top-[4.0625rem] lg:top-6 lg:left-6'>
                            <h3 className="mb-3 font-general-sans font-light text-46 lg:text-36 lg:px-0 leading-[100%] text-white relative z-[2]">
                                space
                            </h3>
                            <p className="mb-[6.625rem] lg:mb-[2.5rem] lg:px-0 font-geist font-normal text-base leading-[140%] text-white relative z-[2]">
                                3D, stunning, immersive, interactive.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
