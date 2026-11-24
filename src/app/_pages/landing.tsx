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
import WindmillFinalCTA from '@/app/(en)/windmill/components/WindmillFinalCTA';
import { getLandingPage, landingPages, type Division } from '@/lib/landing-pages';
import { serviceSchema, webPageSchema } from '@/lib/structured-data';
import { withIndiaKeywords } from '@/lib/keywords';
import { locationPages, locationHref } from '@/lib/locations';
import type { Locale } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';
import { withNativeKeywords } from '@/i18n/keywords';
import { alternatesFor, localizePath, OG_LOCALE } from '@/i18n/config';

export function landingStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export function landingMetadata(slug: string, locale: Locale): Metadata {
  const pageEn = getLandingPage(slug);
  if (!pageEn) return {};
  const page = tr(pageEn, locale);
  const alternates = alternatesFor(`/${page.slug}`, locale);
  return withNativeKeywords({
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: withIndiaKeywords(pageEn.keywords),
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
  }, `/${slug}`, locale);
}

const THEME: Record<Division, { color: string; tint: string; label: string; btn: string; parent: { name: string; href: string } }> = {
  lightning: {
    color: '#CC0000',
    tint: 'rgba(204,0,0,0.1)',
    label: 'section-label',
    btn: 'btn-primary',
    parent: { name: 'Lightning Protection', href: '/lightning-protection' },
  },
  wind: {
    color: '#2D7A2D',
    tint: 'rgba(45,122,45,0.1)',
    label: 'section-label-green',
    btn: 'btn-green',
    parent: { name: 'Windmill Maintenance', href: '/windmill' },
  },
  solar: {
    color: '#B45309',
    tint: 'rgba(180,83,9,0.1)',
    label: 'section-label-solar',
    btn: 'btn-solar',
    parent: { name: 'Solar Energy', href: '/solar-panel-installation' },
  },
  renewable: {
    color: '#2D7A2D',
    tint: 'rgba(45,122,45,0.1)',
    label: 'section-label-green',
    btn: 'btn-green',
    parent: { name: 'Products & Services', href: '/products-and-services' },
  },
};

export default function LandingPage({ slug, locale }: { slug: string; locale: Locale }) {
  const _ = (text: string) => t(locale, text);
  const pageEn = getLandingPage(slug);
  if (!pageEn) notFound();
  const page = tr(pageEn, locale);

  const theme = THEME[page.division];
  const related = tr(pageEn.related.map(getLandingPage).filter((p): p is NonNullable<typeof p> => Boolean(p)), locale);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-20" aria-label={t(locale, '{name} hero', { name: page.navLabel })}>
          <div className="absolute inset-0 z-0">
            <AppImage src={page.heroImage} alt={page.heroAlt} fill priority sizes="100vw" className="object-cover object-center" />
            {/* Inline colours: `primary` is a CSS variable, so Tailwind opacity modifiers (from-primary/90) don't generate. */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(10,22,40,0.94) 0%, rgba(10,22,40,0.82) 55%, rgba(10,22,40,0.45) 100%)',
              }}
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
            <Breadcrumbs locale={locale} items={[theme.parent, { name: pageEn.navLabel, href: `/${page.slug}` }]} light className="mb-6" />
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-800 uppercase tracking-widest text-white/60 mb-3">{page.eyebrow}</span>
              <h1 className="text-3xl md:text-5xl font-800 text-white mb-5 leading-tight">{page.h1}</h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">{page.intro}</p>
              {page.alsoKnownAs && (
                <p className="text-xs text-white/60 -mt-4 mb-8">
                  {_("Also known as:")}{" "}{page.alsoKnownAs.join(' · ')}
                </p>
              )}
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className={theme.btn}>
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
                  <p className="text-xl md:text-2xl font-800 leading-none" style={{ color: theme.color }}>
                    {h.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-snug">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-16 bg-background" aria-label={t(locale, 'About {name}', { name: page.navLabel })}>
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
                          <Icon name="CheckCircleIcon" size={18} variant="solid" className="flex-shrink-0 mt-0.5" style={{ color: theme.color }} />
                          <span className="text-sm text-foreground leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </ScrollReveal>
              ))}
            </article>

            <aside className="flex flex-col gap-6 lg:sticky lg:top-28 self-start w-full">
              {page.productImage && (
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted border border-border">
                  <AppImage
                    src={page.productImage.src}
                    alt={page.productImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-6"
                  />
                </div>
              )}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xs font-800 uppercase tracking-widest text-muted-foreground mb-4">{_("What we offer")}</h2>
                <ul className="space-y-2.5">
                  {page.offers.map((o) => (
                    <li key={o} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: theme.color }} />
                      <span className="text-sm text-foreground">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h2 className="text-sm font-800 mb-2">{_("Talk to our engineers")}</h2>
                <p className="text-xs text-primary-foreground/65 mb-4 leading-relaxed">
                  {t(locale, 'Serving {areas} from Kanyakumari District since 1999.', { areas: page.areaServed.map(_).join(' & ') })}
                </p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+919443282312" className="text-sm font-700 hover:underline">📞 +91 94432 82312</a>
                  <a href="tel:+919443692711" className="text-sm font-700 hover:underline">📞 +91 94436 92711</a>
                  <a href="mailto:henelkkla@gmail.com" className="text-sm font-700 hover:underline">✉ henelkkla@gmail.com</a>
                </div>
                <Link href="/contact" className={`${theme.btn} w-full justify-center text-xs mt-5`}>
                  {_("Request a Quote")}
                </Link>
              </div>
              <nav aria-label={_("Local service areas")} className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xs font-800 uppercase tracking-widest text-muted-foreground mb-4">{_("Near our offices")}</h2>
                <ul className="flex flex-wrap gap-x-3 gap-y-2">
                  {locationPages.map((l) => (
                    <li key={l.slug}>
                      <Link href={locationHref(l.slug)} className="text-sm font-600 text-foreground hover:underline">
                        {_(l.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </section>

        <FAQSection locale={locale}
          heading={t(locale, '{name} — FAQs', { name: page.navLabel })}
          subheading="Answers to the questions customers ask us most."
          items={pageEn.faqs}
          className="bg-card border-t border-border"
        />

        {/* Related services */}
        <section className="py-16 bg-background border-t border-border" aria-label={_("Related services")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className={theme.label}>{_("Related Services")}</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2">{_("You may also need")}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((r) => {
                const rt = THEME[r.division];
                return (
                  <Link
                    key={r.slug}
                    href={`/${r.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col"
                  >
                    <div className="relative aspect-[16/10] bg-muted">
                      <AppImage src={r.heroImage} alt={r.heroAlt} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-sm font-800 text-foreground mb-2">{r.navLabel}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">{r.intro}</p>
                      <span className="mt-auto text-xs font-700 inline-flex items-center gap-1" style={{ color: rt.color }}>
                        {_("Learn more")}
                        <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <Link href="/products-and-services" className="btn-outline-dark inline-flex">
                {_("View All Products & Services")}
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </Link>
            </div>
          </div>
        </section>

        {page.division === 'wind' ? <WindmillFinalCTA locale={locale} /> : <HomeCTA locale={locale} />}
      </main>
      <Footer locale={locale} />

      <JsonLd
        data={[
          serviceSchema({
            name: page.navLabel,
            serviceType: page.serviceType,
            description: page.metaDescription,
            areaServed: page.areaServed,
            url: localizePath(`/${page.slug}`, locale),
            offers: page.offers,
            image: page.heroImage,
          }),
          webPageSchema({
            path: `/${page.slug}`,
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
