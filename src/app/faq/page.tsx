import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import ScrollReveal from '@/app/components/ScrollReveal';
import HomeCTA from '@/app/components/HomeCTA';
import { faqCategories } from '@/lib/faqs';
import { faqPageSchema, webPageSchema } from '@/lib/structured-data';

const description =
  'Answers to common questions about ESE lightning arresters, lightning protection systems, earthing, surge protection devices (SPD) and windmill / wind turbine maintenance from Henel Engineers Pvt. Ltd., Tamil Nadu, India.';

export const metadata: Metadata = {
  title: 'FAQ — Lightning Arresters, Earthing, Surge Protection & Windmill Maintenance',
  description,
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Lightning Protection & Windmill Maintenance FAQ | Henel Engineers',
    description,
    url: '/faq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lightning Protection & Windmill Maintenance FAQ | Henel Engineers',
    description,
  },
};

export default function FaqPage() {
  const allItems = faqCategories.flatMap((c) => c.items);

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-14 bg-primary" aria-label="FAQ page header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} light className="mb-6" />
            <ScrollReveal>
              <span className="inline-block text-xs font-800 uppercase tracking-widest text-primary-foreground/50 mb-3">
                Help Centre
              </span>
              <h1 className="text-4xl sm:text-5xl font-800 text-primary-foreground mb-4 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-base text-primary-foreground/65 leading-relaxed max-w-2xl">
                Clear answers about ESE lightning arresters, lightning protection systems, earthing,
                surge protection and windmill operation &amp; maintenance — from the Henel Engineers team.
              </p>
            </ScrollReveal>

            <nav aria-label="FAQ categories" className="mt-8 flex flex-wrap gap-3">
              {faqCategories.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="px-4 py-2 rounded-full text-xs font-700 border transition-colors hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
                >
                  {c.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div id="faq">
          {faqCategories.map((c, i) => (
            <FAQSection
              key={c.id}
              id={c.id}
              label={`${i + 1} / ${faqCategories.length}`}
              heading={c.title}
              subheading={c.description}
              items={c.items}
              includeSchema={false}
              className={i % 2 === 1 ? 'bg-card border-t border-border' : 'border-t border-border'}
            />
          ))}
        </div>

        <HomeCTA />
      </main>
      <Footer />

      <JsonLd
        data={[
          faqPageSchema(allItems),
          webPageSchema({
            path: '/faq',
            name: 'Frequently Asked Questions — Henel Engineers Pvt. Ltd.',
            description,
            about: ['Lightning protection', 'ESE lightning arrester', 'Earthing', 'Surge protection device', 'Wind turbine maintenance'],
          }),
        ]}
      />
    </>
  );
}
