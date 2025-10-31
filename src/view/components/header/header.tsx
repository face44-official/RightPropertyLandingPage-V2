import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type Lenis from "lenis";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import BuiltForDevelopers from "./built-for-developers";
import NavigationItems from "./navigation-items";
import { gsap } from "gsap";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import HamburgerButton from "./hamburger-button";
import { Link, useLocation } from "react-router";

export default function Header() {
  const { pathname } = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const $progress = useRef(0);
  const $prevProgress = useRef(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const lenisHandler = (lenis: Lenis) => {
    $progress.current = lenis.progress;
    if ($progress.current >= 0.01) {
      gsap.set("#header-parent", { backgroundColor: "white" });
      if (($prevProgress.current ?? 0) < $progress.current) setHideHeader(true);
      else setHideHeader(false);
    } else {
      gsap.set("#header-parent", { backgroundColor: "transparent" });
    }
    $prevProgress.current = $progress.current;
  };

  const lenis = useLenis(lenisHandler, []);

  const hideMenu = () => {
    gsap.to("#mobile-menu", {
      x: "100%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    setShowMobileMenu(false);
  };

  const showMenu = () => {
    gsap.to("#mobile-menu", {
      x: "0%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    setShowMobileMenu(true);
  };

  useEffect(() => {
    if (showMobileMenu) {
      showMenu();
      lenis?.stop();
    } else {
      hideMenu();
      lenis?.start();
    }
  }, [showMobileMenu, lenis]);

  useLayoutEffect(() => {
    lenis?.scrollTo(0, { duration: 0, immediate: true });
  }, [pathname, lenis]);

  const headerClass = cn(
    `
      fixed top-0 left-0 z-50 w-full bg-white
      transition-all duration-[500ms] ease-out
      [height:clamp(6rem,calc(6rem+((100vw-2000px)/2000px)*6rem),12rem)]
    `,
    hideHeader ? "-translate-y-full" : ""
  );

  return (
    <>
      <div id="header-parent" className={headerClass}>
        <div
          className="
            rp-container h-full flex items-center justify-between
            pl-[5.875rem] pr-[5.1875rem] lg:px-4
            4k:[padding-left:clamp(5.875rem,calc(5.875rem+((100vw-2000px)/2000px)*5.875rem),11.75rem)]
            4k:[padding-right:clamp(5.1875rem,calc(5.1875rem+((100vw-2000px)/2000px)*5.1875rem),10.375rem)]
          "
        >
          <div
            className="
              flex items-center gap-[5.52rem] lg:gap-[2.06rem]
              4k:[gap:clamp(5.52rem,calc(5.52rem+((100vw-2000px)/2000px)*5.52rem),11.04rem)]
            "
          >
            {/* Logo */}
            <Link
              to="/"
              aria-label="Right Property logo. Click to navigate to the home page"
            >
              <Logo
                className="
                  [width:clamp(6.4rem,calc(6.4rem+((100vw-2000px)/2000px)*6.4rem),12.8rem)]
                  h-auto
                "
              />
            </Link>

            {/* Developer tagline */}
            <BuiltForDevelopers />
          </div>

            {/* Navigation */}
          <HamburgerButton
            isShowMobileMenu={showMobileMenu}
            onClick={() => setShowMobileMenu((prev) => !prev)}
          />
          <NavigationItems />
        </div>
      </div>

      {/* Mobile drawer */}
      <MobileMenu onItemClick={() => setShowMobileMenu(false)} />
    </>
  );
}
