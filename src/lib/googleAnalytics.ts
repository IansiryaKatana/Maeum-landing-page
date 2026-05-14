import { COOKIE_CONSENT_KEY } from "@/lib/cookieConsentStorage";

const GA_MEASUREMENT_ID = "G-2NNTFRSJ7T";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function isAnalyticsConsentAccepted(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}

let loadStarted = false;

/**
 * Ensures gtag.js is loaded once, then sends a GA4 page view for `pagePath`.
 * No-ops when analytics cookies are not accepted.
 */
export function syncGoogleAnalyticsPage(pagePath: string): void {
  if (!isAnalyticsConsentAccepted() || typeof document === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }

  if (!loadStarted) {
    loadStarted = true;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    window.gtag("js", new Date());
  }

  window.gtag("config", GA_MEASUREMENT_ID, { page_path: pagePath });
}

/** Call after the user accepts analytics cookies (e.g. from the consent banner). */
export function loadGoogleAnalytics(): void {
  if (typeof window === "undefined") return;
  syncGoogleAnalyticsPage(`${window.location.pathname}${window.location.search}`);
}
