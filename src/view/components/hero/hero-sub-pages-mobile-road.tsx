import SubPageHeroRoad from "../common/sub-page-hero-road";

export default function HeroSubPagesMobileRoad() {
    return (
        <div className="hidden lg:block overflow-hidden">
            <div className="mobile-sub-pages-mask absolute left-0 top-0 max-w-[100vw] overflow-hidden">
                <SubPageHeroRoad className="absolute top-[10.25rem] -left-[1.6875rem] w-[29.4375rem] h-auto " />
                <div style={{
                    position: 'absolute',
                    width: '607.56px',
                    height: '607.56px',
                    left: 'calc(50% - 607.56px/2 + 110.08px)',
                    top: '12.38px',
                    zIndex: -1,
                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(219, 232, 255, 0.6) 0%, rgba(213, 235, 254, 0.6) 25.96%, rgba(255, 255, 255, 0) 100%)'
                }} className="highlight">
                </div>
            </div>
            <div className="mobile-sub-pages-second-mask absolute left-0 top-[25rem] max-w-[100vw] overflow-hidden">
                <SubPageHeroRoad className="absolute top-[0] -left-[0.65rem] w-[28.75rem] h-auto" />
                <div style={{
                    position: 'absolute',
                    width: '607.56px',
                    height: '607.56px',
                    left: '-245px',
                    top: '300px',
                    zIndex: -1,
                    background: 'radial-gradient(50% 50% at 50% 50%, rgba(219, 232, 255, 0.6) 0%, rgba(213, 235, 254, 0.6) 25.96%, rgba(255, 255, 255, 0) 100%)'
                }} className="highlight">
                </div>
            </div>
        </div>
    )
}

