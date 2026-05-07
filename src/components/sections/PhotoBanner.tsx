import banner from "@/assets/photo-banner.png";
import Butterfly from "@/components/Butterfly";

const PhotoBanner = () => {
  return (
    <section className="relative z-20 my-12 md:my-16" aria-label="Seoul to Skin">
      <div className="relative max-w-[1040px] mx-auto rounded-2xl overflow-hidden">
        <img src={banner} alt="Maeum — Seoul to Skin" className="w-full h-auto block" />
        <Butterfly variant={1} className="absolute bottom-6 left-4 md:left-12" size={48} delay={0.8} />
      </div>
    </section>
  );
};

export default PhotoBanner;
