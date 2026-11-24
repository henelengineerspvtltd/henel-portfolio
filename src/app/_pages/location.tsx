import React from 'react';
import type { Metadata } from 'next';
import Link from '@/components/LocaleLink';
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
import type { Locale } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';
import { withNativeKeywords } from '@/i18n/keywords';
import { alternatesFor, localizePath, OG_LOCALE } from '@/i18n/config';

export function locationStaticParams() {
  return locationPages.map((p) => ({ city: p.slug }));
}

export function locationMetadata(city: string, locale: Locale): Metadata {
  const pageEn = getLocationPage(city);
  if (!pageEn) return {};
  const page = tr(pageEn, locale);
  const alternates = alternatesFor(locationHref(page.slug), locale);
  return withNativeKeywords({
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: pageEn.keywords,
    alternates,
    openGraph: {
      title: `${page.metaTitle} | Henel Engineers`,
      description: page.metaDescription,
      url: alternates.canonical,
      locale: OG_LOCALE[locale],
      images: [{ url: page.heroImage, alt: page.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.metaTitle} | Henel Engineers`,
      description: page.metaDescription,
      images: [page.heroImage],
    },
  }, `/service-areas/${city}`, locale, pageEn.name);
}

const DIVISION_COLOR: Record<Division, string> = {
  lightning: '#CC0000',
  wind: '#2D7A2D',
  solar: '#B45309',
  renewable: '#2D7A2D',
};

const ACCENT = '#CC0000';

export default function LocationPage({ city, locale }: { city: string; locale: Locale }) {
  const _ = (text: string) => t(locale, text);
  const pageEn = getLocationPage(city);
  if (!pageEn) notFound();
  const page = tr(pageEn, locale);

  const services = tr(pageEn.services.map(getLandingPage).filter((p): p is NonNullable<typeof p> => Boolean(p)), locale);
  const nearby = tr(pageEn.nearby.map(getLocationPage).filter((p): p is NonNullable<typeof p> => Boolean(p)), locale);
  const url = locationHref(page.slug);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-20" aria-label={t(locale, '{name} hero', { name: page.name })}>
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
            <Breadcrumbs locale={locale}
              items={[
                { name: 'Service Areas', href: '/service-areas' },
                { name: pageEn.name, href: url },
              ]}
              light
              className="mb-6"
            />
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-800 uppercase tracking-widest text-white/60 mb-3">
                <Icon name="MapPinIcon" size={14} variant="solid" />
                {pageEn.district === pageEn.name ? page.name : t(locale, '{name} District', { name: _(pageEn.district) })}, {_(pageEn.state)}
              </span>
              <h1 className="text-3xl md:text-5xl font-800 text-white mb-5 leading-tight">{page.h1}</h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">{page.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  {_("Request a Quote")}
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
        <section className="bg-card border-b border-border" aria-label={_("Key facts")}>
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
        <section className="py-16 bg-background" aria-label={t(locale, 'Services in {name}', { name: page.name })}>
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
                <h2 className="text-xs font-800 uppercase tracking-widest text-muted-foreground mb-4">{_("Areas we cover")}</h2>
                <p className="text-sm text-foreground leading-relaxed">{page.localities.join(' · ')}</p>
              </div>
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h2 className="text-sm font-800 mb-2">{_("Talk to our engineers")}</h2>
                <p className="text-xs text-primary-foreground/65 mb-4 leading-relaxed">
                  {_("Offices in Aralvaimozhi and Marthandam, Kanyakumari District. Engineering since 1999.")}
                </p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+919443282312" className="text-sm font-700 hover:underline">📞 +91 94432 82312</a>
                  <a href="tel:+919443692711" className="text-sm font-700 hover:underline">📞 +91 94436 92711</a>
                  <a href="https://wa.me/919443282312" className="text-sm font-700 hover:underline">{_("💬 WhatsApp")}</a>
                  <a href="mailto:henelkkla@gmail.com" className="text-sm font-700 hover:underline">{_("✉ henelkkla@gmail.com")}</a>
                </div>
                <Link href="/contact" className="btn-primary w-full justify-center text-xs mt-5">
                  {_("Request a Quote")}
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Services in this location */}
        <section className="py-16 bg-card border-t border-border" aria-label={t(locale, 'Popular services in {name}', { name: page.name })}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="section-label">{t(locale, 'Services in {name}', { name: page.name })}</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">{t(locale, 'What we do for clients in {name}', { name: page.name })}</h2>
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
                      {t(locale, '{service} in {name}', { service: s.navLabel, name: page.name })}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">{s.intro}</p>
                    <span className="mt-auto text-xs font-700 inline-flex items-center gap-1" style={{ color: DIVISION_COLOR[s.division] }}>
                      {_("Learn more")}
                      <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FAQSection locale={locale}
          heading={t(locale, '{name} — FAQs', { name: page.name })}
          subheading={t(locale, 'Common questions from clients in and around {name}.', { name: page.name })}
          items={pageEn.faqs}
          className="bg-background border-t border-border"
        />

        {/* Nearby areas */}
        <section className="py-14 bg-card border-t border-border" aria-label={_("Nearby service areas")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-800 text-foreground mb-6 text-center">{_("Nearby service areas")}</h2>
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
                {_("All of India")}
                <Icon name="ArrowRightIcon" size={14} variant="outline" />
              </Link>
            </div>
          </div>
        </section>

        <HomeCTA locale={locale} />
      </main>
      <Footer locale={locale} />

      <JsonLd
        data={[
          serviceSchema({
            name: t(locale, 'Lightning Protection, Earthing, Solar & Windmill Services in {name}', { name: page.name }),
            serviceType: 'Lightning Protection, Earthing, Solar and Windmill Maintenance Services',
            description: page.metaDescription,
            url: localizePath(url, locale),
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
              ...pageEn.localities
                .filter((l) => l !== page.district)
                .map((l) => ({ '@type': 'Place', name: `${l}, ${page.state}` })),
            ],
          }),
          webPageSchema({
            path: url,
            locale,
            name: page.h1,
            description: page.metaDescription,
            image: page.heroImage,
            about: pageEn.keywords.slice(0, 6),
          }),
        ]}
      />
    </>
  );
}
