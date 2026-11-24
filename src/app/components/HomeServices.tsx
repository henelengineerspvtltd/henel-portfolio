import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from './ScrollReveal';
import { SOLAR_IMAGES } from '@/lib/landing-pages';

interface Division {
  label: string;
  color: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  items: { title: string; href: string }[];
  more: { label: string; href: string };
}

/** The four most-searched services per division; the rest live on each division page. */
const divisions: Division[] = [
  {
    label: 'Lightning Protection',
    color: '#CC0000',
    title: 'Lightning Arresters, Earthing & Surge Protection',
    desc: 'Design, supply and installation of complete lightning protection systems. Authorised TOPBAS supplier.',
    image: '/assets/images/home/lightning-protection-rooftop.webp',
    imageAlt: 'Lightning protection system with steel grounding rods on an industrial rooftop',
    items: [
      { title: 'Lightning arrester supply & installation', href: '/lightning-arrester' },
      { title: 'ESE lightning arresters (TOPBAS)', href: '/ese-lightning-arrester' },
      { title: 'Earthing systems & earth rods', href: '/earthing-system' },
      { title: 'Surge protection devices (SPD)', href: '/surge-protection-device' },
    ],
    more: { label: 'All lightning protection', href: '/lightning-protection' },
  },
  {
    label: 'Wind Energy',
    color: '#2D7A2D',
    title: 'Windmill Operation, Maintenance & Repair',
    desc: '25+ years in wind energy, 30+ active maintenance contracts and 7+ WTG makes supported, with 24x7 breakdown support.',
    image: '/assets/images/stock/wind-farm-aerial.webp',
    imageAlt: 'Aerial view of a large wind farm with wind turbines over green hills',
    items: [
      { title: 'Windmill maintenance contracts (AMC / CMC)', href: '/windmill-maintenance-contract' },
      { title: 'Gearbox repair, overhaul & replacement', href: '/wind-turbine-gearbox-repair' },
      { title: 'Generator rewinding & slip ring repair', href: '/windmill-generator-rewinding' },
      { title: 'Blade repair works', href: '/wind-turbine-blade-repair' },
      { title: 'PCB servicing & repair', href: '/wind-turbine-hydraulic-pcb-repair' },
    ],
    more: { label: 'All windmill services', href: '/windmill' },
  },
  {
    label: 'Solar Energy',
    color: '#B45309',
    title: 'Solar Panel Installation & Service',
    desc: 'Rooftop and commercial solar systems, installed with proper earthing and lightning protection.',
    image: SOLAR_IMAGES.installer,
    imageAlt: 'Technician installing solar panels on a rooftop',
    items: [
      { title: 'Rooftop solar for homes & businesses', href: '/rooftop-solar-installation' },
      { title: 'Commercial & industrial solar plants', href: '/commercial-solar-power-plant' },
      { title: 'Solar panel maintenance & cleaning', href: '/solar-panel-maintenance' },
      { title: 'Solar lightning protection & earthing', href: '/solar-lightning-protection-earthing' },
    ],
    more: { label: 'All solar services', href: '/solar-panel-installation' },
  },
];

export default function HomeServices() {
  return (
    <section className="py-16 md:py-20 bg-background" id="services" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 md:mb-12">
          <span className="section-label">What We Do</span>
          <h2 className="text-section-heading font-800 text-foreground mt-2">
            Lightning Protection, Windmill &amp; Solar Services
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
            Three specialist divisions under one roof, serving clients across India since 1999.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {divisions.map((d, i) => (
            <ScrollReveal key={d.label} delay={(i + 1) as 1 | 2 | 3} className="h-full">
              <article className="h-full flex flex-col bg-card border border-border rounded-xl overflow-hidden">
                <div className="relative h-40 sm:h-44">
                  <AppImage
                    src={d.image}
                    alt={d.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                  <span
                    className="absolute left-4 top-4 px-3 py-1 rounded-sm text-[11px] font-800 uppercase tracking-widest text-white"
                    style={{ backgroundColor: d.color }}
                  >
                    {d.label}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-800 text-foreground leading-snug">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">{d.desc}</p>

                  <ul className="mt-4 divide-y divide-border border-y border-border">
                    {d.items.map((it) => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          className="group flex items-center justify-between gap-3 py-2.5 text-sm font-600 text-foreground hover:underline"
                        >
                          {it.title}
                          <Icon
                            name="ChevronRightIcon"
                            size={16}
                            variant="outline"
                            className="flex-shrink-0 text-muted-foreground group-hover:translate-x-0.5 transition-transform"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={d.more.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-800"
                    style={{ color: d.color }}
                  >
                    {d.more.label}
                    <Icon name="ArrowRightIcon" size={16} variant="outline" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 flex justify-center">
          <Link href="/products-and-services" className="btn-outline-dark inline-flex">
            View All Products &amp; Services
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
