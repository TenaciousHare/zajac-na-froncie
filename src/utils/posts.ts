import { getCollection, type CollectionEntry } from "astro:content";
import { serie } from "../data/serie";

type Wpis = CollectionEntry<"blog">;
const poCzesci = (a: Wpis, b: Wpis) =>
  (a.data.seriesPart ?? 0) - (b.data.seriesPart ?? 0);

export async function getPublishedPosts() {
  const now = new Date();
  return (await getCollection("blog"))
    .filter((post) => !post.data.draft && post.data.pubDate <= now)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
export async function getSeriesParts(current: CollectionEntry<"blog">) {
  const { series, seriesPart } = current.data;
  if (!series || seriesPart === undefined) return [];

  return (await getPublishedPosts())
    .filter((post) => post.data.series === series)
    .sort((a, b) => (a.data.seriesPart ?? 0) - (b.data.seriesPart ?? 0));
}

export async function getSeriesNav(current: CollectionEntry<"blog">) {
  const parts = await getSeriesParts(current);
  const index = parts.findIndex((post) => post.id === current.id);
  if (index === -1) return { prev: undefined, next: undefined };

  return { prev: parts[index - 1], next: parts[index + 1] };
}

// wszystkie unikalne tagi + ile wpisów ma każdy, posortowane alfabetycznie (po polsku)
export async function getAllTags() {
  const posts = await getPublishedPosts();
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag, "pl"));
}

export async function getPostsByTag(tag: string) {
  return (await getPublishedPosts()).filter((post) =>
    post.data.tags.includes(tag),
  );
}

// wpisy z przyszłą datą: opublikuje je codzienny rebuild z netlify/functions
export async function getPlannedPosts() {
  const now = new Date();
  return (await getCollection("blog")).filter(
    (post) => !post.data.draft && post.data.pubDate > now,
  );
}

export async function getSeriesOverview() {
  const [opublikowane, zaplanowane] = await Promise.all([
    getPublishedPosts(),
    getPlannedPosts(),
  ]);
  return Object.entries(serie)
    .map(([klucz, meta]) => ({
      klucz,
      ...meta,
      czesci: opublikowane
        .filter((p) => p.data.series === klucz)
        .sort(poCzesci),
      wkrotce: zaplanowane
        .filter((p) => p.data.series === klucz)
        .sort(poCzesci),
    }))
    .sort((a, b) => a.kolejnosc - b.kolejnosc);
}

// "JavaScript od podstaw (cz. 8): zdarzenia, czyli…" -> "Zdarzenia, czyli…"
export function krotkiTytul(post: Wpis) {
  const bezSerii = post.data.title.replace(/^.*?\(cz\. \d+\):\s*/, "");
  const [pierwszeSlowo] = bezSerii.split(" ");
  if (/[A-Z]/.test(pierwszeSlowo.slice(1))) return bezSerii;
  return bezSerii.charAt(0).toUpperCase() + bezSerii.slice(1);
}

// polski ma trzy formy liczby mnogiej, Intl.PluralRules wie, którą wybrać:
// odmien(1, …) -> "1 wpis", odmien(3, …) -> "3 wpisy", odmien(35, …) -> "35 wpisów"
const odmiana = new Intl.PluralRules("pl-PL");

export function odmien(
  n: number,
  formy: { one: string; few: string; many: string },
) {
  const kategoria = odmiana.select(n) as keyof typeof formy;
  return `${n} ${formy[kategoria] ?? formy.many}`;
}
