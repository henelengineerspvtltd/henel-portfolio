import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicePathways from './components/ServicePathways';
import AboutTeaser from './components/AboutTeaser';
import WindEnergySection from './components/WindEnergySection';
import TopbasProductHighlight from './components/TopbasProtectionHighlight';
import HomeCTA from './components/HomeCTA';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, COMPANY_NAME } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Lightning Protection & Windmill Maintenance in Tamil Nadu',
  description:
    'Henel Engineers Pvt. Ltd., est. 1999, provides lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance in Tamil Nadu and Karnataka. TOPBAS authorised supplier. Call +91 94432 82312 or +91 94436 92711.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, Tamil Nadu',
    description:
      'Lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance across Tamil Nadu and Karnataka. Est. 1999. TOPBAS authorised supplier.',
    url: '/',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: COMPANY_NAME,
  url: SITE_URL,
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
        <HomeCTA />
      </main>
      <Footer />
      <JsonLd data={websiteSchema} />
    </>
  );
}
