import type { CollectionEntry } from "astro:content";

/** Show newest reports first on both the homepage and news list. */
export function sortNews(posts: CollectionEntry<"news">[]) {
  return [...posts].sort((a, b) =>
    b.data.date.valueOf() - a.data.date.valueOf() || a.id.localeCompare(b.id)
  );
}
