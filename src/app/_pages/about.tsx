import React from 'react';
import type { Metadata } from 'next';
import Link from '@/components/LocaleLink';
import Header from '@/components/Header';
import HenelLogo from '@/components/HenelLogo';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/app/components/ScrollReveal';
import HomeCTA from '@/app/components/HomeCTA';
import { companyFaqs } from '@/lib/faqs';
import { SOLAR_IMAGES } from '@/lib/landing-pages';
import { webPageSchema } from '@/lib/structured-data';
import type { Locale } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';
import { localizeMetadata } from '@/i18n/metadata';
import { localizePath } from '@/i18n/config';

const description =
  'Henel Engineers Pvt. Ltd., incorporated 1999 in Aralvaimozhi, Tamil Nadu. Lightning protection, windmill maintenance and solar. TOPBAS supplier.';

const METADATA: Metadata = {
  title: 'About Us — Engineering Since 1999',
  description,
  keywords: [
    'Henel Engineers',
    'about Henel Engineers',
    'Henel Engineers Pvt Ltd Aralvaimozhi',
    'engineering company Kanyakumari',
    'lightning protection company Tamil Nadu',
    'windmill maintenance company Tamil Nadu',
    'solar company Tamil Nadu',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Henel Engineers Pvt. Ltd. — Engineering Since 1999',
    description,
    url: '/about',
    images: [{ url: '/assets/images/windmill/hero-green-hills.jpg', alt: 'Wind turbines on green rolling hills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Henel Engineers Pvt. Ltd. — Engineering Since 1999',
    description,
    images: ['/assets/images/windmill/hero-green-hills.jpg'],
  },
};

export function aboutMetadata(locale: Locale): Metadata {
  return localizeMetadata(METADATA, '/about', locale);
}

const stats = [
  { value: '1999', label: 'Incorporated' },
  { value: '25+', label: 'Years of experience' },
  { value: '30+', label: 'Active windmill CMCs' },
  { value: '7+', label: 'WTG makes supported' },
];

const divisions = [
  {
    href: '/lightning-protection',
    label: 'Lightning Protection',
    labelClass: 'section-label',
    color: '#CC0000',
    image: '/assets/images/lightning-protection/work/install-1.jpg',
    alt: 'Lightning arrester installed on a rooftop mast above a temple building',
    title: 'Lightning Protection & Earthing',
    desc: 'Supply, design and installation of ESE lightning arresters, earthing systems and surge protection devices across India. Authorised supplier of TOPBAS products, imported from Turkey.',
  },
  {
    href: '/windmill',
    label: 'Wind Energy',
    labelClass: 'section-label-green',
    color: '#2D7A2D',
    image: '/assets/images/windmill/nacelle-erection-1.jpg',
    alt: 'Crane erecting a wind turbine tower and rotor during installation',
    title: 'Windmill Operation & Maintenance',
    desc: 'WTG operation, maintenance, repairs, erection, spare parts and 24x7 breakdown support across India, with 30+ active Comprehensive Maintenance Contracts.',
  },
  {
    href: '/solar-panel-installation',
    label: 'Solar Energy',
    labelClass: 'section-label-solar',
    color: '#B45309',
    image: SOLAR_IMAGES.installer,
    alt: 'Installer placing a solar panel on a house roof (representative image)',
    title: 'Solar Panel Installation & Services',
    desc: 'Rooftop and commercial solar installation, solar panel maintenance and servicing, with earthing and lightning protection engineered in.',
  },
];

const pillars = [
  { icon: 'WrenchScrewdriverIcon', label: 'Engineering Expertise', desc: 'Deep technical knowledge across lightning protection design and wind turbine systems.' },
  { icon: 'ShieldCheckIcon', label: 'Quality Products', desc: 'Authorised supplier of TOPBAS lightning protection products, imported from Turkey.' },
  { icon: 'MapPinIcon', label: 'Tamil Nadu Roots', desc: 'Based in Kanyakumari District — the heartland of South India’s wind energy sector.' },
  { icon: 'UsersIcon', label: 'Long-Term Relationships', desc: 'We prioritise lasting partnerships with our industrial and commercial clients.' },
];

const directors = [
  { name: 'R. Rojore Rajesh', role: 'Director', photo: '/assets/images/director-rajesh.jpg' },
  { name: 'Rajadhas', role: 'Director', photo: '/assets/images/director-raajadhas.jpg' },
];

const details = [
  { label: 'Legal name', value: 'Henel Engineers Pvt. Ltd.' },
  { label: 'Incorporated', value: '17 August 1999' },
  { label: 'CIN', value: 'U45207TN1999PTC043025' },
  { label: 'Registrar', value: 'RoC-Chennai' },
  { label: 'Registered office', value: 'No.8, 1104 J/64, Kamaraj Nagar, Aralvaimozhi, Kanyakumari District, Tamil Nadu — 629 301' },
  { label: 'Branch office', value: 'Kalluthotti - Marthandam Rd, Marthandam, Unnamalaikadai, Tamil Nadu — 629 165' },
];

export default function AboutPage({ locale = 'en' }: { locale?: Locale }) {
  const _ = (text: string) => t(locale, text);
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20" aria-label={_("About page header")}>
          <div className="absolute inset-0 z-0">
            <AppImage
              src="/assets/images/windmill/hero-green-hills.jpg"
              alt={_("Wind turbines on green rolling hills under a blue sky")}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 55%, rgba(10,22,40,0.35) 100%)' }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
            <Breadcrumbs locale={locale} items={[{ name: 'About Us', href: '/about' }]} light className="mb-8" />
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <HenelLogo size={56} />
                <span className="text-xs font-800 uppercase tracking-widest text-white/70">
                  {_("About Us · Est. 1999 · Kanyakumari, Tamil Nadu")}
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-800 text-white mb-5 leading-tight">{_("Henel Engineers Pvt. Ltd.")}</h1>
              <p className="text-lg sm:text-xl font-500 text-white/85 mb-4">
                {_("Lightning Protection · Wind Energy · Solar Energy")}
              </p>
              <p className="text-base text-white/70 leading-relaxed max-w-2xl">
                {_("An engineering company from Kanyakumari District, Tamil Nadu, delivering reliable engineering services since 1999.")}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-card border-b border-border" aria-label={_("Company facts")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {tr(stats, locale).map((s) => (
              <div key={s.label} className="py-7 px-4 text-center">
                <p className="text-3xl font-800 text-foreground leading-none">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-background" aria-label={_("Our story")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal>
              <span className="section-label">{_("Our Story")}</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2 mb-5">{_("Rooted in Kanyakumari District")}</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {_("Henel Engineers Pvt. Ltd. was incorporated on 17 August 1999 in Aralvaimozhi, Kanyakumari District, Tamil Nadu. Over more than two decades, we have built a reputation for reliable engineering services in lightning protection systems and wind energy — and today we also install and service solar panel systems.")}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {_("Our location in Kanyakumari District — home to some of India’s most active wind energy infrastructure — gives us direct proximity to the projects and clients we serve.")}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {_("Our team brings together skilled mechanical, electrical and technical professionals, supported by dedicated field manpower and service vehicles, and we operate from a registered office in Aralvaimozhi and a branch office in Marthandam.")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted">
                <AppImage
                  src="/assets/images/windmill/tower-technician.jpg"
                  alt={_("Henel Engineers technician on a wind turbine tower carrying out maintenance")}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Divisions */}
        <section className="py-20 bg-card border-t border-border" aria-label={_("Our divisions")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-12">
              <span className="section-label">{_("What We Do")}</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">{_("Our Divisions")}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tr(divisions, locale).map((d, i) => (
                <ScrollReveal key={d.href} delay={(i % 3) as 0 | 1 | 2}>
                  <Link href={d.href} className="group bg-background border border-border rounded-xl overflow-hidden card-hover flex flex-col h-full">
                    <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                      <AppImage src={d.image} alt={d.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className={d.labelClass}>{d.label}</span>
                      <h3 className="text-lg font-800 text-foreground mt-2 mb-2">{d.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{d.desc}</p>
                      <span className="mt-auto text-xs font-700 inline-flex items-center gap-1" style={{ color: d.color }}>
                        {_("Learn more")}
                        <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background border-t border-border" aria-label={_("What we stand for")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-12">
              <span className="section-label">{_("Our Values")}</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">{_("What We Stand For")}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tr(pillars, locale).map((p, i) => (
                <ScrollReveal key={p.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <div className="bg-card border border-border rounded-xl p-6 h-full">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center mb-4" style={{ backgroundColor: '#0A1628' }}>
                      <Icon name={p.icon} size={20} variant="outline" className="text-white" />
                    </div>
                    <h3 className="text-sm font-800 text-foreground mb-2">{p.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership + company details */}
        <section className="py-20 bg-card border-t border-border" aria-label={_("Leadership and company details")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <span className="section-label">{_("Leadership")}</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2 mb-8">{_("Company Directors")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {tr(directors, locale).map((d) => (
                  <div key={d.name} className="bg-background border border-border rounded-xl p-6 text-center">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
                      <AppImage src={d.photo} alt={t(locale, "{name}, {role} of Henel Engineers", { name: d.name, role: d.role })} fill sizes="112px" className="object-cover object-top" />
                    </div>
                    <p className="text-base font-800 text-foreground">{d.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{d.role}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <span className="section-label">{_("Registration")}</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2 mb-8">{_("Company Details")}</h2>
              <div className="bg-background border border-border rounded-xl px-6 py-2">
                {tr(details, locale).map((d) => (
                  <div key={d.label} className="spec-row">
                    <span className="text-xs font-700 uppercase tracking-wider text-muted-foreground w-2/5 flex-shrink-0">{d.label}</span>
                    <span className="text-sm font-600 text-foreground text-right">{d.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <FAQSection locale={locale} heading="About Henel Engineers — FAQs" items={companyFaqs} />

        <HomeCTA locale={locale} />
      </main>
      <Footer locale={locale} />

      <JsonLd
        data={webPageSchema({
          path: '/about',
          locale,
          type: 'AboutPage',
          name: _('About Henel Engineers Pvt. Ltd.'),
          description: _(description),
        })}
      />
    </>
  );
}
