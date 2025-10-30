import Button from "@/view/components/button";
import ShowBookingHoc from "./show-booking-hoc";
import BookADemoButton from '@/view/components/book-a-demo-button'


export const AccessibilityRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:px-4">
            {children}
        </div>
    )
}

export const AccessibilityHeaderInformation = ({ subHeading, title, description }: { subHeading: string, title: string, description: string }) => {
    return (
        <>
            <p className="mb-4 font-geist-mono font-normal text-16 lg:text-14 4k:text-[clamp(1.125rem,0.8vw+0.5rem,1.5rem)] leading-[150%] tracking-[0.04em] uppercase text-squid-ink">
                {subHeading}
            </p>
            <h2 className="mb-[2.5rem] lg:mb-6 font-general-sans font-semibold text-64 lg:text-40 4k:text-[clamp(3.5rem,2vw+1rem,5rem)] tracking-[0em] leading-[100%] text-squid-ink">
                {title}
            </h2>
            <p className="mb-6 font-geist font-normal text-20 lg:text-18 4k:text-[clamp(1.5rem,1vw+0.5rem,2rem)] tracking-[0em] leading-[140%] text-squid-ink">
                {description}
            </p>
        </>
    )
}

export const AccessibilityButton = ({ className }: { className?: string }) => {
    return (
        <ShowBookingHoc>
            <div className={`${className}`}>
                <Button label="Book a Demo" variant="primaryLight" />
            </div>
        </ShowBookingHoc>
    )
}

export const AccessibilityItems = ({ items }: { items: { icon: React.ReactNode, title: string, description: string }[] }) => {
    return <div className="flex flex-col gap-12 w-[26.25rem] lg:w-full 4k:w-[32rem] 4k:gap-[4rem]">
        {items.map((item) => (
            <div className="flex lg:flex-col gap-8 lg:gap-3 4k:gap-[2.5rem] items-start">
                {item.icon}
                <div className="">
                    <h3 className="mb-1 font-geist font-medium text-18 4k:text-[clamp(1.25rem,0.8vw+0.5rem,1.75rem)] leading-[140%] text-squid-ink">
                        {item.title}
                    </h3>
                    <p className="font-geist font-normal text-16 4k:text-[clamp(1.125rem,0.8vw+0.25rem,1.5rem)] leading-[140%] text-squid-ink">
                        {item.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
}

export default function Accessibility({ subHeading, title, description, items }: { subHeading: string, title: string, description: string, items: { icon: React.ReactNode, title: string | React.ReactNode, description: string }[] }) {
    const itemColors = ['#E4D6F6', '#FAD9BF'];
    return (
        <div className="bg-white p-[3.35rem] lg:p-[1.5rem] 4k:p-[5rem]">
            <p className="mb-8 font-geist-mono font-normal text-16 text-2k-4k lg:text-14 4k:text-[clamp(1.125rem,0.8vw+0.5rem,1.5rem)] lg:mb-4 leading-[150%] tracking-[0.04em] uppercase text-primary-black">
                {subHeading}
            </p>
            <h2 className="mb-8 4k:mb-[4rem] font-general-sans font-semibold text-40 lg:mb-[1.5rem] lg:text-32 tracking-[0em] leading-[130%] text-primary-black 4k:[font-size:clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*2.5rem),5rem)]">
                {title}
            </h2>
            <p className="mb-[2.5rem] font-geist font-normal text-32 lg:mb-[2rem] lg:text-24 4k:[font-size:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)] 4k:mb-[5rem] tracking-[0em] leading-[140%] text-dark-gray">
                {description}
            </p>
            <div className="">
                <BookADemoButton />
            </div>
            <div className="mb-[3.75rem] lg:mb-[2rem]"></div>

<div className="
  flex flex-col 
  gap-[1.9375rem] 
  4k:[gap:clamp(1.9375rem,calc(1.9375rem+((100vw-2000px)/2000px)*1.0625rem),3rem)] 
  lg:w-full
">
  {items.map((item, index) => (
    <div
      key={index}
      className="
        flex flex-col 
        items-start
        gap-[2.5rem] 
        4k:[gap:clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*1.5rem),4rem)]
        p-[2.5rem] 
        4k:[padding:clamp(2.5rem,calc(2.5rem+((100vw-2000px)/2000px)*1.5rem),4rem)]
        lg:p-[1.5rem] lg:gap-[1.5rem]
        rounded-[20px] 4k:[border-radius:clamp(20px,calc(20px+((100vw-2000px)/2000px)*4px),24px)]
      "
      style={{ border: `1px solid ${itemColors[index]}` }}
    >
      <div className="
        flex items-center gap-8 
        lg:flex-col lg:gap-4 lg:items-start
        4k:[gap:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*1rem),3rem)]
      ">
        {item.icon}

        <h3
          className="
            mb-1 font-geist font-medium text-primary-black
            -tracking-[0.02em] leading-[140%]
            text-[28px] lg:text-[20px]
            4k:[font-size:clamp(1.75rem,calc(1.75rem+((100vw-2000px)/2000px)*1rem),2.75rem)]
          "
        >
          {item.title}
        </h3>
      </div>

      <p
        className="
          font-geist font-normal text-primary-black
          -tracking-[0.01em] leading-[140%] pr-[1rem]
          text-[24px] lg:text-base
          4k:[font-size:clamp(1.5rem,calc(1.5rem+((100vw-2000px)/2000px)*1rem),2.5rem)]
        "
      >
        {item.description}
      </p>
    </div>
  ))}
</div>
           
        </div>
    )
}