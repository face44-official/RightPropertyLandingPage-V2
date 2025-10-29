import heroVideo from '@/assets/v3/hero-noframe.mp4';
import { useState } from 'react';
export default function HeroVideoContainer() {
    const [showVideo, setShowVideo] = useState(false);
    const onVideoLoaded = () => {
        setShowVideo(true);
    }
    return (
        <div
      className="relative w-[70.21rem] 4k:w-[100%] max-w-[1200px] 4k:max-w-[100%] lg:w-[120vw] aspect-[16/9] mx-auto"
      style={{
        backgroundImage: "url('/hero-frame.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* video or first-frame image inside the frame */}
      <div className="absolute inset-[2.6rem_4rem_0_4.5rem] overflow-hidden">
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
    )
}