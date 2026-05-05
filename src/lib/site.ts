// Hardcoded GA4 measurement ID — uses Google's literal install snippet (no env-var indirection).
// Replace with the real ID when ready.
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const SITE = {
  url: import.meta.env.PUBLIC_SITE_URL || "https://uefnraid.com",
  name: "UEFN RAID",
  tagline: "A fast-paced, high-competitive tactical third-person shooter built in Fortnite UEFN.",
  description:
    "RAID is a fast-paced, high-competitive tactical third-person shooter created in Fortnite UEFN. Explore maps, weapons, gallery, and the latest dev posts.",
  islandCode: "0000-0000-0000",
  author: "UEFN RAID Team",
  locale: "en-US",
  ogImage: "/RaidMarketThumbnail.png",
} as const;

export const SOCIALS = [
  { name: "Discord", href: "https://discord.gg/F7YtVbXTHp" },
  { name: "X", href: "https://x.com/uefnraid" },
  { name: "YouTube", href: "https://www.youtube.com/@uefnraid" },
  { name: "TikTok", href: "https://www.tiktok.com/@uefnraid" },
  { name: "Instagram", href: "https://www.instagram.com/uefnraid/" },
  { name: "Facebook", href: "https://www.facebook.com/uefnraid" },
  { name: "Reddit", href: "https://www.reddit.com/r/uefnraid/" },
] as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Gallery", href: "/gallery" },
  { label: "Maps", href: "/maps" },
  { label: "Weapons", href: "/weapons" },
  { label: "How to Play", href: "/learn" },
  { label: "Contact", href: "/contact" },
] as const;

export const FORMSPARK = {
  contact: import.meta.env.PUBLIC_CONTACT_ENDPOINT || "https://submit-form.com/REPLACE_CONTACT_ID",
  newsletter:
    import.meta.env.PUBLIC_NEWSLETTER_ENDPOINT ||
    "https://submit-form.com/REPLACE_NEWSLETTER_ID",
} as const;

export const MAINTENANCE_ETA = import.meta.env.PUBLIC_MAINTENANCE_ETA || "";
