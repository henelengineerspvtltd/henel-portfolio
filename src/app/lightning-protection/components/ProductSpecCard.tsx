import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/app/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';
import { productSchema } from '@/lib/structured-data';

interface Spec {
  label: string;
  value: string;
}

interface ProductSpecCardProps {
  imageSrc: string;
  imageAlt: string;
  badge: string;
  productLine: string;
  tagline: string;
  specsHeading?: string;
  specsSubtitle: string;
  specs: Spec[];
  note?: string;
  className?: string;
  /** Optional short description used only for the Product JSON-LD (not shown in the UI). */
  schemaDescription?: string;
  /** Optional brand name for the Product JSON-LD, e.g. "TOPBAS". */
  schemaBrand?: string;
}

export default function ProductSpecCard({
  imageSrc,
  imageAlt,
  badge,
  productLine,
  tagline,
  specsHeading = 'Product Details',
  specsSubtitle,
  specs,
  note,
  className = '',
  schemaDescription,
  schemaBrand,
}: ProductSpecCardProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-start ${className}`}>
      {/* Product image */}
      <ScrollReveal delay={1} className="lg:col-span-2">
        <div className="relative overflow-hidden rounded-xl aspect-square bg-muted flex items-center justify-center">
          <AppImage
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-contain p-4" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <span
              className="inline-block px-3 py-1 rounded-sm text-xs font-800 uppercase tracking-widest mb-2"
              style={{ backgroundColor: '#CC0000', color: '#FFFFFF' }}>
              {badge}
            </span>
            <p className="text-white font-700 text-base">{productLine}</p>
            <p className="text-white/70 text-xs mt-1">{tagline}</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Specs table */}
      <ScrollReveal delay={2} className="lg:col-span-3">
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-muted/40">
            <h3 className="text-base font-800 text-foreground">{specsHeading}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{specsSubtitle}</p>
          </div>
          <div className="px-6 py-2">
            {specs?.map((spec) =>
              <div key={spec?.label} className="spec-row">
                <span className="text-xs font-700 uppercase tracking-wider text-muted-foreground w-2/5 flex-shrink-0">
                  {spec?.label}
                </span>
                <span className="text-sm font-600 text-foreground text-right">
                  {spec?.value}
                </span>
              </div>
            )}
          </div>
          {note && (
            <div className="px-6 py-4 border-t border-border bg-muted/20">
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                {note}
              </p>
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
      </ScrollReveal>

      <JsonLd
        data={productSchema({
          name: productLine,
          description: schemaDescription || `${productLine} — ${tagline}. ${specsSubtitle}.`,
          image: imageSrc,
          brand: schemaBrand,
          specs,
        })}
      />
    </div>
  );
}
