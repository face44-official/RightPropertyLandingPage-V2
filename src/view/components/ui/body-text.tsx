import { cn } from "@/lib/utils"

export default function BodyText({ children,className }: { children: React.ReactNode,className?:string }) {
    const classNames = cn("font-geist font-normal text-[2rem] lg:text-[1.5rem] -tracking-[0.01em] leading-[140%] text-[#434343]",className)
    return <p className={classNames}>{children}</p>
}