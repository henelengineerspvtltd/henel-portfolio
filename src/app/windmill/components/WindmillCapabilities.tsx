import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ScrollReveal from '@/app/components/ScrollReveal';

const panels = [
  {
    image: '/assets/images/windmill/gearbox-repair.jpg',
    alt: 'Wind turbine gearbox and generator assembly lifted by crane during repair and overhaul',
    title: 'Gearbox Repair & Overhauling',
    desc: 'We repair and overhaul gearboxes with quick turnaround time, including replacement of bearings, shafts and gears for a range of WTG makes.',
    bullets: [
      'Replacement of bearings, shafts and gears',
      'Hydraulic methods for accurate installation',
      'Reduced downtime and improved reliability',
    ],
  },
  {
    image: '/assets/images/windmill/generator-rewinding.jpg',
    alt: 'Wind turbine generator being serviced on site during rewinding work',
    title: 'Generator & Transformer Rewinding',
    desc: 'Our generator and transformer services include rewinding and bearing replacement, carried out without dismantling the generator from the nacelle wherever possible.',
    bullets: [
      'Generator & transformer rewinding',
      'Bearing replacement',
      'Sleeve ring replacement',
    ],
  },
  {
    image: '/assets/images/windmill/blade-patching.jpg',
    alt: 'Technician working inside a wind turbine hub during blade patching and repair work',
    title: 'Blade Patching & Repair Works',
    desc: 'We undertake blade patching, lightning damage repair and on-site blade restoration to keep rotors running safely.',
    bullets: [
      'Blade patching & repair',
      'Lightning damage repair',
      'On-site blade restoration',
    ],
  },
  {
    image: '/assets/images/windmill/hydraulic-servicing.jpg',
    alt: 'Wind turbine hydraulic unit and related components laid out for servicing',
    title: 'Hydraulic Unit Servicing',
    desc: 'We provide hydraulic system services to ensure safe and efficient turbine operation.',
    bullets: [
      'Hydraulic unit & brake servicing',
      'Hydraulic pump & pitch cylinder repair',
      'Grease pump & oil seal replacement',
    ],
  },
  {
    image: '/assets/images/windmill/nacelle-erection-1.jpg',
    alt: 'Crane erecting a wind turbine tower and rotor during installation',
    title: 'Windmill Erection & Installation',
    desc: 'From tower erection to commissioning, we provide end-to-end erection and installation services.',
    bullets: [
      'Nacelle, hub & component installation',
      'Start-up & commissioning support',
      'Heavy-duty crane arrangement',
    ],
  },
  {
    image: '/assets/images/windmill/tower-technician.jpg',
    alt: 'Technician on a wind turbine tower carrying out maintenance against a cloudy sky',
    title: '24x7 Breakdown Support',
    desc: 'Our teams are available round the clock to respond to breakdowns and restore WTGs at the earliest.',
    bullets: [
      '24x7 technical support',
      'Quick troubleshooting',
      'Faster machine restoration',
    ],
  },
];

export default function WindmillCapabilities() {
  return (
    <section className="py-20 bg-background" aria-label="Windmill maintenance capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {panels.map((p, i) => (
            <ScrollReveal key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="flex flex-col sm:flex-row gap-5 h-full">
                <div className="relative overflow-hidden rounded-xl w-full sm:w-40 aspect-[4/3] sm:aspect-square flex-shrink-0 bg-muted">
                  <AppImage
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 160px"
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-800 text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <ul className="space-y-1.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Icon
                          name="CheckCircleIcon"
                          size={15}
                          variant="solid"
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: '#2D7A2D' }}
                        />
                        <span className="text-xs text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
