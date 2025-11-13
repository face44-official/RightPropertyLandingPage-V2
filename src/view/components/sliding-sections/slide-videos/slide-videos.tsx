"use client";

// MP4 videos
import cmsVideo from "/cms.mp4";
import emailMarketingVideo from "/email_marketing.mp4";
import interactiveVideo from "/interactive_website.mp4";
import marketingOption1 from "/marketing_option1.mp4";
import websiteTemplates from "/website_templates.mp4";
import seoVideo from "/seo.mp4";

// overlays
import slideVideoOverlay1 from "@/assets/v3/slide_video/slide_video_overlay_1.webp";
import slideVideoOverlay2 from "@/assets/v3/slide_video/slide_video_overlay_2.webp";
import slideVideoOverlay3 from "@/assets/v3/slide_video/slide_video_overlay_3.webp";
import slideVideoOverlay4 from "@/assets/v3/slide_video/slide_video_overlay_4.webp";
import slideVideoOverlay5 from "@/assets/v3/slide_video/slide_video_overlay_5.webp";
import slideVideoOverlay6 from "@/assets/v3/slide_video/slide_video_overlay_6.webp";
import LazyVideo from "../../common/LazyVideo";

export const MarketingVideo = () => (
  <LazyVideo
    src={marketingOption1}
    overlay={slideVideoOverlay1}
    overlayClass="absolute top-[0rem] left-[1.5625rem] w-[5.25rem] h-auto object-contain"
    className="w-full h-auto object-cover"
  />
);

export const InteractiveWebsiteVideo = () => (
  <LazyVideo
    src={interactiveVideo}
    overlay={slideVideoOverlay2}
    overlayClass="absolute top-[0rem] -right-[3.625rem] w-[13.75rem] h-auto object-contain"
    className="w-full h-auto object-cover"
  />
);

export const WebsiteTemplatesVideo = () => (
  <LazyVideo
    src={websiteTemplates}
    overlay={slideVideoOverlay3}
    overlayClass="absolute -right-[1rem] top-[0.125rem] w-[10.5rem] h-auto object-contain"
    className="w-full h-auto object-cover"
  />
);

export const PowerfulCMSVideo = () => (
  <LazyVideo
    src={cmsVideo}
    overlay={slideVideoOverlay4}
    overlayClass="absolute top-[0.625rem] right-[1rem] w-[3.75rem] h-auto object-contain"
    className="w-full h-auto object-cover"
  />
);

export const EmailMarketingVideo = () => (
  <LazyVideo
    src={emailMarketingVideo}
    overlay={slideVideoOverlay5}
    overlayClass="absolute top-[0.75rem] right-[0.75rem] w-[5.375rem] h-auto object-contain"
    className="w-full h-auto object-cover"
  />
);

export const SeoReadyVideo = () => (
  <LazyVideo
    src={seoVideo}
    overlay={slideVideoOverlay6}
    overlayClass="absolute top-[0.75rem] right-[1.75rem] w-[3rem] h-auto object-contain"
    className="w-full h-auto object-cover"
  />
);
