import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from './ScrollReveal';

export default function ServicePathways() {
  return (
    <section className="py-20 bg-background" id="services" aria-label="Our service areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="section-label">What We Do</span>
          <h2 className="text-section-heading font-800 text-foreground mt-2">
            Two Engineering Specialisations
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
            Henel Engineers operates two focused service divisions — each backed by deep technical expertise and long-standing field experience.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lightning Protection Card */}
          <ScrollReveal delay={1}>
            <Link href="/lightning-protection" className="block group" aria-label="Explore Lightning Protection solutions">
              <div className="relative overflow-hidden rounded-xl bg-card border border-border card-hover h-full min-h-[400px]">
                <div className="absolute inset-0 z-0">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1920e9fcd-1766500911885.png"
                    alt="Lightning protection system on industrial building rooftop, steel grounding rods against overcast sky, dark metallic industrial environment"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/10" />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-sm text-xs font-800 uppercase tracking-widest mb-4"
                      style={{ backgroundColor: '#CC0000', color: '#FFFFFF' }}>
                      
                      Lightning Protection
                    </span>
                  </div>
                  <h3 className="text-card-heading font-800 text-white mb-3 leading-snug">
                    ESE Arresters, Earthing &amp; Complete LPS Solutions
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    Supply, design, and installation of complete lightning protection systems for industrial, commercial, and infrastructure projects. Authorised supplier of TOPBAS products from Turkey.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-700 text-white">
                    Explore Lightning Protection
                    <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Wind Energy Card */}
          <ScrollReveal delay={2}>
            <Link href="/windmill" className="block group" aria-label="Explore Wind Energy solutions">
              <div className="relative overflow-hidden rounded-xl bg-card border border-border card-hover h-full min-h-[400px]">
                <div className="absolute inset-0 z-0">
                  <AppImage
                    src="https://images.unsplash.com/photo-1705079509121-f92c52573b31"
                    alt="Aerial view of large wind farm with dozens of wind turbines over green hills, bright daylight, expansive blue sky"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/10" />
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-sm text-xs font-800 uppercase tracking-widest mb-4"
                      style={{ backgroundColor: '#2D7A2D', color: '#FFFFFF' }}>
                      
                      Wind Energy
                    </span>
                  </div>
                  <h3 className="text-card-heading font-800 text-white mb-3 leading-snug">
                    Windmill Operation, Maintenance &amp; Technical Services
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    Professional windmill O&amp;M services delivered by experienced engineers in Tamil Nadu&apos;s wind-rich Kanyakumari region and beyond.
                  </p>
                  <div className="flex items-center gap-2 text-sm font-700 text-white">
                    Explore Wind Energy
                    <Icon name="ArrowRightIcon" size={16} variant="outline" className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}