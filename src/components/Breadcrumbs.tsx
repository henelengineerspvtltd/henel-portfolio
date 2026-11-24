import React from 'react';
import Link from '@/components/LocaleLink';
import Icon from '@/components/ui/AppIcon';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, SITE_URL, type BreadcrumbItem } from '@/lib/structured-data';
import { localizePath, type Locale } from '@/i18n/config';
import { t } from '@/i18n/translate';

interface BreadcrumbsProps {
  /** Trail excluding Home, e.g. [{ name: 'Lightning Protection', href: '/lightning-protection' }] */
  items: { name: string; href: string }[];
  /** Set true on dark hero backgrounds to use light text */
  light?: boolean;
  className?: string;
  /** Page language: names are translated and schema URLs point at that language. */
  locale?: Locale;
}

export default function Breadcrumbs({ items: itemsEn, light = false, className = '', locale = 'en' }: BreadcrumbsProps) {
  const home = t(locale, 'Home');
  const items = itemsEn.map((i) => ({ name: t(locale, i.name), href: i.href }));
  const schemaItems: BreadcrumbItem[] = [
    { name: home, url: `${SITE_URL}${locale === 'en' ? '' : localizePath('/', locale)}` },
    ...items.map((i) => ({ name: i.name, url: `${SITE_URL}${localizePath(i.href, locale)}` })),
  ];

  const textColor = light ? 'text-white/60' : 'text-muted-foreground';
  const currentColor = light ? 'text-white' : 'text-foreground';
  const linkHover = light ? 'hover:text-white' : 'hover:text-foreground';

  return (
    <nav aria-label={t(locale, 'Breadcrumb')} className={`text-xs font-600 flex flex-wrap items-center gap-1.5 ${textColor} ${className}`}>
      <Link href="/" className={`transition-colors ${linkHover}`}>
        {home}
      </Link>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={item.href}>
            <Icon name="ChevronRightIcon" size={12} variant="outline" className="opacity-50" />
            {isLast ? (
              <span className={`font-700 ${currentColor}`} aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className={`transition-colors ${linkHover}`}>
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
      <JsonLd data={breadcrumbSchema(schemaItems)} />
    </nav>
  );
}
