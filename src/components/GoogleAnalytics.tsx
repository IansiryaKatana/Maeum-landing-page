import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { isAnalyticsConsentAccepted, syncGoogleAnalyticsPage } from "@/lib/googleAnalytics";

/**
 * Sends GA4 page views on SPA navigations when consent is already granted.
 * First-time consent is handled in `CookieConsent` via `loadGoogleAnalytics`.
 */
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!isAnalyticsConsentAccepted()) return;
    syncGoogleAnalyticsPage(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
};

export default GoogleAnalytics;
