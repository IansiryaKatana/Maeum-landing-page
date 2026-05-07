import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import threeLips from "@/assets/3-LIPS.webp";
import butterfly from "@/assets/butterfly-2.png";
import chamomile from "@/assets/CHAMOMILE.png";

gsap.registerPlugin(ScrollTrigger);

const LipCards = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".lip-card", {
        opacity: 0,
        y: 50,
        rotation: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 md:mt-[100px] mb-0" aria-label="Lip preview">
      <div className="relative w-full max-w-[1040px] mx-auto">
        <div className="flex w-full items-center justify-center">
          <div className="lip-card group relative w-full max-w-[1040px]">
            <img
              src={chamomile}
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-12 left-2 md:-top-16 md:-left-6 lg:-top-10 w-16 md:w-20 lg:w-[108px] h-auto animate-float z-20"
              style={{ animationDuration: "5.2s" }}
            />
            <img
              src={butterfly}
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-10 right-2 md:-top-16 md:-right-6 lg:-top-10 w-14 md:w-20 lg:w-[108px] h-auto animate-float z-20"
              style={{ animationDuration: "4.8s", animationDelay: "0.3s" }}
            />
            <img
              src={threeLips}
              alt="Maeum lip collection"
              className="w-full h-auto rounded-lg transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LipCards;
