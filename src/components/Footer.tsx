import React from 'react';
import Link from 'next/link';
import HenelLogo from './HenelLogo';

const quickLinks = [
  { label: 'Lightning Protection', href: '/lightning-protection' },
  { label: 'Wind Energy', href: '/windmill' },
  { label: 'About Us', href: '/#about' },
  { label: 'Products & Services', href: '/#products' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Henel Engineers home">
              <HenelLogo size={52} />
              <div>
                <span className="block text-base font-800 tracking-wide text-primary-foreground leading-tight">
                  HENEL ENGINEERS
                </span>
                <span className="block text-sm text-primary-foreground/60 leading-tight">
                  PVT. LTD.
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs mt-4">
              Engineering Solutions in Lightning Protection &amp; Wind Energy. Serving industrial and commercial clients since 1999.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-800 uppercase tracking-widest text-primary-foreground/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-sm font-500 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-800 uppercase tracking-widest text-primary-foreground/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919443282312"
                  className="text-sm font-500 text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-start gap-2"
                >
                  <span className="mt-0.5 opacity-50">📞</span>
                  +91 94432 82312
                </a>
              </li>
              <li>
                <a
                  href="tel:+919443692711"
                  className="text-sm font-500 text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-start gap-2"
                >
                  <span className="mt-0.5 opacity-50">📞</span>
                  +91 94436 92711
                </a>
              </li>
              <li>
                <a
                  href="mailto:henelkkla@gmail.com"
                  className="text-sm font-500 text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-start gap-2"
                >
                  <span className="mt-0.5 opacity-50">✉</span>
                  henelkkla@gmail.com
                </a>
              </li>
              <li>
                <address className="not-italic text-sm text-primary-foreground/60 leading-relaxed flex items-start gap-2">
                  <span className="mt-0.5 opacity-50">📍</span>
                  <span>
                    <span className="block text-primary-foreground/40 text-xs uppercase tracking-wide mb-1">Registered Office</span>
                    Aralvaimozhi, Kanyakumari District,<br />
                    Tamil Nadu — 629 301
                  </span>
                </address>
              </li>
              <li>
                <address className="not-italic text-sm text-primary-foreground/60 leading-relaxed flex items-start gap-2">
                  <span className="mt-0.5 opacity-50">📍</span>
                  <span>
                    <span className="block text-primary-foreground/40 text-xs uppercase tracking-wide mb-1">Branch Office</span>
                    Kalluthotti - Marthandam Rd,<br />
                    Marthandam, Unnamalaikadai,<br />
                    Tamil Nadu — 629 165
                  </span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40 font-500">
            © {new Date()?.getFullYear()} HENEL ENGINEERS PVT. LTD. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
}