import { cn } from "@/lib/utils";
import AnchorLink from "./anchor-link";

function BlueExploreButtonLink({
  href,
  className,
  title,
}: {
  href: string;
  className?: string;
  title: string;
}) {
  return (
    <AnchorLink href={href}>
      <BlueExploreButton title={title} className={className} />
    </AnchorLink>
  );
}

function BlueExploreButton({
  className,
  title,
  onClick,
}: {
  className?: string;
  title: string;
  onClick?: () => void;
}) {
  const cnClass = cn(
    `
    pointer-events-auto cursor-pointer will-change-transform
    transition-all duration-300 ease-in-out
    font-geist font-semibold uppercase
    bg-[#BADEF3] text-raisin-black hover:bg-darker-blue
    rounded-[65px] leading-[130%] tracking-[0%]
    text-base py-[19px] px-[30px]
    lg:w-full lg:py-[11px]
    `,
    // 4K responsive scaling for font, padding, radius, and width
    `
    text-2k-4k
    4k:[padding-top:clamp(19px,calc(19px+((100vw-2000px)/2000px)*19px),38px)]
    4k:[padding-bottom:clamp(19px,calc(19px+((100vw-2000px)/2000px)*19px),38px)]
    4k:[padding-left:clamp(30px,calc(30px+((100vw-2000px)/2000px)*30px),60px)]
    4k:[padding-right:clamp(30px,calc(30px+((100vw-2000px)/2000px)*30px),60px)]
    4k:[border-radius:clamp(65px,calc(65px+((100vw-2000px)/2000px)*65px),130px)]
    4k:[min-width:clamp(14rem,calc(14rem+((100vw-2000px)/2000px)*14rem),28rem)]
    `,
    className
  );

  return (
    <button onClick={onClick} className={cnClass}>
      {title}
    </button>
  );
}

export { BlueExploreButton, BlueExploreButtonLink };
