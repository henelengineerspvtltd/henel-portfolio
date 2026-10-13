/**
 * India-wide search terms. Henel Engineers serves clients anywhere in India, so pages
 * target national searches alongside local (Tamil Nadu / Kanyakumari) ones.
 */

/** Site-wide India keywords used in the root layout metadata. */
export const INDIA_KEYWORDS = [
  // Lightning protection
  'lightning arrester India',
  'lightning arrester supplier in India',
  'lightning arrester dealers in India',
  'lightning arrester installation India',
  'lightning protection company India',
  'lightning protection system India',
  'best lightning arrester company in India',
  'ESE lightning arrester India',
  'ESE lightning arrester supplier India',
  'early streamer emission lightning arrester India',
  'lightning arrester for building India',
  'lightning arrester for home India',
  'lightning arrester for solar plant India',
  'copper lightning arrester India',
  'TOPBAS India',
  // Earthing & SPD
  'earthing company India',
  'earthing contractor India',
  'chemical earthing India',
  'earthing system installation India',
  'copper bonded earth rod India',
  'GI earth rod supplier India',
  'earthing compound supplier India',
  'earth pit cover supplier India',
  'surge protection device India',
  'SPD supplier India',
  'Type 1 + 2 SPD India',
  'surge arrester for panel India',
  // Solar
  'solar panel installation India',
  'solar company India',
  'solar installation company India',
  'rooftop solar installation India',
  'solar power plant installation India',
  'commercial solar installation India',
  'industrial solar EPC India',
  'solar panel maintenance India',
  'solar panel cleaning service India',
  'solar O&M company India',
  // Wind
  'windmill maintenance India',
  'windmill maintenance company India',
  'wind turbine maintenance India',
  'wind turbine service provider India',
  'wind turbine O&M company India',
  'windmill AMC India',
  'wind turbine gearbox repair India',
  'wind turbine blade repair India',
  'windmill generator rewinding India',
  'windmill spare parts supplier India',
  'windmill erection services India',
  'renewable energy company India',
  // Near-me / intent searches
  'lightning arrester near me',
  'earthing contractor near me',
  'solar panel installation near me',
  'windmill service near me',
];

/** Adds an "India" version of every Tamil Nadu / Karnataka keyword, de-duplicated. */
export function withIndiaKeywords(keywords: string[]) {
  const india = keywords
    .filter((k) => /Tamil Nadu|Karnataka|Kanyakumari|Nagercoil/.test(k))
    .map((k) => k.replace(/Tamil Nadu|Karnataka|Kanyakumari|Nagercoil/, 'India'));
  const general = keywords.filter((k) => !/India|near me/i.test(k)).slice(0, 4).map((k) => `${k} India`);
  return Array.from(new Set([...keywords, ...india, ...general]));
}
