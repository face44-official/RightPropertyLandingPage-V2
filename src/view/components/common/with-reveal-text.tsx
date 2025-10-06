import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
// If you use ScrollTrigger elsewhere, remember to register it:
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

export function withRevealText<T extends object>(
  WrappedComponent: React.ComponentType<T & { ref?: React.Ref<HTMLElement> }>,
) {
  return (props: T & { ref?: React.Ref<HTMLElement> }) => {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
      let ctx: gsap.Context | undefined;

      document.fonts.ready.then(() => {
        ctx = gsap.context(() => {
          const revealEls = gsap.utils.toArray(".reveal-type") as HTMLElement[];

          revealEls.forEach((el, i) => {
            // 1) Capture the original text BEFORE SplitText mutates the DOM
            const originalText =
              (el.getAttribute("data-sr-text") ||
                el.textContent ||
                el.getAttribute("aria-label") ||
                "").replace(/\s+/g, " ").trim();

            // Guard: if there’s nothing meaningful, skip
            if (!originalText) return;

            // 2) Inject a screen-reader-only node with the full sentence
            //    Tailwind's `sr-only` works out-of-the-box. If you don't use Tailwind,
            //    add your own .sr-only utility CSS.
            const srId = el.id || `reveal-sr-${i}-${Math.random().toString(36).slice(2)}`;
            if (!el.previousElementSibling || el.previousElementSibling.getAttribute("data-reveal-sr") !== srId) {
              const sr = document.createElement("p");
              sr.textContent = originalText;
              sr.className = "sr-only";
              sr.id = srId;
              sr.setAttribute("data-reveal-sr", srId);
              el.insertAdjacentElement("beforebegin", sr);
            }

            // 3) Make the animated node purely decorative
            el.setAttribute("aria-hidden", "true");
            el.removeAttribute("aria-label"); // Strip prohibited name
            el.removeAttribute("aria-labelledby");

            // 4) Now run SplitText only on the decorative node
            const split = new SplitText(el, { type: "words,chars" });

            // --- your existing animation code ---
            const bg = el.dataset.bgColor;
            const fg = el.dataset.fgColor;

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
                const timing = Math.max(0, lastCharIndex) * 0.02;

                const targetCircle = el.querySelector<HTMLElement>(
                  `.circle-fill[data-circle="${circle}"]`,
                );

                if (targetCircle) {
                  tl.fromTo(
                    targetCircle,
                    { backgroundColor: "transparent", color: fill },
                    { backgroundColor: fill, color: "#fff", duration: 0.3, ease: "power2.out" },
                    timing,
                  );
                }
              }
            });
            // --- end existing animation code ---
          });
        }, containerRef);
      });

      return () => ctx?.revert();
    }, []);

    return (
      <WrappedComponent
        {...props}
        ref={(node) => {
          containerRef.current = node as HTMLElement;
          if (typeof props.ref === "function") {
            props.ref(node as HTMLElement);
          } else if (props.ref && "current" in (props.ref as any)) {
            (props.ref as React.RefObject<HTMLElement>).current = node as HTMLElement;
          }
        }}
      />
    );
  };
}