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
        mb-[20rem] xl:mb-[12rem] lg:mb-[3rem]
        4k:[margin-bottom:clamp(24rem,calc(24rem+((100vw-2000px)/2000px)*24rem),48rem)]
        bg-[#EEF1F7]
        h-[100vh] md:h-auto overflow-visible relative content-visibility-auto
      "
    >
      <section>
        {/* Mobile Background */}
        <img
          src={presentSmarterBgMobile}
          alt='present smarter'
          className="z-[-1] w-full h-auto hidden lg:block mb-[2.5rem] rp-container"
        />

        <div
          className="
            lg:bg-none! lg:h-auto! relative z-[8]
            flex justify-start
            p-[7.5rem] pl-[48vw] lg:p-4
            4k:[padding:clamp(7.5rem,calc(7.5rem+((100vw-2000px)/2000px)*7.5rem),15rem)]
            4k:[padding-left:clamp(48vw,calc(48vw+((100vw-2000px)/2000px)*4vw),52vw)]
          "
        >
          {/* Left Image Grid */}
          <div
            className="
              absolute left-0 top-0 w-[50vw] h-[80vh] object-top object-cover lg:hidden
              4k:[width:clamp(50vw,calc(50vw+((100vw-2000px)/2000px)*5vw),55vw)]
              4k:[height:clamp(80vh,calc(80vh+((100vw-2000px)/2000px)*20vh),100vh)]
            "
          >
            <div className="w-full">
              <img
                src={presentSmarterBg1}
                alt='main'
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Grid of secondary images */}
            <div
              className="
                mt-4 grid grid-cols-2 gap-4
                4k:[margin-top:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*1rem),2rem)]
                4k:[gap:clamp(1rem,calc(1rem+((100vw-2000px)/2000px)*1rem),2rem)]
              "
            >
              <img
                src={presentSmarterBg2}
                alt='secondary 1'
                className="w-full h-auto object-cover rounded-lg"
              />
              <img
                src={presentSmarterBg3}
                alt='secondary 2'
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Text / Content */}
          <Parallax id='present-smarter-section' speed={1.3}>
            <div
              className="
                w-[49.375rem] lg:w-full
                4k:[width:clamp(49.375rem,calc(49.375rem+((100vw-2000px)/2000px)*49.375rem),98.75rem)]
              "
            >
              <Accessibility
                title='Present smarter, your way'
                subHeading='Presentation'
                description='A property is more than floor plans and price lists — it’s an experience waiting to be brought to life. Our technology turns presentations into interactive journeys, tailored for any setting.'
                items={items}
              />
            </div>
          </Parallax>
        </div>
      </section>

      {/* White background band bottom */}
      <div
        className="
          hidden lg:block absolute bottom-0 w-full h-[15rem] bg-white z-[0]
          4k:[height:clamp(15rem,calc(15rem+((100vw-2000px)/2000px)*15rem),30rem)]
        "
      ></div>
    </div>
  );
}
