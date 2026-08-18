import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import HenelLogo from '@/components/HenelLogo';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Henel Engineers hero">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1598803040994-834a13691764"
          alt="Wind turbines at golden hour in a vast wind farm, aerial view with dramatic warm sky and long shadows across green fields"
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
                Est. 1999 · Kanyakumari, Tamil Nadu
              </span>
            </div>
          </div>

         {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-800 text-white tracking-tight mb-4 leading-tight">
  Lightning Protection
  <br />
  <span className="text-white/80">& Windmill Services</span>
</h1>

{/* Subheading */}
<p className="text-xl sm:text-2xl font-500 text-white/80 mb-6 leading-snug">
  ESE Lightning Arresters, Earthing, Surge Protection & Wind Turbine Maintenance
</p>
          {/* Body */}
          <p className="text-base sm:text-lg text-white/65 leading-relaxed mb-10 max-w-2xl">
            For over 25 years, Henel Engineers has delivered reliable engineering services across Tamil Nadu and South India — specialising in complete lightning protection systems and professional windmill operation &amp; maintenance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/lightning-protection" className="btn-primary">
              <Icon name="BoltIcon" size={18} variant="solid" />
              Lightning Protection
            </Link>
            <Link href="/windmill" className="btn-green">
              <Icon name="ArrowPathIcon" size={18} variant="outline" />
              Wind Energy
            </Link>
            <Link href="/contact" className="btn-outline-dark" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#FFFFFF' }}>
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs font-700 uppercase tracking-widest text-white">Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>);

}