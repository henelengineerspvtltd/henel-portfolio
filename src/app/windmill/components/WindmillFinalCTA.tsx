import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/app/components/ScrollReveal';

export default function WindmillFinalCTA() {
  return (
    <section className="py-14" style={{ backgroundColor: '#123A22' }} aria-label="Windmill maintenance call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-800 text-white mb-2">
              Need Reliable Wind Turbine Maintenance?
            </h2>
            <p className="text-sm text-white/70">
              Partner with Henel Engineers for dependable WTG operation, maintenance and
              breakdown support.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center flex-shrink-0">
            <Link
              href="/contact"
              className="btn-primary"
              style={{ backgroundColor: '#FFFFFF', color: '#123A22' }}
            >
              Request a Quote
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
            <a
              href="tel:+919443282312"
              className="btn-outline-dark"
              style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFFFFF' }}
            >
              <Icon name="PhoneIcon" size={16} variant="solid" />
              +91 94432 82312
            </a>
            <a
              href="tel:+919443692711"
              className="btn-outline-dark"
              style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFFFFF' }}
            >
              <Icon name="PhoneIcon" size={16} variant="solid" />
              +91 94436 92711
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
