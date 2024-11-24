import { getCollection, type CollectionEntry } from 'astro:content';
import { compareTwoStrings } from '~/lib/dice-coefficient';
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

export const getRelatedPosts = (
  post: CollectionEntry<'posts'>,
  postList: CollectionEntry<'posts'>[],
) => {
  return postList
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const tagPoint = post.data.tags
        ? post.data.tags.filter((tag) => p.data.tags?.includes(tag)).length
        : 0;
      const titlePoint = compareTwoStrings(post.data.title, p.data.title);
      return {
        post: p,
        similarity: tagPoint + 3.0 * titlePoint,
      };
    })
    .toSorted((a, b) => b.similarity - a.similarity)
    .map((p) => p.post)
    .slice(0, 4);
};

export const getTags = (postList: CollectionEntry<'posts'>[]) => {
  return [
    ...new Set(
      postList
        .map((post) => post.data.tags)
        .flat()
        .filter((post): post is string => Boolean(post))
        .toSorted(),
    ),
  ];
};
