import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ContactForm from '@/app/contact/components/ContactForm';
import { CONTACT_FORM_STRINGS } from '@/app/contact/components/contact-form-strings';
import ContactInfo from '@/app/contact/components/ContactInfo';
import ScrollReveal from '@/app/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import { localBusinessSchema, webPageSchema } from '@/lib/structured-data';
import { contactFaqs } from '@/lib/faqs';
import type { Locale } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';
import { localizeMetadata } from '@/i18n/metadata';
import { localizePath } from '@/i18n/config';

const METADATA: Metadata = {
  title: 'Contact Us — Lightning & Windmill Quotes',
  description:
    'Contact Henel Engineers for lightning protection, earthing, solar and windmill maintenance across India. Call +91 94432 82312 or +91 94436 92711.',
  keywords: [
    'contact Henel Engineers',
    'lightning arrester quote',
    'earthing contractor contact',
    'windmill maintenance quote',
    'solar installation enquiry',
    'Henel Engineers Aralvaimozhi',
    'Henel Engineers Marthandam',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Henel Engineers Pvt. Ltd. — Lightning Protection & Windmill Maintenance',
    description:
      'Reach our team for lightning protection systems, ESE air terminals, earthing solutions, or windmill operation and maintenance services across India.',
    url: '/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Henel Engineers Pvt. Ltd.',
    description: 'Reach our team for lightning protection, earthing, solar and windmill maintenance across India.',
  },
};

export function contactMetadata(locale: Locale): Metadata {
  return localizeMetadata(METADATA, '/contact', locale);
}

export default function ContactPage({ locale = 'en' }: { locale?: Locale }) {
  const _ = (text: string) => t(locale, text);
  return (
    <>
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-28 pb-14 bg-primary" aria-label={_("Contact page header")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs locale={locale} items={[{ name: 'Contact', href: '/contact' }]} light className="mb-6" />
            <ScrollReveal>
              <span className="inline-block text-xs font-800 uppercase tracking-widest text-primary-foreground/50 mb-3">
                {_("Get in Touch")}
              </span>
              <h1 className="text-5xl font-800 text-primary-foreground mb-4 leading-tight">
                {_("Let's Discuss Your Project")}
              </h1>
              <p className="text-base text-primary-foreground/65 leading-relaxed max-w-xl">
                {_("Reach our team for enquiries about lightning protection systems, ESE air terminals, earthing solutions, surge protection, or windmill operation and maintenance services across India.")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-16 bg-background" aria-label={_("Contact details and form")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Info column */}
              <div className="lg:col-span-1">
                <ContactInfo locale={locale} />
              </div>
              {/* Form column */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <ContactForm strings={Object.fromEntries(CONTACT_FORM_STRINGS.map((k) => [k, t(locale, k)]))} />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Map placeholder */}
        <section className="py-10 bg-card border-t border-border" aria-label={_("Location map")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal>
                <h2 className="text-base font-800 text-foreground mb-4">{_("Main Office Location")}</h2>
                <p className="text-sm text-muted-foreground mb-5">
                  {_("Aralvaimozhi, Kanyakumari District, Tamil Nadu — 629 301")}
                </p>
                {/* Map embed placeholder */}
                <div className="w-full h-64 rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-600 text-muted-foreground mb-2">
                      {_("Aralvaimozhi, Kanyakumari District, Tamil Nadu")}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/eG8yo7BKjg6gK9xe8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-dark text-xs"
                    >
                      {_("Open in Google Maps")}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1}>
                <h2 className="text-base font-800 text-foreground mb-4">{_("Branch Office Location")}</h2>
                <p className="text-sm text-muted-foreground mb-5">
                  {_("Kalluthotti - Marthandam Rd, Marthandam, Unnamalaikadai, Tamil Nadu — 629 165")}
                </p>
                {/* Map embed placeholder */}
                <div className="w-full h-64 rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm font-600 text-muted-foreground mb-2">
                      {_("Marthandam, Kanyakumari District, Tamil Nadu")}
                    </p>
                    <a
                      href="https://maps.app.goo.gl/2whf2eEDufEqSfZw9?g_st=iw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-dark text-xs"
                    >
                      {_("Open in Google Maps")}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <FAQSection locale={locale}
          heading="Contact FAQs"
          subheading="How to reach Henel Engineers and where we work."
          items={contactFaqs}
        />
      </main>
      <Footer locale={locale} />

      <JsonLd
        data={[
          localBusinessSchema(),
          webPageSchema({
            path: '/contact',
            locale,
            type: 'ContactPage',
            name: _('Contact Henel Engineers Pvt. Ltd.'),
            description: _(
              'Phone, WhatsApp, email, office addresses and quote request form for lightning protection and windmill maintenance across India.'),
          }),
        ]}
      />
    </>
  );
}
