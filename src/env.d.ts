/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare const __MAINTENANCE_MODE__: boolean;

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_CONTACT_ENDPOINT: string;
  readonly PUBLIC_NEWSLETTER_ENDPOINT: string;
  readonly PUBLIC_MAINTENANCE_ETA?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
