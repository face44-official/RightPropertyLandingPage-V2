import heroVideo from '@/assets/v3/hero-noframe.mp4';
import heroFrame from '@/assets/v3/hero-frame.png';
import heroFirstFrame from '/hero_first_frame.webp';
import { useState } from 'react';
export default function HeroVideoContainer() {
    const [showVideo, setShowVideo] = useState(false);
    const onVideoLoaded = () => {
        setShowVideo(true);
    }
    return (
        <div className="relative">
            <img src={heroFirstFrame} fetchPriority='high' className="absolute w-[62rem] top-[6.3rem] left-[4.3rem] z-[-1]  h-auto  lg:top-[13%] lg:left-[6%] lg:w-[88%]" />
            <video
                src={heroVideo}
                className={`absolute w-[62rem] top-[6.3rem] left-[4.3rem] z-[-1]  h-auto  lg:top-[13%] lg:left-[6%] lg:w-[88%] ${showVideo ? 'block' : 'hidden'}`}
                width="1200"
                height="800"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={onVideoLoaded}
            />
            <img src={heroFrame} fetchPriority='high' className="w-[70.21rem] max-w-[1200px] h-auto lg:w-[120vw] object-contain" alt="" />
        </div>
    )
}