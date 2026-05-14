import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { MAEUM_SITE_ORIGIN } from "./src/lib/site.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITEMAP_PATHS: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/privacy-policy", priority: "0.6", changefreq: "monthly" },
  { path: "/terms-of-use", priority: "0.6", changefreq: "monthly" },
];

function createSeoPlugin(siteUrl: string): Plugin {
  return {
    name: "maeum-seo",
    transformIndexHtml(html) {
      return html.replaceAll('content="/og-image.png"', `content="${siteUrl}/og-image.png"`);
    },
    closeBundle() {
      const distDir = path.join(__dirname, "dist");
      if (!fs.existsSync(distDir)) return;

      const urlEntries = SITEMAP_PATHS.map(
        ({ path: p, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${p}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
      ).join("\n");

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

      fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

      const robotsPublic = path.join(__dirname, "public", "robots.txt");
      const robotsBase = fs.readFileSync(robotsPublic, "utf8").trimEnd();
      const robotsOut = `${robotsBase}\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
      fs.writeFileSync(path.join(distDir, "robots.txt"), robotsOut, "utf8");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrlFromEnv = (env.VITE_SITE_URL ?? "").trim().replace(/\/$/, "");
  const siteUrl = siteUrlFromEnv || MAEUM_SITE_ORIGIN;

  return {
    server: {
      host: "::",
      port: 5173,
      proxy: {
        "/api": {
          target: "http://localhost:8787",
          changeOrigin: true,
        },
      },
      hmr: {
        overlay: false,
      },
    },
    plugins: [react(), createSeoPlugin(siteUrl)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
  };
});
