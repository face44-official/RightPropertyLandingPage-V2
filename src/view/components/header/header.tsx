import { useEffect, useRef, useState } from "react";
import type Lenis from "lenis";
import { useLenis } from 'lenis/react'
import { cn } from "@/lib/utils";
import BuiltForDevelopers from "./built-for-developers";
import NavigationItems from "./navigation-items";
import {gsap} from "gsap";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import HamburgerButton from "./hamburger-button";
import { Link, useLocation } from "wouter";
export default function Header() {
    const [location] = useLocation();
    const [hideHeader, setHideHeader] = useState(false);
    const $progress = useRef(0);
    const $prevProgress = useRef(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const lenisHandler = (lenis: Lenis) => {
        $progress.current = lenis.progress;
        if ($progress.current >= 0.01) {
            gsap.set('#header-parent', {
                backgroundColor: 'white'
            })
            if (($prevProgress.current ?? 0) < $progress.current) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
        } else {
            gsap.set('#header-parent', {
                backgroundColor: 'transparent'
            })
        }
        $prevProgress.current = $progress.current;
    }
    const lenis = useLenis(lenisHandler, []);

    const hideMenu = () => {
        gsap.to("#mobile-menu", {
            x: "100%",
            duration: 0.5,
            ease: "power2.inOut"
        })
        setShowMobileMenu(false);
    }
    const showMenu = () => {
        gsap.to("#mobile-menu", {
            x: "0%",
            duration: 0.5,
            ease: "power2.inOut"
        })
        setShowMobileMenu(true);
    }
    useEffect(() => {
        if (showMobileMenu) {
            showMenu();
            lenis?.stop();
        } else {
            hideMenu();
            lenis?.start();
        }
    }, [showMobileMenu, lenis]);
    useEffect(() => {
        lenis?.scrollTo(0,{
            duration:0,
            lerp:0
        });
    }, [location, lenis]);
    const headerClass = cn('fixed top-0 left-0 z-50 bg-white w-full h-[6.25rem] lg:h-[5rem] transition-all duration-[500ms] ease-out', hideHeader ? '-translate-y-full' : '');

    return (
        <>
            <div id="header-parent" className={headerClass}>
                <div className="rp-container h-full flex items-center justify-between pl-[5.875rem]  pr-[5.1875rem] lg:px-4">
                    <div className="flex items-center gap-[5.52rem] lg:gap-[2.06rem]">
                        <Link href="/" aria-label="Right Property logo. Click to navigate to the home page">
                            <Logo className="w-[6rem] h-auto lg:w-[4.25rem]" />
                        </Link>
                        <BuiltForDevelopers />
                    </div>
                    <HamburgerButton isShowMobileMenu={showMobileMenu} onClick={() => setShowMobileMenu(prev => !prev)} />
                    <NavigationItems />
                </div>
            </div>
            <MobileMenu onItemClick={() => setShowMobileMenu(false)} />
        </>

    )
}
