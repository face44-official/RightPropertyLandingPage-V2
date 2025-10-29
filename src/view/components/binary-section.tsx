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
      <div className="w-fit mx-auto bg-white p-[2.5rem] gap-[3.75rem] flex items-center justify-center lg:flex-col-reverse lg:p-6 lg:gap-[2rem] 4k:p-[3.5rem] 4k:gap-[5rem]">
        <div className="flex flex-col w-[26.25rem] lg:w-full 4k:w-[32rem]">
          <p className="mb-6 font-geist-mono font-medium text-16 lg:text-sm leading-[150%] tracking-[0.04em] uppercase text-primary-black 4k:text-[clamp(1.125rem,0.8vw+0.5rem,1.5rem)] 4k:mb-[1.5rem]">
            {subHeader}
          </p>

          <h3 className="mb-[1.2rem] font-general-sans font-semibold text-24 lg:text-24 leading-[100%] text-primary-black 4k:text-[clamp(1.75rem,1vw+0.5rem,2.25rem)] 4k:mb-[1.5rem]">
            {title}
          </h3>

          <p className="font-geist font-normal text-24 lg:text-base leading-[140%] text-primary-black 4k:text-[clamp(1.5rem,0.9vw+0.5rem,2rem)]">
            {description}
          </p>
        </div>

        {image}

        {/* Background glow */}
        <div
          className="z-[-1] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1467px] h-[1064px] hidden lg:block 4k:w-[1700px] 4k:h-[1250px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #E7DFF2 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
      </div>
    </section>
  );
}

export const BinaryBlockImage = ({ path }: { path: string }) => (
  <img
    src={path}
    className="w-[13.125rem] lg:w-full h-auto 4k:w-[16rem]"
    alt="binary code icon representing software development"
    loading="lazy"
    decoding="async"
    width="210"
    height="210"
  />
);
