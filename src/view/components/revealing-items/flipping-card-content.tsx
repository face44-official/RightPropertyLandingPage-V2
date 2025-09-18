import BookADemoButton from "../book-a-demo-button";
import ShowBookingHoc from "../show-booking-hoc";
import LearnMoreButton from "./learn-more-button";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);


interface FlippingCardContentProps {
    subHeading?: string;
    title: string;
    description: string;
    useBookButton?: boolean;
    useButton?: boolean;
}
export default function FlippingCardContent({ subHeading, title, description, useBookButton = false, useButton = true }: FlippingCardContentProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const subHeadingRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        // Get all text elements for animation
        const textElements = [
            subHeadingRef.current,
            titleRef.current,
            descriptionRef.current
        ].filter(Boolean);

        // Kill any existing animations
        gsap.killTweensOf("*");

        // Create SplitText instances and animate
        textElements.forEach(element => {
            if (!element) return;
            
            // Split text into characters
            const splitText = new SplitText(element, { type: "chars" });
            
            // Set initial state
            gsap.set(splitText.chars, { y: "200%" });
            
            // Animate characters
            gsap.to(splitText.chars, {
                y: "0%",
                duration: 1,
                ease: "power2.out",
                stagger: 0.005
            });
        });

        // Animate button separately
        if (buttonRef.current) {
            gsap.fromTo(buttonRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, delay: 1 }
            );
        }

    }, [subHeading, title, description, useBookButton, useButton]);

    return <div ref={containerRef} className="p-[3.75rem] bg-white w-[48.9375rem]">
        <div className="card-content">
            {subHeading && <p ref={subHeadingRef} className="mb-8 font-geist-mono font-normal text-16 lg:text-14 leading-[150%] tracking-[0.04em] uppercase text-squid-ink overflow-hidden">
                {subHeading}
            </p>}
            <h2 ref={titleRef} className="mb-8 lg:mb-6 font-general-sans font-semibold text-40 lg:text-40 tracking-[0em] leading-[130%] text-squid-ink overflow-hidden">
                {title}
            </h2>
            <p ref={descriptionRef} className="mb-[2.5rem] font-geist font-normal text-32 lg:text-18 tracking-[0em] leading-[140%] text-squid-ink overflow-hidden">
                {description}
            </p>
            {useButton && <div ref={buttonRef} className="lg:hidden">
                {useBookButton && <BookADemoButton />}
                {!useBookButton && <ShowBookingHoc> <LearnMoreButton /></ShowBookingHoc>}
            </div>}
        </div>

    </div>
}