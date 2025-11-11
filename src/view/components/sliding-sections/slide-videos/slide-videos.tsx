import cmsVideo from "/cms.mp4";
import emailMarketingVideo from "/email_marketing.mp4";
import interactiveVideo from "/interactive_website.mp4";
import marketingOption1 from "/marketing_option1.mp4";
import websiteTemplates from "/website_templates.mp4";
import seoVideo from "/seo.mp4";

import slideVideoOverlay1 from "@/assets/v3/slide_video/slide_video_overlay_1.webp";
import slideVideoOverlay2 from "@/assets/v3/slide_video/slide_video_overlay_2.webp";
import slideVideoOverlay3 from "@/assets/v3/slide_video/slide_video_overlay_3.webp";
import slideVideoOverlay4 from "@/assets/v3/slide_video/slide_video_overlay_4.webp";
import slideVideoOverlay5 from "@/assets/v3/slide_video/slide_video_overlay_5.webp";
import slideVideoOverlay6 from "@/assets/v3/slide_video/slide_video_overlay_6.webp";
import { useEffect } from "react";

const MarketingVideo = () => {
  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((v) =>
      v.play().catch(() => {
        const resume = () => {
          v.play();
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("touchstart", resume);
      })
    );
  }, []);

  return (
    <div className="relative">
      <img
        src={slideVideoOverlay1}
        className=" absolute -top-[4rem] left-[1.5625rem] w-[5.25rem] h-auto object-contain"
        alt="Marketing video overlay decoration"
      />
      {/* <video src={marketingOption1} autoPlay muted loop 
      preload="none" className=" w-full h-auto object-cover" /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className=" w-full h-auto object-cover"
      >
        <source src={marketingOption1} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

const InteractiveWebsiteVideo = () => {
  return (
    <div className="relative">
      <img
        src={slideVideoOverlay2}
        className="absolute -top-[7rem] -right-[3.625rem] w-[13.75rem] h-auto object-contain"
        alt="Interactive website video overlay decoration"
      />
      {/* <video
        src={interactiveVideo}
        autoPlay
        muted
        loop
        
        preload="none"
        className=" w-full h-auto object-cover"
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className=" w-full h-auto object-cover"
      >
        <source src={interactiveVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

const WebsiteTemplatesVideo = () => {
  return (
    <div className="relative">
      <img
        src={slideVideoOverlay3}
        className="absolute -right-[1rem] -top-[3.125rem]  w-[10.5rem] h-auto object-contain"
        alt="Website templates video overlay decoration"
      />
      {/* <video
        src={websiteTemplates}
        autoPlay
        muted
        loop
        
        preload="none"
        className=" w-full h-auto object-cover"
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className=" w-full h-auto object-cover"
      >
        <source src={websiteTemplates} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

const PowerfulCMSVideo = () => {
  return (
    <div className="relative">
      <img
        src={slideVideoOverlay4}
        className="absolute -top-[3.625rem] right-[1rem] w-[3.75rem] h-auto object-contain"
        alt="CMS video overlay decoration"
      />
      {/* <video
        src={cmsVideo}
        autoPlay
        muted
        loop
        
        preload="none"
        className=" w-full h-auto object-cover"
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className=" w-full h-auto object-cover"
      >
        <source src={cmsVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

const EmailMarketingVideo = () => {
  return (
    <div className="relative">
      <img
        src={slideVideoOverlay5}
        className="absolute -top-[2.75rem] right-[0.75rem] w-[5.375rem] h-auto object-contain`"
        alt="Email marketing video overlay decoration"
      />
      {/* <video
        src={emailMarketingVideo}
        autoPlay
        muted
        loop
        
        preload="none"
        className=" w-full h-auto object-cover"
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className=" w-full h-auto object-cover"
      >
        <source src={emailMarketingVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

const SeoReadyVideo = () => {
  return (
    <div className="relative">
      <img
        src={slideVideoOverlay6}
        className="absolute -top-[2.75rem] right-[1.75rem] w-[3rem] h-auto object-contain"
        alt="SEO video overlay decoration"
      />
      {/* <video
        src={seoVideo}
        autoPlay
        muted
        loop
        
        preload="none"
        className=" w-full h-auto object-cover"
      /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className=" w-full h-auto object-cover"
      >
        <source src={seoVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export {
  MarketingVideo,
  InteractiveWebsiteVideo,
  WebsiteTemplatesVideo,
  PowerfulCMSVideo,
  EmailMarketingVideo,
  SeoReadyVideo,
};
