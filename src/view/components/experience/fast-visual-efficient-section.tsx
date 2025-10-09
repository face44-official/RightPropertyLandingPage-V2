import fastRoad from "@/assets/v3/experience/fast_efficient_illustration.webp";
import { useRef } from "react";
import purpleCheck from "@/assets/v3/purple_check.svg";
import efficientMobile from '@/assets/v3/experience/efficient_mobile.webp';
// Helper function to interpolate between two colors

export default function FastVisualEfficientSection() {
    const pathRef = useRef<SVGPathElement>(null)
    const gradientRef = useRef<HTMLDivElement>(null)
    const items: { icon: React.ReactNode, title: string, description: string }[] = [
        {
            icon: <img src={purpleCheck} alt="Checkmark icon for existing assets compatibility feature" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "Works with your assets",
            description: "Use existing 2D files, no need to recreate or reformat anything at all.",
        },
        {
            icon: <img src={purpleCheck} alt="Checkmark icon for speed optimization feature" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "Built for speed",
            description: "Set up a dynamic, touch-friendly interface in just 48 hours, without any delays.",
        },
        {
            icon: <img src={purpleCheck} alt="Checkmark icon for property sales optimization feature" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "Perfect for property sales",
            description: "Ideal for sales suites, kiosks, tablets, or big screens, wherever buyers engage easily.",
        }
    ]

    return (
        <section id="simple-setup" className="" aria-label="Simple setup process for Right Property platform">
            <div className="rp-container lg:h-auto! lg:pb-[7.5rem]" style={{ height: "78.5625rem" }}>
                <div className="relative">
                <img src={efficientMobile} className="hidden lg:block w-full h-auto" alt="Right Property Surface 2D interface mobile view" />

                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[-1] hidden lg:block w-[66rem] h-[66rem]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(197, 230, 255, 0.72) 0%, rgba(200, 229, 255, 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)" }}>
                    </div>
                </div>
                <div className="flex justify-start gap-[8.4375rem] w-[41.875rem] lg:w-full">

                    <img className='absolute top-0 left-0 w-full h-auto lg:hidden z-[1]' src={fastRoad} alt="Right Property Surface 2D fast and efficient interface visualization" loading="lazy" decoding="async" width="1680" height="1734" />
                    <div className="absolute top-[25rem] right-[12rem]" ref={(el) => {
                        if (el) {
                            const path = el.querySelector('path')
                            if (path) pathRef.current = path
                        }
                    }}>
                    </div>
                    <div ref={gradientRef} style={{ background: "radial-gradient(50% 50% at 50% 50%, #DBE8FF 0%, #E8F4FF 25.96%, rgba(255, 255, 255, 0) 100%)" }} className="lg:hidden absolute -top-[12rem] -right-[31rem] w-[1425.84px] h-[1425.84px]"></div>

                    <div className="pt-[10rem] pl-[5rem] lg:p-4">
                        <p className="mb-8 lg:mb-[1.5rem] font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.02em] uppercase text-squid-ink">
                            {"SURFACE"}
                        </p>
                        <h2 className="mb-8 lg:mb-[1.5rem] font-general-sans font-semibold text-40 lg:text-32 -tracking-[0.01em] leading-[130%] text-squid-ink">
                            {"Fast, Visual, Efficient (2D)"}
                        </h2>
                        <p className="mb-[5rem] lg:mb-[2rem] font-geist font-normal text-32 lg:text-24 -tracking-[0.01em] leading-[140%] text-squid-ink">
                            {"Built with your existing assets like renders, documents, and floor plans."}
                        </p>

                        <div className="flex flex-col gap-8">
                            {items.map((item) => (
                                <div className="flex gap-6 lg:gap-[0.75rem] items-start">
                                    {item.icon}
                                    <div>
                                        <h3 className='font-geist font-medium text-28 lg:text-20 leading-[140%] text-squid-ink'>
                                            {item.title}
                                        </h3>
                                        <p className='font-geist font-normal text-24 lg:text-base leading-[140%] text-squid-ink'>
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

