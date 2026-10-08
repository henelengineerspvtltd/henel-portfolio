import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/AppIcon';
import LightningHero from './components/LightningHero';
import LightningServices from './components/LightningServices';
import TopbasSection from './components/TopbasSection';
import LightningGallery from './components/LightningGallery';
import HomeCTA from '@/app/components/HomeCTA';
import { serviceSchema, webPageSchema, LIGHTNING_SERVICE_OFFERS } from '@/lib/structured-data';
import { lightningPageFaqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'ESE Lightning Arrester, Earthing & Surge Protection Supplier in Tamil Nadu, India',
  description:
    'Henel Engineers supplies and installs complete lightning protection systems in Tamil Nadu, India — TOPBAS SIRIUS & UMBRAECO ESE lightning arresters (up to 107 m radius), copper bonded & GI earth rods, earthing compound and Type 1+2 surge protection devices. Call +91 94432 82312.',
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
    title: 'Lightning Protection Systems, ESE Arresters & Earthing in Tamil Nadu | Henel Engineers',
    description:
      'Supply and installation of ESE lightning arresters, earthing systems and surge protection devices for industrial, commercial and infrastructure projects across Tamil Nadu. TOPBAS authorised supplier.',
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
    title: 'Lightning Protection Systems, ESE Arresters & Earthing in Tamil Nadu | Henel Engineers',
    description:
      'ESE lightning arresters, earthing systems and surge protection devices — supplied and installed across Tamil Nadu by an authorised TOPBAS supplier.',
    images: ['/assets/images/lightning-protection/hero-storm.jpg'],
  },
};


export default function LightningProtectionPage() {
  return (
    <>
      <Header />
      <main>
        <LightningHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumbs items={[{ name: 'Lightning Protection', href: '/lightning-protection' }]} />
        </div>
        <LightningServices />
        <TopbasSection />
        <LightningGallery />

        {/* Cross-link to Wind Energy division */}
        <section className="py-14 bg-background border-t border-border" aria-label="Related service">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Also looking for windmill operation and maintenance services?
            </p>
            <Link href="/windmill" className="btn-outline-dark inline-flex">
              View Windmill &amp; Wind Turbine Maintenance Services
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          </div>
        </section>

        <FAQSection
          heading="Lightning Protection FAQs"
          subheading="Common questions about ESE lightning arresters, earthing and surge protection in Tamil Nadu."
          items={lightningPageFaqs}
          footer={
            <Link href="/faq#lightning-protection" className="btn-outline-dark inline-flex">
              More Lightning Protection &amp; Earthing FAQs
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          }
        />

        <HomeCTA />
      </main>
      <Footer />

      <JsonLd
        data={[serviceSchema({
          name: 'Lightning Protection & Earthing Services',
          serviceType: 'Lightning Protection System Installation',
          description:
            'Supply, design and installation of ESE lightning arresters, earthing systems and surge protection devices for industrial, commercial and infrastructure projects in Tamil Nadu.',
          areaServed: ['Tamil Nadu'],
          url: '/lightning-protection',
          offers: LIGHTNING_SERVICE_OFFERS,
          image: '/assets/images/lightning-protection/hero-storm.jpg',
        }),
        webPageSchema({
          path: '/lightning-protection',
          name: 'Lightning Protection & Lightning Arrester Services in Tamil Nadu',
          description:
            'ESE lightning arresters, earthing systems and surge protection devices supplied and installed across Tamil Nadu by an authorised TOPBAS supplier.',
          image: '/assets/images/lightning-protection/hero-storm.jpg',
          about: ['ESE lightning arrester', 'Lightning protection system', 'Earthing', 'Surge protection device'],
        })]}
      />
    </>
  );
}
