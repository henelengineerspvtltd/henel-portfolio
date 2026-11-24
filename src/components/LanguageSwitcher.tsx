'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOCALES, LOCALE_LABEL, HTML_LANG, localeFromPath, localizePath } from '@/i18n/config';

/** English / தமிழ் / हिंदी links to the same page in each language. */
export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname() || '/';
  const current = localeFromPath(pathname);

  return (
    <nav aria-label="Language" className={`flex items-center gap-1 text-xs ${className}`}>
      {LOCALES.map((l) => (
        <Link
          key={l}
          href={localizePath(pathname, l)}
          hrefLang={HTML_LANG[l]}
          lang={HTML_LANG[l]}
          aria-current={l === current ? 'true' : undefined}
          className={`px-2 py-1 rounded-md whitespace-nowrap transition-colors ${
            l === current ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
          }`}
        >
          {LOCALE_LABEL[l]}
        </Link>
      ))}
    </nav>
  );
}
