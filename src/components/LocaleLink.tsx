'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeFromPath, localizePath } from '@/i18n/config';

type LinkProps = React.ComponentProps<typeof Link>;

/**
 * Drop-in replacement for next/link that keeps visitors in their language:
 * on a Tamil page, href="/windmill" becomes "/ta/windmill". External links,
 * anchors and file paths are left alone.
 */
const LocaleLink = React.forwardRef<HTMLAnchorElement, LinkProps>(function LocaleLink({ href, ...props }, ref) {
  const pathname = usePathname() || '/';
  const locale = localeFromPath(pathname);
  const localized = typeof href === 'string' ? localizePath(href, locale) : href;
  return <Link ref={ref} href={localized} {...props} />;
});

export default LocaleLink;
