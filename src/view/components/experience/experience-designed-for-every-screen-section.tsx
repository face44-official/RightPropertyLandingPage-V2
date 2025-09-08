import laptopImage from "@/assets/gallery/laptop_optimized.webp";
import lounge01 from "@/assets/gallery/lounge01_optimized.webp";
import lounge02 from "@/assets/gallery/lounge02_optimized.webp";
import lounge03 from "@/assets/gallery/lounge03_optimized.webp";
import lounge04 from "@/assets/gallery/lounge04_optimized.webp";
import HorizontalGallery from "../made-to-fit/horizontal-gallery";
import BodyText from "../ui/body-text";
import { TitleMedium } from "../ui/title";

export default function ExperienceDesignedForEveryScreenSection() {
    const imagesSources = [
        laptopImage,
        lounge01,
        lounge02,
        lounge03,
        lounge04
    ]

    return (
        <section id="experience-designed-for-every-screen" className="bg-white pt-[7.5rem]  pb-[9rem]" >
            <div className="rp-container px-[5rem] lg:px-4">
                <TitleMedium className="mb-[2rem]">Designed for Every Screen</TitleMedium>
                <BodyText className="mb-[3.75rem]">
                    Whether you’re in a marketing suite with a huge wall screen, at a sales office touchscreen, or using a laptop or tablet, Right Property adapts beautifully. Your team controls what to show and how—switching between media, views, and stories instantly.
                </BodyText>
                <BodyText className="font-medium mb-[3.75rem]">
                    Surface and Space work across environments:
                </BodyText>
                <div className=" mb-[2rem]">
                    <HorizontalGallery pinId="experience-designed" images={imagesSources} galleryInnerSelector=".gallery__inner" pinSelector="#experience-designed-for-every-screen" />
                </div>
                <BodyText className="!text-[1rem] hidden lg:block">The experience scales beautifully—whatever the context, the presentation always feels premium.</BodyText>
            </div>
        </section>
    )
}