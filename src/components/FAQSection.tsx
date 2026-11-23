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
  /** Anchor id for the section (also used by the WebPage `speakable` selector). */
  id?: string;
  /** Section label shown above the heading. */
  label?: string;
  /** Emit FAQPage JSON-LD. Turn off when a page combines several FAQ sections into one schema. */
  includeSchema?: boolean;
  /** Optional content rendered under the questions (e.g. a link to the full FAQ page). */
  footer?: React.ReactNode;
  /**
   * Show only this many questions, with a "View more" toggle for the rest.
   * The hidden questions stay in the HTML and the FAQPage schema.
   */
  initialCount?: number;
}

function FaqItemRow({ item, index }: { item: FaqItem; index: number }) {
  return (
    <ScrollReveal delay={(index % 4) as 0 | 1 | 2 | 3 | 4}>
      <details className="group bg-card border border-border rounded-xl px-6 py-2 open:pb-5">
        <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none">
          <h3 className="text-sm font-700 text-foreground">{item.question}</h3>
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
  );
}

export default function FAQSection({
  heading = 'Frequently Asked Questions',
  subheading,
  items,
  className = '',
  id = 'faq',
  label = 'FAQs',
  includeSchema = true,
  footer,
  initialCount,
}: FAQSectionProps) {
  const visible = initialCount && initialCount < items.length ? items.slice(0, initialCount) : items;
  const more = items.slice(visible.length);

  return (
    <section id={id} className={`py-20 scroll-mt-24 ${/\bbg-/.test(className) ? '' : 'bg-background'} ${className}`} aria-label={heading}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="section-label">{label}</span>
          <h2 className="text-section-heading font-800 text-foreground mt-2">{heading}</h2>
          {subheading && (
            <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
              {subheading}
            </p>
          )}
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {visible.map((item, i) => (
            <FaqItemRow key={item.question} item={item} index={i} />
          ))}
        </div>

        {more.length > 0 && (
          <details className="group/more mt-3">
            <summary className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-700 text-foreground cursor-pointer list-none hover:bg-background transition-colors">
              <span className="group-open/more:hidden">
                View {more.length} more question{more.length === 1 ? '' : 's'}
              </span>
              <span className="hidden group-open/more:inline">Show fewer questions</span>
              <Icon
                name="ChevronDownIcon"
                size={16}
                variant="outline"
                className="transition-transform duration-200 group-open/more:rotate-180"
              />
            </summary>
            <div className="flex flex-col gap-3 mt-3">
              {more.map((item, i) => (
                <FaqItemRow key={item.question} item={item} index={i} />
              ))}
            </div>
          </details>
        )}

        {footer && <div className="mt-10 text-center">{footer}</div>}
      </div>

      {includeSchema && <JsonLd data={faqPageSchema(items)} />}
    </section>
  );
}
