import React from 'react';
import type { Metadata } from 'next';
import Link from '@/components/LocaleLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/AppIcon';
import LightningHero from '@/app/lightning-protection/components/LightningHero';
import LightningServices from '@/app/lightning-protection/components/LightningServices';
import TopbasSection from '@/app/lightning-protection/components/TopbasSection';
import LightningGallery from '@/app/lightning-protection/components/LightningGallery';
import HomeCTA from '@/app/components/HomeCTA';
import { serviceSchema, webPageSchema, LIGHTNING_SERVICE_OFFERS } from '@/lib/structured-data';
import { lightningPageFaqs } from '@/lib/faqs';
import type { Locale } from '@/i18n/config';
import { t } from '@/i18n/translate';
import { localizeMetadata } from '@/i18n/metadata';
import { localizePath } from '@/i18n/config';

const METADATA: Metadata = {
  title: 'Lightning Protection & ESE Arresters India',
  description:
    'Complete lightning protection across India: TOPBAS SIRIUS and UMBRAECO ESE arresters, earth rods, earthing compound and SPDs. Call +91 94432 82312.',
  keywords: [
    'ESE lightning arrester',
    'TOPBAS SIRIUS ESE lightning arrester',
    'UMBRAECO ESE lightning arrester',
    'NF C 17-102 lightning arrester',
    'lightning protection system Tamil Nadu',
    'lightning arrester installation Kanyakumari',
    'copper bonded earth rod',
    'GI earth rod',
    'CARBOMAXX earthing compound',
    'FRP earth pit cover',
    'Type 1 + 2 surge protection device',
    'earthing contractor Tamil Nadu',
  ],
  alternates: {
    canonical: '/lightning-protection',
  },
  openGraph: {
    title: 'Lightning Protection Systems, ESE Arresters & Earthing in India | Henel Engineers',
    description:
      'Supply and installation of ESE lightning arresters, earthing systems and surge protection devices for industrial, commercial and infrastructure projects across India. TOPBAS authorised supplier.',
    url: '/lightning-protection',
    images: [
      {
        url: '/assets/images/lightning-protection/hero-storm.jpg',
        width: 1200,
        height: 630,
        alt: 'Lightning protection system installed on a rooftop during a storm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lightning Protection Systems, ESE Arresters & Earthing in India | Henel Engineers',
    description:
      'ESE lightning arresters, earthing systems and surge protection devices — supplied and installed across India by an authorised TOPBAS supplier.',
    images: ['/assets/images/lightning-protection/hero-storm.jpg'],
  },
};

export function lightningProtectionMetadata(locale: Locale): Metadata {
  return localizeMetadata(METADATA, '/lightning-protection', locale);
}

export default function LightningProtectionPage({ locale = 'en' }: { locale?: Locale }) {
  const _ = (text: string) => t(locale, text);
  return (
    <>
      <Header />
      <main>
        <LightningHero locale={locale} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs locale={locale} items={[{ name: 'Lightning Protection', href: '/lightning-protection' }]} />
        </div>
        <LightningServices locale={locale} />
        <TopbasSection locale={locale} />
        <LightningGallery locale={locale} />

        {/* Cross-link to Wind Energy division */}
        <section className="py-14 bg-background border-t border-border" aria-label={_("Related service")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              {_("Also looking for windmill operation and maintenance services?")}
            </p>
            <Link href="/windmill" className="btn-outline-dark inline-flex">
              {_("View Windmill & Wind Turbine Maintenance Services")}
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          </div>
        </section>

        <FAQSection locale={locale}
          heading="Lightning Protection FAQs"
          subheading="Common questions about ESE lightning arresters, earthing and surge protection in India."
          items={lightningPageFaqs}
          footer={
            <Link href="/faq#lightning-protection" className="btn-outline-dark inline-flex">
              {_("More Lightning Protection & Earthing FAQs")}
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          }
        />

        <HomeCTA locale={locale} />
      </main>
      <Footer locale={locale} />

      <JsonLd
        data={[serviceSchema({
          name: _('Lightning Protection & Earthing Services'),
          serviceType: 'Lightning Protection System Installation',
          description: _(
            'Supply, design and installation of ESE lightning arresters, earthing systems and surge protection devices for industrial, commercial and infrastructure projects in India.'),
          areaServed: ['India'],
          url: localizePath('/lightning-protection', locale),
          offers: LIGHTNING_SERVICE_OFFERS,
          image: '/assets/images/lightning-protection/hero-storm.jpg',
        }),
        webPageSchema({
          path: '/lightning-protection',
          locale,
          name: _('Lightning Protection & Lightning Arrester Services in India'),
          description: _(
            'ESE lightning arresters, earthing systems and surge protection devices supplied and installed across India by an authorised TOPBAS supplier.'),
          image: '/assets/images/lightning-protection/hero-storm.jpg',
          about: ['ESE lightning arrester', 'Lightning protection system', 'Earthing', 'Surge protection device'],
        })]}
      />
    </>
  );
}
