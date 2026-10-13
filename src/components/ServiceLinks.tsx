import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import type { LandingPage } from '@/lib/landing-pages';

interface ServiceLinksProps {
  heading: string;
  pages: LandingPage[];
  color: string;
  className?: string;
}

/** Compact grid of links to the detailed service pages. */
export default function ServiceLinks({ heading, pages, color, className = '' }: ServiceLinksProps) {
  return (
    <section className={`py-14 bg-background border-t border-border ${className}`} aria-label={heading}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-800 text-foreground mb-6 text-center">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pages.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group flex items-center justify-between gap-3 bg-card border border-border rounded-lg px-5 py-4 hover:border-foreground/30 transition-colors"
            >
              <span className="text-sm font-700 text-foreground">{p.h1}</span>
              <Icon
                name="ArrowRightIcon"
                size={16}
                variant="outline"
                className="flex-shrink-0 group-hover:translate-x-1 transition-transform"
                style={{ color }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
