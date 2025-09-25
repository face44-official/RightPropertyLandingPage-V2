import { useEffect, useState } from "react";
import AnchorLink from "../anchor-link"
import HeaderBookADemo from "./header-book-a-demo"

export default function NavigationItems() {
    const [pathname, setPathname] = useState(window.location.pathname);
    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);
    return (
        <div className="lg:hidden flex items-center gap-6">
            <NavigationItem href="presentation">Presentation</NavigationItem>
            <NavigationItem href="marketing">Marketing</NavigationItem>
            <NavigationItem href="sales">Sales</NavigationItem>
            {pathname == "/" && <AnchorItem href="faqs">FAQs</AnchorItem>}
            <HeaderBookADemo />
        </div>
    )
}

const NavigationItem = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <div
            onClick={() => {
                window.location.href = href;
            }}
            className="font-geist font-medium text-base leading-6 tracking-0 text-[#232323] cursor-pointer after:bg-[#232323] hover:text-[#232323] relative transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
            {children}
        </div>
    )
}

const AnchorItem = ({ children, href }: { children: React.ReactNode, href: string }) => {
    return (
        <AnchorLink href={href}>
            <div className="font-geist font-medium text-base leading-6 tracking-0 text-[#232323] cursor-pointer after:bg-[#232323] hover:text-[#232323] relative transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
                {children}
            </div>
        </AnchorLink>
    )
}


