import { format } from 'date-fns';
import { useState } from 'react';
import { CloseIcon } from '~/components/ui/icons';
import type { PostData } from '~/lib/types';
import { cn } from '~/lib/utils';

export default function PostList({
  posts,
  tags,
}: {
  posts: PostData[];
  tags: string[];
}) {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.data.tags?.includes(selectedTag))
    : posts;

  return (
    <>
      <TagFilter
        tags={tags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <PostYearList posts={filteredPosts} />
    </>
  );
}

function TagFilter({
  tags,
  selectedTag,
  setSelectedTag,
}: {
  tags: string[];
  selectedTag?: string;
  setSelectedTag: (tag: string | undefined) => void;
}) {
  const hasSelected = selectedTag !== undefined;

  function handleSelectTag(tag: string) {
    if (hasSelected && selectedTag === tag) {
      setSelectedTag(undefined);
    } else {
      setSelectedTag(tag);
    }
  }

  return (
    <div className="relative my-14 border-l pl-4">
      <div className="absolute -left-16 select-none">
        <span className="-mx-1 inline-block rounded-md px-1">Tags</span>
      </div>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <div key={tag} className="inline-block">
            <button
              className={cn(
                'link group-hover:opacity-60 hover:opacity-100!',
                hasSelected && selectedTag === tag && 'opacity-100!',
                hasSelected && selectedTag !== tag && 'opacity-40!',
              )}
              onClick={() => handleSelectTag(tag)}
            >
              {tag}
            </button>
          </div>
        ))}
        {hasSelected && (
          <button
            className="text-text-2 hover:text-text-1 p-1 transition"
            onClick={() => setSelectedTag(undefined)}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </div>
  );
}

function PostYearList({ posts }: { posts: PostData[] }) {
  const yearList = Object.entries(
    posts.reduce<{ [year: string]: PostData[] }>((ac, post) => {
      const year = new Date(post.data.date).getFullYear();
      if (!ac[year]) ac[year] = [];
      ac[year].push(post);
      return ac;
    }, {}),
  ).sort(([yearA], [yearB]) => +yearB - +yearA);

  return (
    <div className="group my-14 space-y-7 border-l pl-4">
      {yearList.map(([year, postList]) => {
        return (
          <div key={year} className="group/year relative">
            <div className="absolute -left-20 select-none">
              <h2 className="group-hover/year:bg-gray-soft -mx-1 rounded-md px-1 transition group-hover:opacity-40 group-hover/year:opacity-100!">
                {year}
              </h2>
            </div>
            <ul className="flex flex-col items-start gap-2">
              {postList.map((post) => {
                return (
                  <li key={post.slug}>
                    <a
                      href={`/posts/${post.slug}`}
                      className="hover:bg-gray-soft -mx-1 flex items-center gap-2 rounded-md px-1 transition group-hover:opacity-60 hover:opacity-100!"
                    >
                      <span className="text-text-1">{post.data.title}</span>
                      <span className="text-text-2 shrink-0 text-sm">
                        {format(new Date(post.data.date), 'MM. dd.')}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
