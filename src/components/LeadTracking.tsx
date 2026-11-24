'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Send a Google Analytics 4 event if the tag has loaded. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

/** Map a clicked link to a lead event name, or null if it is not a contact link. */
function leadEventFor(href: string): string | null {
  if (href.startsWith('tel:')) return 'click_to_call';
  if (href.startsWith('mailto:')) return 'email_click';
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href)) return 'whatsapp_click';
  if (/^https?:\/\/(maps\.app\.goo\.gl|www\.google\.[a-z.]+\/maps|maps\.google\.)/i.test(href)) return 'directions_click';
  return null;
}

/**
 * Records phone, WhatsApp, email and directions clicks as GA4 events, with the
 * page they came from. One delegated listener covers every link on the site.
 */
export default function LeadTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href') || '';
      const event = leadEventFor(href);
      if (!event) return;
      trackEvent(event, {
        link_url: href,
        link_text: (link.textContent || link.getAttribute('aria-label') || '').trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
