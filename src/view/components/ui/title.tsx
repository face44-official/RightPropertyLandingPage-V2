import { cn } from "@/lib/utils"

const TitleBig = ({ children,className }: { children: React.ReactNode,className?:string }) => {
    const classNames = cn("font-general-sans font-semibold text-[3.75rem] lg:text-[2.5rem] leading-[100%] text-[#232323]",className)
    return <div className={classNames}>{children}</div>
}

const TitleMedium = ({ children,className }: { children: React.ReactNode,className?:string }) => {
    const classNames = cn("font-general-sans font-semibold lg:font-medium text-[2.5rem] lg:text-[2rem] leading-[130%] -tracking-[0.01em] text-[#232323]",className)
    return <div className={classNames}>{children}</div>
}


export { TitleBig, TitleMedium }