import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import butterfly1 from "@/assets/butterfly-1.png";
import kiss from "@/assets/KISS.png";
import logoRed from "@/assets/logo-red-color.png";
import storyBg from "@/assets/background-2.png";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-fade", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: `url(${storyBg})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundColor: "transparent",
      }}
      aria-label="Our story"
    >
      <div className="relative max-w-[840px] mx-auto text-center px-4 md:mt-[60px]">
        {/* Side kiss decorations */}
        <img
          src={kiss}
          alt=""
          aria-hidden="true"
          className="absolute -left-4 md:-left-24 top-8 w-48 md:w-[21rem] opacity-20 -rotate-12 hidden sm:block"
        />
        <img
          src={kiss}
          alt=""
          aria-hidden="true"
          className="absolute -right-4 md:-right-16 top-[78%] w-48 md:w-[21rem] opacity-20 rotate-12 hidden sm:block"
        />

        <h2 className="story-fade font-shakehand text-primary text-[48px] md:text-[72px] leading-tight mb-2">
          A lip mask with
        </h2>
        <h3 className="story-fade font-shakehand text-primary text-3xl md:text-[72px] leading-tight mb-10">
          a kiss of <span className="font-myungjo">마음</span> <span className="font-shakehand">Maeum</span>
        </h3>

        <div className="relative space-y-5 text-primary font-geist font-extralight text-[16px] leading-6 md:text-[16px] md:leading-6 lg:text-[32px] lg:leading-[1.3] md:-translate-x-[50px]">
          <img
            src={butterfly1}
            alt=""
            aria-hidden="true"
            className="absolute -left-10 md:-left-20 -top-[52px] md:-top-8 w-[72px] md:w-24 h-auto animate-float"
            style={{ animationDuration: "5s" }}
          />

          <p className="story-fade">
            The beauty you actually want, the kind that lasts, comes from care night after night.
            We were tired of quick fixes: lip products that fade by morning and ask you to buy
            them again.
          </p>
          <p className="story-fade">
            So we made something honest. Made in Korea, built on real science, with the soul of
            정성 (jeongseong) — care, given slowly and with intention. Designed to make your lips
            softer, fuller, and properly cared for. Not in a week, but for the long run.
          </p>
          <p className="story-fade">
            <img
              src={logoRed}
              alt="Maeum"
              className="inline-block align-middle w-24 md:w-40 h-auto mx-1"
            />
            is for anyone who wants Korean
            science with feeling behind it.
          </p>
        </div>

        <p className="story-fade font-shakehand text-primary text-[40px] md:text-[72px] md:leading-none mt-10">xoxo</p>
        <p className="story-fade font-shakehand text-primary text-[40px] md:text-[72px] md:leading-none mt-1">
          With Love, Maeum
        </p>
      </div>
    </section>
  );
};

export default Story;
