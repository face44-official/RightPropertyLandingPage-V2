import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function BinarySection({
  subHeader,
  title,
  description,
  image,
  className,
}: {
  subHeader: string;
  title: string;
  description: string;
  image: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("relative", className)}
      aria-label="Company values and technology focus"
      style={{ boxShadow: "3px 32px 58.5px rgba(134, 101, 177, 0.1)" }}
    >
      <div
        className="
          w-fit mx-auto bg-white flex items-center justify-center
          gap-[3.75rem] p-[2.5rem]
          lg:flex-col-reverse lg:p-6 lg:gap-[2rem]
          4k:[gap:clamp(3.75rem,calc(3.75rem+((100vw-2000px)/2000px)*1.25rem),5rem)]
          4k:[padding:clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*1rem),3.5rem)]
        "
      >
        {/* Text Column */}
        <div className="flex flex-col w-[26.25rem] lg:w-full 4k:[width:clamp(26.25rem,calc(26.25rem+((100vw-2000px)/2000px)*5.75rem),32rem)]">
          <p
            className="
              mb-6 font-geist-mono font-medium uppercase text-primary-black
              leading-[150%] tracking-[0.04em]
              text-[16px] lg:text-sm
              text-2k-4k
              4k:[margin-bottom:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*0.5rem),1.5rem)]
            "
          >
            {subHeader}
          </p>

          <h3
            className="
              mb-[1.2rem] font-general-sans font-semibold text-primary-black
              leading-[110%]
              text-[24px] lg:text-[20px]
              4k:[font-size:clamp(1.5rem,calc(1.5rem+((100vw-2000px)/2000px)*1rem),2.5rem)]
              4k:[margin-bottom:clamp(1.2rem,calc(1.2rem+((100vw-2000px)/2000px)*0.3rem),1.5rem)]
            "
          >
            {title}
          </h3>

          <p
            className="
              font-geist font-normal text-primary-black
              leading-[140%]
              text-[24px] lg:text-base
              4k:[font-size:clamp(1.5rem,calc(1.5rem+((100vw-2000px)/2000px)*1rem),2.5rem)]
            "
          >
            {description}
          </p>
        </div>

        {image}

        {/* Background glow */}
        <div
          className="
            hidden lg:block absolute z-[-1]
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[1467px] h-[1064px]
            4k:[width:clamp(1467px,calc(1467px+((100vw-2000px)/2000px)*233px),1700px)]
            4k:[height:clamp(1064px,calc(1064px+((100vw-2000px)/2000px)*186px),1250px)]
          "
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #E7DFF2 0%, rgba(255,255,255,0) 100%)",
          }}
        ></div>
      </div>
    </section>
  );
}

export const BinaryBlockImage = ({ path }: { path: string }) => (
  <img
    src={path}
    className="
      w-[13.125rem] lg:w-full h-auto
      4k:[width:clamp(13.125rem,calc(13.125rem+((100vw-2000px)/2000px)*2.875rem),16rem)]
    "
    alt="binary code icon representing software development"
    loading="lazy"
    decoding="async"
    width="210"
    height="210"
  />
);
