import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // skąd brać wpisy: wszystkie .md z folderu src/content/blog
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),

  // jaki kształt MA MIEĆ frontmatter każdego wpisu:
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // string z YAML → prawdziwy Date
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    series: z.string().optional(),
    seriesPart: z.number().optional(),
  }),
});

export const collections = { blog };
