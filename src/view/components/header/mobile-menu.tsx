import { useEffect } from "react";
import AnchorLink from "../anchor-link"
import {gsap} from "gsap";
import { Link, useLocation } from "react-router";



export default function MobileMenu({ onItemClick }: { onItemClick: () => void }) {
    const {pathname} = useLocation();

    useEffect(() => {
        gsap.set("#mobile-menu", {
            x: "100%"
        })
    }, [])
    const onNavigate = () => {
        onItemClick();
    }
    return (
        <div id="mobile-menu" className="fixed top-[5rem] h-full w-[100vw] hidden lg:block z-[999] bg-white px-4 pt-[2rem] pb-[6.25rem]">
            <ul className="flex flex-col gap-6 rp-container px-4 ">
                <li onClick={onNavigate}>
                    <NavigationItem href="presentation">Presentation</NavigationItem>
                </li>
                <li onClick={onNavigate}>
                    <NavigationItem href="marketing">Marketing</NavigationItem>
                </li>
                <li onClick={onNavigate}>
                    <NavigationItem href="sales">Sales</NavigationItem>
                </li>
                {pathname == "/" && <li onClick={onNavigate}>
                    <AnchorItem href="faqs">FAQs</AnchorItem>
                </li>
                }
            </ul>
        </div>
    )
}


const ElementItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="font-geist font-medium text-[1.25rem] leading-[140%] text-[#232323]">
            {children}
        </span>
    )
}
const NavigationItem = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <Link
            href={href}
            className="">
            <ElementItem>{children}</ElementItem>
        </Link>
    )
}

const AnchorItem = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <AnchorLink href={href}>
            <div className="">
                <ElementItem>{children}</ElementItem>
            </div>
        </AnchorLink>
    )
}