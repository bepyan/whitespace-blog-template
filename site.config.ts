import type { SiteConfig } from '~/cfg-schema';

const config: SiteConfig = {
  siteUrl: 'https://whitespace-blog-template.netlify.app',
  title: 'whitespace blog',
  titleTemplate: '%s',
  description: 'minimalism coding blog build with astro',
  favicon: '/favicon.svg',
  ogImage: '/og.avif',
  analytics: {
    provider: 'umami',
    websiteId: '3e44b81b-09f0-4eaf-8c30-aad1b17e7903',
  },
};

export default config;
