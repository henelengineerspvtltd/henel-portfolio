import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/app/components/ScrollReveal';
import HomeCTA from '@/app/components/HomeCTA';
import { getLocationPage, locationPages, locationHref } from '@/lib/locations';
import { getLandingPage, type Division } from '@/lib/landing-pages';
import { serviceSchema, webPageSchema } from '@/lib/structured-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages.map((p) => ({ city: p.slug }));
}

type Params = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params;
  const page = getLocationPage(city);
  if (!page) return {};
  const url = locationHref(page.slug);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.metaTitle} | Henel Engineers`,
      description: page.metaDescription,
      url,
      images: [{ url: page.heroImage, alt: page.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.metaTitle} | Henel Engineers`,
      description: page.metaDescription,
      images: [page.heroImage],
    },
  };
}

const DIVISION_COLOR: Record<Division, string> = {
  lightning: '#CC0000',
  wind: '#2D7A2D',
  solar: '#B45309',
  renewable: '#2D7A2D',
};

const ACCENT = '#CC0000';

export default async function LocationPageRoute({ params }: Params) {
  const { city } = await params;
  const page = getLocationPage(city);
  if (!page) notFound();

  const services = page.services.map(getLandingPage).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const nearby = page.nearby.map(getLocationPage).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const url = locationHref(page.slug);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-20" aria-label={`${page.name} hero`}>
          <div className="absolute inset-0 z-0">
            <AppImage src={page.heroImage} alt={page.heroAlt} fill priority sizes="100vw" className="object-cover object-center" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(10,22,40,0.94) 0%, rgba(10,22,40,0.82) 55%, rgba(10,22,40,0.45) 100%)',
              }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
            <Breadcrumbs
              items={[
                { name: 'Service Areas', href: '/service-areas' },
                { name: page.name, href: url },
              ]}
              light
              className="mb-6"
            />
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-800 uppercase tracking-widest text-white/60 mb-3">
                <Icon name="MapPinIcon" size={14} variant="solid" />
                {page.district === page.name ? page.name : `${page.district} District`}, {page.state}
              </span>
              <h1 className="text-3xl md:text-5xl font-800 text-white mb-5 leading-tight">{page.h1}</h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">{page.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Request a Quote
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </Link>
                <a href="tel:+919443282312" className="btn-outline-dark" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFFFFF' }}>
                  <Icon name="PhoneIcon" size={16} variant="solid" />
                  +91 94432 82312
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-card border-b border-border" aria-label="Key facts">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {page.highlights.map((h) => (
                <div key={h.label} className="py-6 px-4 text-center">
                  <p className="text-xl md:text-2xl font-800 leading-none" style={{ color: ACCENT }}>
                    {h.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-snug">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-16 bg-background" aria-label={`Services in ${page.name}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 flex flex-col gap-12">
              {page.sections.map((s) => (
                <ScrollReveal key={s.heading}>
                  <h2 className="text-2xl font-800 text-foreground mb-4">{s.heading}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="text-base text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="space-y-2.5 mt-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <Icon name="CheckCircleIcon" size={18} variant="solid" className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
                          <span className="text-sm text-foreground leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </ScrollReveal>
              ))}
            </article>

            <aside className="flex flex-col gap-6 lg:sticky lg:top-28 self-start w-full">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xs font-800 uppercase tracking-widest text-muted-foreground mb-4">Areas we cover</h2>
                <p className="text-sm text-foreground leading-relaxed">{page.localities.join(' · ')}</p>
              </div>
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h2 className="text-sm font-800 mb-2">Talk to our engineers</h2>
                <p className="text-xs text-primary-foreground/65 mb-4 leading-relaxed">
                  Offices in Aralvaimozhi and Marthandam, Kanyakumari District. Engineering since 1999.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+919443282312" className="text-sm font-700 hover:underline">📞 +91 94432 82312</a>
                  <a href="tel:+919443692711" className="text-sm font-700 hover:underline">📞 +91 94436 92711</a>
                  <a href="https://wa.me/919443282312" className="text-sm font-700 hover:underline">💬 WhatsApp</a>
                  <a href="mailto:henelkkla@gmail.com" className="text-sm font-700 hover:underline">✉ henelkkla@gmail.com</a>
                </div>
                <Link href="/contact" className="btn-primary w-full justify-center text-xs mt-5">
                  Request a Quote
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Services in this location */}
        <section className="py-16 bg-card border-t border-border" aria-label={`Popular services in ${page.name}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="section-label">Services in {page.name}</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">What we do for clients in {page.name}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group bg-background border border-border rounded-xl overflow-hidden card-hover flex flex-col"
                >
                  <div className="relative aspect-[16/9] bg-muted">
                    <AppImage src={s.heroImage} alt={s.heroAlt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-800 text-foreground mb-2">
                      {s.navLabel} in {page.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">{s.intro}</p>
                    <span className="mt-auto text-xs font-700 inline-flex items-center gap-1" style={{ color: DIVISION_COLOR[s.division] }}>
                      Learn more
                      <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          heading={`${page.name} — FAQs`}
          subheading={`Common questions from clients in and around ${page.name}.`}
          items={page.faqs}
          className="bg-background border-t border-border"
        />

        {/* Nearby areas */}
        <section className="py-14 bg-card border-t border-border" aria-label="Nearby service areas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-800 text-foreground mb-6 text-center">Nearby service areas</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={locationHref(n.slug)}
                  className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm font-700 text-foreground card-hover"
                >
                  <Icon name="MapPinIcon" size={14} variant="solid" style={{ color: ACCENT }} />
                  {n.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm font-700 text-foreground card-hover"
              >
                All of India
                <Icon name="ArrowRightIcon" size={14} variant="outline" />
              </Link>
            </div>
          </div>
        </section>

        <HomeCTA />
      </main>
      <Footer />

      <JsonLd
        data={[
          serviceSchema({
            name: `Lightning Protection, Earthing, Solar & Windmill Services in ${page.name}`,
            serviceType: 'Lightning Protection, Earthing, Solar and Windmill Maintenance Services',
            description: page.metaDescription,
            url,
            image: page.heroImage,
            offers: services.map((s) => s.navLabel),
            areaServedPlaces: [
              {
                '@type': 'City',
                name: page.district,
                containedInPlace: {
                  '@type': 'State',
                  name: page.state,
                  containedInPlace: { '@type': 'Country', name: 'India' },
                },
              },
              ...page.localities
                .filter((l) => l !== page.district)
                .map((l) => ({ '@type': 'Place', name: `${l}, ${page.state}` })),
            ],
          }),
          webPageSchema({
            path: url,
            name: page.h1,
            description: page.metaDescription,
            image: page.heroImage,
            about: page.keywords.slice(0, 6),
          }),
        ]}
      />
    </>
  );
}
