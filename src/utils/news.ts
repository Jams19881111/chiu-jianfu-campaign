import type { CollectionEntry } from "astro:content";

/** Keep requested editorial positions consistent on the homepage and news list. */
export function sortNews(posts: CollectionEntry<"news">[]) {
  const sorted = [...posts].sort((a, b) =>
    b.data.date.valueOf() - a.data.date.valueOf() || a.id.localeCompare(b.id)
  );
  const positioned = sorted.filter(post => post.data.listPosition !== undefined)
    .sort((a, b) => a.data.listPosition! - b.data.listPosition!);
  const result = sorted.filter(post => post.data.listPosition === undefined);
  for (const post of positioned) {
    result.splice(Math.min(post.data.listPosition! - 1, result.length), 0, post);
  }
  return result;
}
