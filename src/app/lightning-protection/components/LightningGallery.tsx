import React from 'react';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/app/components/ScrollReveal';

const images = [
  { src: '/assets/images/lightning-protection/work/install-1.jpg', alt: 'Lightning arrester installed on a rooftop mast above a temple building' },
  { src: '/assets/images/lightning-protection/work/install-new-2.jpg', alt: 'Lightning arrester mast installed on a building under construction' },
  { src: '/assets/images/lightning-protection/work/install-new-3.jpg', alt: 'Lightning arrester mast installed on a residential building rooftop with solar panels' },
  { src: '/assets/images/lightning-protection/work/install-new-4.jpg', alt: 'Technician installing a lightning arrester mast on a building rooftop' },
  { src: '/assets/images/lightning-protection/work/install-5.jpg', alt: 'Lightning arrester mast installed on a building under construction' },
  { src: '/assets/images/lightning-protection/work/install-6.jpg', alt: 'Technicians installing a lightning arrester on a church steeple' },
];

export default function LightningGallery() {
  return (
    <section className="py-16 bg-card border-t border-border" aria-label="Our work in the field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-lg font-800 text-foreground inline-block relative">
            <span className="relative z-10 px-4 bg-card">Our Work in the Field</span>
            <span className="absolute left-0 right-0 top-1/2 h-px bg-border -z-0" />
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((img, i) => (
            <ScrollReveal key={img.src} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="relative overflow-hidden rounded-lg aspect-square bg-muted group">
                <AppImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
