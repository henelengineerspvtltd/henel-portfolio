import React from 'react';
import Link from '@/components/LocaleLink';
import HenelLogo from './HenelLogo';
import { SOCIAL_PROFILES } from '@/lib/structured-data';
import type { Locale } from '@/i18n/config';
import { t } from '@/i18n/translate';

const quickLinks = [
  { label: 'Lightning Protection', href: '/lightning-protection' },
  { label: 'Wind Energy', href: '/windmill' },
  { label: 'Solar Energy', href: '/solar-panel-installation' },
  { label: 'Lightning Arresters', href: '/lightning-arrester' },
  { label: 'Wind Turbine Gearbox Repair', href: '/wind-turbine-gearbox-repair' },
  { label: 'Wind Turbine Blade Repair', href: '/wind-turbine-blade-repair' },
  { label: 'Wind Turbine Maintenance', href: '/windmill-maintenance-contract' },
  { label: 'About Us', href: '/about' },
  { label: 'Products & Services', href: '/products-and-services' },
  { label: 'Service Areas (All India)', href: '/service-areas' },
  { label: 'Guides', href: '/guides' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Footer({ locale = 'en' }: { locale?: Locale }) {
  const _ = (text: string) => t(locale, text);
  return (
    <footer className="bg-primary text-primary-foreground border-t border-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
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
              {_('Engineering Solutions in Lightning Protection & Wind Energy. Serving industrial, commercial and residential clients across India since 1999.')}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={SOCIAL_PROFILES.instagram}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={_('Henel Engineers on Instagram')}
                className="w-10 h-10 rounded-full border border-primary-foreground/25 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/60 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={SOCIAL_PROFILES.facebook}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={_('Henel Engineers on Facebook')}
                className="w-10 h-10 rounded-full border border-primary-foreground/25 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/60 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 8.5V6.8c0-.8.5-1.3 1.3-1.3H17V2.2h-2.6C11.6 2.2 10.4 4 10.4 6.5v2H8v3.4h2.4V22H14V11.9h2.7l.4-3.4H14z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-800 uppercase tracking-widest text-primary-foreground/70 mb-5">
              {_('Quick Links')}
            </h3>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-sm font-500 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {_(link?.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-800 uppercase tracking-widest text-primary-foreground/70 mb-5">
              {_('Contact')}
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
                <address className="not-italic text-sm leading-relaxed">
                  <a
                    href="https://maps.app.goo.gl/eG8yo7BKjg6gK9xe8"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={_('Get directions to the Henel Engineers registered office in Aralvaimozhi on Google Maps')}
                    className="group flex items-start gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    <span className="mt-0.5 opacity-50">📍</span>
                    <span>
                      <span className="block text-primary-foreground/70 text-xs uppercase tracking-wide mb-1">{_('Registered Office')}</span>
                      {_('Aralvaimozhi, Kanyakumari District,')}<br />
                      {_('Tamil Nadu — 629 301')}
                      <span className="block mt-1 text-xs font-700 text-primary-foreground/80 underline underline-offset-2 group-hover:text-primary-foreground">
                        {_('Get directions')} →
                      </span>
                    </span>
                  </a>
                </address>
              </li>
              <li>
                <address className="not-italic text-sm leading-relaxed">
                  <a
                    href="https://maps.app.goo.gl/2whf2eEDufEqSfZw9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={_('Get directions to the Henel Engineers branch office in Marthandam on Google Maps')}
                    className="group flex items-start gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    <span className="mt-0.5 opacity-50">📍</span>
                    <span>
                      <span className="block text-primary-foreground/70 text-xs uppercase tracking-wide mb-1">{_('Branch Office')}</span>
                      {_('Kalluthotti - Marthandam Rd,')}<br />
                      {_('Marthandam, Unnamalaikadai,')}<br />
                      {_('Tamil Nadu — 629 165')}
                      <span className="block mt-1 text-xs font-700 text-primary-foreground/80 underline underline-offset-2 group-hover:text-primary-foreground">
                        {_('Get directions')} →
                      </span>
                    </span>
                  </a>
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/70 font-500">
            © {new Date()?.getFullYear()} HENEL ENGINEERS PVT. LTD. {_('All Rights Reserved.')}
          </p>
          <div className="flex items-center gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
}