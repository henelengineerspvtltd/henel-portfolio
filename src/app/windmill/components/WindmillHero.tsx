import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function WindmillHero() {
  return (
    <section
      className="relative min-h-[55vh] flex items-center overflow-hidden pt-20"
      aria-label="Windmill operation and maintenance hero">

      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/windmill/hero-green-hills.jpg"
          alt="Wind turbines on green rolling hills under a blue sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center" />

        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-800 text-white mb-4 leading-tight">
            Windmill Operation &amp; Maintenance Services
          </h1>
          <p className="text-base text-white/80 leading-relaxed mb-8 max-w-xl">
            With over 25 years of industry experience, Henel Engineers provides reliable
            operation, maintenance, and technical support for wind turbines across Tamil Nadu
            and its neighboring regions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-green">
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
        </div>
      </div>
    </section>
  );
}
