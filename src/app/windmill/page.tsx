import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/AppIcon';
import WindmillHero from './components/WindmillHero';
import WindmillExperience from './components/WindmillExperience';
import WindmillServices from './components/WindmillServices';
import WindmillCapabilities from './components/WindmillCapabilities';
import WindmillGallery from './components/WindmillGallery';
import WindmillCoverage from './components/WindmillCoverage';
import WindmillWhyChooseUs from './components/WindmillWhyChooseUs';
import WindmillFinalCTA from './components/WindmillFinalCTA';
import { serviceSchema, webPageSchema, WINDMILL_SERVICE_OFFERS } from '@/lib/structured-data';
import { windmillPageFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Windmill & Wind Turbine O&M Services in Tamil Nadu & Karnataka, India',
  description:
    'Henel Engineers provides windmill operation and maintenance, gearbox repair, blade patching, generator rewinding, hydraulic servicing, erection and 24x7 breakdown support across Tamil Nadu & Karnataka. Call +91 94432 82312 or +91 94436 92711.',
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
    title: 'Windmill & Wind Turbine Maintenance in Tamil Nadu & Karnataka | Henel Engineers',
    description:
      'Windmill operation & maintenance, gearbox repair, blade patching, generator rewinding, hydraulic servicing and 24x7 breakdown support across Tamil Nadu and Karnataka.',
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
    title: 'Windmill & Wind Turbine Maintenance in Tamil Nadu & Karnataka | Henel Engineers',
    description:
      'Windmill operation & maintenance, gearbox repair, blade patching, generator rewinding and 24x7 breakdown support across Tamil Nadu and Karnataka.',
    images: ['/assets/images/windmill/hero-green-hills.jpg'],
  },
};


export default function WindmillPage() {
  return (
    <>
      <Header />
      <main>
        <WindmillHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ name: 'Windmill Maintenance', href: '/windmill' }]} />
        </div>
        <WindmillExperience />
        <WindmillServices />
        <WindmillCapabilities />
        <WindmillGallery />
        <WindmillCoverage />
        <WindmillWhyChooseUs />

        {/* Cross-link to Lightning Protection division */}
        <section className="py-14 bg-background border-t border-border" aria-label="Related service">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Also looking for lightning protection or earthing systems?
            </p>
            <Link href="/lightning-protection" className="btn-outline-dark inline-flex">
              View Lightning Protection &amp; Earthing Services
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          </div>
        </section>

        <FAQSection
          heading="Windmill Maintenance FAQs"
          subheading="Common questions about windmill operation, maintenance and breakdown support in Tamil Nadu & Karnataka."
          items={windmillPageFaqs}
        />

        <WindmillFinalCTA />
      </main>
      <Footer />

      <JsonLd
        data={[serviceSchema({
          name: 'Windmill Operation & Maintenance Services',
          serviceType: 'Wind Turbine Operation and Maintenance',
          description:
            'Windmill operation and maintenance, gearbox repair, blade patching, generator and transformer rewinding, hydraulic servicing, erection and 24x7 breakdown support across Tamil Nadu and Karnataka.',
          areaServed: ['Tamil Nadu', 'Karnataka'],
          url: '/windmill',
          offers: WINDMILL_SERVICE_OFFERS,
          image: '/assets/images/windmill/hero-green-hills.jpg',
        }),
        webPageSchema({
          path: '/windmill',
          name: 'Windmill Operation & Maintenance Services — Tamil Nadu & Karnataka',
          description:
            'Windmill operation & maintenance, gearbox repair, blade patching, generator rewinding, hydraulic servicing and 24x7 breakdown support across Tamil Nadu and Karnataka.',
          image: '/assets/images/windmill/hero-green-hills.jpg',
          about: ['Wind turbine maintenance', 'Windmill operation and maintenance', 'Gearbox repair', 'Blade repair'],
        })]}
      />
    </>
  );
}
