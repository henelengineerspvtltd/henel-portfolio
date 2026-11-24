'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { LOCALES, LOCALE_LABEL, HTML_LANG, localeFromPath, localizePath } from '@/i18n/config';
import { UI } from '@/i18n/ui-client';

/**
 * English / தமிழ் / हिंदी links to the same page in each language.
 * `compact` shows one small "தமிழ் ▾" button that opens the list (used in the desktop
 * header to leave room for the menu). The links are always in the HTML, so search
 * engines still see every language version.
 */
export default function LanguageSwitcher({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  const pathname = usePathname() || '/';
  const current = localeFromPath(pathname);
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const links = (item: string) =>
    LOCALES.map((l) => (
      <Link
        key={l}
        href={localizePath(pathname, l)}
        hrefLang={HTML_LANG[l]}
        lang={HTML_LANG[l]}
        aria-current={l === current ? 'true' : undefined}
        onClick={() => setOpen(false)}
        className={`${item} rounded-md whitespace-nowrap transition-colors ${
          l === current ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
        }`}
      >
        {LOCALE_LABEL[l]}
      </Link>
    ));

  if (!compact) {
    return (
      <nav aria-label="Language" className={`flex items-center gap-1 text-xs ${className}`}>
        {links('px-2 py-1')}
      </nav>
    );
  }

  return (
    <div ref={box} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${UI[current].language}: ${LOCALE_LABEL[current]}`}
        className="flex items-center gap-1 px-2 py-1.5 rounded-md text-xs text-foreground hover:bg-muted/60 transition-colors whitespace-nowrap"
      >
        <Icon name="LanguageIcon" size={16} variant="outline" />
        <span lang={HTML_LANG[current]}>{LOCALE_LABEL[current]}</span>
        <Icon name="ChevronDownIcon" size={12} variant="outline" />
      </button>
      <nav
        aria-label="Language"
        className={`${open ? 'flex' : 'hidden'} absolute right-0 top-full mt-1 z-50 flex-col gap-0.5 min-w-[7rem] p-1 bg-card border border-border rounded-lg shadow-lg text-sm`}
      >
        {links('px-3 py-2')}
      </nav>
    </div>
  );
}
