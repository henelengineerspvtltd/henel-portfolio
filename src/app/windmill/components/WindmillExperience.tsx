import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/app/components/ScrollReveal';

const stats = [
  { icon: 'CalendarIcon', value: '25+', label: 'Years of Industry Experience' },
  { icon: 'DocumentCheckIcon', value: '30+', label: 'Active CMC Contracts' },
  { icon: 'turbine', value: '7+', label: 'WTG Makes Supported' },
  { icon: 'ClockIcon', value: '24x7', label: 'Breakdown Support' },
];

function StatIcon({ icon }: { icon: string }) {
  if (icon === 'turbine') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={{ color: '#2D7A2D' }}>
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        <path d="M12 12 L12 3.5 C14 3.5 15 5.5 14.3 7.3 Z" fill="currentColor" />
        <path d="M12 12 L19.5 15.5 C18.7 17.3 16.3 17.7 15.1 16 Z" fill="currentColor" />
        <path d="M12 12 L6 17.5 C4.7 16.1 5.1 13.7 7 13 Z" fill="currentColor" />
        <path d="M12 12 L12 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  return <Icon name={icon as 'CalendarIcon'} size={20} variant="outline" style={{ color: '#2D7A2D' }} />;
}

export default function WindmillExperience() {
  return (
    <section className="py-16 bg-background" aria-label="Windmill maintenance experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
          <ScrollReveal>
            <span className="section-label-green">Our Experience</span>
            <h2 className="text-section-heading font-800 text-foreground mt-2 mb-5">
              25+ Years of Experience in Wind Energy
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Henel Engineers is an experienced wind energy service provider specializing in
              Wind Turbine Generator (WTG) operation, maintenance, breakdown services and
              technical support.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              With more than 25 years of experience in the industry, our team brings together
              skilled mechanical, electrical and technical professionals supported by dedicated
              field manpower and service vehicles.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Today, we manage 30+ active Comprehensive Maintenance Contracts (CMC), supporting
              reliable wind turbine operation and timely maintenance across our service regions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-muted">
              <AppImage
                src="/assets/images/windmill/nacelle-erection-2.jpg"
                alt="Technician servicing a wind turbine hub and components on site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2}>
          <div className="bg-card border border-border rounded-xl grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="p-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(45,122,45,0.1)' }}
                >
                  <StatIcon icon={s.icon} />
                </div>
                <div>
                  <p className="text-lg font-800 text-foreground leading-none">{s.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight mt-1">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
