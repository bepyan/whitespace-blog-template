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

export const socialLinkSchema = z.union([
  z.object({
    label: z.literal('mail'),
    url: z.string(),
  }),
  z.object({
    label: z.literal('github'),
    url: z.string().url(),
  }),
  z.object({
    label: z.literal('linkedin'),
    url: z.string().url(),
  }),
  z.object({
    label: z.literal('x'),
    url: z.string().url(),
  }),
  z.object({
    label: z.literal('instagram'),
    url: z.string().url(),
  }),
  z.object({
    label: z.literal('bluesky'),
    url: z.string().url(),
  }),
]);

export const siteConfigSchema = z.object({
  siteUrl: z.string().url(),
  title: z.string(),
  titleTemplate: z.string().optional(),
  description: z.string(),
  favicon: z.string(),
  ogImage: z.string().optional(),
  lang: z.string().default('en'),
  analytics: analyticsSchema,
  bio: z.object({
    name: z.string(),
    avatar: z.string().optional(),
    description: z.string(),
    links: z.array(socialLinkSchema),
  }),
});

export type SiteConfig = z.input<typeof siteConfigSchema>;
