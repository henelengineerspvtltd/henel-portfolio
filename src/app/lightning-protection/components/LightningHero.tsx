import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function LightningHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center overflow-hidden pt-20"
      aria-label="Lightning protection hero">
      
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/assets/images/lightning-protection/hero-storm.jpg"
          alt="Lightning storm over a city with a lightning arrester installed on a rooftop, multiple lightning strikes visible in the sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#CC0000' }}>
              
              <Icon name="BoltIcon" size={18} variant="solid" className="text-white" />
            </div>
            <span className="text-xs font-800 uppercase tracking-widest text-white/60">
              Lightning Protection Division
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-800 text-white mb-4 leading-tight">
            Lightning Protection & Lightning Arrester Services in TamilNadu
          </h1>
          <p className="text-lg text-white/75 leading-relaxed mb-8">
            Henel Engineers supplies and installs comprehensive lightning protection systems — from ESE air terminals to full earthing networks — for industrial, commercial, and infrastructure projects across Tamil Nadu.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Quote
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </Link>
            <a href="tel:+919443282312" className="btn-outline-dark" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFFFFF' }}>
              <Icon name="PhoneIcon" size={16} variant="solid" />
              +91 94432 82312
            </a>
            <a href="tel:+919443692711" className="btn-outline-dark" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFFFFF' }}>
              <Icon name="PhoneIcon" size={16} variant="solid" />
              +91 94436 92711
            </a>
          </div>
        </div>
      </div>
    </section>);

}