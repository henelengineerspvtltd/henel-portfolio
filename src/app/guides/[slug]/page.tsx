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
import HomeCTA from '@/app/components/HomeCTA';
import { guides, getGuide, guideHref } from '@/lib/guides';
import { articleSchema, webPageSchema } from '@/lib/structured-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const url = guideHref(g.slug);
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: `${g.metaTitle} | Henel Engineers`,
      description: g.metaDescription,
      url,
      publishedTime: g.datePublished,
      modifiedTime: g.dateModified,
      images: [{ url: g.image, alt: g.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${g.metaTitle} | Henel Engineers`,
      description: g.metaDescription,
      images: [g.image],
    },
  };
}

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default async function GuidePage({ params }: Params) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const others = guides.filter((o) => o.slug !== g.slug);

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 pb-12 md:pb-16" aria-label="Guide header">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Guides', href: '/guides' },
                { name: g.h1, href: guideHref(g.slug) },
              ]}
              light
              className="mb-6"
            />
            <span className="inline-block text-xs font-800 uppercase tracking-widest text-white/60 mb-3">{g.category} guide</span>
            <h1 className="text-3xl md:text-5xl font-800 text-white mb-5 leading-tight">{g.h1}</h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">{g.intro}</p>
            <p className="text-xs text-white/50 mt-6">
              By Henel Engineers Pvt. Ltd. · Updated <time dateTime={g.dateModified}>{formatDate(g.dateModified)}</time>
            </p>
          </div>
        </section>

        <article className="py-12 md:py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <aside className="bg-card border border-border rounded-xl p-6 mb-10" aria-label="Key points">
              <h2 className="text-base font-800 text-foreground mb-3">Key points</h2>
              <ul className="space-y-2">
                {g.keyPoints.map((k) => (
                  <li key={k} className="flex gap-2 text-sm text-foreground leading-relaxed">
                    <Icon name="CheckCircleIcon" size={18} variant="solid" className="flex-shrink-0 mt-0.5" style={{ color: '#2D7A2D' }} />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <figure className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10">
              <AppImage src={g.image} alt={g.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </figure>

            {g.sections.map((s) => (
              <section key={s.heading} className="mb-9">
                <h2 className="text-2xl font-800 text-foreground mb-3 leading-snug">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="text-base text-foreground/85 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="list-disc pl-5 space-y-2 text-base text-foreground/85 leading-relaxed">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <nav className="border-t border-border pt-8 mt-4" aria-label="Related services">
              <h2 className="text-lg font-800 text-foreground mb-4">Related services and products</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {g.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="group flex items-center justify-between gap-3 bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground hover:underline"
                    >
                      {r.title}
                      <Icon name="ArrowRightIcon" size={16} variant="outline" className="flex-shrink-0 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </article>

        <FAQSection heading="Questions about this topic" items={g.faqs} className="bg-card border-t border-border" />

        <section className="py-12 bg-background border-t border-border" aria-label="More guides">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-800 text-foreground mb-4">More guides</h2>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={guideHref(o.slug)} className="text-sm text-foreground hover:underline inline-flex items-center gap-2">
                    <Icon name="DocumentTextIcon" size={16} variant="outline" className="text-muted-foreground" />
                    {o.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <HomeCTA />
      </main>
      <Footer />

      <JsonLd
        data={[
          webPageSchema({ path: guideHref(g.slug), name: g.h1, description: g.metaDescription, image: g.image }),
          articleSchema({
            path: guideHref(g.slug),
            headline: g.h1,
            description: g.metaDescription,
            image: g.image,
            datePublished: g.datePublished,
            dateModified: g.dateModified,
            section: g.category,
          }),
        ]}
      />
    </>
  );
}
