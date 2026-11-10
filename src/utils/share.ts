/*
  分享預覽圖：文章分享到 Facebook、LINE 時顯示的圖片（og:image）。
  依序採用：內文第一張照片 → YouTube 影片縮圖 → 官網影片的預覽截圖
  （public/images/og/<影片檔名>.jpg，需事先用影片截圖產生）。
  都沒有時回傳 undefined，改用全站預設的候選人照片。
*/
import fs from "node:fs";
import path from "node:path";
import type { CollectionEntry } from "astro:content";

const SITE = "https://chiuchienfu.tw";

export function postShareImage(post: CollectionEntry<"news">): string | undefined {
  const body = post.body ?? "";

  const image = body.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? body.match(/!\[[^\]]*\]\(([^)\s]+)/)?.[1];
  if (image) return new URL(image, SITE).href;

  const youtubeId = (post.data.externalUrl ?? "").match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/)?.[1]
    ?? body.match(/youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]{11})/)?.[1];
  if (youtubeId) return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  const video = body.match(/<source src="\/videos\/([^"]+)\.mp4"/)?.[1];
  if (video && fs.existsSync(path.join(process.cwd(), "public", "images", "og", `${video}.jpg`))) {
    return `${SITE}/images/og/${video}.jpg`;
  }

  return undefined;
}
