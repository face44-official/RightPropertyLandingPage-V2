import appleProXdr from "@/assets/v3/sales/apple_pro_xdr.png";
import salesHeroVideo from "@/assets/v3/sales/sales-hero.webm";
import salesIpad from "@/assets/v3/sales/ipad.png";
export default function SalesHeroSection() {
    return (
        <div className="flex justify-center">
            <div className="relative inline-block">
                <img src={appleProXdr} className="w-[62.5rem] h-auto mb-[9.375rem] lg:w-full lg:px-4 relative z-0" alt="apple pro xdr" />
                <video className="absolute top-[2rem] left-1/2 -translate-x-1/2 w-[59.5rem] h-auto z-[-1]" src={salesHeroVideo} autoPlay muted loop playsInline />
                <img src={salesIpad} className="absolute left-[34.25rem] top-[15.875rem] w-[35rem] h-auto z-[3]" alt="sales ipad" />
            </div>
        </div>
    )
}