import surfaceImage from "@/assets/v3/surface.webp";
import spaceImage from "@/assets/v3/space.webp";

export default function ChoosePresentationSection() {
  return (
    <section
      id="experiences"
      aria-label="Choose between Surface 2D and Space 3D presentation modes"
      className="content-visibility-auto -mt-[7.5rem] 4k:-mt-56 lg:-mt-26 relative z-10"
    >
      <div className="flex flex-col items-start justify-start lg:px-0 lg:items-start">
        {/* Heading */}
        <div className="rp-container w-full">
          <p
            className="
              pl-[5rem] mb-5 lg:mb-[1rem]
              font-geist-mono font-medium uppercase text-primary-black
              text-14 leading-[150%] tracking-[0.04em]
              lg:px-4 lg:text-start lg:text-14
              text-fluid-4k-14
              4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
              4k:[margin-bottom:clamp(1.3rem,calc(1.3rem+((100vw-2050px)/2000px)*1.3rem),2.6rem)]
            "
          >
            Choose the Presentation Experience
          </p>

          <h2
            className="
              w-[46.875rem] lg:w-full pl-[5rem]
              mb-[2.5rem] lg:mb-[2rem] lg:px-4
              font-geist font-semibold text-primary-black
              text-40 lg:text-32 leading-[130%]
              text-fluid-4k-40
              4k:[width:clamp(46.875rem,calc(46.875rem+((100vw-2050px)/2000px)*46.875rem),93.75rem)]
              4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*5rem),10rem)]
              4k:[margin-bottom:clamp(3rem,calc(3rem+((100vw-2050px)/2000px)*3rem),5rem)]
              4k:[line-height:clamp(130%,calc(130%+((100vw-2050px)/2000px)*0%),130%)]
            "
          >
            Right Property offers two powerful ways to present
          </h2>
        </div>

        {/* Presentation options */}
        <div className="flex w-full lg:flex-col lg:gap-0 mobile-rp-container lg:m-auto">
          {/* Surface */}
          <div
            className="
              group relative grow basis-[100%] overflow-hidden
              4k:[min-height:clamp(45rem,calc(45rem+((100vw-2050px)/2000px)*15rem),60rem)]
            "
          >
            <img
              src={surfaceImage}
              alt='Right Property Surface 2D presentation mode interface'
              className="w-full h-auto group-hover:scale-105 transition-all duration-600 ease-in-out"
            />

            <div
              style={{
                background:
                  "linear-gradient(360deg, rgba(255,255,255,0) -6.49%, #F1F1F1 86.98%)",
              }}
              className="
                absolute top-0 left-0 z-[1] w-full h-[16.825rem]
                4k:[height:clamp(16.825rem,calc(16.825rem+((100vw-2050px)/2000px)*8.175rem),25rem)]
              "
            />

            <div
              className="
                absolute left-[5rem] top-[4.0625rem] lg:left-6 lg:top-6
                4k:[left:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*3rem),8rem)]
                4k:[top:clamp(4.0625rem,calc(4.0625rem+((100vw-2050px)/2000px)*2.9375rem),7rem)]
              "
            >
              <h3
                className="
                  mb-3 font-general-sans font-medium text-raisin-black relative z-[2]
                  text-40 leading-[130%] lg:text-32
                  text-fluid-4k-40
                  4k:[margin-bottom:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
                "
              >
                Surface
              </h3>
              <p
                className="
                  mb-[6.625rem] lg:mb-[2.5rem]
                  font-geist font-normal text-dark-gray relative z-[2]
                  text-18 leading-[140%]
                  text-2k-4k-18
                  4k:[margin-bottom:clamp(6.625rem,calc(6.625rem+((100vw-2050px)/2000px)*3.375rem),10rem)]
                "
              >
                2D, fast, cost-effective, and easy to set up
              </p>
            </div>
          </div>

          {/* Space */}
          <div
            className="
              group relative grow basis-[100%] overflow-hidden
              4k:[min-height:clamp(45rem,calc(45rem+((100vw-2050px)/2000px)*15rem),60rem)]
            "
          >
            <img
              src={spaceImage}
              alt='Right Property Space 3D presentation mode interface'
              className="w-full h-auto group-hover:scale-105 transition-all duration-600 ease-in-out"
            />

            <div
              style={{
                background:
                  "linear-gradient(360deg, rgba(0,0,0,0) -6.49%, #000000 86.98%)",
              }}
              className="
                absolute top-0 left-0 z-[1] w-full h-[16.825rem]
                4k:[height:clamp(16.825rem,calc(16.825rem+((100vw-2050px)/2000px)*8.175rem),25rem)]
              "
            />

            <div
              className="
                absolute left-[5rem] top-[4.0625rem] lg:left-6 lg:top-6
                4k:[left:clamp(5rem,calc(5rem+((100vw-2050px)/2000px)*3rem),8rem)]
                4k:[top:clamp(4.0625rem,calc(4.0625rem+((100vw-2050px)/2000px)*2.9375rem),7rem)]
              "
            >
              <h3
                className="
                  mb-3 font-general-sans font-medium text-white relative z-[2]
                  text-40 leading-[130%] lg:text-32
                  text-fluid-4k-40
                  4k:[margin-bottom:clamp(1rem,calc(1rem+((100vw-2050px)/2000px)*1rem),2rem)]
                "
              >
                Space
              </h3>
              <p
                className="
                  mb-[6.625rem] lg:mb-[2.5rem]
                  font-geist font-normal text-white relative z-[2]
                  text-18 leading-[140%]
                  text-2k-4k-18
                  4k:[margin-bottom:clamp(6.625rem,calc(6.625rem+((100vw-2050px)/2000px)*3.375rem),10rem)]
                "
              >
                3D, stunning, immersive, interactive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
