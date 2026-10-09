import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree, file) {
    const textOnPage = toString(tree); // całe drzewo wpisu → czysty tekst
    const readingTime = getReadingTime(textOnPage);
    // zapisujemy do frontmattera, zaokrąglone, minimum 1 minuta
    file.data.astro.frontmatter.minutesRead = Math.max(
      1,
      Math.round(readingTime.minutes),
    );
  };
}
