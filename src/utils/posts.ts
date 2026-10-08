import { getCollection } from "astro:content";

export async function getPublishedPosts() {
  const now = new Date();
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft && post.data.pubDate <= now)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
