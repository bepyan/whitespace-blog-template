import { getCollection, type CollectionEntry } from 'astro:content';
import { isProd } from '~/lib/utils';

export const isDraft = (post: CollectionEntry<'posts'>) => {
  return isProd && post.data.draft;
};

export const sortCollectionDateDesc = (
  a: CollectionEntry<'posts'>,
  b: CollectionEntry<'posts'>,
) => {
  return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf();
};

export const getPostsCollection = async () => {
  return (await getCollection('posts'))
    .filter((post) => !isDraft(post))
    .sort(sortCollectionDateDesc);
};
