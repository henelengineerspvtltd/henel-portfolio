'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from '@/components/LocaleLink';
import HenelLogo from './HenelLogo';
import Icon from '@/components/ui/AppIcon';
import LanguageSwitcher from './LanguageSwitcher';
import { localeFromPath } from '@/i18n/config';
import { UI } from '@/i18n/ui-client';

export default function Header() {
  const ui = UI[localeFromPath(usePathname() || '/')];
  const navLinks = [
    { label: ui.nav.home, href: '/' },
    { label: ui.nav.lightning, href: '/lightning-protection' },
    { label: ui.nav.wind, href: '/windmill' },
    { label: ui.nav.solar, href: '/solar-panel-installation' },
    { label: ui.nav.about, href: '/about' },
    { label: ui.nav.products, href: '/products-and-services' },
    { label: ui.nav.contact, href: '/contact' },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card ${
          scrolled ? 'nav-shadow' : 'border-b border-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
            >
              <HenelLogo size={44} />
              <div className="hidden sm:block">
                <span className="block text-sm font-800 tracking-tight text-foreground leading-tight">
                  HENEL ENGINEERS
                </span>
                <span className="block text-xs text-muted-foreground font-500 leading-tight">
                  PVT. LTD.
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1" aria-label={ui.mainNav}>
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="px-3 py-2 text-sm font-600 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/60 whitespace-nowrap"
                >
                  {link?.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher className="hidden lg:flex" />
              <Link
                href="/contact"
                className="hidden sm:inline-flex btn-primary text-xs"
                aria-label={ui.requestQuoteAria}
              >
                {ui.requestQuote}
              </Link>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="xl:hidden p-2 rounded-md text-foreground hover:bg-muted/60 transition-colors"
                aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
                aria-expanded={menuOpen}
              >
                {menuOpen ? (
                  <Icon name="XMarkIcon" size={24} variant="outline" />
                ) : (
                  <Icon name="Bars3Icon" size={24} variant="outline" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      {/* Mobile Menu Panel */}
      <div
        className={`mobile-menu-panel ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-label={ui.menu}
        aria-modal="true"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <HenelLogo size={40} />
            <div>
              <span className="block text-sm font-800 tracking-tight text-foreground">HENEL ENGINEERS</span>
              <span className="block text-xs text-muted-foreground">PVT. LTD.</span>
            </div>
          </div>
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60"
            aria-label={ui.close}
          >
            <Icon name="XMarkIcon" size={20} variant="outline" />
          </button>
        </div>

        <LanguageSwitcher className="mb-6 text-sm" />

        <nav className="flex flex-col gap-1" aria-label={ui.mobileNav}>
          {navLinks?.map((link) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={closeMenu}
              className="px-3 py-3 text-base font-600 text-foreground hover:text-accent hover:bg-muted/60 rounded-md transition-colors"
            >
              {link?.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-border">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="btn-primary w-full justify-center"
          >
            {ui.requestQuote}
          </Link>
          <a
            href="tel:+919443282312"
            className="mt-3 flex items-center gap-2 text-sm font-600 text-muted-foreground hover:text-accent transition-colors justify-center py-3"
          >
            <Icon name="PhoneIcon" size={16} variant="solid" />
            +91 94432 82312
          </a>
          <a
            href="tel:+919443692711"
            className="flex items-center gap-2 text-sm font-600 text-muted-foreground hover:text-accent transition-colors justify-center py-3"
          >
            <Icon name="PhoneIcon" size={16} variant="solid" />
            +91 94436 92711
          </a>
        </div>
      </div>
    </>
  );
}