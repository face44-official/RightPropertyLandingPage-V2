import { useEffect, useRef } from "react";
import {gsap} from "gsap";
export default function HamburgerButton({ isShowMobileMenu,onClick }: { isShowMobileMenu: boolean,onClick: () => void }) {
    const $menuToggle = useRef<gsap.core.Timeline>(null);
    useEffect(() => {
        $menuToggle.current = gsap.timeline({ paused: true, reversed: true });
        $menuToggle.current
            .to(' .top', .2, { y: '-9px', transformOrigin: '50% 50%' }, 'burg')
            .to(' .bot', .2, { y: '9px', transformOrigin: '50% 50%' }, 'burg')
            .to(' .mid', .2, { scale: 0.1, transformOrigin: '50% 50%' }, 'burg')
            .add('rotate')
            .to(' .top', .2, { y: '5' }, 'rotate')
            .to(' .bot', .2, { y: '-5' }, 'rotate')
            .to(' .top', .2, { rotationZ: 45, transformOrigin: '50% 50%' }, 'rotate')
            .to(' .bot', .2, { rotationZ: -45, transformOrigin: '50% 50%' }, 'rotate')
        // .set('#burger .mid', {opacity:0})//temp fix for stupid iOS rotate y bug


    }, [])
    useEffect(() => {
        if (isShowMobileMenu) {
            $menuToggle.current?.restart();
        } else {
            $menuToggle.current?.reverse();
        }
    }, [isShowMobileMenu])
   

    return (
        <svg  id="burger" width="30" className="openmenu hidden lg:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" onClick={onClick}>
            <path className="top" d="M0 9h30v2H0z" />
            <line className="mid" x1="0" y1="15" x2="30" y2="15" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke" />
            <path className="bot" d="M0 19h30v2H0z" />
        </svg>
    )
}