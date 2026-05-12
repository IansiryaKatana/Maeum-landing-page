import banner from "@/assets/photo-banner.png";
import Butterfly from "@/components/Butterfly";

const PhotoBanner = () => {
  return (
    <section className="relative z-40 -mt-[30px] mb-12 md:mb-16" aria-label="Seoul to Skin">
      <div className="relative max-w-[1040px] mx-auto">
        <div className="rounded-2xl overflow-hidden">
          <img src={banner} alt="Maeum — Seoul to Skin" className="w-full h-auto block" />
        </div>
        <div
          className="absolute z-10 -left-2 md:-left-6 lg:-left-8 top-[11%] md:top-[13%] rotate-[22deg] origin-top-left pointer-events-none"
          aria-hidden="true"
        >
          <Butterfly
            variant={1}
            className="relative"
            style={{ width: "clamp(96px, 22vw, 168px)" }}
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoBanner;
