import heroVideo from "@/assets/v3/hero-noframe.mp4";
import MobileCircle from "@/assets/v3/circle-mobile.svg";

import { useState } from "react";
export default function HeroVideoContainer() {
  const [showVideo, setShowVideo] = useState(false);
  const onVideoLoaded = () => {
    setShowVideo(true);
  };
  return (
    <div className="relative">
      <div className="mobile-circle absolute -bottom-[9rem] right-[5rem] hidden lg:block z-[-1]">
          <img src={MobileCircle} alt="mobile-circle" />
        </div>
      {/* Poster frame under the video */}
      <img
        src="/hero_first_frame.webp"
        fetchPriority="high"
        className="
      absolute z-[-1] h-auto
      w-[62rem] top-[6rem] left-[4.3rem]
      4k:[width:clamp(62rem,calc(62rem+((100vw-2050px)/2000px)*62rem),124rem)]
      4k:[top:clamp(6.2rem,calc(6.2rem+((100vw-2050px)/2000px)*6.2rem),12.4rem)]
      4k:[left:clamp(4.3rem,calc(4.3rem+((100vw-2050px)/2000px)*4.3rem),8.6rem)]
      lg:top-[13%] lg:left-[6%] lg:w-[88%]
    "
        alt="Right Property platform hero video preview frame"
      />

      {/* Video on top of the poster */}
      <video
        src={heroVideo}
        className={`
      absolute z-[-1] h-auto
      w-[62rem] top-[6rem] left-[4.3rem]
      4k:[width:clamp(62rem,calc(62rem+((100vw-2050px)/2000px)*62rem),124rem)]
      4k:[top:clamp(6.2rem,calc(6.2rem+((100vw-2050px)/2000px)*6.2rem),12.4rem)]
      4k:[left:clamp(4.3rem,calc(4.3rem+((100vw-2050px)/2000px)*4.3rem),8.6rem)]
      lg:top-[13%] lg:left-[6%] lg:w-[88%]
      ${showVideo ? "block" : "hidden"}
    `}
        width="1200"
        height="800"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={onVideoLoaded}
      />

      {/* Outer frame */}
      <img
        src={"/hero-frame.webp"}
        fetchPriority="high"
        className="
      w-[70.21rem] max-w-[1200px] h-auto object-contain
      4k:[width:clamp(70rem,calc(70rem+((100vw-2050px)/2000px)*70rem),140rem)]
      4k:[max-width:clamp(1200px,calc(1200px+((100vw-2050px)/2000px)*1200px),2400px)]
      lg:w-[120vw]
    "
        alt="Right Property platform interface frame"
      />
    </div>
  );
}
