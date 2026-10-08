import { getCollection, type CollectionEntry } from "astro:content";

export async function getPublishedPosts() {
  const now = new Date();
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft && post.data.pubDate <= now)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getSeriesNav(current: CollectionEntry<"blog">) {
  const { series, seriesPart } = current.data;

  if (!series || seriesPart === undefined) {
    return { prev: undefined, next: undefined };
  }

  const parts = (await getPublishedPosts())
    .filter((post) => post.data.series === series)
    .sort((a, b) => (a.data.seriesPart ?? 0) - (b.data.seriesPart ?? 0));

  const index = parts.findIndex((post) => post.id === current.id);

  return {
    prev: parts[index - 1],
    next: parts[index + 1],
  };
}
