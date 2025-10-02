import marketingHeroVideo from "@/assets/v3/marketing/marketing-hero.webm";
import macbookImage from "@/assets/v3/marketing/macbook_pro2.png";

export default function MarketingHeroSection() {
    return (
        <div className="flex justify-center rp-container">
            <div className="relative inline-block">
                <img src={macbookImage} className="w-[62.5rem] h-auto mb-[9.375rem] lg:w-full lg:px-4 relative z-0" alt="apple pro xdr" />
                <video className="absolute top-[1rem] left-1/2 -translate-x-1/2 w-[51rem] lg:w-[82%] lg:top-[0.5rem] lg:px-4 h-auto z-[-1]" src={marketingHeroVideo} autoPlay muted loop playsInline />
            </div>
        </div>
    )
}