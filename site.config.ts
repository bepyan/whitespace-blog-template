import type { SiteConfig } from '~/cfg-schema';

const config: SiteConfig = {
  siteUrl: 'https://whitespace-blog-template.netlify.app',
  title: 'whitespace blog',
  titleTemplate: '%s',
  description: 'minimalism coding blog build with astro',
  favicon: '/favicon.svg',
  ogImage: '/og.avif',
  // analytics: {
  //   provider: 'umami',
  //   websiteId: 'your-umami-website-id',
  // },
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
    // change this to your repo id
    repoId: 'R_kgDONQJYcQ',
  },
};

export default config;
