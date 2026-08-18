import React from 'react';
import ScrollReveal from '@/app/components/ScrollReveal';

const reasons = [
  {
    title: '25+ Years of Experience',
    desc: 'Decades of hands-on experience in the wind energy sector.',
  },
  {
    title: '30+ Active CMC Contracts',
    desc: 'Trusted by customers for ongoing O&M and maintenance.',
  },
  {
    title: 'Multi-Disciplinary Team',
    desc: 'Mechanical, electrical and technical experts under one roof.',
  },
  {
    title: '24x7 Breakdown Support',
    desc: 'Round-the-clock support for critical breakdowns.',
  },
  {
    title: 'Experienced Manpower',
    desc: 'Skilled technicians and adequate vehicles for field operations.',
  },
  {
    title: 'Complete Maintenance',
    desc: 'A to Z windmill services — we cover it all.',
  },
];

export default function WindmillWhyChooseUs() {
  return (
    <section className="py-20 bg-card border-t border-border" aria-label="Why choose Henel Engineers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-section-heading font-800 text-foreground inline-block relative">
            <span className="relative z-10 px-4 bg-card">Why Choose Henel Engineers?</span>
            <span className="absolute left-0 right-0 top-1/2 h-px bg-border -z-0" />
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={(i % 3) as 0 | 1 | 2 | 3 | 4}>
              <div className="bg-background border border-border rounded-xl p-6 text-center h-full">
                <h3 className="text-sm font-800 text-foreground mb-2">{r.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
