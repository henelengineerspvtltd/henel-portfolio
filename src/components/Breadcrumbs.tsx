import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, SITE_URL, type BreadcrumbItem } from '@/lib/structured-data';

interface BreadcrumbsProps {
  /** Trail excluding Home, e.g. [{ name: 'Lightning Protection', href: '/lightning-protection' }] */
  items: { name: string; href: string }[];
  /** Set true on dark hero backgrounds to use light text */
  light?: boolean;
  className?: string;
}

export default function Breadcrumbs({ items, light = false, className = '' }: BreadcrumbsProps) {
  const schemaItems: BreadcrumbItem[] = [
    { name: 'Home', url: SITE_URL },
    ...items.map((i) => ({ name: i.name, url: `${SITE_URL}${i.href}` })),
  ];

  const textColor = light ? 'text-white/60' : 'text-muted-foreground';
  const currentColor = light ? 'text-white' : 'text-foreground';
  const linkHover = light ? 'hover:text-white' : 'hover:text-foreground';

  return (
    <nav aria-label="Breadcrumb" className={`text-xs font-600 flex flex-wrap items-center gap-1.5 ${textColor} ${className}`}>
      <Link href="/" className={`transition-colors ${linkHover}`}>
        Home
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
