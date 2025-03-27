import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { cfg } from '~/cfg';
import { getPostsCollection } from '~/lib/mdx/post';

export const GET: APIRoute = async () => {
  const postList = await getPostsCollection();

  return rss({
    title: cfg.title,
    description: cfg.description,
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: cfg.siteUrl,
    items: postList.map((post) => {
      return {
        title: post.data.title,
        description: post.data.description,
        link: `/posts/${post.slug}`,
      };
    }),
  });
};
