import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ScrollReveal from '@/app/components/ScrollReveal';
import { localBusinessSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Contact Us — Lightning Protection & Windmill Maintenance, Tamil Nadu',
  description:
    'Contact Henel Engineers Pvt. Ltd. for lightning protection systems, ESE arresters, earthing solutions, surge protection, and windmill operation & maintenance in Tamil Nadu and Karnataka. Call +91 94432 82312 or +91 94436 92711.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Henel Engineers Pvt. Ltd. — Lightning Protection & Windmill Maintenance',
    description:
      'Reach our team for lightning protection systems, ESE air terminals, earthing solutions, or windmill operation and maintenance services in Tamil Nadu and Karnataka.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-28 pb-14 bg-primary" aria-label="Contact page header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} light className="mb-6" />
            <ScrollReveal>
              <span className="inline-block text-xs font-800 uppercase tracking-widest text-primary-foreground/50 mb-3">
                Get in Touch
              </span>
              <h1 className="text-5xl font-800 text-primary-foreground mb-4 leading-tight">
                Let's Discuss Your Project
              </h1>
              <p className="text-base text-primary-foreground/65 leading-relaxed max-w-xl">
                Reach our team for enquiries about lightning protection systems, ESE air terminals, earthing solutions, surge protection, or windmill operation and maintenance services across Tamil Nadu and Karnataka.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16 bg-background" aria-label="Contact details and form">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Info column */}
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>
              {/* Form column */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <ContactForm />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="py-10 bg-card border-t border-border" aria-label="Location map">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal>
                <h2 className="text-base font-800 text-foreground mb-4">Main Office Location</h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Aralvaimozhi, Kanyakumari District, Tamil Nadu — 629 301
                </p>
                {/* Map embed placeholder */}
                <div className="w-full h-64 rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-600 text-muted-foreground mb-2">
                      Aralvaimozhi, Kanyakumari District, Tamil Nadu
                    </p>
                    <a
                      href="https://maps.app.goo.gl/eG8yo7BKjg6gK9xe8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-dark text-xs"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1}>
                <h2 className="text-base font-800 text-foreground mb-4">Branch Office Location</h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Kalluthotti - Marthandam Rd, Marthandam, Unnamalaikadai, Tamil Nadu — 629 165
                </p>
                {/* Map embed placeholder */}
                <div className="w-full h-64 rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-600 text-muted-foreground mb-2">
                      Marthandam, Kanyakumari District, Tamil Nadu
                    </p>
                    <a
                      href="https://maps.app.goo.gl/2whf2eEDufEqSfZw9?g_st=iw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-dark text-xs"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <JsonLd data={localBusinessSchema()} />
    </>
  );
}
