import SubPageHeroRoad from "../common/sub-page-hero-road";
interface HeroSubPagesMobileRoadProps {
    firstMaskTop?: string;
    secondMaskTop?: string;
}
export default function HeroSubPagesMobileRoad({ firstMaskTop = "10.1875rem", secondMaskTop = "15rem" }: HeroSubPagesMobileRoadProps) {
    return (
        <div className="hidden lg:block relative">
            <SubPageHeroRoad style={{ top: `${firstMaskTop}` }} className={`mobile-sub-pages-mask absolute -left-[1.65375rem] w-[125.6vw] h-auto `}  />
            <div style={{
                position: 'absolute',
                width: '607.56px',
                height: '607.56px',
                left: '46%',
                top: '6%',
                zIndex: -1,
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(219, 232, 255, 0.6) 0%, rgba(213, 235, 254, 0.6) 25.96%, rgba(255, 255, 255, 0) 100%)'
            }} className="highlight">
            </div>
            <div className={`absolute top-[${secondMaskTop}] -left-[0.65rem]`} style={{ top: `${secondMaskTop}` }}>
                <div className=" relative ">
                    <SubPageHeroRoad className="mobile-sub-pages-second-mask  w-[122.6vw] h-auto" />
                    <div style={{
                        position: 'absolute',
                        width: '161vw',
                        height: '161vw',
                        left: '-51%',
                        top: '14%',
                        zIndex: -1,
                        background: 'radial-gradient(50% 50% at 50% 50%, rgba(219, 232, 255, 0.6) 0%, rgba(213, 235, 254, 0.6) 25.96%, rgba(255, 255, 255, 0) 100%)'
                    }} className="highlight">
                    </div>
                </div>
            </div>

        </div>
    )
}

