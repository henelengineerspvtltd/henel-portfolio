import React from 'react';
import type { Metadata } from 'next';
import Link from '@/components/LocaleLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/AppIcon';
import WindmillHero from '@/app/windmill/components/WindmillHero';
import WindmillExperience from '@/app/windmill/components/WindmillExperience';
import WindmillCapabilities from '@/app/windmill/components/WindmillCapabilities';
import WindmillGallery from '@/app/windmill/components/WindmillGallery';
import WindmillCoverage from '@/app/windmill/components/WindmillCoverage';
import WindmillWhyChooseUs from '@/app/windmill/components/WindmillWhyChooseUs';
import WindmillFinalCTA from '@/app/windmill/components/WindmillFinalCTA';
import { serviceSchema, webPageSchema, WINDMILL_SERVICE_OFFERS } from '@/lib/structured-data';
import { windmillPageFaqs } from '@/lib/faqs';
import type { Locale } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';
import { localizeMetadata } from '@/i18n/metadata';
import { localizePath } from '@/i18n/config';

const METADATA: Metadata = {
  title: 'Windmill & Wind Turbine Maintenance',
  description:
    'Windmill operation and maintenance, gearbox repair, blade patching, generator rewinding and 24x7 breakdown support across India. Call +91 94432 82312.',
  keywords: [
    'windmill maintenance Tamil Nadu',
    'wind turbine operation and maintenance India',
    'WTG O&M services',
    'wind turbine gearbox repair',
    'wind turbine blade repair',
    'generator rewinding wind turbine',
    'windmill spare parts supplier',
    'windmill erection services',
    'wind turbine breakdown service 24x7',
    'windmill CMC contract',
    'Vestas RRB maintenance',
    'windmill maintenance Karnataka',
    'Muppandal Aralvaimozhi windmill service',
  ],
  alternates: {
    canonical: '/windmill',
  },
  openGraph: {
    title: 'Windmill & Wind Turbine Maintenance across India | Henel Engineers',
    description:
      'Windmill operation & maintenance, gearbox repair, blade patching, generator rewinding, hydraulic servicing and 24x7 breakdown support across India.',
    url: '/windmill',
    images: [
      {
        url: '/assets/images/windmill/hero-green-hills.jpg',
        width: 1200,
        height: 630,
        alt: 'Wind turbines on green rolling hills under a blue sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windmill & Wind Turbine Maintenance across India | Henel Engineers',
    description:
      'Windmill operation & maintenance, gearbox repair, blade patching, generator rewinding and 24x7 breakdown support across India.',
    images: ['/assets/images/windmill/hero-green-hills.jpg'],
  },
};

export function windmillMetadata(locale: Locale): Metadata {
  return localizeMetadata(METADATA, 'C:/Program Files/Git/windmill', locale);
}


export default function WindmillPage({ locale = 'en' }: { locale?: Locale }) {
  const _ = (text: string) => t(locale, text);
  return (
    <>
      <Header />
      <main>
        <WindmillHero locale={locale} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs locale={locale} items={[{ name: 'Windmill Maintenance', href: '/windmill' }]} />
        </div>
        <WindmillExperience locale={locale} />
        <WindmillCapabilities locale={locale} />
        <WindmillGallery locale={locale} />
        <WindmillCoverage locale={locale} />
        <WindmillWhyChooseUs locale={locale} />

        {/* Cross-link to Lightning Protection division */}
        <section className="py-14 bg-background border-t border-border" aria-label={_("Related service")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              {_("Also looking for lightning protection or earthing systems?")}
            </p>
            <Link href="/lightning-protection" className="btn-outline-dark inline-flex">
              {_("View Lightning Protection & Earthing Services")}
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          </div>
        </section>

        <FAQSection locale={locale}
          heading="Windmill Maintenance FAQs"
          subheading="Common questions about windmill operation, maintenance and breakdown support across India."
          items={windmillPageFaqs}
        />

        <WindmillFinalCTA locale={locale} />
      </main>
      <Footer locale={locale} />

      <JsonLd
        data={[serviceSchema({
          name: _('Windmill Operation & Maintenance Services'),
          serviceType: 'Wind Turbine Operation and Maintenance',
          description: _(
            'Windmill operation and maintenance, gearbox repair, blade patching, generator and transformer rewinding, hydraulic servicing, erection and 24x7 breakdown support across India.'),
          areaServed: ['India'],
          url: localizePath('/windmill', locale),
          offers: WINDMILL_SERVICE_OFFERS,
          image: '/assets/images/windmill/hero-green-hills.jpg',
        }),
        webPageSchema({
          path: '/windmill',
          locale,
          name: _('Windmill Operation & Maintenance Services — India'),
          description: _(
            'Windmill operation & maintenance, gearbox repair, blade patching, generator rewinding, hydraulic servicing and 24x7 breakdown support across India.'),
          image: '/assets/images/windmill/hero-green-hills.jpg',
          about: ['Wind turbine maintenance', 'Windmill operation and maintenance', 'Gearbox repair', 'Blade repair'],
        })]}
      />
    </>
  );
}
