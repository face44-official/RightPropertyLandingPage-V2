"use client";
import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  overlay?: string;
  overlayClass?: string;
}

export default function LazyVideo({
  src,
  className,
  overlay,
  overlayClass,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !videoRef.current) return;
    const video = videoRef.current;

    const tryPlay = () => {
      video.play().catch(() => {
        const resume = () => {
          video.play();
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("touchstart", resume);
      });
    };

    tryPlay();
  }, [isVisible]);

  return (
    <div className="relative">
      {overlay && (
        <img
          src={overlay}
          className={overlayClass}
          alt="Video overlay decoration"
        />
      )}
      <video
        ref={videoRef}
        autoPlay={isVisible}
        muted
        loop
        playsInline
        preload="none"
        className={className}
      >
        {isVisible && <source src={src} type="video/mp4" />}
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
