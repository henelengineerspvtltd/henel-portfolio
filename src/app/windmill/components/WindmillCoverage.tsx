import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/app/components/ScrollReveal';

const points = [
  { icon: 'MapPinIcon', label: 'Wide Coverage Across Regions' },
  { icon: 'UsersIcon', label: 'Experienced Field Teams' },
  { icon: 'BoltIcon', label: 'Quick Response & Support' },
  { icon: 'ClockIcon', label: 'Minimized Downtime' },
];

export default function WindmillCoverage() {
  return (
    <section className="py-20 bg-background" aria-label="Service coverage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-xl aspect-square bg-card border border-border">
              <AppImage
                src="/assets/images/windmill/tn-karnataka-coverage-map.png"
                alt="Map of Tamil Nadu and Karnataka highlighting Henel Engineers' service coverage regions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <span className="section-label-green">Our Coverage</span>
            <h2 className="text-section-heading font-800 text-foreground mt-2 mb-5">
              Service Across Tamil Nadu &amp; Karnataka
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              We provide WTG maintenance and breakdown services across Tamil Nadu and Karnataka,
              supported by experienced technical personnel and the resources required to respond
              quickly and minimize machine downtime.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {points.map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(45,122,45,0.1)' }}
                  >
                    <Icon name={p.icon as 'MapPinIcon'} size={18} variant="outline" style={{ color: '#2D7A2D' }} />
                  </div>
                  <span className="text-xs font-700 text-foreground">{p.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
