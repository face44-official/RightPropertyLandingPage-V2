import { useEffect } from "react";
import AnchorLink from "../anchor-link";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router";

export default function MobileMenu({ onItemClick }: { onItemClick: () => void }) {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.set("#mobile-menu", { x: "100%" });
  }, []);

  const onNavigate = () => {
    onItemClick();
  };

  return (
    <div
      id="mobile-menu"
      className="
        fixed top-[5rem] h-full w-[100vw]
        hidden lg:block z-[999] bg-white
        px-4 pt-[2rem] pb-[6.25rem]
        4k:[padding-top:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)]
        4k:[padding-bottom:clamp(6.25rem,calc(6.25rem+((100vw-2000px)/2000px)*6.25rem),12.5rem)]
        4k:[padding-left:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*1rem),2rem)]
        4k:[padding-right:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*1rem),2rem)]
      "
    >
      <ul
        className="
          flex flex-col gap-6 rp-container px-4
          4k:[gap:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*1rem),2rem)]
        "
      >
        <li onClick={onNavigate}>
          <NavigationItem href='presentation'>Presentation</NavigationItem>
        </li>
        <li onClick={onNavigate}>
          <NavigationItem href='marketing'>Marketing</NavigationItem>
        </li>
        <li onClick={onNavigate}>
          <NavigationItem href='sales'>Sales</NavigationItem>
        </li>
        {pathname === "/" && (
          <li onClick={onNavigate}>
            <AnchorItem href='faqs'>FAQs</AnchorItem>
          </li>
        )}
      </ul>
    </div>
  );
}

const ElementItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className="
        font-geist font-medium
        text-[1.25rem] leading-[140%] text-[#232323]
        4k:[font-size:clamp(1.25rem,calc(1.25rem+((100vw-2000px)/2000px)*1.25rem),2.5rem)]
        4k:[line-height:clamp(1.4,calc(1.4+((100vw-2000px)/2000px)*0.2),1.6)]
      "
    >
      {children}
    </span>
  );
};

const NavigationItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link
      to={href}
      className="
        block transition-all duration-200 ease-in-out
        hover:text-[#EF716E]
        4k:[padding-top:clamp(0.25rem,calc(0.25rem+((100vw-2000px)/2000px)*0.25rem),0.5rem)]
        4k:[padding-bottom:clamp(0.25rem,calc(0.25rem+((100vw-2000px)/2000px)*0.25rem),0.5rem)]
      "
    >
      <ElementItem>{children}</ElementItem>
    </Link>
  );
};

const AnchorItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <AnchorLink href={href}>
      <div
        className="
          transition-all duration-200 ease-in-out
          hover:text-[#EF716E]
          4k:[padding-top:clamp(0.25rem,calc(0.25rem+((100vw-2000px)/2000px)*0.25rem),0.5rem)]
          4k:[padding-bottom:clamp(0.25rem,calc(0.25rem+((100vw-2000px)/2000px)*0.25rem),0.5rem)]
        "
      >
        <ElementItem>{children}</ElementItem>
      </div>
    </AnchorLink>
  );
};
