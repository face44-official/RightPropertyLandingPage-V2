import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

export function withRevealText<T extends object>(
  WrappedComponent: React.ComponentType<T & { ref?: React.Ref<HTMLElement> }>,
) {
  return (props: T & { ref?: React.Ref<HTMLElement> }) => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
      let ctx: gsap.Context | undefined;
      // Wait for fonts to load before initializing SplitText & animations
      document.fonts.ready.then(() => {
        ctx = gsap.context(() => {
          const revealEls = gsap.utils.toArray(".reveal-type") as HTMLElement[];
          revealEls.forEach((el) => {
            const bg = el.dataset.bgColor;
            const fg = el.dataset.fgColor;

            const split = new SplitText(el, { type: "words,chars" });

            const circleMap = [
              { word: "about", circle: 1, fill: "#E4D6F6" },
              { word: "buyers,", circle: 2, fill: "#FAD9BF" },
              { word: "opportunity,", circle: 3, fill: "#C0E3D5" },
            ];

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: el,
                start: "top 60%",
                end: "top 20%",
                scrub: true,
              },
            });

            tl.fromTo(
              split.chars,
              { color: bg },
              { color: fg, duration: 0.5, stagger: 0.02, ease: "power1.out" },
            );

            circleMap.forEach(({ word, circle, fill }) => {
              const wordIndex = split.words.findIndex(
                (w) =>
                  w.textContent?.trim().toLowerCase().replace(/[^\w]/g, "") ===
                  word.toLowerCase().replace(/[^\w]/g, ""),
              );

              if (wordIndex !== -1) {
                const lastCharIndex = split.chars.findLastIndex((char: Element) =>
                  split.words[wordIndex].contains(char),
                );
                const timing = lastCharIndex * 0.02;

                const targetCircle = el.querySelector<HTMLElement>(
                  `.circle-fill[data-circle="${circle}"]`,
                );

                if (targetCircle) {
                  tl.fromTo(
                    targetCircle,
                    { backgroundColor: "transparent", color: fill },
                    {
                      backgroundColor: fill,
                      color: "#fff",
                      duration: 0.3,
                      ease: "power2.out",
                    },
                    timing,
                  );
                }
              }
            });
          });
        }, containerRef);
      });

      return () => ctx?.revert();
    }, {});

    return (
      <WrappedComponent
        {...props}
        ref={(node) => {
          containerRef.current = node as HTMLElement;
          if (typeof props.ref === "function") {
            props.ref(node as HTMLElement);
          } else if (props.ref && "current" in props.ref) {
            (props.ref as React.RefObject<HTMLElement>).current =
              node as HTMLElement;
          }
        }}
      />
    );
  };
}
