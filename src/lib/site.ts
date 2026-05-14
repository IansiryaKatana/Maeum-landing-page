/** Public display domain (UK). */
export const MAEUM_SITE_DISPLAY = "Maeum.co.uk";

/** Canonical origin for SEO, sitemap, and Open Graph (no trailing slash). Override with `VITE_SITE_URL` for staging. */
export const MAEUM_SITE_ORIGIN = "https://maeum.co.uk";

/**
 * Production waitlist API (Cloudflare Worker). Used when `VITE_API_BASE_URL` is unset so static
 * hosts (e.g. Hostinger) still call a real backend — same-origin `/api/waitlist` does not exist there.
 * Override with `VITE_API_BASE_URL` for a different worker or staging API.
 */
export const MAEUM_WAITLIST_API_ORIGIN = "https://maeum-waitlist-api.dqdonatequran.workers.dev";
