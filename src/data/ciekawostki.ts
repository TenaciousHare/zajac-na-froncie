// fragmenty w `backtickach` pokazują się na stronie jako kod
// 31 ciekawostek = każdy dzień miesiąca ma inną (index.astro liczy getDate() % length)
export const ciekawostki = [
  {
    tekst:
      "Czy wiesz, że `[10, 9, 1].sort()` daje `[1, 10, 9]`? Bez funkcji porównującej liczby układają się jak tekst.",
    link: "/blog/js-od-podstaw-5-tablice-i-petle",
    podpis: "Wyjaśniam w JS, część 5",
  },
  {
    tekst:
      'Czy wiesz, że `"5" + 1` daje `"51"`? Gdy po jednej stronie plusa stoi tekst, JavaScript skleja, zamiast dodawać.',
    link: "/blog/js-od-podstaw-2-zmienne-i-typy",
    podpis: "Wyjaśniam w JS, część 2",
  },
  {
    tekst:
      "Czy wiesz, że `const` nie chroni obiektu przed zmianą? Blokuje tylko przypisanie zmiennej czegoś nowego.",
    link: "/blog/js-od-podstaw-6-obiekty",
    podpis: "Wyjaśniam w JS, część 6",
  },
  {
    tekst:
      "Czy wiesz, że `required` przepuści pole z samymi spacjami? Dla przeglądarki to nie jest puste pole.",
    link: "/blog/js-od-podstaw-8-zdarzenia",
    podpis: "Wyjaśniam w JS, część 8",
  },
  {
    tekst:
      "Czy wiesz, że `width: 100%` potrafi wyjść poza ekran? Domyślnie padding i ramka doliczają się do szerokości.",
    link: "/blog/css-od-podstaw-3-model-pudelkowy",
    podpis: "Wyjaśniam w CSS, część 3",
  },
  {
    tekst:
      "Czy wiesz, że klucz API Firebase widoczny w kodzie strony to nie wyciek? Dane chronią reguły bazy, nie ten klucz.",
    link: "/blog/jak-powstal-destinations-3-firebase-baza-i-logowanie",
    podpis: "Wyjaśniam w Destinations, część 3",
  },
  {
    tekst:
      "Czy wiesz, że `<strong>` i `<b>` wyglądają tak samo, a znaczą co innego? `<strong>` mówi „to ważne”, a `<b>` tylko pogrubia.",
    link: "/blog/html-od-podstaw-2-tekst-ze-znaczeniem",
    podpis: "Wyjaśniam w HTML, część 2",
  },
  {
    tekst:
      "Czy wiesz, że jeden `#id` wygrywa z dowolnie długim łańcuchem klas? Specyficzność porównuje się od lewej, jak tabelę medalową.",
    link: "/blog/css-od-podstaw-2-selektory-i-kaskada",
    podpis: "Wyjaśniam w CSS, część 2",
  },
  {
    tekst:
      "Czy wiesz, że `typeof null` zwraca `\"object\"`? To błąd z pierwszej wersji JS z 1995 roku, którego nie da się już naprawić.",
    link: "/blog/js-od-podstaw-2-zmienne-i-typy",
    podpis: "Wyjaśniam w JS, część 2",
  },
  {
    tekst:
      "Czy wiesz, że gdy `git log` pokazuje na dole `(END)`, terminal czeka w pagerze? Naciśnij `q`, a komendy znów zaczną działać.",
    link: "/blog/git-push-nie-dzialal",
    podpis: "Wyjaśniam we wpisie o git push",
  },
  {
    tekst:
      'Czy wiesz, że `alt=""` to nie błąd? Pusty opis mówi czytnikowi ekranu, że obrazek to ozdoba i można go pominąć.',
    link: "/blog/html-od-podstaw-4-obrazy",
    podpis: "Wyjaśniam w HTML, część 4",
  },
  {
    tekst:
      "Czy wiesz, że `fetch` nie zgłasza błędu, gdy serwer odpowie 404? Dlatego zawsze warto sprawdzić `res.ok`.",
    link: "/blog/js-od-podstaw-10-async-i-fetch",
    podpis: "Wyjaśniam w JS, część 10",
  },
  {
    tekst:
      "Czy wiesz, że tekst w `px` nie urośnie, gdy ktoś powiększy czcionkę w przeglądarce? Tekst w `rem` urośnie razem z nią.",
    link: "/blog/css-od-podstaw-4-tekst-kolory-jednostki",
    podpis: "Wyjaśniam w CSS, część 4",
  },
  {
    tekst:
      'Czy wiesz, że `"0"` i pusta tablica `[]` są w warunku prawdą? Fałszem jest tylko kilka wartości, m.in. `0`, `""` i `null`.',
    link: "/blog/js-od-podstaw-3-warunki",
    podpis: "Wyjaśniam w JS, część 3",
  },
  {
    tekst:
      "Czy wiesz, że zmienna z prefiksem `VITE_` trafia do przeglądarki? Klucz API schowany w niej i tak zobaczy każdy.",
    link: "/blog/jak-powstal-metar-2-dane-i-funkcja-serwerowa",
    podpis: "Wyjaśniam w Avia Weather, część 2",
  },
  {
    tekst:
      "Czy wiesz, że czytnik ekranu potrafi pokazać samą listę linków ze strony? Siedem linków „kliknij tutaj” to wtedy siedem zagadek.",
    link: "/blog/html-od-podstaw-3-linki-i-nawigacja",
    podpis: "Wyjaśniam w HTML, część 3",
  },
  {
    tekst:
      "Czy wiesz, że `z-index` nie działa na zwykłym elemencie? Potrzebuje np. `position: relative` albo rodzica z flexem lub gridem.",
    link: "/blog/css-od-podstaw-7-pozycjonowanie",
    podpis: "Wyjaśniam w CSS, część 7",
  },
  {
    tekst:
      "Czy wiesz, że skrypt w `<head>` bez `defer` może dostać `null` zamiast przycisku? Uruchamia się, zanim przeglądarka doczyta HTML.",
    link: "/blog/js-od-podstaw-1-czym-jest-javascript",
    podpis: "Wyjaśniam w JS, część 1",
  },
  {
    tekst:
      "Czy wiesz, że kliknięcie w `<label>` ustawia kursor w polu formularza? Wystarczy powiązać etykietę z polem przez `for` i `id`.",
    link: "/blog/html-od-podstaw-6-formularze",
    podpis: "Wyjaśniam w HTML, część 6",
  },
  {
    tekst:
      "Czy wiesz, że dwie kolumny po `50%` z odstępem `gap` wystają poza rodzica? `1fr 1fr` dzieli tylko miejsce, które zostaje.",
    link: "/blog/css-od-podstaw-6-grid",
    podpis: "Wyjaśniam w CSS, część 6",
  },
  {
    tekst:
      "Czy wiesz, że `0 || 10` daje `10`, a `0 ?? 10` daje `0`? Operator `??` sięga po zapas tylko przy `null` i `undefined`.",
    link: "/blog/js-od-podstaw-3-warunki",
    podpis: "Wyjaśniam w JS, część 3",
  },
  {
    tekst:
      "Czy wiesz, że do drukowania strony wystarczy `window.print()` i `@media print`? Bez żadnej dodatkowej biblioteki.",
    link: "/blog/jak-powstal-destinations-5-generatory-do-druku",
    podpis: "Wyjaśniam w Destinations, część 5",
  },
  {
    tekst:
      "Czy wiesz, że `innerHTML` z tekstem od użytkownika może wpuścić na stronę cudzy kod? Do zwykłego tekstu wystarczy `textContent`.",
    link: "/blog/js-od-podstaw-7-dom",
    podpis: "Wyjaśniam w JS, część 7",
  },
  {
    tekst:
      "Czy wiesz, że bez znacznika `viewport` telefon udaje ekran szerokości około 980px? Dostajesz wtedy pomniejszoną wersję z komputera.",
    link: "/blog/css-od-podstaw-8-responsywnosc",
    podpis: "Wyjaśniam w CSS, część 8",
  },
  {
    tekst:
      'Czy wiesz, że pierwsza zasada ARIA brzmi „nie używaj ARIA”? `<div role="button">` nie obsłuży Entera, a `<button>` tak.',
    link: "/blog/html-od-podstaw-8-atrybuty-aria",
    podpis: "Wyjaśniam w HTML, część 8",
  },
  {
    tekst:
      "Czy wiesz, że obiekt zapisany wprost w `localStorage` zamienia się w `\"[object Object]\"`? Najpierw trzeba go zamienić na JSON.",
    link: "/blog/js-od-podstaw-9-localstorage-i-motyw",
    podpis: "Wyjaśniam w JS, część 9",
  },
  {
    tekst:
      "Czy wiesz, że bez `replace` w `<Navigate>` przycisk „wstecz” może wrócić na chronioną stronę? `replace` podmienia wpis w historii.",
    link: "/blog/jak-powstal-destinations-4-protected-routes",
    podpis: "Wyjaśniam w Destinations, część 4",
  },
  {
    tekst:
      "Czy wiesz, że `!important` pokona tylko kolejny `!important`? Zamiast dokładać siły, lepiej sprawdzić w DevTools, kto wygrywa.",
    link: "/blog/css-od-podstaw-2-selektory-i-kaskada",
    podpis: "Wyjaśniam w CSS, część 2",
  },
  {
    tekst:
      "Czy wiesz, że formularz po wysłaniu domyślnie przeładowuje stronę? `event.preventDefault()` pozwala najpierw sprawdzić dane.",
    link: "/blog/js-od-podstaw-8-zdarzenia",
    podpis: "Wyjaśniam w JS, część 8",
  },
  {
    tekst:
      "Czy wiesz, że przeglądarka nie rozumie TypeScriptu? Przy budowaniu strony typy są wycinane i zostaje zwykły JavaScript.",
    link: "/blog/js-od-podstaw-11-moduly-i-typescript",
    podpis: "Wyjaśniam w JS, część 11",
  },
  {
    tekst:
      "Czy wiesz, że `em` potrafi się mnożyć? Lista w liście z `font-size: 0.9em` robi się mniejsza z każdym poziomem.",
    link: "/blog/css-od-podstaw-4-tekst-kolory-jednostki",
    podpis: "Wyjaśniam w CSS, część 4",
  },
];
