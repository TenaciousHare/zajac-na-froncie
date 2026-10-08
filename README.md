# 🐰 Zając na Froncie

> Blog o nauce frontendu dla początkujących — prowadzony przez komiksowego **Senior Hare'a**. Zapis prawdziwej drogi od zera, z naciskiem na to, _jak_ się uczyć (również z pomocą AI).

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./src/assets/hero-banner_dark.png">
  <img alt="Zając na Froncie — Senior Hare" src="./src/assets/hero-banner_light.png">
</picture>

🔗 **Demo na żywo:** [zajac-na-froncie.netlify.app](https://zajac-na-froncie.netlify.app)

## O projekcie

„Zając na Froncie" to blog pisany z perspektywy osoby, która uczy się frontendu od podstaw. Zamiast udawać eksperta, dokumentuję realny proces: błędy, momenty „aha", debugowanie o 3:00 i małe zwycięstwa. Przewodnikiem jest **Senior Hare** — komiksowy zając-senior, który komentuje każdy etap.

Blog jest po polsku, z myślą o polskich początkujących.

## Funkcje

- 🌗 **Tryb ciemny** z przełącznikiem — pamięta wybór (`localStorage`), startuje bez mignięcia
- 💬 **Komentarze** (Giscus / GitHub Discussions) zsynchronizowane z motywem
- 🗓️ **Zaplanowane wpisy** — pisanie „na zapas" z przyszłą datą + codzienny auto-build
- 🔍 **SEO** — tytuły i opisy per strona, Open Graph, sitemap, robots.txt
- 📊 **Analityka** — Cloudflare Web Analytics (bez ciasteczek, bez bannera)
- 🐰 **Komponent `<Hare>`** z 12 typami badge'y

## Stack

- **[Astro 5](https://astro.build/)** — framework, zero JS domyślnie, szybki statyczny output
- **MDX** — Markdown + komponenty w treści wpisów
- **Tailwind CSS v4** (+ plugin `@tailwindcss/typography`) — stylowanie
- **TypeScript** — bezpieczeństwo typów
- **Content Collections** — wpisy z walidacją schematu (Zod)

## Uruchomienie lokalne

```
npm install      # instalacja zależności
npm run dev      # serwer deweloperski → http://localhost:4321
npm run build    # build produkcyjny → katalog dist/
npm run preview  # podgląd buildu lokalnie
```

## Struktura

```
src/
├── assets/          # grafiki optymalizowane przez Astro (hero, badge'y)
│   └── hare/        # 12 badge'y Senior Hare'a
├── components/      # Nav, Hare, Comments
├── content/blog/    # wpisy w .mdx
├── layouts/         # Layout.astro (szkielet strony)
├── pages/           # routing: index, about, blog/[id]
├── styles/          # global.css (Tailwind + motyw)
├── utils/           # getPublishedPosts (filtr daty)
└── content.config.ts # schemat kolekcji wpisów
```

## Jak dodać wpis

1. Utwórz plik w `src/content/blog/`, np. `moj-wpis.mdx`.
2. Dodaj frontmatter zgodny ze schematem:

```
---
title: "Tytuł wpisu"
description: "Krótki opis"
pubDate: 2026-10-08
tags: ["astro", "nauka"]
draft: false
---
```

3. Nazwa pliku = slug wpisu (adres URL).

> 💡 **Ukrywanie i planowanie:** `draft: true` chowa wpis. Data w **przyszłości** (`pubDate`) też go ukrywa — aż nadejdzie jej dzień, a codzienny automatyczny build opublikuje go sam.

## Komponent `<Hare>`

W treści MDX można wołać Senior Hare'a z jednym z 12 typów. Każdy ma własny badge i nagłówek:

```
<Hare type="tip">
  <div class="italic text-slate-600">
    Najpierw spróbuj sam, dopiero potem pytaj.
  </div>
</Hare>
```

| `type`    | Nagłówek                | `type`         | Nagłówek           |
| --------- | ----------------------- | -------------- | ------------------ |
| `explain` | Wyjaśnienie             | `works`        | Działa!            |
| `code`    | Kod                     | `debug`        | Debugowanie        |
| `tip`     | Wskazówka               | `learn`        | Nauka              |
| `bug`     | Bug                     | `question`     | Pytanie            |
| `why`     | Dlaczego to nie działa? | `simple`       | Proste rozwiązanie |
| `success` | Sukces!                 | `architecture` | Architektura       |

## Roadmap

- [x] Deploy na Netlify
- [x] Paleta kolorów i dopracowanie stylów
- [x] Analityka wyświetleń (prywatna, bez ciasteczek)
- [x] Tryb ciemny
- [x] Komentarze (Giscus)
- [x] Zaplanowane wpisy
- [ ] Nawigacja serii / poprzedni–następny wpis
- [ ] Zakładka Projekty / portfolio
- [ ] RSS feed
- [ ] Klikalne tagi → strony tagów
- [ ] Czas czytania + spis treści w wpisach
- [ ] Własna strona 404 z Senior Hare'em

## Autor

**Paweł Zajączkowski** — [GitHub](https://github.com/TenaciousHare)

---

_Zbudowane z 🥕 i pomocą AI._
