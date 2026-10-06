# 🐰 Zając na Froncie

> Blog o nauce frontendu dla początkujących — prowadzony przez komiksowego **Senior Hare'a**. Zapis prawdziwej drogi od zera, z naciskiem na to, _jak_ się uczyć (również z pomocą AI).

![Senior Hare](./src/assets/SeniorHareHero.png)

🔗 **Demo na żywo:** [zajac-na-froncie.netlify.app](https://zajac-na-froncie.netlify.app)

## O projekcie

„Zając na Froncie" to blog pisany z perspektywy osoby, która uczy się frontendu od podstaw. Zamiast udawać eksperta, dokumentuję realny proces: błędy, momenty „aha", debugowanie o 3:00 i małe zwycięstwa. Przewodnikiem jest **Senior Hare** — komiksowy zając-senior, który komentuje każdy etap.

Blog jest po polsku, z myślą o polskich początkujących. Architektura jest gotowa na wpisy po angielsku w przyszłości.

## Stack

- **[Astro 5](https://astro.build/)** — framework, zero JS domyślnie, szybki statyczny output
- **MDX** — Markdown + komponenty w treści wpisów
- **Tailwind CSS v4** (+ plugin `@tailwindcss/typography`) — stylowanie
- **TypeScript** — bezpieczeństwo typów
- **Content Collections** — wpisy z walidacją schematu (Zod)

## Uruchomienie lokalne

```bash
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
├── components/      # Nav, Hare (komponent do MDX)
├── content/blog/    # wpisy w .mdx
├── layouts/         # Layout.astro (szkielet strony)
├── pages/           # routing: index, about, blog/[id]
├── styles/          # global.css (Tailwind)
└── content.config.ts # schemat kolekcji wpisów
```

## Jak dodać wpis

1. Utwórz plik w `src/content/blog/`, np. `moj-wpis.mdx`.
2. Dodaj frontmatter zgodny ze schematem:
   ```yaml
   ---
   title: "Tytuł wpisu"
   description: "Krótki opis"
   pubDate: 2026-10-06
   tags: ["astro", "nauka"]
   draft: false
   ---
   ```
3. Nazwa pliku = slug wpisu (adres URL).

## Komponent `<Hare>`

W treści MDX można wołać Senior Hare'a z jednym z 12 typów. Każdy ma własny badge i nagłówek:

```mdx
<Hare type="tip">
  <div class="italic text-slate-600">
    Najpierw spróbuj sam, dopiero potem pytaj.
  </div>
</Hare>
```

| `type`    | Nagłówek                | `type`         | Nagłówek           |
| --------- | ----------------------- | -------------- | ------------------ |
| `explain` | Wyjaśnienie             | `works`        | Działa!            |
| `code`    | Kod                     | `debug`        | Debugowanie o 3:00 |
| `tip`     | Wskazówka               | `learn`        | Nowa technologia   |
| `bug`     | Bug                     | `question`     | Pytanie            |
| `why`     | Dlaczego to nie działa? | `simple`       | Proste rozwiązanie |
| `success` | Sukces!                 | `architecture` | Architektura       |

## Roadmap

- [x] Deploy na Netlify
- [ ] Paleta kolorów i dopracowanie stylów
- [ ] Analityka wyświetleń (prywatna, bez ciasteczek)
- [ ] Wpisy po angielsku

## Autor

**Paweł Zajączkowski** — [GitHub](https://github.com/TenaciousHare)

---

_Zbudowane z 🥕 i pomocą AI._
