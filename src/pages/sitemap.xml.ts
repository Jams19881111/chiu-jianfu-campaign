import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

export const GET: APIRoute = async () => {
  const news = await getCollection("news");
  const paths = ["/", "/news/", "/media/", "/achievements/",
    ...news.map(post => `/news/${post.id}/`)];
  const escapeXml = (value: string) => value.replace(/[<>&"']/g, char =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" }[char]!));
  const urls = [...new Set(paths)].map(path =>
    `<url><loc>${escapeXml(new URL(path, "https://chiuchienfu.tw").href)}</loc></url>`
  ).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
