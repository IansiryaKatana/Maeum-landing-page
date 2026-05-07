import heroDesktop from "@/assets/head-banner-desktop.png";
import heroMobile from "@/assets/head-banner-mobile.png";
import logoCream from "@/assets/logo-cream-color.png";
import bannerText from "@/assets/banner-text.png";
import Butterfly from "@/components/Butterfly";

const Hero = () => {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden md:aspect-[1277/911]" aria-label="Hero">
      {/* Section background layers */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${heroDesktop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${heroMobile})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* Content container: control width/padding here */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] h-full min-h-[28rem] md:min-h-0 px-4 md:pt-[40px] md:px-[120px] md:pb-[120px]">
        {/* Top logo overlay */}
        <div className="absolute top-4 md:top-[120px] left-0 right-0 flex flex-col items-center px-6">
          <p className="text-center text-[hsl(40,70%,90%)] font-acumin text-xs md:text-sm tracking-wide mb-3">
            Coming in August 2026
          </p>
          <img src={logoCream} alt="Maeum" className="w-52 md:w-[28rem] lg:w-[34rem] h-auto" />
          <img src={bannerText} alt="Heart Mind Feeling" className="w-56 md:w-[30rem] lg:w-[38rem] h-auto mt-4" />
        </div>

        {/* Curved HEART MIND FEELING sentence */}
        <div className="absolute top-[24%] md:top-[26%] left-0 right-0 hidden sm:block px-2 md:px-4">
          <svg viewBox="-80 -360 1360 680" className="w-full h-auto overflow-visible">
            <path id="hero-curve-text" d="M 20 245 Q 600 -290 1180 245" fill="none" />
            <text
              className="font-lucy text-primary uppercase tracking-[0.12em]"
              fill="currentColor"
              style={{ fontSize: "48px" }}
            >
              <textPath href="#hero-curve-text" startOffset="50%" textAnchor="middle">
                HEART MIND FEELING
              </textPath>
            </text>
          </svg>
        </div>

        {/* Floating butterflies */}
        <Butterfly variant={1} className="absolute top-[32%] left-[12%] md:left-[18%]" size={40} delay={0} />
        <Butterfly variant={2} className="absolute top-[36%] right-[10%] md:right-[15%]" size={44} delay={1.2} />

        {/* Bottom maeum logo lockup */}
        <div className="absolute bottom-4 md:bottom-[50px] left-0 right-0 flex flex-col items-center px-6">
          <img src={logoCream} alt="Maeum" className="w-40 md:w-80 lg:w-[26rem] h-auto" />
          <p className="font-acumin text-[hsl(40,70%,90%)] text-[10px] md:text-xs tracking-[0.3em] mt-1">
            BEAUTY, WITH FEELING.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
