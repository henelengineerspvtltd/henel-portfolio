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
import { solarLandingPages, SOLAR_IMAGES } from '@/lib/landing-pages';
import { solarFaqs } from '@/lib/faqs';
import { serviceSchema, webPageSchema } from '@/lib/structured-data';

const AMBER = '#B45309';
const AMBER_TINT = 'rgba(180,83,9,0.1)';

const description =
  'Solar panel installation and services in Tamil Nadu: rooftop solar for homes and businesses, commercial & industrial solar plants, solar panel maintenance and cleaning, with built-in earthing and lightning protection. Henel Engineers, est. 1999. Call +91 94432 82312.';

export const metadata: Metadata = {
  title: 'Solar Panel Installation & Services in Tamil Nadu',
  description,
  keywords: [
    'solar panel installation',
    'solar panel installation Tamil Nadu',
    'solar panel installation near me',
    'solar installation company',
    'solar company Kanyakumari',
    'solar panel installation Nagercoil',
    'rooftop solar',
    'rooftop solar installation',
    'home solar system',
    'solar power plant installation',
    'commercial solar',
    'industrial solar',
    'on-grid solar system',
    'off-grid solar system',
    'hybrid solar system',
    'solar panel maintenance',
    'solar panel cleaning',
    'solar panel service',
    'solar energy company Tamil Nadu',
    'renewable energy company Tamil Nadu',
  ],
  alternates: { canonical: '/solar-panel-installation' },
  openGraph: {
    title: 'Solar Panel Installation & Services in Tamil Nadu | Henel Engineers',
    description,
    url: '/solar-panel-installation',
    images: [{ url: SOLAR_IMAGES.field, alt: 'Ground-mounted solar panels on a green field under a blue sky' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Panel Installation & Services in Tamil Nadu | Henel Engineers',
    description,
    images: [SOLAR_IMAGES.field],
  },
};

const stats = [
  { value: 'Since 1999', label: 'Engineering experience' },
  { value: '25+ yrs', label: 'Energy O&M experience' },
  { value: 'TOPBAS', label: 'Authorised lightning protection supplier' },
  { value: 'Home → Industry', label: 'Solar systems of every scale' },
];

const steps = [
  { title: 'Site survey', desc: 'Roof or land condition, orientation, available area and shading.' },
  { title: 'Design & sizing', desc: 'A system sized to your electricity use, space and budget.' },
  { title: 'Proposal', desc: 'A clear scope covering panels, inverter, structure and protection.' },
  { title: 'Installation', desc: 'Mounting structures, panels, inverter and safe, neat cabling.' },
  { title: 'Protection', desc: 'Earthing, lightning protection and surge protection built in.' },
  { title: 'Commissioning & service', desc: 'Testing, handover and ongoing maintenance support.' },
];

const systemTypes = [
  {
    icon: 'BoltIcon',
    title: 'On-grid (grid-tied)',
    desc: 'Connected to the electricity grid with no batteries. The most common and economical choice where grid supply is reliable.',
  },
  {
    icon: 'CircleStackIcon',
    title: 'Off-grid',
    desc: 'Stores energy in batteries and runs independently of the grid — suited to sites without a dependable connection.',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Hybrid',
    desc: 'Grid connection plus battery backup, combining savings with power during outages.',
  },
];

const benefits = [
  { icon: 'ChartBarIcon', title: 'Lower electricity bills', desc: 'Generate your own power from sunlight and buy less from the grid.' },
  { icon: 'SunIcon', title: 'Abundant sunshine', desc: 'Tamil Nadu receives strong sunshine for much of the year.' },
  { icon: 'SparklesIcon', title: 'Clean, renewable energy', desc: 'Cut carbon emissions with zero-fuel electricity.' },
  { icon: 'ShieldCheckIcon', title: 'Long service life', desc: 'With proper protection and maintenance, solar systems generate for many years.' },
];

const gallery = [
  { src: SOLAR_IMAGES.installer, alt: 'Installer placing a solar panel on a house roof' },
  { src: SOLAR_IMAGES.technician, alt: 'Technician working on a rooftop solar panel array' },
  { src: SOLAR_IMAGES.house, alt: 'House with solar panels on its roof' },
  { src: SOLAR_IMAGES.industrialRoof, alt: 'Solar panels on a large industrial roof' },
  { src: SOLAR_IMAGES.wiring, alt: 'Technician connecting solar panel wiring' },
  { src: SOLAR_IMAGES.closeUp, alt: 'Close-up of solar panels in sunlight' },
];

export default function SolarPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20" aria-label="Solar energy hero">
          <div className="absolute inset-0 z-0">
            <AppImage
              src={SOLAR_IMAGES.field}
              alt="Ground-mounted solar panels on a green field under a blue sky"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.78) 55%, rgba(10,22,40,0.35) 100%)' }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
            <Breadcrumbs items={[{ name: 'Solar Energy', href: '/solar-panel-installation' }]} light className="mb-6" />
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: AMBER }}>
                  <Icon name="SunIcon" size={18} variant="solid" className="text-white" />
                </div>
                <span className="text-xs font-800 uppercase tracking-widest text-white/60">Solar Energy Division</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-800 text-white mb-5 leading-tight">Solar Panel Installation &amp; Services</h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
                Henel Engineers Pvt. Ltd. installs and services solar panel systems across Tamil Nadu — rooftop solar for homes
                and businesses, commercial and industrial solar plants, and solar maintenance — with earthing and lightning
                protection engineered in from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-solar">
                  Get a Solar Quote
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </Link>
                <a href="tel:+919443282312" className="btn-outline-dark" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFFFFF' }}>
                  <Icon name="PhoneIcon" size={16} variant="solid" />
                  +91 94432 82312
                </a>
                <a href="tel:+919443692711" className="btn-outline-dark" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFFFFF' }}>
                  <Icon name="PhoneIcon" size={16} variant="solid" />
                  +91 94436 92711
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-card border-b border-border" aria-label="Key facts">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {stats.map((s) => (
              <div key={s.label} className="py-6 px-4 text-center">
                <p className="text-xl md:text-2xl font-800 leading-none" style={{ color: AMBER }}>{s.value}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-background" aria-label="About our solar services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="section-label-solar">Why Henel for Solar</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2 mb-5">Solar Installed by Power &amp; Protection Engineers</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Most solar installers focus only on panels. Henel Engineers has been an engineering company since 1999, with a
                lightning protection division, authorised TOPBAS supply, and more than 25 years of operation and maintenance
                experience in wind energy.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                That means your solar system is designed to generate well, installed safely, protected against lightning and
                surges, and backed by people who understand long-term maintenance of power-generating assets.
              </p>
              <ul className="space-y-2.5">
                {['Rooftop solar for homes, shops and offices', 'Commercial & industrial rooftop and ground-mounted solar', 'Solar panel cleaning, inspection & servicing', 'Earthing, lightning protection & surge protection for solar'].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Icon name="CheckCircleIcon" size={18} variant="solid" className="flex-shrink-0 mt-0.5" style={{ color: AMBER }} />
                    <span className="text-sm text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted">
                <AppImage
                  src={SOLAR_IMAGES.technician}
                  alt="Technician working on a rooftop solar panel array (representative image)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services with images (linked) */}
        <section className="py-20 bg-card border-t border-border" aria-label="Solar services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-12">
              <span className="section-label-solar">Our Solar Services</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">Complete Solar Solutions</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {solarLandingPages.map((p, i) => (
                <ScrollReveal key={p.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <Link href={`/${p.slug}`} className="group bg-background border border-border rounded-xl overflow-hidden card-hover flex flex-col h-full">
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <AppImage
                        src={p.heroImage}
                        alt={p.heroAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-base font-800 text-foreground mb-2">{p.h1}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">{p.intro}</p>
                      <span className="mt-auto text-xs font-700 inline-flex items-center gap-1" style={{ color: AMBER }}>
                        Learn more
                        <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background border-t border-border" aria-label="Our solar installation process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-12">
              <span className="section-label-solar">How It Works</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">Our Solar Installation Process</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {steps.map((s, i) => (
                <ScrollReveal key={s.title} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="bg-card border border-border rounded-xl p-6 h-full">
                    <span className="inline-flex w-9 h-9 rounded-full items-center justify-center text-sm font-800 text-white mb-4" style={{ backgroundColor: AMBER }}>
                      {i + 1}
                    </span>
                    <h3 className="text-sm font-800 text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* System types */}
        <section className="py-20 bg-card border-t border-border" aria-label="Types of solar systems">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-12">
              <span className="section-label-solar">Solar System Types</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">On-Grid, Off-Grid or Hybrid?</h2>
              <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
                We assess your site, grid supply and backup needs and recommend the configuration that fits.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {systemTypes.map((t, i) => (
                <ScrollReveal key={t.title} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="bg-background border border-border rounded-xl p-6 h-full">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: AMBER_TINT }}>
                      <Icon name={t.icon} size={22} variant="outline" style={{ color: AMBER }} />
                    </div>
                    <h3 className="text-base font-800 text-foreground mb-2">{t.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background border-t border-border" aria-label="Benefits of solar energy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-12">
              <span className="section-label-solar">Benefits</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">Why Switch to Solar?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b, i) => (
                <ScrollReveal key={b.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <div className="text-center px-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: AMBER_TINT }}>
                      <Icon name={b.icon} size={24} variant="outline" style={{ color: AMBER }} />
                    </div>
                    <h3 className="text-sm font-800 text-foreground mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-card border-t border-border" aria-label="Solar installations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-8">
              <h2 className="text-lg font-800 text-foreground">Solar Installations</h2>
              <p className="text-xs text-muted-foreground mt-1">Representative images</p>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {gallery.map((g, i) => (
                <ScrollReveal key={g.src} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <div className="relative overflow-hidden rounded-lg aspect-square bg-muted group">
                    <AppImage
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Wind + solar cross-link */}
        <section className="py-16 bg-background border-t border-border" aria-label="Renewable energy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/windmill" className="group bg-card border border-border rounded-xl p-6 card-hover">
              <span className="section-label-green">Wind Energy</span>
              <h3 className="text-lg font-800 text-foreground mt-2 mb-2">Windmill Operation &amp; Maintenance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">25+ years, 30+ active CMCs and 24x7 breakdown support across Tamil Nadu &amp; Karnataka.</p>
              <span className="text-xs font-700 inline-flex items-center gap-1" style={{ color: '#2D7A2D' }}>
                Explore wind energy <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/lightning-protection" className="group bg-card border border-border rounded-xl p-6 card-hover">
              <span className="section-label">Lightning Protection</span>
              <h3 className="text-lg font-800 text-foreground mt-2 mb-2">Lightning Arresters &amp; Earthing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">Authorised TOPBAS supplier — ESE arresters, earthing and surge protection across Tamil Nadu.</p>
              <span className="text-xs font-700 inline-flex items-center gap-1" style={{ color: '#CC0000' }}>
                Explore lightning protection <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>

        <FAQSection
          heading="Solar Energy FAQs"
          subheading="Common questions about solar panel installation, system types, subsidy and maintenance."
          items={solarFaqs}
          className="bg-card border-t border-border"
        />

        {/* CTA */}
        <section className="py-14" style={{ backgroundColor: '#7C2D12' }} aria-label="Solar call to action">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-800 text-white mb-2">Ready to Go Solar?</h2>
              <p className="text-sm text-white/75">Talk to Henel Engineers about a solar system designed, installed and protected properly.</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center flex-shrink-0">
              <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#FFFFFF', color: '#7C2D12' }}>
                Get a Solar Quote
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </Link>
              <a href="tel:+919443282312" className="btn-outline-dark" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFFFFF' }}>
                <Icon name="PhoneIcon" size={16} variant="solid" />
                +91 94432 82312
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <JsonLd
        data={[
          serviceSchema({
            name: 'Solar Panel Installation & Services',
            serviceType: 'Solar Panel Installation',
            description,
            areaServed: ['Tamil Nadu'],
            url: '/solar-panel-installation',
            offers: solarLandingPages.map((p) => p.navLabel),
            image: SOLAR_IMAGES.field,
          }),
          webPageSchema({
            path: '/solar-panel-installation',
            name: 'Solar Panel Installation & Services in Tamil Nadu',
            description,
            image: SOLAR_IMAGES.field,
            about: ['Solar panel installation', 'Rooftop solar', 'Solar power plant', 'Solar panel maintenance'],
          }),
        ]}
      />
    </>
  );
}
