import { z } from 'astro/zod';

export const siteConfigSchema = z.object({
  domain: z.string().url(),
  title: z.string(),
  titleTemplate: z.string().optional(),
  description: z.string(),
  favicon: z.string(),
  ogImage: z.string().optional(),
  lang: z.string().default('en'),
});

export type SiteConfig = z.input<typeof siteConfigSchema>;
