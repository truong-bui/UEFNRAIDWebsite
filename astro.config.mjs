import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Build-time maintenance flag.
// Flip to `true`, redeploy (~30 seconds), and the entire site renders the maintenance screen.
// Vite dead-code-eliminates the unused branch — zero runtime cost when false.
const maintenance = false;

const SITE_URL = process.env.PUBLIC_SITE_URL || "https://uefnraid.com";

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "never",
  output: "server",
  build: { format: "directory" },
  adapter: cloudflare({
    // Prerender with Node instead of workerd to avoid runner-worker bundling issues.
    prerenderEnvironment: "node",
  }),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      __MAINTENANCE_MODE__: JSON.stringify(maintenance),
    },
    ssr: {
      // Externalize CJS-only deps so the @cloudflare/vite-plugin workerd
      // module-runner doesn't try to evaluate the `__commonJSMin` wrapper
      // (which crashes with `require_dist is not a function`).
      external: ["cookie"],
    },
    optimizeDeps: {
      exclude: ["cookie"],
    },
  },
  scopedStyleStrategy: "where",
});
