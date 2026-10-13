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
import { getProduct, products, productHref } from '@/lib/products';
import { getLandingPage } from '@/lib/landing-pages';
import { webPageSchema } from '@/lib/structured-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const url = productHref(product.slug);
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} | Henel Engineers`,
      description: product.metaDescription,
      url,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Henel Engineers`,
      description: product.metaDescription,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const service = getLandingPage(product.servicePage);
  const related = product.related.map(getProduct).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const href = productHref(product.slug);

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-16 bg-background" aria-label={product.name}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Lightning Protection', href: '/lightning-protection' },
                { name: product.name, href },
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
                    Request a Quote
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

                {/* Typical uses + installation service (in this column so the image stays alongside) */}
                <div className="mt-12 pt-10 border-t border-border">
                  <h2 className="text-xl font-800 text-foreground mb-5">Typical applications</h2>
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
                    <h2 className="text-xl font-800 text-foreground mb-5">Supply &amp; installation</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      Henel Engineers supplies this product and installs it as part of a complete lightning protection and
                      earthing system across Tamil Nadu — from site assessment and design to installation.
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

        <FAQSection heading={`${product.name} — FAQs`} items={product.faqs} />

        {/* Related products */}
        <section className="py-16 bg-card border-t border-border" aria-label="Related products">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-section-heading font-800 text-foreground mb-8 text-center">Related products</h2>
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
                      View details
                      <Icon name="ArrowRightIcon" size={14} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <HomeCTA />
      </main>
      <Footer />

      {/* No Product schema on purpose: Google requires price/reviews for Product
          rich results, and the site does not publish prices. */}
      <JsonLd
        data={webPageSchema({
          path: href,
          name: product.name,
          description: product.metaDescription,
          image: product.image,
          about: product.keywords.slice(0, 4),
        })}
      />
    </>
  );
}
