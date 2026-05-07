import { useEffect, useRef, useState } from "react";
import bg from "@/assets/background-1.jpg";
import heroDesktop from "@/assets/head-banner-desktop.png";
import heroTablet from "@/assets/Head-Banner-Tablet.png";
import heroMobile from "@/assets/head-banner-mobile.png";
import kiss from "@/assets/KISS.png";
import logoCream from "@/assets/logo-cream-color.png";
import butterfly1 from "@/assets/butterfly-1.png";
import butterfly2 from "@/assets/butterfly-2.png";
import Story from "@/components/sections/Story";
import LipCards from "@/components/sections/LipCards";
import PhotoBanner from "@/components/sections/PhotoBanner";
import Waitlist from "@/components/sections/Waitlist";
import Footer from "@/components/sections/Footer";
import WaitlistPopup from "@/components/WaitlistPopup";

const Index = () => {
  const [isWaitlistPopupOpen, setIsWaitlistPopupOpen] = useState(false);
  const hasAutoOpenedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const popupShown = window.sessionStorage.getItem("maeum-waitlist-popup-shown") === "true";
    hasAutoOpenedRef.current = popupShown;

    const onScroll = () => {
      if (hasAutoOpenedRef.current) return;
      if (window.scrollY > 50) {
        hasAutoOpenedRef.current = true;
        window.sessionStorage.setItem("maeum-waitlist-popup-shown", "true");
        setIsWaitlistPopupOpen(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWaitlistPopup = () => setIsWaitlistPopupOpen(true);
  const closeWaitlistPopup = () => setIsWaitlistPopupOpen(false);

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "var(--page-padding)",
      }}
    >
      <h1 className="sr-only">Maeum — Beauty, with feeling. Seoul to Skin.</h1>
      <section className="relative h-[50vh] md:h-screen p-[24px] md:p-[120px] overflow-hidden rounded-3xl" aria-label="Hero spacer">
        <div
          className="absolute inset-0 hidden md:block lg:hidden"
          style={{
            backgroundImage: `url(${heroTablet})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: `url(${heroDesktop})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${heroMobile})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          <div className="w-full flex flex-col items-center px-6">
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <img src={logoCream} alt="Maeum" className="w-52 md:w-[28rem] lg:w-[34rem] h-auto" />
              </div>
              <div className="relative w-full hidden sm:block mt-2">
                <img
                  src={butterfly1}
                  alt=""
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 object-contain animate-float"
                  style={{ animationDuration: "4.8s" }}
                />
                <button
                  type="button"
                  aria-label="Decorative butterfly"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <img
                    src={butterfly2}
                    alt=""
                    aria-hidden="true"
                    className="w-14 h-14 md:w-20 md:h-20 object-contain animate-float"
                    style={{ animationDuration: "5.6s", animationDelay: "0.4s" }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center px-6">
            <img src={logoCream} alt="Maeum" className="w-40 md:w-80 lg:w-[26rem] h-auto" />
            <p className="font-acumin text-[hsl(40,70%,90%)] text-[10px] md:text-xs tracking-[0.3em] mt-1">
              BEAUTY, WITH FEELING.
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center my-8 md:my-12">
        <img
          src={kiss}
          alt=""
          aria-hidden="true"
            className="w-[200px] md:w-[22rem] animate-[pulse_2.4s_ease-in-out_infinite]"
        />
      </div>
      <Story />
      <LipCards />
      <PhotoBanner />
      <Waitlist onOpenPopup={openWaitlistPopup} />
      <Footer />
      <WaitlistPopup isOpen={isWaitlistPopupOpen} onClose={closeWaitlistPopup} />
    </div>
  );
};

export default Index;
