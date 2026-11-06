/**
 * India-wide search terms. Henel Engineers serves clients anywhere in India, so pages
 * target national searches alongside local (Tamil Nadu / Kanyakumari) ones.
 */

/** Adds an "India" version of every Tamil Nadu / Karnataka keyword, de-duplicated. */
export function withIndiaKeywords(keywords: string[]) {
  const india = keywords
    .filter((k) => /Tamil Nadu|Karnataka|Kanyakumari|Nagercoil/.test(k))
    .map((k) => k.replace(/Tamil Nadu|Karnataka|Kanyakumari|Nagercoil/, 'India'));
  const general = keywords.filter((k) => !/India|near me/i.test(k)).slice(0, 4).map((k) => `${k} India`);
  return Array.from(new Set([...keywords, ...india, ...general]));
}
