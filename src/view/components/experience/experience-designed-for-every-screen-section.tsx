import galleryitem0 from "@/assets/v3/experience/gallery_item_0.webp";
import galleryitem1 from "@/assets/v3/experience/gallery_item_1.webp";
import galleryitem2 from "@/assets/v3/experience/gallery_item_2.webp";
import galleryitem3 from "@/assets/v3/experience/gallery_item_3.webp";
import galleryitem4 from "@/assets/v3/experience/gallery_item_4.webp";
import galleryitem5 from "@/assets/v3/experience/gallery_item_5.webp";
import galleryitem6 from "@/assets/v3/experience/gallery_item_6.webp";
import HorizontalGallery from "../made-to-fit/horizontal-gallery";
import BodyText from "../ui/body-text";
import { TitleMedium } from "../ui/title";

export default function ExperienceDesignedForEveryScreenSection() {
    const imagesSources = [
        galleryitem0,
        galleryitem1,
        galleryitem2,
        galleryitem3,
        galleryitem4,
        galleryitem5,
        galleryitem6
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
                <div className="mb-[2.8125rem] lg:mb-[2rem]">
                    <HorizontalGallery pinId="experience-designed" images={imagesSources} galleryInnerSelector=".gallery__inner" pinSelector="#experience-designed-for-every-screen" />
                </div>
                <BodyText className="relative z-[10] bg-blend-multiply !text-24 font-geist font-normal lg:!text-[1rem]">The experience scales beautifully—whatever the context, the<br className="lg:hidden"/>presentation always feels premium.</BodyText>
            </div>
        </section>
    )
}