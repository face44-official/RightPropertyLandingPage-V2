import { cn } from "@/lib/utils";
import AnchorLink from "./anchor-link";

function BlueExploreButtonLink({ href, className, title }: { href: string, className?: string, title: string }) {
    return (
        <AnchorLink href={href}>
            <BlueExploreButton title={title} className={className} />
        </AnchorLink>
    )
}


function BlueExploreButton({ className, title, onClick }: { className?: string, title: string, onClick?: () => void }) {
    const cnClass = cn('hover:bg-darker-blue will-change-transform pointer-events-auto transition-all duration-300 ease-in-out cursor-pointer w-[8.3125rem] h-[4rem]  rounded-[65px] font-geist font-semibold text-base leading-[130%] tracking-[0%] uppercase text-raisin-black  bg-[#BADEF3] lg:w-full lg:h-[3rem] lg:text-sm', className)
    return (
        <button onClick={onClick} className={cnClass}>{title}</button>
    )
}


export { BlueExploreButton, BlueExploreButtonLink }