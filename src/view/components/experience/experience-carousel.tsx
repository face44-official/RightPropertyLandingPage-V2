import SlideElement from "../sliding-sections/slide-element";
import SlideBody from "../sliding-sections/slide-body";
import smartBehindImage from "@/assets/v3/experience/smart_mobile.png"
import storytellingImage from "@/assets/v3/experience/storytelling_mobile.png"
const carouselContents = [
    {
        title: "Storytelling that Sells",
        description: "Forget static presentations. With Right Property, salespeople guide each conversation fluidly—opening site plans, maps, galleries, unit details, videos, and even virtual tours at the right moment. It’s non-linear, intuitive, and powerful.",
        useButton: false,
        image: <img src={smartBehindImage} className="w-full h-auto object-cover" alt="smart behind image" />
    },
    {
        title: "Smart Behind the Scenes",
        description: "As buyers engage with your project, Right Property logs meaningful moments—from what they view to what they ask. Each interaction builds a richer profile, while sales rep activity is logged for performance insights and KPI tracking.",
        image: <img src={storytellingImage} className="w-full h-auto object-cover" alt="storytelling image" />
    }
]
export default function ExperienceCarousel() {

    return (
        <section className="hidden lg:flex px-4 relative overflow-hidden  pb-[7.5rem] flex-col gap-[7.5rem]">
            <div className="z-[-1] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[137.8125rem] h-[137.8125rem]" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(197, 230, 255, 0.72) 0%, rgba(200, 229, 255, 0.72) 25.96%, rgba(255, 255, 255, 0) 100%)" }}></div>
            <div className="rp-container">
                <SlideElement>
                    {carouselContents[0].image}
                    <SlideBody {...carouselContents[0]} />
                </SlideElement>
            </div>
            <div className="rp-container">
                <SlideElement>
                    {carouselContents[1].image}
                    <SlideBody {...carouselContents[1]} />
                </SlideElement>
            </div>

        </section>

    )
}