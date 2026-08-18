import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from './ScrollReveal';

const windServices = [
{
  icon: 'WrenchScrewdriverIcon',
  title: 'Windmill Operation & Maintenance',
  desc: 'Scheduled and corrective maintenance services to keep wind turbines operating at peak efficiency.'
},
{
  icon: 'CogIcon',
  title: 'Wind Turbine Technical Services',
  desc: 'Specialist engineering support for mechanical, electrical, and structural turbine components.'
},
{
  icon: 'ClipboardDocumentCheckIcon',
  title: 'Engineering Support',
  desc: 'On-site technical assessment, fault diagnosis, and performance reporting for wind energy assets.'
},
{
  icon: 'BoltIcon',
  title: 'Power Generation Services',
  desc: 'Monitoring and optimisation of power output for wind energy installations.'
}];


export default function WindEnergySection() {
  return (
    <section className="py-20 bg-background" id="wind-energy" aria-label="Wind energy services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <ScrollReveal>
              <span className="section-label-green">Wind Energy Division</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2 mb-5">
                Windmill O&amp;M &amp; Engineering Services
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Henel Engineers has extensive experience in windmill operation and maintenance across Tamil Nadu&apos;s wind-rich regions. Our engineers provide professional technical services to wind energy operators, ensuring reliable power generation and long asset life.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="space-y-5 mb-10">
                {windServices.map((s) =>
                <div key={s.title} className="flex gap-4 items-start feature-border-left">
                    <div
                    className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center"
                    style={{ backgroundColor: '#2D7A2D' }}>
                    
                      <Icon name={s.icon as 'WrenchScrewdriverIcon'} size={18} variant="outline" className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-700 text-foreground">{s.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="flex flex-wrap gap-4">
                <Link href="/windmill" className="btn-green self-start inline-flex">
                  View Windmill Services
                  <Icon name="ArrowRightIcon" size={16} variant="outline" />
                </Link>
                <Link href="/contact" className="btn-outline-dark self-start inline-flex">
                  Discuss Your Requirement
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Image side */}
          <ScrollReveal delay={1}>
            <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
              <AppImage
                src="https://images.unsplash.com/photo-1678147947028-b8f1cc00fd0c"
                alt="Row of modern wind turbines on rolling green hills under clear blue sky, wind farm in Tamil Nadu region"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}