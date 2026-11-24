import React from 'react';
import type { Metadata } from 'next';
import Link from '@/components/LocaleLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/ui/AppIcon';
import HomeCTA from '@/app/components/HomeCTA';
import { guides, guideHref } from '@/lib/guides';
import { absoluteUrl, webPageSchema } from '@/lib/structured-data';
import type { Locale } from '@/i18n/config';
import { localizePath } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';
import { localizeMetadata } from '@/i18n/metadata';

const description =
  'Practical guides on lightning arresters, earthing and wind turbine maintenance from Henel Engineers, an engineering company serving India since 1999.';

const METADATA: Metadata = {
  title: 'Guides: Lightning, Earthing & Windmills',
  description,
  alternates: { canonical: '/guides' },
  openGraph: {
    title: 'Guides | Henel Engineers',
    description,
    url: '/guides',
    images: [{ url: '/assets/images/lightning-protection/work/install-1.jpg', alt: 'Lightning arrester installed on a rooftop mast above a temple building' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides | Henel Engineers',
    description,
    images: ['/assets/images/lightning-protection/work/install-1.jpg'],
  },
};

export function guidesMetadata(locale: Locale): Metadata {
  return localizeMetadata(METADATA, '/guides', locale);
}

const CATEGORY_COLOR: Record<string, string> = {
  'Lightning Protection': '#CC0000',
  Earthing: '#CC0000',
  'Wind Energy': '#2D7A2D',
};

export default function GuidesPage({ locale = 'en' }: { locale?: Locale }) {
  const _ = (text: string) => t(locale, text);
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 pb-12 md:pb-16" aria-label={_('Guides header')}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs locale={locale} items={[{ name: 'Guides', href: '/guides' }]} light className="mb-6" />
            <h1 className="text-3xl md:text-5xl font-800 text-white mb-4 leading-tight">{_('Guides')}</h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              {_('Straight answers to the questions our customers ask about lightning protection, earthing and wind turbine maintenance.')}
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background" aria-label={_('All guides')}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {guides.map((gEn) => {
              const g = tr(gEn, locale);
              return (
                <Link key={gEn.slug} href={guideHref(gEn.slug)} className="group bg-card border border-border rounded-xl p-6 card-hover flex flex-col">
                  <span className="text-xs font-800 uppercase tracking-widest mb-2" style={{ color: CATEGORY_COLOR[gEn.category] }}>
                    {g.category}
                  </span>
                  <h2 className="text-lg font-800 text-foreground leading-snug mb-2 group-hover:underline">{g.h1}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{g.metaDescription}</p>
                  <span className="text-sm inline-flex items-center gap-1 mt-4 text-foreground">
                    {_('Read the guide')} <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <HomeCTA locale={locale} />
      </main>
      <Footer locale={locale} />

      <JsonLd
        data={[
          webPageSchema({ path: '/guides', locale, name: _('Henel Engineers Guides'), description: _(description), type: 'CollectionPage' }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: tr(guides, locale).map((g, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: g.h1,
              url: absoluteUrl(localizePath(guideHref(g.slug), locale)),
            })),
          },
        ]}
      />
    </>
  );
}
