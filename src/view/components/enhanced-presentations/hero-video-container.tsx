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
            <img src={heroFirstFrame} fetchPriority='high' className="absolute w-[62rem] top-[6.3rem] left-[4.3rem] z-[-1]  h-auto  lg:top-[2.5rem] lg:left-[1.9rem] lg:w-[27.25rem]" />
            <video
                src={heroVideo}
                className={`absolute w-[62rem] top-[6.3rem] left-[4.3rem] z-[-1]  h-auto  lg:top-[2.5rem] lg:left-[1.9rem] lg:w-[27.25rem] ${showVideo ? 'block' : 'hidden'}`}
                width="1200"
                height="800"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={onVideoLoaded}
            />
            <img src={heroFrame} fetchPriority='high' className="w-[70.21rem] max-w-[1200px] h-auto lg:max-w-full lg:w-auto lg:h-[20.25rem]" alt="" />
        </div>
    )
}