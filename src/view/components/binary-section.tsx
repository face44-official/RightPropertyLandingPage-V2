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
          w-fit lg:w-full mx-auto bg-white flex items-center lg:justify-start lg:items-start justify-center
          gap-[3.75rem] p-[2.5rem]
          lg:flex-col-reverse lg:p-6 lg:gap-[2rem]
          4k:[gap:clamp(3.75rem,calc(3.75rem+((100vw-2000px)/2000px)*3.75rem),7.5rem)]
          4k:[padding:clamp(3rem,calc(3rem+((100vw-2000px)/2000px)*3rem),5rem)]
          transition-shadow duration-500
          hover:shadow-[3px_51px_109.4px_29px_#7E669D4F]
        "
      >
        <div
          className="
          flex flex-col w-[26.25rem] lg:w-full
          4k:[width:clamp(26.25rem,calc(26.25rem+((100vw-2000px)/2000px)*26.25rem),52.5rem)]
        "
        >
          <p
            className="
              mb-6 font-geist-mono font-medium uppercase text-primary-black
              leading-[150%] tracking-[0.04em]
              text-14 lg:text-sm
              text-fluid-4k-14
              4k:[margin-bottom:clamp(1.5rem,calc(1.5rem+((100vw-2000px)/2000px)*1.5rem),3rem)]
            "
          >
            {subHeader}
          </p>

          <h3
            className="
              mb-[1rem] font-general-sans font-semibold text-primary-black
              leading-[110%]
              text-24 lg:text-20
              text-2k-4k-24
              4k:[margin-bottom:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*1rem),2rem)]
            "
          >
            {title}
          </h3>

          <p
            className="
              font-geist font-normal text-primary-black
              leading-[140%]
              text-18 lg:text-base
              text-2k-4k-18
            "
          >
            {description}
          </p>
        </div>

        {/* IMAGE */}
        {image}

        {/* BACKGROUND GLOW */}
        <div
          className="
            hidden lg:block absolute z-[-1]
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[1467px] h-[1064px]
            4k:[width:clamp(1467px,calc(1467px+((100vw-2000px)/2000px)*1467px),2934px)]
            4k:[height:clamp(1064px,calc(1064px+((100vw-2000px)/2000px)*1064px),2128px)]
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
      w-[8.5rem] lg:w-full h-auto
      4k:[width:clamp(8.5rem,calc(8.5rem+((100vw-2000px)/2000px)*8.5rem),17rem)]
      binary-icons
    "
    alt="binary code icon representing software development"
    loading="lazy"
    decoding="async"
    width="210"
    height="210"
  />
);
