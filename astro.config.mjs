// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";

import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { readdirSync, readFileSync } from "node:fs";

const blogDir = new URL("./src/content/blog/", import.meta.url);
const lastmodBySlug = new Map();

for (const file of readdirSync(blogDir)) {
  const slug = file.match(/^(.+)\.mdx?$/)?.[1];
  if (!slug) continue;

  const text = readFileSync(new URL(file, blogDir), "utf8");
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
  /** @param {string} key */
  const field = (key) =>
    frontmatter.match(new RegExp(`^${key}:\\s*["']?([^"'\\s#]+)`, "m"))?.[1];

  const pubDate = new Date(field("pubDate") ?? NaN);
  const updatedDate = new Date(field("updatedDate") ?? NaN);
  const isDraft = /^draft:\s*true\b/m.test(frontmatter);

  if (isDraft || Number.isNaN(pubDate.getTime()) || pubDate > new Date()) {
    continue;
  }
  const lastmod = Number.isNaN(updatedDate.getTime()) ? pubDate : updatedDate;
  lastmodBySlug.set(slug, lastmod.toISOString());
}

const newestLastmod = [...lastmodBySlug.values()].sort().at(-1);

// https://astro.build/config
export default defineConfig({
  site: "https://zajac-na-froncie.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
  },
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        const { pathname } = new URL(item.url);
        const postSlug = pathname.match(/^\/blog\/([^/]+)\/?$/)?.[1];

        if (postSlug) {
          item.lastmod = lastmodBySlug.get(postSlug);
        } else if (pathname === "/" || pathname === "/blog/") {
          item.lastmod = newestLastmod;
        }
        return item;
      },
    }),
  ],
});
