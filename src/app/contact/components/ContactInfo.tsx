import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import ScrollReveal from '@/app/components/ScrollReveal';

const directors = [
  { name: 'R. Rojore Rajesh', role: 'Director', photo: '/assets/images/director-rajesh.jpg' },
  { name: 'Rajadhas', role: 'Director', photo: '/assets/images/director-raajadhas.jpg' },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Directors */}
      <ScrollReveal>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-xs font-800 uppercase tracking-widest text-muted-foreground mb-5">
            Company Directors
          </h3>
          <div className="flex flex-col gap-4">
            {directors?.map((d) => (
              <div key={d?.name} className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-muted">
                  <AppImage
                    src={d?.photo}
                    alt={`${d?.name}, ${d?.role} of Henel Engineers`}
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-sm font-700 text-foreground">{d?.name}</p>
                  <p className="text-xs text-muted-foreground">{d?.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      {/* Contact Methods */}
      <ScrollReveal delay={1}>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-xs font-800 uppercase tracking-widest text-muted-foreground mb-5">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+919443282312"
              className="contact-info-link"
              aria-label="Call Henel Engineers"
            >
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#CC0000' }}
              >
                <Icon name="PhoneIcon" size={18} variant="solid" className="text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone / Call</p>
                <p className="text-sm font-700 text-foreground">+91 94432 82312</p>
              </div>
            </a>

            <a
              href="tel:+919443692711"
              className="contact-info-link"
              aria-label="Call Henel Engineers"
            >
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#CC0000' }}
              >
                <Icon name="PhoneIcon" size={18} variant="solid" className="text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Phone / Call</p>
                <p className="text-sm font-700 text-foreground">+91 94436 92711</p>
              </div>
            </a>

            <a
              href="mailto:henelkkla@gmail.com"
              className="contact-info-link"
              aria-label="Email Henel Engineers"
            >
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#0A1628' }}
              >
                <Icon name="EnvelopeIcon" size={18} variant="solid" className="text-white" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-700 text-foreground">henelkkla@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/919443282312"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
              aria-label="Chat on WhatsApp with Henel Engineers"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </ScrollReveal>
      {/* Address */}
      <ScrollReveal delay={2}>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-xs font-800 uppercase tracking-widest text-muted-foreground mb-4">
            Office Address
          </h3>
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-700 text-muted-foreground uppercase tracking-wide mb-1">Registered Office</p>
              <address className="not-italic text-sm text-foreground leading-relaxed font-500">
                Henel Engineers Pvt. Ltd.<br />
                No.8, 1104 J/64, Kamaraj Nagar,<br />
                Aralvaimozhi, Kanyakumari District,<br />
                Tamil Nadu — 629 301
              </address>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-xs font-700 text-muted-foreground uppercase tracking-wide mb-1">Branch Office</p>
              <address className="not-italic text-sm text-foreground leading-relaxed font-500">
                Henel Engineers Pvt. Ltd.<br />
                Kalluthotti - Marthandam Rd,<br />
                Marthandam, Unnamalaikadai,<br />
                Tamil Nadu — 629 165
              </address>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            CIN: U45207TN1999PTC043025 · RoC-Chennai
          </p>
        </div>
      </ScrollReveal>
      {/* Quote shortcut */}
      <ScrollReveal delay={3}>
        <div className="bg-primary rounded-xl p-6 text-primary-foreground">
          <h4 className="text-sm font-800 mb-2">Need a Quote?</h4>
          <p className="text-xs text-primary-foreground/65 mb-4 leading-relaxed">
            Use our quote request form for lightning protection, earthing, surge protection, or wind energy requirements.
          </p>
          <Link href="/contact" className="btn-primary w-full justify-center text-xs">
            Request a Quote
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}