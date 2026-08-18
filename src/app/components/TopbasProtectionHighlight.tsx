import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from './ScrollReveal';

const lightningProducts = [
  {
    icon: 'BoltIcon',
    title: 'TOPBAS SIRIUS ESE Lightning Arrester',
    desc: 'Non-electronic ESE air terminal with up to 107 m protection radius, imported from Turkey.',
  },
  {
    icon: 'BoltIcon',
    title: 'UMBRAECO ESE Lightning Arrester',
    desc: 'Non-electronic ESE arrester, protection radius up to 51 m (Level IV), no battery required.',
  },
  {
    icon: 'ShieldExclamationIcon',
    title: 'Surge Protection Device (SPD)',
    desc: 'Type 1 + 2, three-phase surge protection for electrical panels and sensitive equipment.',
  },
  {
    icon: 'ArrowDownCircleIcon',
    title: 'Copper Bonded Earth Rod',
    desc: 'Earthing electrode available in 1 m, 2 m, and 3 m lengths, 17.2 mm diameter.',
  },
  {
    icon: 'ArrowDownCircleIcon',
    title: 'GI Earth Rod',
    desc: 'Class B GI pipe earth rod, 48 mm diameter, available in 1 m, 2 m, and 3 m lengths.',
  },
  {
    icon: 'BeakerIcon',
    title: 'CARBOMAXX Earthing Compound',
    desc: 'Powdered backfill compound for earthing pits, 25 kg bags, made in India.',
  },
  {
    icon: 'BoltIcon',
    title: 'Copper Bonded Conventional Lightning Arrester',
    desc: 'Copper conventional arrester rated 100 kA with 5-metre protection radius.',
  },
  {
    icon: 'ArchiveBoxIcon',
    title: 'Earth Pit Chamber Cover',
    desc: 'Polyplastic earthing pit cover, 6-inch size, for earth pit chambers.',
  },
];

const windmillServices = [
  {
    icon: 'CogIcon',
    title: 'Gearbox Repair & Overhaul',
    desc: 'Complete gearbox inspection, repair and overhaul with quick turnaround time.',
  },
  {
    icon: 'PaintBrushIcon',
    title: 'Blade Patching & Repair Works',
    desc: 'Blade patching, lightning damage repair and on-site blade restoration.',
  },
  {
    icon: 'BoltIcon',
    title: 'Transformer & Generator Rewinding & Bearing Replacement',
    desc: 'Generator and transformer rewinding, plus bearing replacement without dismantling wherever possible.',
  },
  {
    icon: 'CircleStackIcon',
    title: 'Sleeve Ring Replacement',
    desc: 'Sleeve ring replacement carried out as part of our maintenance services.',
  },
  {
    icon: 'BeakerIcon',
    title: 'Hydraulic Unit Servicing',
    desc: 'Hydraulic unit, pump, pitch cylinder and brake servicing to keep systems running safely.',
  },
  {
    icon: 'CpuChipIcon',
    title: 'PCB Servicing & Repair',
    desc: 'Diagnosis and repair of printed circuit boards used in wind turbine control systems. Standby PCB will be provided to reduce windmill downtime.',
  },
  {
    icon: 'ArrowUpCircleIcon',
    title: 'Windmill Erection & Installation Works',
    desc: 'End-to-end tower erection, nacelle, hub and component installation and commissioning.',
  },
  {
    icon: 'ArchiveBoxIcon',
    title: 'Supply of All Types of Windmill Spare Parts',
    desc: 'Sourcing and supply of spare parts like gearbox, generator, hydraulic and electrical systems.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Windmill Security Services',
    desc: 'On-site security services to protect turbine sites and equipment.',
  },
];

export default function TopbasProductHighlight() {
  return (
    <section className="py-20 bg-card border-t border-border" id="products" aria-label="Products and services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="section-label">What We Offer</span>
          <h2 className="text-section-heading font-800 text-foreground mt-2">
            Products &amp; Services
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
            Henel Engineers supplies and installs lightning protection and earthing products, and provides windmill operation, maintenance, and engineering services.
          </p>
        </ScrollReveal>

        {/* Lightning Protection & Earthing Products */}
        <ScrollReveal className="mb-8">
          <h3 className="text-lg font-800 text-foreground border-b border-border pb-3">
            Lightning Protection &amp; Earthing Products
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 border border-border rounded-xl overflow-hidden mb-16">
          {lightningProducts.map((p, i) => (
            <ScrollReveal
              key={p.title}
              delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
              className={`p-6 bg-background group hover:bg-card transition-colors flex gap-4 items-start ${
                i < lightningProducts.length - (lightningProducts.length % 2 || 2) ? 'border-b border-border' : ''
              } ${i % 2 === 0 ? 'sm:border-r border-border' : ''}`}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center"
                style={{ backgroundColor: 'rgba(204,0,0,0.1)' }}
              >
                <Icon
                  name={p.icon as 'BoltIcon'}
                  size={18}
                  variant="outline"
                  style={{ color: '#CC0000' }}
                />
              </div>
              <div>
                <p className="text-sm font-800 text-foreground">{p.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mb-8 flex justify-center">
          <Link href="/lightning-protection" className="btn-primary">
            View Full Lightning Protection Range
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </Link>
        </ScrollReveal>

        {/* Windmill & Wind Energy Services */}
        <ScrollReveal className="mb-8 mt-16">
          <h3 className="text-lg font-800 text-foreground border-b border-border pb-3">
            Windmill &amp; Wind Energy Services
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 border border-border rounded-xl overflow-hidden">
          {windmillServices.map((s, i) => (
            <ScrollReveal
              key={s.title}
              delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
              className={`p-6 bg-background group hover:bg-card transition-colors flex gap-4 items-start ${
                i < windmillServices.length - (windmillServices.length % 2 || 2) ? 'border-b border-border' : ''
              } ${i % 2 === 0 ? 'sm:border-r border-border' : ''}`}
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center"
                style={{ backgroundColor: 'rgba(45,122,45,0.1)' }}
              >
                <Icon
                  name={s.icon as 'WrenchScrewdriverIcon'}
                  size={18}
                  variant="outline"
                  style={{ color: '#2D7A2D' }}
                />
              </div>
              <div>
                <p className="text-sm font-800 text-foreground">{s.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 flex justify-center">
          <Link href="/windmill" className="btn-green">
            View Windmill Services
            <Icon name="ArrowRightIcon" size={16} variant="outline" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
