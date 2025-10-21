import desktopVisual from "@/assets/v3/experience/dfes/desktops.webp";
import tabletsVisual from "@/assets/v3/experience/dfes/tablets.webp";
import phonesVisual from "@/assets/v3/experience/dfes/phones.webp";
import kiosksVisual from "@/assets/v3/experience/dfes/kiosk.webp";
import laptopsVisual from "@/assets/v3/experience/dfes/laptops.webp";
import tvVisual from "@/assets/v3/experience/dfes/tv.webp";


export default function DfesZoomImages() {
 
    return (
        <div className="absolute left-1/2 -translate-x-1/2 w-[1680px] min-h-[1000px] perspective-[100svh]">

            <img id="desktop-zoom-visual" className="visual-element transform-3d absolute left-[17.5rem] top-[41.4375rem] w-[14.68rem] h-auto object-contain" src={desktopVisual} alt="desktopVisual" />
            <img id="tablet-zoom-visual" className="visual-element absolute left-[56.25rem] top-[9.75rem] w-[13rem] h-auto object-contain " src={tabletsVisual} alt="tabletsVisual" />
            <img id="phone-zoom-visual" className="visual-element transform-3d absolute top-[37.5rem] left-[60.4375rem] w-[31.125rem] h-auto object-contain" src={phonesVisual} alt="phonesVisual" />
            <img id="laptop-zoom-visual" className="visual-element transform-3d absolute -top-[6.5625rem] left-[79rem] w-[13.875rem] h-auto object-contain" src={laptopsVisual} alt="laptopVisual" />
            <img id="kiosk-zoom-visual" className="visual-element transform-3d absolute -bottom-[9.375rem] left-[40.625rem] w-[13.125rem] h-auto object-contain" src={kiosksVisual} alt="kioskVisual" />
            <img id="tv-zoom-visual" className="visual-element transform-3d absolute top-[3.875rem] left-[9rem] w-[23.125rem] h-auto object-contain" src={tvVisual} alt="tvVisual" />
        </div>
    )
}