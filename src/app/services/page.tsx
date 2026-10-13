import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/app/components/ScrollReveal';
import HomeCTA from '@/app/components/HomeCTA';
import {
  lightningLandingPages,
  windLandingPages,
  renewableLandingPages,
  type LandingPage,
} from '@/lib/landing-pages';
import { webPageSchema, absoluteUrl } from '@/lib/structured-data';

const description =
  'All Henel Engineers services: lightning arresters, ESE lightning arresters, earthing, surge protection, solar lightning protection, windmill maintenance contracts, gearbox repair, blade repair, generator rewinding, hydraulic & PCB repair, spare parts and windmill erection.';

export const metadata: Metadata = {
  title: 'Lightning Protection, Earthing & Windmill Services',
  description,
  keywords: [
    'lightning protection services',
    'earthing services',
    'windmill maintenance services',
    'wind turbine services',
    'renewable energy services',
    'Henel Engineers services',
  ],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Henel Engineers Services — Lightning Protection & Windmill Maintenance',
    description,
    url: '/services',
  },
};

const groups: {
  title: string;
  label: string;
  labelClass: string;
  color: string;
  division: { name: string; href: string; desc: string };
  pages: LandingPage[];
}[] = [
  {
    title: 'Lightning Protection & Earthing',
    label: 'Lightning Protection Division',
    labelClass: 'section-label',
    color: '#CC0000',
    division: {
      name: 'Lightning Protection — full product range & specifications',
      href: '/lightning-protection',
      desc: 'TOPBAS ESE arresters, SPDs, earth rods, earthing compound and earth pit covers with full specifications.',
    },
    pages: lightningLandingPages,
  },
  {
    title: 'Windmill & Wind Turbine Services',
    label: 'Wind Energy Division',
    labelClass: 'section-label-green',
    color: '#2D7A2D',
    division: {
      name: 'Windmill Operation & Maintenance — overview',
      href: '/windmill',
      desc: '25+ years, 30+ active CMCs, 7+ WTG makes and 24x7 breakdown support across Tamil Nadu & Karnataka.',
    },
    pages: windLandingPages,
  },
  {
    title: 'Renewable Energy & Solar',
    label: 'Renewable Energy',
    labelClass: 'section-label-green',
    color: '#2D7A2D',
    division: {
      name: 'Frequently asked questions',
      href: '/faq',
      desc: 'Answers about lightning arresters, earthing, surge protection and windmill maintenance.',
    },
    pages: renewableLandingPages,
  },
];

export default function ServicesPage() {
  const all = groups.flatMap((g) => g.pages);
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-14 bg-primary" aria-label="Services page header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} light className="mb-6" />
            <ScrollReveal>
              <span className="inline-block text-xs font-800 uppercase tracking-widest text-primary-foreground/50 mb-3">
                What We Do
              </span>
              <h1 className="text-4xl sm:text-5xl font-800 text-primary-foreground mb-4 leading-tight">
                Lightning Protection, Earthing &amp; Windmill Services
              </h1>
              <p className="text-base text-primary-foreground/65 leading-relaxed max-w-2xl">
                Every service from Henel Engineers Pvt. Ltd. — lightning protection and earthing across Tamil Nadu, and
                windmill operation &amp; maintenance across Tamil Nadu and Karnataka. Engineering experience since 1999.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {groups.map((g, gi) => (
          <section
            key={g.title}
            className={`py-16 ${gi % 2 ? 'bg-card' : 'bg-background'} border-t border-border`}
            aria-label={g.title}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="mb-10">
                <span className={g.labelClass}>{g.label}</span>
                <h2 className="text-section-heading font-800 text-foreground mt-2">{g.title}</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.pages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col"
                  >
                    <div className="relative aspect-[16/9] bg-muted">
                      <AppImage src={p.heroImage} alt={p.heroAlt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-base font-800 text-foreground mb-2">{p.h1}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">{p.intro}</p>
                      <span className="mt-auto text-xs font-700 inline-flex items-center gap-1" style={{ color: g.color }}>
                        Learn more
                        <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
                <Link
                  href={g.division.href}
                  className="group border-2 border-dashed border-border rounded-xl p-6 flex flex-col justify-center hover:border-foreground/30 transition-colors"
                >
                  <h3 className="text-base font-800 text-foreground mb-2">{g.division.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{g.division.desc}</p>
                  <span className="text-xs font-700 inline-flex items-center gap-1" style={{ color: g.color }}>
                    Open page
                    <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </section>
        ))}

        <HomeCTA />
      </main>
      <Footer />

      <JsonLd
        data={[
          webPageSchema({
            path: '/services',
            type: 'CollectionPage',
            name: 'Henel Engineers Services',
            description,
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Henel Engineers Services',
            itemListElement: all.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: p.h1,
              url: absoluteUrl(`/${p.slug}`),
            })),
          },
        ]}
      />
    </>
  );
}
