import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { COOKIE_CONSENT_KEY } from "@/lib/cookieConsentStorage";
import { loadGoogleAnalytics } from "@/lib/googleAnalytics";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    setIsVisible(savedConsent !== "accepted" && savedConsent !== "declined");
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
      if (value === "accepted") {
        loadGoogleAnalytics();
      }
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className="fixed bottom-4 right-4 z-[130] w-[calc(100%-2rem)] max-w-sm rounded-xl border border-black/10 bg-[#fdf5df] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.28)]"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <p className="font-geist text-sm text-[#4d1a12]">
        We use cookies to improve your experience and analyze traffic. By clicking Accept, you agree to our use
        of cookies.
      </p>
      <div className="mt-3 flex items-center justify-between gap-2">
        <Link to="/privacy-policy" className="text-xs font-geist text-[#8f2d24] underline underline-offset-2">
          Learn more
        </Link>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="border-[#cfa67b] bg-[#fff7e8] text-[#7f2b20] hover:bg-[#f8ebd0]"
            onClick={() => handleConsent("declined")}
          >
            Decline
          </Button>
          <Button
            type="button"
            size="sm"
            className="bg-[#c81b17] text-[#f6ead0] hover:bg-[#b21713]"
            onClick={() => handleConsent("accepted")}
          >
            Accept
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default CookieConsent;
