import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      author: z.string().default("UEFN RAID Team"),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

const maps = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/maps" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      islandCode: z.string(),
      releaseDate: z.date().optional(),
      updatedDate: z.date().optional(),      
      thumbnail: image(),
      thumbnailAlt: z.string(),
      minimap: image().optional(),
      minimapAlt: z.string().optional(),
      order: z.number().int().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts, maps };
