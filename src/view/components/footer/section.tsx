import footerBg from "@/assets/v3/footer_bg.webp";
import footerLevitate from "@/assets/v3/footer_levitate.webp";
import mobileFooterBg from "@/assets/v3/mobile_right_footer.webp";
import mobileFooterLevitate from "@/assets/v3/mobile_right_footer_circle.webp";
import { useRef } from "react";
import { gsap } from "gsap";
import Logo from "../header/logo";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router";

export default function FooterSection() {
  const { pathname } = useLocation();
  const $levitateItem = useRef<HTMLImageElement>(null);
  const $mobileFooterLevitate = useRef<HTMLImageElement>(null);
  const $footerContainer = useRef<HTMLDivElement>(null);

  const footerItems = [
    {
      label: "Contact",
      items: [
        {
          label: "hello[at]rightproperty.app",
          href: "mailto:hello[at]rightproperty.app",
          type: "email",
        },
        {
          label: "+44 20 8050 2733",
          href: "tel:+442080502733",
        },
      ],
    },
    {
      label: "Follow us On",
      items: [
        {
          label: "LinkedIn",
          href: "https://uk.linkedin.com/company/rightpropertyapp",
        },
      ],
    },
    {
      label: "Legal",
      items: [
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
        },
      ],
    },
  ];

  function emailClickHandler(
    item:
      | { label: string; href: string; type: string }
      | { label: string; href: string; type?: undefined }
  ): void {
    if (item.type === "email") {
      const emailLink = document.getElementById(
        "email-link"
      ) as HTMLAnchorElement;
      if (emailLink) {
        emailLink.href = `mailto:hello@rightproperty.app`;
        emailLink.click();
      }
    }
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: $footerContainer.current,
              start: "bottom-=15% bottom",
              end: "bottom-=15% bottom-=5%",
              scrub: false,
              toggleActions: "play none none reset",
            },
          })
          .to($levitateItem.current, {
            y: "-6.25rem",
            duration: 1,
            delay: 0.5,
            ease: "power2.inOut",
          });
      });

      mm.add("(max-width: 768px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: $footerContainer.current,
              start: "bottom-=20% bottom",
              end: "bottom-=20% bottom-=5%",
              scrub: false,
              toggleActions: "play none none reset",
            },
          })
          .to($mobileFooterLevitate.current, {
            y: "-1rem",
            duration: 1,
            ease: "power2.inOut",
          });
      });
    },
    { revertOnUpdate: true, dependencies: [pathname] }
  );

  return (
    <div ref={$footerContainer} className="rp-container relative z-[10]">
      <div
        className="
          relative h-[45.3125rem] lg:h-auto lg:p-0
          px-[5rem] pt-[7.125rem] lg:w-full
          4k:[height:clamp(45.3125rem,calc(45.3125rem+((100vw-2000px)/2000px)*45.3125rem),90.625rem)]
          4k:[padding-inline:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),10rem)]
          4k:[padding-top:clamp(7.125rem,calc(7.125rem+((100vw-2000px)/2000px)*7.125rem),14.25rem)]
        "
      >
        {/* Levitate Image */}
        <img
          ref={$levitateItem}
          src={footerLevitate}
          className="
            absolute left-[36.25rem] top-[29.25rem]
            w-[21.25rem] h-auto object-contain z-[0] lg:hidden
            4k:[left:clamp(36.25rem,calc(36.25rem+((100vw-2000px)/2000px)*36.25rem),72.5rem)]
            4k:[top:clamp(29.25rem,calc(29.25rem+((100vw-2000px)/2000px)*29.25rem),58.5rem)]
            4k:[width:clamp(21.25rem,calc(21.25rem+((100vw-2000px)/2000px)*21.25rem),42.5rem)]
          "
          alt="Right Property footer floating decoration element"
        />

        {/* Footer Background */}
        <img
          src={footerBg}
          className="
            absolute bottom-0 left-0 w-[105rem] h-full object-cover z-[-1] lg:hidden
            4k:[width:clamp(105rem,calc(105rem+((100vw-2000px)/2000px)*105rem),210rem)]
          "
          alt="Right Property footer background design"
        />

        {/* Content */}
        <div
          className="
            flex justify-between lg:flex-col
            4k:[gap:clamp(3rem,calc(3rem+((100vw-2000px)/2000px)*2rem),5rem)]
            4k:[padding-inline:clamp(0rem,calc(0rem+((100vw-2000px)/2000px)*10rem),10rem)]
          "
        >
          {/* Left — Logo + Copyright */}
          <div
            className="
              flex flex-[0.5_1_30%] lg:flex-[1_0_100%]
              lg:items-start flex-col gap-2
            "
          >
            <Logo
              className="
                w-[8.25rem] lg:w-[7.875rem] h-auto
                mb-[7.125rem] lg:mb-[4rem] lg:px-4
                4k:[width:clamp(8.25rem,calc(8.25rem+((100vw-2000px)/2000px)*8.25rem),16.5rem)]
                4k:[margin-bottom:clamp(7.125rem,calc(7.125rem+((100vw-2000px)/2000px)*7.125rem),14.25rem)]
              "
            />
            <CopyRight className="lg:hidden 4k:text-[1.125rem]" />
          </div>

          {/* Right — Footer Columns */}
          <div
            className="
              flex flex-row-reverse lg:flex-col
              gap-[3.75rem] lg:gap-[2.5rem] mb-[5rem] lg:mb-[2rem]
              lg:px-4 lg:flex-wrap
              4k:[gap:clamp(3.75rem,calc(3.75rem+((100vw-2000px)/2000px)*1.25rem),5rem)]
              4k:[margin-bottom:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*1rem),6rem)]
            "
          >
            {footerItems.map((item) => (
              <div key={item.label}>
                <h4
                  className="
                    mb-6 lg:mb-4
                    text-[#48515B] font-geist-mono font-medium uppercase
                    text-14 lg:text-sm
                    text-2k-4k-14
                    4k:[margin-bottom:clamp(1.5rem,calc(1.5rem+((100vw-2000px)/2000px)*1.5rem),3rem)]
                    leading-[122%]
                  "
                >
                  {item.label}
                </h4>

                <ul
                  className="
                    mb-[0.5rem]
                    font-geist font-medium text-[#48515B]
                    text-base
                    text-2k-4k
                    leading-[1.4em]
                    space-y-[0.4rem]
                    4k:[space-y:clamp(0.4rem,calc(0.4rem+((100vw-2000px)/2000px)*0.35rem),0.75rem)]
                  "
                >
                  {item.items.map((link) => (
                    <li className="lg:mb-2" key={link.label}>
                      <a
                        target="_blank"
                        id={link.type === "email" ? "email-link" : ""}
                        onTouchStart={() => emailClickHandler(link)}
                        onMouseDown={() => emailClickHandler(link)}
                        rel="noopener"
                        href={link.href}
                        className="hover:text-[#000] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <CopyRight className="hidden lg:block lg:px-4 mb-[4rem] 4k:text-[1.125rem]" />
        </div>

        {/* Mobile Footer */}
        <div className="relative">
          <img
            src={mobileFooterBg}
            className="w-full h-auto object-cover z-[-1] hidden lg:block"
            alt="Right Property mobile footer background design"
          />
          <img
            ref={$mobileFooterLevitate}
            src={mobileFooterLevitate}
            className="absolute left-[8.148125rem] top-[5.375rem] w-[4.6418rem] h-auto object-contain z-[0] hidden lg:block"
            alt="Right Property mobile footer floating decoration element"
          />
        </div>
      </div>

      {/* Analytics pixel */}
      <img
        src="https://tracker.metricool.com/c3po.jpg?hash=c1206165890c83c3d25bd64940ffc24b"
        alt="Metricool analytics tracking pixel"
      />
    </div>
  );
}

/* ----------------- COPYRIGHT ----------------- */
const CopyRight = ({ className }: { className?: string }) => {
  const year = new Date().getFullYear();
  return (
    <div className={className}>
      <span
        className="
          font-geist font-normal tracking-[0] text-[#8D98A5]
          text-14 leading-[24px]
          4k:[font-size:clamp(0.875rem,calc(0.875rem+((100vw-2000px)/2000px)*0.875rem),1.75rem)]
          4k:[line-height:clamp(1.5rem,calc(1.5rem+((100vw-2000px)/2000px)*1.5rem),3rem)]
        "
      >
        © {year} Right Property Ltd
      </span>
    </div>
  );
};
