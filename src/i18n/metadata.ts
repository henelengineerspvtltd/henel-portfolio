import 'server-only';
import type { Metadata } from 'next';
import { alternatesFor, OG_LOCALE, type Locale } from './config';
import { t } from './translate';
import { withNativeKeywords } from './keywords';

type Title = Metadata['title'];

function translateTitle(title: Title, locale: Locale): Title {
  if (!title) return title;
  if (typeof title === 'string') return t(locale, title);
  if ('absolute' in title && title.absolute) return { ...title, absolute: t(locale, title.absolute) };
  return title;
}

/**
 * Turns a page's English metadata into the metadata for one locale: translated
 * title, description and social text, a canonical URL in that locale, hreflang
 * alternates to all three languages, and the Open Graph locale.
 */
export function localizeMetadata(meta: Metadata, path: string, locale: Locale): Metadata {
  const alternates = alternatesFor(path, locale);
  const tx = (s: unknown) => (typeof s === 'string' ? t(locale, s) : s);
  const og = meta.openGraph;
  const tw = meta.twitter;
  const translateImages = (images: unknown) =>
    Array.isArray(images)
      ? images.map((img) => (img && typeof img === 'object' && 'alt' in img ? { ...img, alt: tx((img as { alt: string }).alt) } : img))
      : images;

  return withNativeKeywords({
    ...meta,
    title: translateTitle(meta.title, locale),
    description: tx(meta.description) as string | undefined,
    alternates: { ...meta.alternates, ...alternates },
    ...(og
      ? {
          openGraph: {
            ...og,
            title: tx(og.title) as string,
            description: tx(og.description) as string,
            url: alternates.canonical,
            locale: OG_LOCALE[locale],
            ...('images' in og ? { images: translateImages(og.images) as typeof og.images } : {}),
          },
        }
      : {}),
    ...(tw
      ? {
          twitter: {
            ...tw,
            title: tx(tw.title) as string,
            description: tx(tw.description) as string,
          },
        }
      : {}),
  } as Metadata, path, locale);
}
