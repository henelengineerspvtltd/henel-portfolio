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
import { serviceSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Lightning Protection Systems, ESE Arresters & Earthing in Tamil Nadu',
  description:
    'Henel Engineers supplies and installs complete lightning protection systems in Tamil Nadu — ESE lightning arresters, earthing, and surge protection devices (SPD). TOPBAS authorised supplier. Call +91 94432 82312 or +91 94436 92711.',
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

const faqItems = [
  {
    question: 'What is an ESE lightning arrester?',
    answer:
      'An Early Streamer Emission (ESE) lightning arrester is a non-electronic air terminal designed to trigger an earlier upward streamer than a conventional lightning rod, giving it a wider zone of protection. Henel Engineers supplies and installs ESE lightning arresters, including the TOPBAS SIRIUS and UMBRAECO models.',
  },
  {
    question: 'Is Henel Engineers an authorised TOPBAS supplier?',
    answer:
      'Yes. Henel Engineers is an authorised supplier of TOPBAS lightning protection products, which are imported from Turkey, including ESE lightning arresters, surge protection devices and earthing accessories.',
  },
  {
    question: 'What does a complete lightning protection system include?',
    answer:
      'A complete lightning protection system typically includes an ESE air terminal or lightning rod, down conductors, an earthing system, surge protection devices, and test joints and accessories — designed to the applicable standards with site-specific risk assessment and zone-of-protection calculations.',
  },
  {
    question: 'Which areas does Henel Engineers serve for lightning protection?',
    answer:
      'Henel Engineers supplies and installs lightning protection systems for industrial, commercial and infrastructure projects across Tamil Nadu.',
  },
  {
    question: 'How do I get a quote for a lightning protection system?',
    answer:
      'Call +91 94432 82312 or +91 94436 92711, message us on WhatsApp, or use the contact form to share your requirement and request a quote.',
  },
];

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
          items={faqItems}
        />

        <HomeCTA />
      </main>
      <Footer />

      <JsonLd
        data={serviceSchema({
          name: 'Lightning Protection & Earthing Services',
          serviceType: 'Lightning Protection System Installation',
          description:
            'Supply, design and installation of ESE lightning arresters, earthing systems and surge protection devices for industrial, commercial and infrastructure projects in Tamil Nadu.',
          areaServed: ['Tamil Nadu'],
          url: '/lightning-protection',
        })}
      />
    </>
  );
}
