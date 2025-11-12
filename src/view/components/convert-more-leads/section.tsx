import Accessibility from "@/view/components/accessiblity";
import convertMoreLeads from "@/assets/v3/convert_more_leads_desktop.webp";
import convertMoreLeadsMobile from "@/assets/v3/mobile_insights.webp";
import startIcon from "@/assets/v3/star_icon.svg";
import spaceIcon from "@/assets/v3/space_icon.svg";
import { Parallax } from "../parallax";

export default function ConvertMoreLeadsSection() {
  const items = [
    {
      icon: (
        <img
          src={startIcon}
          alt="Performance tracking feature icon"
          className="
            w-[5rem] lg:w-[4rem] h-auto object-contain
            4k:[width:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
          "
        />
      ),
      title: (
        <span>
          Track performance,
          <br />
          improve results
        </span>
      ),
      description:
        "See how your team performs, track KPIs, and optimize what works—without manual effort.",
    },
    {
      icon: (
        <img
          src={spaceIcon}
          alt="User-centered platform feature icon"
          className="
            w-[5rem] lg:w-[4rem] h-auto object-contain
            4k:[width:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
          "
        />
      ),
      title: (
        <span>
          User-centered and
          <br />
          intuitive platform
        </span>
      ),
      description:
        "No clutter, no complexity. It’s just a CRM that’s intuitive, focused, and easy to use from day one.",
    },
  ];

  return (
    <div
      className="
        mb-[14rem] lg:mb-0
        bg-[#EEF1F7]
        h-[48.25rem] lg:h-auto overflow-visible relative content-visibility-auto
        4k:[height:clamp(48.25rem,calc(48.25rem+((100vw-2050px)/2000px)*48.25rem),96.5rem)]
        4k:[margin-bottom:clamp(14rem,calc(14rem+((100vw-2050px)/2000px)*14rem),16rem)]
      "
    >
      {/* MOBILE */}
      <section>
        <div className="relative hidden lg:block">
          <img
            src={convertMoreLeadsMobile}
            alt="Right Property lead conversion insights mobile view"
            className="z-[-1] w-full h-auto rp-container"
          />
          <div
            className="
              absolute right-0 bottom-0
              w-[375px] h-[68px]
              4k:[width:clamp(375px,calc(375px+((100vw-2050px)/2000px)*375px),750px)]
              4k:[height:clamp(68px,calc(68px+((100vw-2050px)/2000px)*68px),136px)]
            "
            style={{
              background:
                "linear-gradient(180deg, rgba(238, 241, 247, 0) 0%, #EEF1F7 100%)",
            }}
          />
        </div>

        {/* DESKTOP */}
        <div
          className="
            rp-container relative z-[8] flex justify-start
            py-[7.5rem] px-[5rem] lg:p-4
            4k:[padding:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
          "
        >
          <img
            src={convertMoreLeads}
            alt="Right Property lead conversion insights desktop background"
            className="
              z-[-1] absolute top-0 left-0 w-full lg:hidden
              h-[48.25rem]
              4k:[height:clamp(48.25rem,calc(48.25rem+((100vw-2050px)/2000px)*48.25rem),96.5rem)]
              object-cover
            "
          />

          <Parallax id="convert-more-leads-section" speed={1.3}>
            <div
              className="
                w-[49.375rem] lg:w-full
                4k:[width:clamp(49.375rem,calc(49.375rem+((100vw-2050px)/2000px)*49.375rem),98.75rem)]
              "
            >
              <Accessibility
                subHeading="SALES"
                title="Convert more leads with smarter sales insights"
                description="Track what matters, follow up smarter, and close with confidence—powered by a CRM made for property sales."
                items={items}
              />
            </div>
          </Parallax>
        </div>
      </section>

      {/* WHITE BASE */}
      <div
        className="
          hidden lg:block absolute bottom-0 w-full bg-white z-[5]
          h-[13rem]
          4k:[height:clamp(13rem,calc(13rem+((100vw-2050px)/2000px)*13rem),26rem)]
        "
      ></div>
    </div>
  );
}
