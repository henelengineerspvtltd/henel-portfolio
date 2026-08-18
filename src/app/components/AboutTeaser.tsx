import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from './ScrollReveal';

const pillars = [
{
  icon: 'WrenchScrewdriverIcon',
  label: 'Engineering Expertise',
  desc: 'Deep technical knowledge across lightning protection design and wind turbine systems.'
},
{
  icon: 'ShieldCheckIcon',
  label: 'Quality Products',
  desc: 'Authorised supplier of TOPBAS lightning protection products, imported from Turkey.'
},
{
  icon: 'MapPinIcon',
  label: 'Tamil Nadu Roots',
  desc: 'Based in Kanyakumari District — the heartland of South India\'s wind energy sector.'
},
{
  icon: 'UsersIcon',
  label: 'Long-Term Relationships',
  desc: 'We prioritise lasting partnerships with our industrial and commercial clients.'
}];


export default function AboutTeaser() {
  return (
    <section className="py-20 bg-card border-t border-border" id="about" aria-label="About Henel Engineers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <ScrollReveal delay={1}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_185cbca4b-1772568683768.png"
                  alt="Engineering professional in industrial facility reviewing technical documents, bright well-lit industrial workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center" />
                
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 bg-card border border-border rounded-xl px-6 py-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#CC0000' }}>
                    <Icon name="CalendarIcon" size={20} variant="solid" className="text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-800 text-foreground leading-none">25+</p>
                    <p className="text-xs font-600 text-muted-foreground uppercase tracking-wider mt-0.5">Years Active</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <div className="flex flex-col justify-between h-full">
            <ScrollReveal>
              <span className="section-label">About the Company</span>
              <h2 className="text-section-heading font-800 text-foreground mt-2 mb-5">
                Engineering Experience Since 1999
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Henel Engineers Pvt. Ltd. was incorporated on 17 August 1999 in Aralvaimozhi, Kanyakumari District, Tamil Nadu. Over more than two decades, we have built a reputation for reliable engineering services in two core sectors: lightning protection systems and wind energy.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Our location in Kanyakumari District — home to some of India&apos;s most active wind energy infrastructure — gives us direct proximity to the projects and clients we serve.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {pillars.map((p) =>
                <div key={p.label} className="flex gap-3 items-start">
                    <div
                    className="flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: '#0A1628' }}>
                    
                      <Icon name={p.icon as 'WrenchScrewdriverIcon'} size={18} variant="outline" className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-700 text-foreground">{p.label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <Link href="/contact" className="btn-outline-dark self-start">
                Learn More About Us
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>);

}