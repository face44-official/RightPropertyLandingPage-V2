import { cn } from "@/lib/utils";
import BodyText from "./body-text";
import { TitleMedium } from "./title";

export default function TwoColumnTextImageBlock({ title, description, image, className, variant }: { title: string | React.ReactNode, description: string, image: string, className?: string, variant: 'image-left' | 'image-right' }) {
    const classNames = cn("rp-container flex justify-between items-center px-[5rem] lg:px-4 space-x-[6.875rem] lg:space-x-0 lg:pb-[10rem]  lg:flex-col-reverse lg:gap-4", className)
    const variantClasses = {
        'image-left': 'flex-row-reverse',
        'image-right': 'flex-row'
    }
    return (
        <section className={cn(classNames, variantClasses[variant])}>
            <div className="flex flex-1 flex-col gap-8 lg:gap-6">
                <TitleMedium>{title}</TitleMedium>
                <BodyText>{description}</BodyText>
            </div>
            <div className="flex-[1.25]">
                <img className="h-auto w-full" src={image} />
            </div>
        </section>
    )
}