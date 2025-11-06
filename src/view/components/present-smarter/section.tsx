import presentSmarterBgMobile from "@/assets/v3/mobile_present_smarter.webp";
import presentSmarterBg1 from "@/assets/v3/presentation-img1.webp";
import presentSmarterBg2 from "@/assets/v3/presentation-img2.webp";
import presentSmarterBg3 from "@/assets/v3/presentation-img3.webp";

import Accessibility from "@/view/components/accessiblity";
import { Parallax } from "../parallax";
import startIcon from "@/assets/v3/star_icon.svg";
import spaceIcon from "@/assets/v3/space_icon.svg";

export default function PresentSmarterSection() {
  const items = [
    {
      title: (
        <span>
          Interactive &<br />
          Non-linear storytelling
        </span>
      ),
      description:
        "Break the limitations of traditional presentations. Let your audience explore freely, follow their curiosity, and experience your project in a way that fits the moment.",
      icon: (
        <img
          src={startIcon}
          alt="interactive storytelling icon"
          className="
            w-[5rem] lg:w-[3.5rem] h-auto object-contain
            4k:[width:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),10rem)]
          "
        />
      ),
    },
    {
      title: (
        <span>
          Ready for Every Screen,
          <br />
          Every Space
        </span>
      ),
      description:
        "Whether it’s a large-scale presentation in a sales suite or a one-on-one meeting on a tablet, Right Property adapts to the setting—without losing impact.",
      icon: (
        <img
          src={spaceIcon}
          alt="responsive design icon"
          className="
            w-[5rem] lg:w-[3.5rem] h-auto object-contain
            4k:[width:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),10rem)]
          "
        />
      ),
    },
  ];

  return (
    <div
      className="
        mb-[7rem] lg:mb-[10rem]
        4k:[margin-bottom:clamp(12rem,calc(12rem+((100vw-2000px)/2000px)*12rem),24rem)]
        h-auto
        overflow-visible relative content-visibility-auto
      "
    >
      <section>
        {/* Mobile Background */}
        <img
          src={presentSmarterBgMobile}
          alt="present smarter"
          className="z-[-1] w-full h-auto hidden lg:block mb-[2.5rem] rp-container"
        />

        <div
          className="
            lg:bg-none! lg:h-auto! relative z-[8]
            flex justify-start
            pt-[7.5rem]! pl-[48vw] lg:p-4 lg:pt-0!
            4k:[padding-left:clamp(46vw,calc(46vw+((100vw-2000px)/2000px)*3vw),50vw)]
          "
        >
          {/* Left Image Grid */}
          <div
            className="
              absolute left-0 top-0 w-full h-[calc(58rem+15px)] lg:h-auto bg-[#EEF1F7] 
              4k:[height:clamp(59rem,calc(59rem+((100vw-2000px)/2000px)*59rem),118rem)]
            "
          >
            <div className="image-wrap absolute left-0 top-0 w-[50vw] object-top object-cover overflow-hidden lg:hidden">
              <div
                className="
                  w-full h-[35rem] overflow-hidden
                  4k:[height:clamp(35rem,calc(35rem+((100vw-2000px)/2000px)*35rem),70rem)]
                "
              >
                <img
                  src={presentSmarterBg1}
                  alt="main"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Grid of secondary images */}
              <div
                className="
                  mt-4 grid grid-cols-2 gap-4
                  4k:[margin-top:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*1rem),2rem)]
                  4k:[gap:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*1rem),2rem)]
                  h-[23rem] overflow-hidden
                  4k:[height:clamp(23rem,calc(23rem+((100vw-2000px)/2000px)*23rem),46rem)]
                "
              >
                <div
                  className="
                    image-1 h-[18rem] overflow-hidden relative
                    4k:[height:clamp(18rem,calc(18rem+((100vw-2000px)/2000px)*18rem),36rem)]
                  "
                >
                  <img
                    src={presentSmarterBg2}
                    alt="secondary 1"
                    className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                  />
                </div>
                <div
                  className="
                    image-2 h-[23rem] overflow-hidden relative
                    4k:[height:clamp(23rem,calc(23rem+((100vw-2000px)/2000px)*23rem),46rem)]
                  "
                >
                  <img
                    src={presentSmarterBg3}
                    alt="secondary 2"
                    className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
                  />
                </div>  
              </div>
            </div>
          </div>

          {/* Right Text / Content */}
          <Parallax id="present-smarter-section" speed={1.3}>
            <div
              className="
                w-[49.375rem] lg:w-full
                4k:[width:clamp(49.375rem,calc(49.375rem+((100vw-2000px)/2000px)*49.375rem),98.75rem)]
              "
            >
              <Accessibility
                title="Present smarter, your way"
                subHeading="Presentation"
                description="A property is more than floor plans and price lists — it’s an experience waiting to be brought to life. Our technology turns presentations into interactive journeys, tailored for any setting."
                items={items}
              />
            </div>
          </Parallax>
        </div>
      </section>

      <div
        className="
          hidden lg:block absolute bottom-0 w-full h-[15rem] bg-white z-[0]
          4k:[height:clamp(15rem,calc(15rem+((100vw-2000px)/2000px)*15rem),30rem)]
        "
      ></div>
    </div>
  );
}
