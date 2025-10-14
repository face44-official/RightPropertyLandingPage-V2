import marketingHeroImage from "@/assets/v3/marketing/marketing_hero.webp";
export default function MarketingHeroSection() {
    return (
        <div className="flex justify-center rp-container">
            <div className="relative inline-block">
                <img src={marketingHeroImage} className="w-[76rem] h-auto mb-[9.375rem] lg:w-full lg:px-4 relative z-0" alt="Right Property marketing platform displayed on MacBook Pro" />
            </div>
        </div>
    )
}