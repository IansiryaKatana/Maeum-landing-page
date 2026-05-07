import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lip1 from "@/assets/lip-1.png";
import lip2 from "@/assets/lip-2.png";
import lip3 from "@/assets/lip-3.png";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { img: lip1, label: "Meant for you", rotate: "-rotate-3", labelClass: "bottom-4 left-4", z: "z-20" },
  { img: lip2, label: "xoxo", rotate: "rotate-2", labelClass: "top-4 right-6", z: "z-30" },
  { img: lip3, label: "Coming soon", rotate: "-rotate-2", labelClass: "bottom-4 right-4", z: "z-10" },
];

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
    <section ref={ref} className="relative md:mt-[100px] mb-0" aria-label="Lip preview">
      <div className="relative w-full max-w-[1040px] mx-auto">
        <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-0 px-4 md:px-8 items-center">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`lip-card relative ${c.rotate} ${c.z} transition-transform duration-500 hover:rotate-0 hover:scale-105 max-w-[360px] mx-auto sm:-mx-6 md:-mx-10`}
            >
              <img
                src={c.img}
                alt={c.label}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LipCards;
