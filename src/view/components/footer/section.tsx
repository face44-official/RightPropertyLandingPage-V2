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
      let tl: GSAPTimeline | null = null;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: $footerContainer.current,
            start: "bottom-=15% bottom",
            end: "bottom-=15% bottom-=5%",
            scrub: false,
            toggleActions: "play none none reset",
            invalidateOnRefresh: true,
          },
        });
        tl.to($levitateItem.current, {
          y: "-6.25rem",
          duration: 1,
          delay: 0.5,
          ease: "power2.inOut",
        });
      });
      mm.add("(max-width: 768px)", () => {
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: $footerContainer.current,
            start: "bottom-=20% bottom",
            end: "bottom-=20% bottom-=5%",
            scrub: false,
            toggleActions: "play none none reset",
            invalidateOnRefresh: true,
          },
        });
        tl.to($mobileFooterLevitate.current, {
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
      <div className="relative h-[45.3125rem] lg:h-auto lg:p-0 px-[5rem] pt-[7.125rem] lg:w-full">
        <img
          ref={$levitateItem}
          src={footerLevitate}
          className="absolute left-[36.25rem] top-[29.25rem] w-[21.25rem] h-auto object-contain z-[0] lg:hidden"
          alt="Right Property footer floating decoration element"
        />
        <img
          src={footerBg}
          className="absolute bottom-0 left-0 w-[105rem] h-full object-cover z-[-1] lg:hidden"
          alt="Right Property footer background design"
        />
        <div
          className="
    flex justify-between lg:flex-col
    4k:gap-[5rem] 4k:px-[10rem]
  "
        >
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
        4k:w-[11rem] 4k:mb-[9rem]
      "
            />
            <CopyRight className="lg:hidden 4k:text-[1.125rem]" />
          </div>

          <div
            className="
      flex flex-row-reverse lg:flex-col
      gap-[3.75rem] lg:gap-[2.5rem] mb-[5rem] lg:mb-[2rem]
      lg:px-4 lg:flex-wrap
      4k:gap-[5rem] 4k:mb-[6rem]
    "
          >
            {footerItems.map((item) => (
              <div key={item.label}>
                <h4
                  className="
            mb-6 lg:mb-4
            text-[#48515B] font-geist-mono font-medium uppercase
            text-16 lg:text-sm 4k:text-[1.25rem]
            leading-[122%] tracking-[0em]
          "
                >
                  {item.label}
                </h4>

                <ul
                  className="
            mb-[0.5rem]
            font-geist font-medium text-[#48515B]
            text-20 lg:text-base 4k:text-[1.5rem]
            leading-[1.4em] tracking-[0%]
            space-y-[0.4rem] 4k:space-y-[0.75rem]
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
      <img
        src="https://tracker.metricool.com/c3po.jpg?hash=c1206165890c83c3d25bd64940ffc24b"
        alt="Metricool analytics tracking pixel"
      />
    </div>
  );
}

const CopyRight = ({ className }: { className?: string }) => {
  const year = new Date().getFullYear();
  return (
    <div className={className}>
      <span className="font-geist text-14 font-normal leading-[24px] tracking-[0] text-[#8D98A5] 4k:text-[1.125rem] 4k:leading-[1.8rem]">
        © {year} Right Property Ltd
      </span>
      {/* <span className="font-geist text-[0.8rem] leading-[1.3em] font-normal  tracking-[0] text-[#8D98A5]" >
            House 401, Highland, 165 The Broadway, London SW19 1NE, United Kingdom
        </span> */}
    </div>
  );
};
