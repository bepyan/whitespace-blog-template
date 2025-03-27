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
  bio: {
    name: 'your name',
    avatar: '/avatar.avif',
    description: 'your long description',
    links: [
      {
        label: 'mail',
        url: 'mailto:your-email@example.com',
      },
      {
        label: 'github',
        url: 'https://github.com/your-github-username',
      },
      {
        label: 'linkedin',
        url: 'https://www.linkedin.com/in/your-linkedin-username',
      },
      {
        label: 'x',
        url: 'https://twitter.com/your-twitter-username',
      },
      {
        label: 'instagram',
        url: 'https://www.instagram.com/your-instagram-username',
      },
    ],
  },
  // @see https://giscus.app/
  giscus: {
    repo: 'bepyan/whitespace-blog-template',
    repoId: 'R_kgDONQJYcQ',
  },
};

export default config;
