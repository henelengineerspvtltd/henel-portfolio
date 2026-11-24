import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { customerReviews, REVIEW_PROFILES, type CustomerReview } from '@/lib/reviews';
import type { Locale } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';

function Stars({ locale }: { locale: Locale }) {
  return (
    <span className="flex gap-0.5" aria-label={t(locale, '5 out of 5 stars')} role="img">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="StarIcon" size={16} variant="solid" style={{ color: '#F5A623' }} />
      ))}
    </span>
  );
}

function ReviewCard({ review, locale }: { review: CustomerReview; locale: Locale }) {
  return (
    <figure className="review-card w-[280px] sm:w-[320px] flex-shrink-0 bg-background border border-border rounded-xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <Stars locale={locale} />
        <span className="text-[11px] font-700 uppercase tracking-wide text-muted-foreground">Google</span>
      </div>
      <blockquote className="text-sm text-foreground leading-relaxed flex-1">“{review.text}”</blockquote>
      <figcaption className="mt-4 pt-3 border-t border-border">
        <span className="block text-sm font-700 text-foreground">{review.name}</span>
        <span className="block text-xs text-muted-foreground mt-0.5">
          {t(locale, REVIEW_PROFILES[review.source].label)} · {review.date}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Home page strip of real Google reviews, scrolling left to right.
 * Pure CSS: pauses on hover or keyboard focus and stays still (scrollable)
 * for visitors who prefer reduced motion.
 */
export default function GoogleReviews({ locale = 'en' }: { locale?: Locale }) {
  const _ = (text: string) => t(locale, text);
  if (customerReviews.length === 0) return null;

  return (
    <section className="py-16 bg-card border-t border-border overflow-hidden" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="section-label">{_('Customer Reviews')}</span>
        <h2 id="reviews-heading" className="text-section-heading font-800 text-foreground mt-2">
          {_('What Our Customers Say')}
        </h2>
        <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
          {_(locale === 'en' ? 'Reviews from our Google Business Profiles, shown word for word.' : 'Reviews from our Google Business Profiles, shown word for word in the language they were written in.')}
        </p>
      </div>

      <div className="reviews-marquee" tabIndex={0} aria-label={_('Customer reviews. Hover or focus to pause.')}>
        <div className="reviews-track flex gap-5 w-max px-4">
          {customerReviews.map((r) => (
            <ReviewCard key={r.name} review={r} locale={locale} />
          ))}
          {/* Second copy makes the loop seamless; hidden from screen readers. */}
          <div className="reviews-duplicate flex gap-5" aria-hidden="true">
            {customerReviews.map((r) => (
              <ReviewCard key={`dup-${r.name}`} review={r} locale={locale} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-wrap gap-3 justify-center">
        {(Object.keys(REVIEW_PROFILES) as (keyof typeof REVIEW_PROFILES)[]).map((k) => (
          <a
            key={k}
            href={REVIEW_PROFILES[k].href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark inline-flex text-sm"
          >
            {_(REVIEW_PROFILES[k].button)}
            <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
          </a>
        ))}
      </div>
    </section>
  );
}
