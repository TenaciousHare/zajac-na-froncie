export type RodzajSerii = "podstawy" | "warsztat";

type Seria = {
  tytul: string;
  opis: string;
  rodzaj: RodzajSerii;
  kolejnosc: number;
  zamknieta: boolean;
};

export const serie = {
  "html-od-podstaw": {
    tytul: "HTML od podstaw",
    opis: "Znaczenie zamiast wyglądu: tekst, linki, obrazy, formularze, tabele i ARIA.",
    rodzaj: "podstawy",
    kolejnosc: 1,
    zamknieta: true,
  },
  "css-od-podstaw": {
    tytul: "CSS od podstaw",
    opis: "Kaskada, model pudełkowy, Flexbox i Grid, responsywność, a na koniec zmienne CSS i Tailwind.",
    rodzaj: "podstawy",
    kolejnosc: 2,
    zamknieta: true,
  },
  "js-od-podstaw": {
    tytul: "JavaScript od podstaw",
    opis: "Zmienne, warunki, funkcje, tablice, obiekty, DOM i zdarzenia.",
    rodzaj: "podstawy",
    kolejnosc: 3,
    zamknieta: false,
  },
  "jak-powstal-destinations": {
    tytul: "Jak powstał Destinations",
    opis: "Generator testów ze znajomości kierunków dla pracowników lotniska.",
    rodzaj: "warsztat",
    kolejnosc: 1,
    zamknieta: true,
  },
  "jak-powstal-metar": {
    tytul: "Jak powstał Avia Weather",
    opis: "Pogoda lotnicza METAR i TAF przetłumaczona na ludzki język.",
    rodzaj: "warsztat",
    kolejnosc: 2,
    zamknieta: true,
  },
} satisfies Record<string, Seria>;

export type KluczSerii = keyof typeof serie;
