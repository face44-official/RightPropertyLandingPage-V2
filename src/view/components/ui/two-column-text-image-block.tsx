import { cn } from "@/lib/utils";
import BodyText from "./body-text";
import { TitleMedium } from "./title";

export default function TwoColumnTextImageBlock({ title, description, image, className, variant }: { title: string | React.ReactNode, description: string, image: string | React.ReactNode, className?: string, variant: 'image-left' | 'image-right' }) {
    const classNames = cn("rp-container flex justify-between items-center px-[5rem] lg:px-4 lg:pb-[10rem]  lg:flex-col-reverse lg:gap-4", className)
    const variantClasses = {
        'image-left': 'flex-row-reverse',
        'image-right': 'flex-row'
    }

    const imageElement = typeof image === 'string' ? <img className="h-auto w-full" src={image} /> : image
    return (
        <section className={cn(classNames, variantClasses[variant])}>
            <div className={cn("flex flex-1 flex-col gap-8 lg:gap-6", variant === 'image-left' ? 'pl-[6.875rem] lg:pl-[0]' : 'pr-[6.875rem] lg:pr-[0]')}>
                <TitleMedium>{title}</TitleMedium>
                <BodyText>{description}</BodyText>
            </div>
            <div className="flex-[1.25]">
                {imageElement}
            </div>
        </section>
    )
}