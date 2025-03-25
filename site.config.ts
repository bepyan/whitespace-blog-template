import type { SiteConfig } from '~/cfg-schema';

const config: SiteConfig = {
  domain: 'https://whitespace-blog-template.netlify.app',
  title: 'whitespace blog template',
  titleTemplate: '%s',
  description: 'minimalism coding blog build with astro',
  favicon: '/favicon.svg',
  ogImage: '/og.avif',
};

export default config;
