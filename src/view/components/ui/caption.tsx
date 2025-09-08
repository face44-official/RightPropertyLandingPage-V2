import { cn } from "@/lib/utils"

export default function Caption({ children,className }: { children: React.ReactNode,className?:string }) {
    const classNames = cn("font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.02em] uppercase text-[#232323]",className)
    return <p className={classNames}>{children}</p>
}