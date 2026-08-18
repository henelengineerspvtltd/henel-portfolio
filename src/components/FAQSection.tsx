import React from 'react';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/app/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';
import { faqPageSchema, type FaqItem } from '@/lib/structured-data';

interface FAQSectionProps {
  heading?: string;
  subheading?: string;
  items: FaqItem[];
  className?: string;
}

export default function FAQSection({
  heading = 'Frequently Asked Questions',
  subheading,
  items,
  className = '',
}: FAQSectionProps) {
  return (
    <section className={`py-20 bg-background ${className}`} aria-label={heading}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="section-label">FAQs</span>
          <h2 className="text-section-heading font-800 text-foreground mt-2">{heading}</h2>
          {subheading && (
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
              {subheading}
            </p>
          )}
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <ScrollReveal key={item.question} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <details className="group bg-card border border-border rounded-xl px-6 py-2 open:pb-5">
                <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none">
                  <span className="text-sm font-700 text-foreground">{item.question}</span>
                  <Icon
                    name="ChevronDownIcon"
                    size={18}
                    variant="outline"
                    className="flex-shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <JsonLd data={faqPageSchema(items)} />
    </section>
  );
}
