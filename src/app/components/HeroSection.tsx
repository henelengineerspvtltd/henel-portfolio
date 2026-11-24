import React from 'react';
import Link from '@/components/LocaleLink';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import HenelLogo from '@/components/HenelLogo';
import type { Locale } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';

export default function HeroSection({ locale = 'en' }: { locale?: Locale }) {
  const _ = (text: string) => t(locale, text);
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label={_('Henel Engineers hero')}>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/stock/wind-turbines-golden-hour.webp"
          alt={_('Wind turbines at golden hour in a large wind farm, aerial view')}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center" />
        
        {/* Scrim — dark left, lighter right */}
        <div className="absolute inset-0 hero-scrim" />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Logo + Label */}
          <div className="flex items-center gap-4 mb-8">
            <HenelLogo size={64} />
            <div>
              <span className="section-label" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                {_('Est. 1999 · Kanyakumari, Tamil Nadu')}
              </span>
            </div>
          </div>

         {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-800 text-white tracking-tight mb-4 leading-tight">
  {_('Lightning Protection')}
  <br />
  <span className="text-white/80">{_('& Windmill Services')}</span>
</h1>

{/* Subheading */}
<p className="text-xl sm:text-2xl font-500 text-white/80 mb-6 leading-snug">
  {_('ESE Lightning Arresters, Earthing, Surge Protection & Wind Turbine Maintenance')}
</p>
          {/* Body */}
          <p className="text-base sm:text-lg text-white/65 leading-relaxed mb-10 max-w-2xl">
            {_('For over 25 years, Henel Engineers has delivered reliable engineering services across India — specialising in complete lightning protection systems and professional windmill operation & maintenance.')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/lightning-protection" className="btn-primary">
              <Icon name="BoltIcon" size={18} variant="solid" />
              {_('Lightning Protection')}
            </Link>
            <Link href="/windmill" className="btn-green">
              <Icon name="ArrowPathIcon" size={18} variant="outline" />
              {_('Wind Energy')}
            </Link>
            <Link href="/contact" className="btn-outline-dark" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#FFFFFF' }}>
              {_('Request a Quote')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-700 uppercase tracking-widest text-white">{_('Scroll')}</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>);

}