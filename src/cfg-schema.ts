import { z } from 'astro/zod';

export const analyticsSchema = z.union([
  z.null(),
  z.object({
    provider: z.literal('google'),
    tagId: z.string(),
  }),
  z.object({
    provider: z.literal('umami'),
    websiteId: z.string(),
    host: z.string().optional(),
  }),
]);

export const siteConfigSchema = z.object({
  domain: z.string().url(),
  title: z.string(),
  titleTemplate: z.string().optional(),
  description: z.string(),
  author: z.string(),
  favicon: z.string(),
  ogImage: z.string().optional(),
  lang: z.string().default('en'),
  analytics: analyticsSchema,
});

export type SiteConfig = z.input<typeof siteConfigSchema>;
