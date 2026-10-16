import type { CollectionEntry } from "astro:content";

export function sortMedia(items: CollectionEntry<"media">[]) {
  const sorted = [...items].sort((a, b) =>
    b.data.date.valueOf() - a.data.date.valueOf() || a.id.localeCompare(b.id)
  );
  for (const item of sorted.filter(item => item.data.after)) {
    const anchor = sorted.find(other => other.id === item.data.after);
    if (!anchor || anchor === item) continue;
    sorted.splice(sorted.indexOf(item), 1);
    sorted.splice(sorted.indexOf(anchor) + 1, 0, item);
  }
  return sorted;
}
