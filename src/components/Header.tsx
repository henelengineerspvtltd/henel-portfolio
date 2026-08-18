'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import HenelLogo from './HenelLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Lightning Protection', href: '/lightning-protection' },
  { label: 'Wind Energy', href: '/windmill' },
  { label: 'About Us', href: '/#about' },
  { label: 'Products & Services', href: '/#products' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
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
              aria-label="Henel Engineers — Home"
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
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
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
              <Link
                href="/contact"
                className="hidden sm:inline-flex btn-primary text-xs"
                aria-label="Request a quote from Henel Engineers"
              >
                Request a Quote
              </Link>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted/60 transition-colors"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
        aria-label="Navigation menu"
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
            aria-label="Close menu"
          >
            <Icon name="XMarkIcon" size={20} variant="outline" />
          </button>
        </div>

        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
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
            Request a Quote
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