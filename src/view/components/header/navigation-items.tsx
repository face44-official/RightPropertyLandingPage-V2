import AnchorLink from "../anchor-link";
import HeaderBookADemo from "./header-book-a-demo";
import { useLocation, Link } from "react-router";

export default function NavigationItems() {
  const { pathname } = useLocation();
  return (
    <div
      className="
    lg:hidden flex items-center gap-6
    4k:[gap:clamp(1.5rem,calc(1.5rem+((100vw-2050px)/2000px)*1.5rem),3rem)]
  "
    >
      <NavigationItem href="presentation">Presentation</NavigationItem>
      <NavigationItem href="marketing">Marketing</NavigationItem>
      <NavigationItem href="sales">Sales</NavigationItem>
      {pathname === "/" && <AnchorItem href="faqs">FAQs</AnchorItem>}
      <HeaderBookADemo />
    </div>
  );
}

const NavigationItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      to={href}
      className="font-geist font-medium text-base text-fluid-4k-14 leading-6 tracking-0 text-[#232323] cursor-pointer after:bg-[#232323] hover:text-[#232323] relative transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
    >
      {children}
    </Link>
  );
};

const AnchorItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <AnchorLink href={href}>
      <div className="font-geist font-medium text-base text-fluid-4k-14 leading-6 tracking-0 text-[#232323] cursor-pointer after:bg-[#232323] hover:text-[#232323] relative transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
        {children}
      </div>
    </AnchorLink>
  );
};
