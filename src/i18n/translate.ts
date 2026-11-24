import 'server-only';
import type { Locale } from './config';
import { ta } from './dict/ta';
import { hi } from './dict/hi';

/**
 * Phrasebook translation: English text stays in the code and is looked up in
 * the Tamil / Hindi dictionaries (src/i18n/dict). A missing entry falls back to
 * English, and `npm run i18n:check` lists every missing string.
 *
 * Server-only so the dictionaries never ship to the browser.
 */

const DICTS: Record<Exclude<Locale, 'en'>, Record<string, string>> = { ta, hi };

const missing: Record<string, Set<string>> = { ta: new Set(), hi: new Set() };

/** Only report text that a reader would see as words (skip numbers, codes, brand-only strings). */
const isWords = (s: string) => /[A-Za-z]{3,}/.test(s);

/** Translate one string. `{name}` placeholders are filled from `vars` after lookup. */
export function t(locale: Locale, text: string, vars?: Record<string, string | number>): string {
  let out = text;
  if (locale !== 'en') {
    const hit = DICTS[locale][text];
    if (hit !== undefined) out = hit;
    else if (isWords(text) && !missing[locale].has(text)) {
      missing[locale].add(text);
      reportMissing(locale, text);
    }
  }
  if (vars) for (const [k, v] of Object.entries(vars)) out = out.split(`{${k}}`).join(String(v));
  return out;
}

/** Object keys whose values are identifiers, paths or data, never visible text. */
const SKIP_KEYS = new Set([
  'slug', 'href', 'src', 'url', 'image', 'heroImage', 'icon', 'color', 'tint', 'division',
  'servicePage', 'related', 'nearby', 'services', 'areaServed', 'serviceType', 'datePublished',
  'dateModified', 'date', 'source', 'id', 'keywords', 'district', 'state', 'btn', 'label_class',
]);

/** Deep-translate every visible string in a data object (page content, FAQs, products). */
export function tr<T>(value: T, locale: Locale): T {
  if (locale === 'en') return value;
  const walk = (v: unknown, key?: string): unknown => {
    if (key && SKIP_KEYS.has(key)) return v;
    if (typeof v === 'string') return t(locale, v);
    if (Array.isArray(v)) return v.map((x) => walk(x));
    if (v && typeof v === 'object') {
      return Object.fromEntries(Object.entries(v as Record<string, unknown>).map(([k, x]) => [k, walk(x, k)]));
    }
    return v;
  };
  return walk(value) as T;
}

/** Strings that were looked up but have no translation yet (used by the i18n check). */
export function missingTranslations() {
  return { ta: [...missing.ta].sort(), hi: [...missing.hi].sort() };
}

// `I18N_REPORT=<file> next build` appends each missing string to <file> as it is found (one
// JSON line each; build workers are killed without an exit event, so this can't wait until
// the end). scripts/i18n-check.mjs collects the file into a list of what needs translating.
function reportMissing(locale: Locale, text: string) {
  const file = process.env.I18N_REPORT;
  if (!file) return;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('fs').appendFileSync(file, JSON.stringify({ l: locale, s: text }) + '\n');
}
