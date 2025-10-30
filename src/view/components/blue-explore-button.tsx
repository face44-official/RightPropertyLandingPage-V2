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
    const cnClass = cn('hover:bg-darker-blue will-change-transform pointer-events-auto transition-all duration-300 ease-in-out cursor-pointer rounded-[65px] font-geist font-semibold text-base leading-[130%] tracking-[0%] uppercase text-raisin-black bg-[#BADEF3] lg:w-full','py-[19px] lg:py-[11px] px-[30px] [--minVw:2000px] [--maxVw:4000px] [--minSize:16px] [--maxSize:2rem] 4k:[font-size:clamp(var(--minSize),calc(var(--minSize)+((100vw-var(--minVw))/(var(--maxVw)-var(--minVw)))*(var(--maxSize)-var(--minSize))),var(--maxSize))]', className)
    return (
        <button onClick={onClick} className={cnClass}>{title}</button>
    )
}


export { BlueExploreButton, BlueExploreButtonLink }