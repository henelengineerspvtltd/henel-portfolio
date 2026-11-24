import React from 'react';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/app/components/ScrollReveal';
import type { Locale } from '@/i18n/config';
import { t, tr } from '@/i18n/translate';

const services = [
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

export default function WindmillServices({ locale = 'en' }: { locale?: Locale }) {
  const _ = (text: string) => t(locale, text);
  return (
    <section className="py-20 bg-card border-t border-border" aria-label={_("Windmill services")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-14 text-center">
          <span className="section-label-green">{_("Our Services")}</span>
          <h2 className="text-section-heading font-800 text-foreground mt-2">
            {_("Complete Wind Turbine Maintenance Solutions")}
          </h2>
          <p className="text-base text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
            {_("From routine maintenance to major component repair and emergency breakdown support, Henel Engineers provides comprehensive services designed to minimize downtime and maintain reliable WTG performance.")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-border rounded-xl overflow-hidden">
          {tr(services, locale).map((s, i) => (
            <ScrollReveal
              key={s.title}
              delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
              className={`p-8 bg-background group hover:bg-card transition-colors ${
                i < tr(services, locale).length - (tr(services, locale).length % 3 || 3) ? 'border-b border-border' : ''
              } ${i % 3 !== 2 ? 'sm:border-r border-border' : ''}`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(45,122,45,0.1)' }}
              >
                <Icon
                  name={s.icon as 'CogIcon'}
                  size={22}
                  variant="outline"
                  style={{ color: '#2D7A2D' }}
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
