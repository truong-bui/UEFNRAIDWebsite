import { SITE } from "@lib/site";
import type { APIContext } from "astro";

const DISALLOW = ["/maintenance", "/thank-you", "/subscribed", "/404"];

export async function GET(_ctx: APIContext) {
  const lines = [
    "User-agent: *",
    ...DISALLOW.map((p) => `Disallow: ${p}`),
    `Sitemap: ${SITE.url}/sitemap-index.xml`,
    "",
  ].join("\n");
  return new Response(lines, { headers: { "Content-Type": "text/plain" } });
}
