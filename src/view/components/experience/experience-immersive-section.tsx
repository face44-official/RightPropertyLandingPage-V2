import purpleCheck from "@/assets/v3/purple_check.png";
import immersiveMobile from '@/assets/v3/experience/immersive_mobile.png';
import experienceSpaceIllustration from "@/assets/v3/experience/experience_space_illustration.png";
export default function ExperienceImmersiveSection() {
    const items = [
        {
            icon: <img src={purpleCheck} alt="check-circle" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "3D site plans & navigation",
            description: "Explore buildings, units, and layouts in real time with interactive controls.",
        },
        {
            icon: <img src={purpleCheck} alt="check-circle" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "Virtual tours & walkthroughs",
            description: "Guide buyers through spaces as if they’re already there—visually rich and intuitive.",
        },
        {
            icon: <img src={purpleCheck} alt="check-circle" className="w-[2.5rem] lg:w-6 h-auto object-contain" />,
            title: "High impact, higher setup",
            description: "Takes more time to build, but creates your most unforgettable buyer experience.",
        }
    ]

    return (
        <section id="experience-immersive" className="bg-black">
            <div className="rp-container  lg:h-auto!">
                <div className="flex lg:flex-col justify-end pr-[10rem] pt-[10rem] pb-[16.4375rem] lg:p-4 lg:pb-[7.5rem] relative z-[10] max-w-[100vw] overflow-hidden">
                    <img className='absolute bottom-0 left-0 w-[62.5rem] h-auto lg:hidden z-[-1]' src={experienceSpaceIllustration} alt="Right Property simple setup interface demonstration" loading="lazy" decoding="async" width="1680" height="1734" />
                    <img className=' w-[100vw] h-auto -top-1/2 object-cover lg:block hidden z-[10]' src={immersiveMobile} alt="Right Property simple setup interface demonstration" loading="lazy" decoding="async" width="1680" height="1734" />

                    <div className="w-[41.875rem] lg:w-full">
                        <p className="mb-8 lg:mb-[1.5rem] font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.02em] uppercase text-white">
                            Space
                        </p>
                        <h2 className="mb-8 lg:mb-[1.5rem] font-general-sans font-semibold text-40 lg:text-32 -tracking-[0.01em] leading-[130%] text-white">
                            Immersive, Real-Time, Impactful (3D)
                        </h2>
                        <p className="mb-[5rem] lg:mb-[2rem] font-geist font-normal text-32 lg:text-24 -tracking-[0.01em] leading-[140%] text-white">
                            A full 3D version of your project brought to life with interaction and depth.
                        </p>

                        <div className="flex flex-col gap-8">
                            {items.map((item) => (
                                <div className="flex gap-6 lg:gap-[0.75rem] items-start">
                                    {item.icon}
                                    <div>
                                        <h3 className='font-geist font-medium text-28 lg:text-20 leading-[140%] text-white'>
                                            {item.title}
                                        </h3>
                                        <p className='font-geist font-normal text-24 lg:text-base leading-[140%] text-white'>
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