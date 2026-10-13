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
  solarLandingPages,
  renewableLandingPages,
  type LandingPage,
} from '@/lib/landing-pages';
import { products, productHref } from '@/lib/products';
import { webPageSchema, absoluteUrl } from '@/lib/structured-data';

const description =
  'Henel Engineers products and services: TOPBAS ESE lightning arresters, surge protection devices, earth rods, earthing compound and earth pit covers; lightning protection and earthing; solar panel installation and maintenance; windmill operation & maintenance, repairs, spare parts and erection.';

export const metadata: Metadata = {
  title: 'Products & Services — Lightning Protection, Solar & Windmill',
  description,
  keywords: [
    'lightning arrester products',
    'earthing products',
    'lightning protection services',
    'solar panel installation services',
    'windmill maintenance services',
    'Henel Engineers products',
    'TOPBAS products India',
  ],
  alternates: { canonical: '/products-and-services' },
  openGraph: {
    title: 'Products & Services | Henel Engineers',
    description,
    url: '/products-and-services',
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
    title: 'Lightning Protection & Earthing Services',
    label: 'Lightning Protection Division',
    labelClass: 'section-label',
    color: '#CC0000',
    division: {
      name: 'Lightning Protection — overview',
      href: '/lightning-protection',
      desc: 'TOPBAS ESE arresters, SPDs, earth rods, earthing compound and earth pit covers with full specifications.',
    },
    pages: lightningLandingPages,
  },
  {
    title: 'Solar Energy Services',
    label: 'Solar Energy Division',
    labelClass: 'section-label-solar',
    color: '#B45309',
    division: {
      name: 'Solar Energy — overview',
      href: '/solar-panel-installation',
      desc: 'Rooftop and commercial solar installation, maintenance and protection across Tamil Nadu.',
    },
    pages: solarLandingPages,
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
    pages: [...windLandingPages, ...renewableLandingPages],
  },
];

export default function ProductsAndServicesPage() {
  const allServices = groups.flatMap((g) => g.pages);
  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-14 bg-primary" aria-label="Products and services page header">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: 'Products & Services', href: '/products-and-services' }]} light className="mb-6" />
            <ScrollReveal>
              <span className="inline-block text-xs font-800 uppercase tracking-widest text-primary-foreground/50 mb-3">What We Offer</span>
              <h1 className="text-4xl sm:text-5xl font-800 text-primary-foreground mb-4 leading-tight">Products &amp; Services</h1>
              <p className="text-base text-primary-foreground/65 leading-relaxed max-w-2xl">
                Lightning protection and earthing products, plus lightning protection, solar energy and windmill services from
                Henel Engineers Pvt. Ltd. — engineering experience since 1999.
              </p>
            </ScrollReveal>
            <nav aria-label="Jump to section" className="mt-8 flex flex-wrap gap-3">
              {[
                ['#products', 'Products'],
                ['#lightning-services', 'Lightning Protection'],
                ['#solar-services', 'Solar Energy'],
                ['#wind-services', 'Wind Energy'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-2 rounded-full text-xs font-700 border transition-colors hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-16 bg-background scroll-mt-24" aria-label="Products">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-10">
              <span className="section-label">Authorised TOPBAS Supplier</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">Lightning Protection &amp; Earthing Products</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((p) => (
                <Link key={p.slug} href={productHref(p.slug)} className="group bg-card border border-border rounded-xl overflow-hidden card-hover flex">
                  <div className="relative w-32 sm:w-36 flex-shrink-0 bg-muted">
                    <AppImage src={p.image} alt={p.imageAlt} fill sizes="144px" className="object-contain p-3" />
                  </div>
                  <div className="p-5 flex flex-col">
                    <p className="text-[11px] font-700 uppercase tracking-wider text-muted-foreground mb-1">{p.category}</p>
                    <h3 className="text-sm font-800 text-foreground mb-3 leading-snug">{p.name}</h3>
                    <span className="mt-auto text-xs font-700 inline-flex items-center gap-1" style={{ color: '#CC0000' }}>
                      View details
                      <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        {groups.map((g, gi) => (
          <section
            key={g.title}
            id={['lightning-services', 'solar-services', 'wind-services'][gi]}
            className={`py-16 ${gi % 2 ? 'bg-background' : 'bg-card'} border-t border-border scroll-mt-24`}
            aria-label={g.title}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="mb-10">
                <span className={g.labelClass}>{g.label}</span>
                <h2 className="text-section-heading font-800 text-foreground mt-2">{g.title}</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.pages.map((p) => (
                  <Link key={p.slug} href={`/${p.slug}`} className="group bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col">
                    <div className="relative aspect-[16/9] bg-muted overflow-hidden">
                      <AppImage src={p.heroImage} alt={p.heroAlt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
            path: '/products-and-services',
            type: 'CollectionPage',
            name: 'Henel Engineers Products & Services',
            description,
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Henel Engineers Products & Services',
            itemListElement: [
              ...products.map((p) => ({ name: p.name, url: absoluteUrl(productHref(p.slug)) })),
              ...allServices.map((p) => ({ name: p.h1, url: absoluteUrl(`/${p.slug}`) })),
            ].map((item, i) => ({ '@type': 'ListItem', position: i + 1, ...item })),
          },
        ]}
      />
    </>
  );
}
