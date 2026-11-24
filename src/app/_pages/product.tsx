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
import { getProduct, products, productHref } from '@/lib/products';
import { getLandingPage } from '@/lib/landing-pages';
import { webPageSchema } from '@/lib/structured-data';
import { withIndiaKeywords } from '@/lib/keywords';
import { productDescriptions } from '@/lib/product-descriptions';
import type { Locale } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';
import { withNativeKeywords } from '@/i18n/keywords';
import { alternatesFor, OG_LOCALE } from '@/i18n/config';

export function productStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function productMetadata(slug: string, locale: Locale): Metadata {
  const productEn = getProduct(slug);
  if (!productEn) return {};
  const product = tr(productEn, locale);
  const alternates = alternatesFor(productHref(product.slug), locale);
  return withNativeKeywords({
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: withIndiaKeywords(productEn.keywords),
    alternates,
    openGraph: {
      title: `${product.name} | Henel Engineers`,
      description: product.metaDescription,
      url: alternates.canonical,
      locale: OG_LOCALE[locale],
      images: [{ url: product.image, alt: product.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Henel Engineers`,
      description: product.metaDescription,
      images: [product.image],
    },
  }, `/products/${slug}`, locale);
}

export default function ProductPage({ slug, locale }: { slug: string; locale: Locale }) {
  const _ = (text: string) => t(locale, text);
  const productEn = getProduct(slug);
  if (!productEn) notFound();
  const product = tr(productEn, locale);

  const serviceEn = getLandingPage(productEn.servicePage);
  const service = serviceEn && tr(serviceEn, locale);
  const related = tr(productEn.related.map(getProduct).filter((p): p is NonNullable<typeof p> => Boolean(p)), locale);
  const href = productHref(product.slug);
  const description = tr(productDescriptions[product.slug] ?? [], locale);

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-16 bg-background" aria-label={product.name}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs locale={locale}
              items={[
                { name: 'Lightning Protection', href: '/lightning-protection' },
                { name: productEn.name, href },
              ]}
              className="mb-8"
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              {/* Image stays in view while the specs scroll past (desktop). */}
              <ScrollReveal className="lg:col-span-2 lg:sticky lg:top-28 self-start">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted border border-border">
                  <AppImage
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-6"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1} className="lg:col-span-3">
                <span className="section-label">
                  {product.category}
                  {product.brand ? ` · ${product.brand}` : ''}
                </span>
                <h1 className="text-3xl md:text-4xl font-800 text-foreground mt-2 mb-4 leading-tight">{product.name}</h1>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">{product.summary}</p>

                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-border bg-muted/40">
                    <h2 className="text-base font-800 text-foreground">{product.specsTitle}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">{product.name}</p>
                  </div>
                  <div className="px-6 py-2">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="spec-row">
                        <span className="text-xs font-700 uppercase tracking-wider text-muted-foreground w-2/5 flex-shrink-0">
                          {spec.label}
                        </span>
                        <span className="text-sm font-600 text-foreground text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  {product.note && (
                    <div className="px-6 py-4 border-t border-border bg-muted/20">
                      <p className="text-xs text-muted-foreground italic leading-relaxed">{product.note}</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    {_("Request a Quote")}
                    <Icon name="ArrowRightIcon" size={16} variant="outline" />
                  </Link>
                  <a href="tel:+919443282312" className="contact-info-link">
                    <Icon name="PhoneIcon" size={16} variant="solid" style={{ color: '#CC0000' }} />
                    +91 94432 82312
                  </a>
                  <a href="tel:+919443692711" className="contact-info-link">
                    <Icon name="PhoneIcon" size={16} variant="solid" style={{ color: '#CC0000' }} />
                    +91 94436 92711
                  </a>
                </div>

                {description.length > 0 && (
                  <div className="mt-12 pt-10 border-t border-border">
                    <h2 className="text-xl font-800 text-foreground mb-5">{t(locale, 'About the {name}', { name: product.name })}</h2>
                    {description.map((p) => (
                      <p key={p.slice(0, 40)} className="text-base text-muted-foreground leading-relaxed mb-4">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {/* Typical uses + installation service (in this column so the image stays alongside) */}
                <div className="mt-12 pt-10 border-t border-border">
                  <h2 className="text-xl font-800 text-foreground mb-5">{_("Typical applications")}</h2>
                  <ul className="space-y-2.5">
                    {product.uses.map((u) => (
                      <li key={u} className="flex items-start gap-3">
                        <Icon name="CheckCircleIcon" size={18} variant="solid" className="flex-shrink-0 mt-0.5" style={{ color: '#CC0000' }} />
                        <span className="text-sm text-foreground">{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {service && (
                  <div className="mt-10 pt-10 border-t border-border">
                    <h2 className="text-xl font-800 text-foreground mb-5">{_("Supply & installation")}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {_("Henel Engineers supplies this product and installs it as part of a complete lightning protection and earthing system across India — from site assessment and design to installation.")}
                    </p>
                    <Link href={`/${service.slug}`} className="btn-outline-dark inline-flex">
                      {service.h1}
                      <Icon name="ArrowRightIcon" size={16} variant="outline" />
                    </Link>
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </section>

        <FAQSection locale={locale} heading={t(locale, '{name} — FAQs', { name: product.name })} items={productEn.faqs} />

        {/* Related products */}
        <section className="py-16 bg-card border-t border-border" aria-label={_("Related products")}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-section-heading font-800 text-foreground mb-8 text-center">{_("Related products")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={productHref(r.slug)}
                  className="group bg-background border border-border rounded-xl overflow-hidden card-hover flex flex-col"
                >
                  <div className="relative aspect-square bg-muted">
                    <AppImage src={r.image} alt={r.imageAlt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain p-6" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-700 uppercase tracking-wider text-muted-foreground mb-1">{r.category}</p>
                    <h3 className="text-sm font-800 text-foreground mb-3">{r.name}</h3>
                    <span className="text-xs font-700 inline-flex items-center gap-1" style={{ color: '#CC0000' }}>
                      {_("View details")}
                      <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <HomeCTA locale={locale} />
      </main>
      <Footer locale={locale} />

      {/* No Product schema on purpose: Google requires price/reviews for Product
          rich results, and the site does not publish prices. */}
      <JsonLd
        data={webPageSchema({
          path: href,
          locale,
          name: product.name,
          description: product.metaDescription,
          image: product.image,
          about: productEn.keywords.slice(0, 4),
        })}
      />
    </>
  );
}
