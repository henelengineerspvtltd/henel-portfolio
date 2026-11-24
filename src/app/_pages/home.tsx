import React from 'react';
import type { Metadata } from 'next';
import Link from '@/components/LocaleLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import HomeServices from '@/app/components/HomeServices';
import AboutTeaser from '@/app/components/AboutTeaser';
import HomeCTA from '@/app/components/HomeCTA';
import GoogleReviews from '@/app/components/GoogleReviews';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/AppIcon';
import { homeFaqs } from '@/lib/faqs';
import { localBusinessSchema, webPageSchema } from '@/lib/structured-data';
import { alternatesFor, OG_LOCALE, type Locale } from '@/i18n/config';
import { t } from '@/i18n/translate';

const TITLE = 'Henel Engineers | Lightning Arresters & Windmill Services';
const DESCRIPTION =
  'Henel Engineers, est. 1999: lightning arresters, earthing, surge protection, solar installation and windmill maintenance across India. TOPBAS supplier.';
const OG_TITLE = 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, India';
const OG_DESCRIPTION =
  'Lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance across India. Est. 1999. TOPBAS authorised supplier.';

export function homeMetadata(locale: Locale): Metadata {
  return {
    title: { absolute: t(locale, TITLE) },
    description: t(locale, DESCRIPTION),
    keywords: [
      'Henel Engineers',
      'lightning arrester',
      'ESE lightning arrester',
      'earthing contractor',
      'surge protection device',
      'solar panel installation',
      'windmill maintenance',
      'wind turbine maintenance',
      'lightning arrester Tamil Nadu',
      'windmill maintenance India',
    ],
    alternates: alternatesFor('/', locale),
    openGraph: {
      title: t(locale, OG_TITLE),
      description: t(locale, OG_DESCRIPTION),
      url: alternatesFor('/', locale).canonical,
      locale: OG_LOCALE[locale],
    },
  };
}

export default function HomePage({ locale }: { locale: Locale }) {
  const _ = (text: string) => t(locale, text);
  return (
    <>
      <Header />
      <main>
        <HeroSection locale={locale} />
        <HomeServices locale={locale} />
        <AboutTeaser locale={locale} />
        <FAQSection
          locale={locale}
          heading="Frequently Asked Questions"
          subheading="Quick answers about Henel Engineers, lightning protection, solar energy and windmill maintenance."
          items={homeFaqs}
          initialCount={4}
          footer={
            <Link href="/faq" className="btn-outline-dark inline-flex">
              {_('View All FAQs')}
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          }
        />
        <GoogleReviews locale={locale} />
        <HomeCTA locale={locale} />
      </main>
      <Footer locale={locale} />
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            path: '/',
            locale,
            name: _('Henel Engineers Pvt. Ltd. — Lightning Protection & Windmill Maintenance'),
            description: _(DESCRIPTION),
            about: ['Lightning protection system', 'ESE lightning arrester', 'Earthing', 'Surge protection', 'Wind turbine maintenance'],
          }),
        ]}
      />
    </>
  );
}
