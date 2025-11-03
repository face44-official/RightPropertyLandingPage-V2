import heroVideo from "@/assets/v3/hero-noframe.mp4";
import { useState } from "react";
export default function HeroVideoContainer() {
  const [showVideo, setShowVideo] = useState(false);
  const onVideoLoaded = () => {
    setShowVideo(true);
  };
  return (
    <>
      <div className="relative hidden lg:block">
        <img
          src="/hero_first_frame.webp"
          fetchPriority="high"
          className="absolute w-[62rem] top-[6.3rem] left-[4.3rem] z-[-1]  h-auto  lg:top-[13%] lg:left-[6%] lg:w-[88%]"
          alt="Right Property platform hero video preview frame"
        />
        <video
          src={heroVideo}
          className={`absolute w-[62rem] top-[6.3rem] left-[4.3rem] z-[-1]  h-auto  lg:top-[13%] lg:left-[6%] lg:w-[88%] ${
            showVideo ? "block" : "hidden"
          }`}
          width="1200"
          height="800"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={onVideoLoaded}
        />
        <img
          src={"/hero-frame.webp"}
          fetchPriority="high"
          className="w-[70.21rem] max-w-[1200px] h-auto lg:w-[120vw] object-contain"
          alt="Right Property platform interface frame"
        />
      </div>

      <div
        className="mb-0 lg:mb-12 relative w-[70.21rem] 4k:w-[100%] max-w-[1200px] 4k:max-w-[100%] lg:w-[120vw] aspect-[16/9] mx-auto block lg:hidden"
        style={{
          backgroundImage: "url('/video-bg.webp')",
          backgroundSize: "98% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* video or first-frame image inside the frame */}
        <div className="absolute inset-[2.8rem_2.5rem_3.4rem_6.6rem] lg:inset-[2.2rem_2.6rem_2.6rem_5.4rem] 4k:[inset:clamp(2.8rem,calc(2.8rem+((100vw-2000px)/2000px)*3.8rem),6.6rem)_clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*2.5rem),5rem)_clamp(3.4rem,calc(3.4rem+((100vw-2000px)/2000px)*3.4rem),6.8rem)_clamp(6.6rem,calc(6.6rem+((100vw-2000px)/2000px)*4.4rem),11rem)] 4k:[box-shadow:-20px_40px_40px_rgba(0,0,0,0.6)] overflow-hidden">
          {!showVideo && (
            <img
              src="/hero_first_frame.webp"
              fetchPriority="high"
              className="w-full h-auto object-contain"
              alt="Right Property platform hero video preview frame"
            />
          )}

          <video
            src={heroVideo}
            className={`w-full h-auto object-contain ${
              showVideo ? "block" : "hidden"
            }`}
            width="1200"
            height="800"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={onVideoLoaded}
          />
        </div>
      </div>
    </>
  );
}
