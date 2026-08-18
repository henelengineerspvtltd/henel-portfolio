import React from 'react';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/app/components/ScrollReveal';

const images = [
  { src: '/assets/images/windmill/gallery-1.jpg', alt: 'Vestas RRB wind turbine nacelle being lifted by crane during erection' },
  { src: '/assets/images/windmill/hub-maintenance.jpg', alt: 'Crane erecting a wind turbine nacelle onto a tower' },
  { src: '/assets/images/windmill/gallery-3.jpg', alt: 'Crane erecting a wind turbine tower and rotor against a blue sky' },
  { src: '/assets/images/windmill/nacelle-erection-2.jpg', alt: 'Technician servicing a wind turbine hub on site' },
  { src: '/assets/images/windmill/gearbox-closeup.jpg', alt: 'Close-up of a wind turbine gearbox during servicing' },
  { src: '/assets/images/windmill/gallery-6.jpg', alt: 'Technicians rigging a wind turbine blade flange with lifting straps' },
  { src: '/assets/images/windmill/gallery-7.jpg', alt: 'Crane hook lifting a wind turbine component against a cloudy sky' },
  { src: '/assets/images/windmill/gallery-8.jpg', alt: 'Close-up of a wind turbine rotor and hub against a blue sky' },
];

export default function WindmillGallery() {
  return (
    <section className="py-16 bg-card border-t border-border" aria-label="Our work in the field">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-lg font-800 text-foreground inline-block relative">
            <span className="relative z-10 px-4 bg-card">Our Work in the Field</span>
            <span className="absolute left-0 right-0 top-1/2 h-px bg-border -z-0" />
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {images.map((img, i) => (
            <ScrollReveal key={img.src} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="relative overflow-hidden rounded-lg aspect-square bg-muted group">
                <AppImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12vw"
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
