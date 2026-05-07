import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import postcard from "@/assets/post-card.png";
import postcardMobile from "@/assets/post-card-obile.png";
import redBg from "@/assets/red-background.jpg";
import chamomile from "@/assets/CHAMOMILE.png";
import Butterfly from "@/components/Butterfly";

gsap.registerPlugin(ScrollTrigger);

const Waitlist = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".waitlist-fade", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-0 -mx-[var(--page-padding)] px-6 pt-12 pb-12 md:pt-[240px] md:pb-28 md:-mt-[140px]"
      style={{
        backgroundImage: `url(${redBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      aria-label="Join the waitlist"
    >
      <div className="relative max-w-[1040px] mx-auto">
        <div className="relative waitlist-fade w-full h-[650px] md:h-[640px] rounded-3xl bg-transparent px-8 py-12 md:px-16 md:py-16">
          <img
            src={postcardMobile}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain md:hidden pointer-events-none"
          />
          <img
            src={postcard}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden md:block w-full h-full object-contain pointer-events-none"
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center -rotate-[3deg] md:-rotate-[3deg]">
            <h2 className="font-shakehand text-primary text-[50px] md:text-[96px] mb-[30px]">
              <span className="md:hidden">
                Be the first
                <br />
                to feel Maeum
              </span>
              <span className="hidden md:inline">Be the first to feel Maeum!</span>
            </h2>
            <p className="font-geist font-extralight text-primary/80 text-[20px] leading-6 md:text-[16px] md:leading-6 lg:text-[32px] lg:leading-[1.3] mt-0 mb-[30px] w-[75%] md:w-auto max-w-md">
              Register now for exclusive launch gifts, early ritual access, and members-only surprises.
            </p>
            <button
              className="group relative inline-flex items-center justify-center gap-1.5 w-full max-w-[240px] md:w-auto md:max-w-none min-w-0 md:min-w-[620px] font-myungjo uppercase text-[11px] md:text-[52px] leading-none tracking-[0.01em] whitespace-nowrap px-4 md:px-12 py-3 md:py-5 bg-[#c81b17] text-[#f6ead0] rounded-[8px] md:rounded-[20px] rotate-[-3deg] md:rotate-[-2deg] shadow-[0_14px_30px_rgba(0,0,0,0.28),0_0_22px_rgba(236,214,170,0.45)] transition-all duration-300 hover:scale-[1.01] hover:brightness-105 active:scale-[0.995]"
              onClick={() => {
                const el = document.getElementById("waitlist-form");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="pointer-events-none absolute inset-[7px] rounded-[8px] md:rounded-[14px] border border-[#f1dbb7]/80" />
              <span className="relative z-10">JOIN THE WAITLIST</span>
              <span className="relative z-10 inline-block font-myungjo text-[1em] leading-none transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Daisy decoration */}
          <img
            src={chamomile}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-8 -left-6 md:-left-12 w-32 md:w-48 -rotate-12"
          />
        </div>

        {/* Floating butterfly */}
        <Butterfly
          variant={2}
          className="absolute -top-12 right-0 md:right-4"
          size={112}
          delay={0.6}
        />
      </div>
    </section>
  );
};

export default Waitlist;
