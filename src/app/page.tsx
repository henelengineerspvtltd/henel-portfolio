import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicePathways from './components/ServicePathways';
import AboutTeaser from './components/AboutTeaser';
import WindEnergySection from './components/WindEnergySection';
import TopbasProductHighlight from './components/TopbasProtectionHighlight';
import HomeCTA from './components/HomeCTA';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/AppIcon';
import { homeFaqs } from '@/lib/faqs';
import { localBusinessSchema, webPageSchema } from '@/lib/structured-data';

const description =
  'Henel Engineers Pvt. Ltd., est. 1999, provides lightning protection systems, ESE lightning arresters, earthing & surge protection, and windmill operation & maintenance in Tamil Nadu and Karnataka, India. TOPBAS authorised supplier. Call +91 94432 82312 or +91 94436 92711.';

export const metadata: Metadata = {
  title: {
    absolute: 'Henel Engineers | ESE Lightning Arrester, Earthing & Windmill Maintenance — Tamil Nadu, India',
  },
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, Tamil Nadu, India',
    description:
      'Lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance across Tamil Nadu and Karnataka. Est. 1999. TOPBAS authorised supplier.',
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicePathways />
        <AboutTeaser />
        <WindEnergySection />
        <TopbasProductHighlight />
        <FAQSection
          heading="Frequently Asked Questions"
          subheading="Quick answers about Henel Engineers, lightning protection and windmill maintenance."
          items={homeFaqs}
          footer={
            <Link href="/faq" className="btn-outline-dark inline-flex">
              View All FAQs
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
          }
        />
        <HomeCTA />
      </main>
      <Footer />
      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            path: '/',
            name: 'Henel Engineers Pvt. Ltd. — Lightning Protection & Windmill Maintenance',
            description,
            about: ['Lightning protection system', 'ESE lightning arrester', 'Earthing', 'Surge protection', 'Wind turbine maintenance'],
          }),
        ]}
      />
    </>
  );
}
