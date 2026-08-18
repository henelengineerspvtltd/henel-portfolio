import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from './ScrollReveal';

export default function HomeCTA() {
  return (
    <section className="py-20 bg-primary" aria-label="Call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span
            className="inline-block text-xs font-800 uppercase tracking-widest mb-4"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Get in Touch
          </span>
          <h2 className="text-section-heading font-800 text-primary-foreground mb-4">
            Ready to Protect Your Assets?
          </h2>
          <p className="text-base text-primary-foreground/65 leading-relaxed max-w-xl mx-auto mb-10">
            Whether you need a complete lightning protection system or professional windmill maintenance, our team is ready to discuss your requirement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              <Icon name="EnvelopeIcon" size={18} variant="outline" />
              Request a Quote
            </Link>
            <a
              href="tel:+919443282312"
              className="btn-outline-dark"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
            >
              <Icon name="PhoneIcon" size={18} variant="solid" />
              +91 94432 82312
            </a>
            <a
              href="tel:+919443692711"
              className="btn-outline-dark"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
            >
              <Icon name="PhoneIcon" size={18} variant="solid" />
              +91 94436 92711
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}