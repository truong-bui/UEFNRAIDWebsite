# UEFN RAID — Website

Official site for **RAID**, a fast-paced tactical 5v5 third-person shooter built in Fortnite UEFN.

Showcase site (not affiliate). Provides a homepage, dev posts, gallery, map roster, weapon roster, how-to-play guide, contact form, and newsletter signup.

## Stack

- **Astro 6** (`output: 'static'`, `trailingSlash: 'never'`, directory-format build)
- **TypeScript strict** with path aliases (`@/*`, `@components/*`, `@layouts/*`, `@lib/*`, `@styles/*`, `@assets/*`)
- **Tailwind v4** via `@tailwindcss/vite` (oklch tokens — ink / brand-red / accent-amber)
- **`@astrojs/cloudflare`** adapter → **Cloudflare Workers**
- **`wrangler.jsonc`** (not `.toml` — adapter convention)
- **Astro content collections** for `posts` and `gallery` (no DB)
- **`@astrojs/sitemap`** + dynamic `robots.txt` route + `@astrojs/rss`

## Features

- Build-time **maintenance flag** in `astro.config.mjs` (Vite `define` + `BaseLayout` branch — DCE'd when off)
- Hardcoded **GA4** install snippet (no env-var indirection, no Consent Mode v2)
- **Formspark** forms for contact and newsletter (`_gotcha` honeypot, `_redirect` → `/thank-you` and `/subscribed`)
- **VideoGame JSON-LD**, OpenGraph, Twitter Card, canonical URLs site-wide

## Commands

```bash
npm run dev          # http://localhost:4321
npm run build        # builds dist/client + dist/server
npm run typecheck    # astro check (target: 0/0/0)
npm run preview
npm run wrangler:dev # local Worker preview
npm run deploy       # astro build && wrangler deploy
```

## Environment variables

| Variable | Purpose |
|---|---|
| `PUBLIC_SITE_URL` | Canonical URL (SEO, sitemap, RSS, JSON-LD) |
| `PUBLIC_CONTACT_ENDPOINT` | Formspark contact-form URL |
| `PUBLIC_NEWSLETTER_ENDPOINT` | Formspark newsletter-form URL |
| `PUBLIC_MAINTENANCE_ETA` | Optional ETA copy on `/maintenance` |
| `PUBLIC_GA_ID` | GA4 measurement ID (e.g. `G-XXXXXXXXXX`). Leave unset to disable analytics. |

## Maintenance mode

Flip `const maintenance = true;` at the top of `astro.config.mjs`, redeploy. Vite injects the value, `BaseLayout` short-circuits the page tree to `<MaintenanceScreen />`, and the unused branch is dead-code-eliminated when off.

## Adding content

- **Posts** — drop a `.md` into `src/content/posts/`. Required frontmatter: `title`, `description`, `pubDate`. Optional: `cover`, `tags`, `featured`, `draft`.
- **Gallery** — drop a `.md` into `src/content/gallery/`. Required: `title`, `cover`, `coverAlt`, `kind` (`screenshot` / `render` / `concept` / `video`). Videos use `videoSrc` pointing at a file in `public/videos/`.
- **Maps** — edit the curated array in `src/pages/maps.astro`.
- **Weapons** — drop PNGs into the matching `src/assets/images/weapons/<Category>/` folder. The page auto-discovers them via `import.meta.glob`.
