import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/app/components/ScrollReveal';
import HomeCTA from '@/app/components/HomeCTA';
import { regions, allStates, cityKeywords } from '@/lib/service-areas';
import { webPageSchema, serviceSchema } from '@/lib/structured-data';

const description =
  'Henel Engineers serves clients anywhere in India — lightning arresters, ESE lightning protection, earthing, surge protection devices, solar panel installation and windmill maintenance in Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana, Gujarat, Maharashtra, Rajasthan, Delhi NCR and every other state.';

export const metadata: Metadata = {
  title: 'Service Areas — Lightning, Earthing, Solar & Windmill Services Across India',
  description,
  keywords: [
    'lightning arrester all over India',
    'lightning protection services across India',
    'earthing contractor across India',
    'solar installation across India',
    'windmill maintenance across India',
    'pan India lightning protection company',
    ...cityKeywords(),
  ],
  alternates: { canonical: '/service-areas' },
  openGraph: {
    title: 'Service Areas Across India | Henel Engineers',
    description,
    url: '/service-areas',
  },
};

const divisions = [
  {
    href: '/lightning-protection',
    label: 'Lightning Protection',
    color: '#CC0000',
    icon: 'BoltIcon',
    title: 'Lightning arresters, earthing & SPD',
    items: ['ESE & conventional lightning arresters', 'Earthing systems & earth pits', 'Surge protection devices (SPD)', 'TOPBAS product supply'],
  },
  {
    href: '/solar-panel-installation',
    label: 'Solar Energy',
    color: '#B45309',
    icon: 'SunIcon',
    title: 'Solar installation & service',
    items: ['Rooftop solar for homes & businesses', 'Commercial & industrial solar', 'Solar maintenance & cleaning', 'Solar lightning protection & earthing'],
  },
  {
    href: '/windmill',
    label: 'Wind Energy',
    color: '#2D7A2D',
    icon: 'CogIcon',
    title: 'Windmill operation & maintenance',
    items: ['Maintenance contracts (CMC / AMC)', 'Gearbox, blade & generator repair', 'Erection & spare parts', '24x7 breakdown support'],
  },
];

const faqs = [
  {
    question: 'Does Henel Engineers provide services outside Tamil Nadu?',
    answer:
      'Yes. Henel Engineers is based in Kanyakumari District, Tamil Nadu, and serves clients anywhere in India — lightning protection, earthing and surge protection, solar panel installation and maintenance, and windmill operation & maintenance.',
  },
  {
    question: 'Can you supply lightning arresters and earthing products to any state in India?',
    answer:
      'Yes. Henel Engineers supplies TOPBAS ESE lightning arresters, surge protection devices, copper bonded and GI earth rods, earthing compound and earth pit covers to customers across India, and can also install them.',
  },
  {
    question: 'Do you maintain windmills in Gujarat, Maharashtra, Rajasthan and other wind states?',
    answer:
      'Yes. Henel Engineers provides wind turbine operation & maintenance, repairs, erection, spare parts and breakdown support for wind farms across India, drawing on more than 25 years of experience and 7+ WTG makes supported.',
  },
  {
    question: 'How do you handle projects far from Kanyakumari?',
    answer:
      'Share your project location and requirement with us. We plan the site visit, design, material supply and installation or maintenance work for your location and confirm the schedule with you.',
  },
  {
    question: 'How do I get a quote for my city?',
    answer:
      'Call +91 94432 82312 or +91 94436 92711, chat on WhatsApp at +91 94432 82312, email henelkkla@gmail.com, or use the contact form and mention your city and state.',
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-20" aria-label="Service areas header">
          <div className="absolute inset-0 z-0">
            <AppImage src="/assets/images/windmill/hero-green-hills.jpg" alt="Wind turbines on green rolling hills" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.94) 0%, rgba(10,22,40,0.8) 60%, rgba(10,22,40,0.5) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
            <Breadcrumbs items={[{ name: 'Service Areas', href: '/service-areas' }]} light className="mb-6" />
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-800 uppercase tracking-widest text-white/60 mb-3">Pan-India Service</span>
              <h1 className="text-4xl md:text-5xl font-800 text-white mb-5 leading-tight">Serving Clients Across India</h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                From our base in Kanyakumari District, Tamil Nadu, Henel Engineers Pvt. Ltd. delivers lightning protection,
                earthing, surge protection, solar energy and windmill services anywhere in India — {allStates.length}+ states and
                regions, from Kanyakumari to Kashmir.
              </p>
            </div>
          </div>
        </section>

        {/* Services available everywhere */}
        <section className="py-16 bg-background" aria-label="Services available across India">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-10">
              <span className="section-label">Available Nationwide</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">Every Service, Anywhere in India</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {divisions.map((d) => (
                <Link key={d.href} href={d.href} className="group bg-card border border-border rounded-xl p-6 card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: d.color }}>
                      <Icon name={d.icon} size={20} variant="outline" className="text-white" />
                    </div>
                    <span className="text-xs font-800 uppercase tracking-widest" style={{ color: d.color }}>{d.label}</span>
                  </div>
                  <h3 className="text-lg font-800 text-foreground mb-3">{d.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {d.items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircleIcon" size={16} variant="solid" className="flex-shrink-0 mt-0.5" style={{ color: d.color }} />
                        <span className="text-sm text-foreground">{i}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="text-xs font-700 inline-flex items-center gap-1" style={{ color: d.color }}>
                    Learn more <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regions */}
        {regions.map((r, ri) => (
          <section key={r.id} id={r.id} className={`py-16 border-t border-border scroll-mt-24 ${ri % 2 ? 'bg-background' : 'bg-card'}`} aria-label={r.name}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal className="mb-8 max-w-3xl">
                <span className="section-label">Region</span>
                <h2 className="text-section-heading font-800 text-foreground mt-2 mb-3">{r.name}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.summary}</p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {r.states.map((st) => (
                  <div key={st.state} className={`${ri % 2 ? 'bg-card' : 'bg-background'} border border-border rounded-xl p-5`}>
                    <h3 className="text-base font-800 text-foreground mb-1 flex items-center gap-2">
                      <Icon name="MapPinIcon" size={16} variant="solid" style={{ color: '#CC0000' }} />
                      {st.state}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3">
                      Lightning arresters, earthing, SPD, solar and windmill services in {st.state}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">{st.cities.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <FAQSection heading="Service Areas — FAQs" items={faqs} className="border-t border-border" />

        <HomeCTA />
      </main>
      <Footer />

      <JsonLd
        data={[
          webPageSchema({
            path: '/service-areas',
            name: 'Henel Engineers Service Areas Across India',
            description,
            about: ['Lightning protection India', 'Solar panel installation India', 'Windmill maintenance India'],
          }),
          serviceSchema({
            name: 'Lightning Protection, Earthing, Solar & Windmill Services Across India',
            serviceType: 'Engineering Services',
            description,
            areaServed: ['India', ...allStates.filter((s) => !s.includes('&') && s !== 'Delhi NCR')],
            url: '/service-areas',
          }),
        ]}
      />
    </>
  );
}
