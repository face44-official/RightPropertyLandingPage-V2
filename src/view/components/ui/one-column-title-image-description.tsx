import { cn } from "@/lib/utils";
import BodyText from "./body-text";
import { TitleMedium } from "./title";

export default function OneColumnTitleImageDescription({ title, description, image, className }: { title: string, description: string | React.ReactNode, image: string, className?: string }) {
    return (
        <div className={cn("rp-container px-[5rem] lg:px-4", className)}>
            <div className="flex flex-col gap-[2.5rem]">
                <TitleMedium>{title}</TitleMedium>
                <img className="h-auto w-full" src={image} alt={title} />
                <BodyText>{description}</BodyText>
            </div>
        </div>
    )
}