import React from 'react';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/app/components/ScrollReveal';

const services = [
  {
    icon: 'BoltIcon',
    title: 'ESE Lightning Arresters / Air Terminals',
    desc: 'Supply and installation of Early Streamer Emission (ESE) lightning air terminals providing wider protection radii for industrial and commercial structures.',
  },
  {
    icon: 'ShieldExclamationIcon',
    title: 'Surge Protection',
    desc: 'Surge protection devices (SPDs) for electrical panels, data systems, and sensitive equipment to prevent damage from transient overvoltages.',
  },
  {
    icon: 'ArrowDownCircleIcon',
    title: 'Earthing Solutions',
    desc: 'Design and installation of earthing systems — including chemical earth electrodes and earth pits — to safely dissipate fault and lightning currents.',
  },
  {
    icon: 'DocumentTextIcon',
    title: 'LPS Design & Engineering',
    desc: 'Site-specific lightning protection system design in accordance with applicable standards, including risk assessment and zone-of-protection calculations.',
  },
  {
    icon: 'WrenchScrewdriverIcon',
    title: 'Supply & Installation',
    desc: 'End-to-end supply and professional installation of all lightning protection components — conductors, clamps, test joints, and accessories.',
  },
  {
    icon: 'BuildingOffice2Icon',
    title: 'Industrial & Building Protection',
    desc: 'Tailored lightning protection for factories, warehouses, commercial buildings, communication towers, and infrastructure facilities.',
  },
];

export default function LightningServices() {
  return (
    <section className="py-20 bg-background" aria-label="Lightning protection services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-14">
          <span className="section-label">Our Services</span>
          <h2 className="text-section-heading font-800 text-foreground mt-2">
            Lightning Protection Services
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            We offer a complete range of lightning protection and earthing services — from initial site assessment and system design through to supply, installation, and ongoing maintenance.
          </p>
        </ScrollReveal>

        {/* Feature grid — border-separated, Template 2 pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-border rounded-xl overflow-hidden">
          {services.map((s, i) => (
            <ScrollReveal
              key={s.title}
              delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
              className={`p-8 bg-card group hover:bg-background transition-colors ${
                i < services.length - (services.length % 3 || 3)
                  ? 'border-b border-border' :''
              } ${i % 3 !== 2 ? 'sm:border-r border-border' : ''}`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}
              >
                <Icon
                  name={s.icon as 'BoltIcon'}
                  size={22}
                  variant="outline"
                  style={{ color: '#CC0000' }}
                />
              </div>
              <div className="feature-border-left">
                <h3 className="text-sm font-800 text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}