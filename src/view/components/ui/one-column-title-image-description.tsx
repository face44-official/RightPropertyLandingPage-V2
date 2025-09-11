import { cn } from "@/lib/utils";
import BodyText from "./body-text";
import { TitleMedium } from "./title";

export default function OneColumnTitleImageDescription({ title, description, image, className }: { title: string | React.ReactNode, description: string | React.ReactNode, image: string | React.ReactNode, className?: string }) {
    return (
        <div className={cn("rp-container px-[5rem] lg:px-4", className)}>
            <div className="flex flex-col gap-[2.5rem]">
                <TitleMedium>{title}</TitleMedium>
                {typeof image === 'string' ? <img className="h-auto w-full" src={image} /> : image}
                <BodyText>{description}</BodyText>
            </div>
        </div>
    )
}