import FaqItem from "./faq-item";

export default function FaqSection() {
  const faqData: Record<string, string | React.ReactNode>[] = [
    {
      question: "How long does it take to set up Right Property?",
      answer: (
        <ul className="list-disc list-inside">
          <li>2D Setup can be completed in as little as 48 hours.</li>
          <li>3D Setup takes 4–6 weeks, depending on project complexity.</li>
        </ul>
      ),
    },
    {
      question: "What makes Right Property different from other solutions?",
      answer: (
        <ul className="list-disc list-inside">
          <li>
            Unlike other tools, Right Property offers a non-linear, interactive presentation mode, a built-in CRM, and a fully integrated sales & marketing platform — all in one seamless experience.
          </li>
        </ul>
      ),
    },
    {
      question: "Is Right Property only for large developments?",
      answer: (
        <ul className="list-disc list-inside">
          <li>
            Not at all! Whether your project is small or large, you get the same high-quality experience.
          </li>
          <li>
            Our pricing scales with your needs — no hidden fees or surprises.
          </li>
        </ul>
      ),
    },
    {
      question: "What kind of support do you offer?",
      answer: (
        <ul className="list-disc list-inside">
          <li>We provide full onboarding support for smooth setup.</li>
          <li>
            Ongoing support includes technical help, updates, and expert guidance.
          </li>
        </ul>
      ),
    },
    {
      question: "Can I upgrade from 2D to 3D later?",
      answer: (
        <ul className="list-disc list-inside">
          <li>
            Yes! You can start with 2D for faster setup and upgrade to 3D anytime.
          </li>
        </ul>
      ),
    },
    {
      question: "Do I need existing marketing materials?",
      answer: (
        <ul className="list-disc list-inside">
          <li>
            You can upload existing renders, videos, or site plans directly.
          </li>
          <li>
            Or we can help create high-quality visuals for your project.
          </li>
        </ul>
      ),
    },
    {
      question: "Does it replace traditional listing platforms?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Not necessarily—but it removes your reliance on them.</li>
          <li>
            Your interactive website is SEO-ready, integrates Google Analytics,
            and provides real-time tracking for independent lead generation.
          </li>
        </ul>
      ),
    },
    {
      question: "How does pricing work?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Pricing depends on project complexity.</li>
          <li>You can start with 2D and upgrade anytime.</li>
          <li>
            Use our calculator to estimate your investment.
          </li>
        </ul>
      ),
    },
    {
      question: "Do I need to purchase hardware?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Right Property works with all available touchscreens.</li>
        </ul>
      ),
    },
  ];

  return (
    <div id="faqs" className="bg-black content-visibility-auto">
      <section
        className="
          rp-container mx-auto
          py-[10rem] px-[5rem]
          lg:px-4 lg:pb-[5rem] lg:pt-[2rem]
          4k:[max-width:clamp(1680px,calc(1680px+((100vw-2000px)/2000px)*520px),2200px)]
          4k:[padding-top:clamp(7.5rem,calc(7.5rem+((100vw-2000px)/2000px)*7.5rem),15rem)]
          4k:[padding-bottom:clamp(7.5rem,calc(7.5rem+((100vw-2000px)/2000px)*7.5rem),15rem)]
          4k:[padding-left:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),10rem)]
          4k:[padding-right:clamp(5rem,calc(5rem+((100vw-2000px)/2000px)*5rem),5rem)]
        "
        aria-label="Frequently asked questions about Right Property platform"
      >
        {/* Subtitle */}
        <p
          className="
            mb-8 lg:mb-6 font-geist-mono font-medium uppercase text-[#E2E2E2]
            text-base lg:text-sm leading-[140%] lg:leading-[148%] tracking-[0.02em]
            4k:[margin-bottom:clamp(2rem,calc(2rem+((100vw-2000px)/2000px)*2rem),4rem)]
            text-2k-4k
          "
        >
          Have a question?
        </p>

        {/* Heading */}
        <h2
          className="
            text-[#E2E2E2] font-general-sans font-semibold -tracking-[0.01em] lg:-tracking-[0.04em]
            mb-[3.75rem] lg:mb-[2.5rem]
            text-40 lg:text-[2rem] leading-[140%] lg:leading-[130%]
            4k:[margin-bottom:clamp(3.75rem,calc(3.75rem+((100vw-2000px)/2000px)*3.75rem),7.5rem)]
            text-fluid-4k-40
          "
        >
          Most Frequent
          <br />
          Questions and Answers
        </h2>

        {/* FAQ Grid */}
        <div className="flex gap-[30px] lg:flex-col lg:gap-2 4k:[gap:clamp(30px,calc(30px+((100vw-2000px)/2000px)*30px),60px)]">
          <div className="flex-1 space-y-6 lg:space-y-2 4k:[space-y:clamp(6rem,calc(6rem+((100vw-2000px)/2000px)*4rem),10rem)]">
            {faqData.slice(0, 5).map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          <div className="flex-1 space-y-6 lg:space-y-2 4k:[space-y:clamp(6rem,calc(6rem+((100vw-2000px)/2000px)*4rem),10rem)]">
            {faqData.slice(5).map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
