/**
 * Site languages. English lives at the root (/windmill); Tamil and Hindi live
 * under a prefix (/ta/windmill, /hi/windmill). Every page exists in all three.
 */

export const LOCALES = ['en', 'ta', 'hi'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** BCP 47 tags for <html lang>, hreflang and schema inLanguage. */
export const HTML_LANG: Record<Locale, string> = { en: 'en-IN', ta: 'ta-IN', hi: 'hi-IN' };

/** Open Graph locale codes. */
export const OG_LOCALE: Record<Locale, string> = { en: 'en_IN', ta: 'ta_IN', hi: 'hi_IN' };

/** Language names written in their own script, for the language switcher. */
export const LOCALE_LABEL: Record<Locale, string> = { en: 'English', ta: 'தமிழ்', hi: 'हिंदी' };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** The locale a pathname belongs to: '/ta/windmill' → 'ta', '/windmill' → 'en'. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split('/')[1] || '';
  return seg !== 'en' && isLocale(seg) ? seg : DEFAULT_LOCALE;
}

/** Remove the locale prefix: '/ta/windmill' → '/windmill', '/hi' → '/'. */
export function stripLocale(pathname: string): string {
  const locale = localeFromPath(pathname);
  if (locale === DEFAULT_LOCALE) return pathname || '/';
  const rest = pathname.slice(locale.length + 1);
  return rest || '/';
}

/**
 * Put an internal path into a locale: localizePath('/windmill', 'ta') → '/ta/windmill'.
 * External links, anchors, tel:, mailto: and asset paths are returned unchanged.
 */
export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (/^\/(assets|_next|api)\//.test(path) || /\.[a-z0-9]{2,5}($|[?#])/i.test(path)) return path;
  const [pathname, suffix = ''] = splitSuffix(path);
  const base = stripLocale(pathname);
  if (locale === DEFAULT_LOCALE) return base + suffix;
  return (base === '/' ? `/${locale}` : `/${locale}${base}`) + suffix;
}

function splitSuffix(path: string): [string, string] {
  const i = path.search(/[?#]/);
  return i === -1 ? [path, ''] : [path.slice(0, i), path.slice(i)];
}

/** Language alternates for a page, for Next.js metadata `alternates`. */
export function alternatesFor(path: string, locale: Locale) {
  return {
    canonical: localizePath(path, locale),
    languages: {
      'en-IN': localizePath(path, 'en'),
      'ta-IN': localizePath(path, 'ta'),
      'hi-IN': localizePath(path, 'hi'),
      'x-default': localizePath(path, 'en'),
    },
  };
}
