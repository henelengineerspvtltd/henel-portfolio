import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Noto_Sans_Tamil, Noto_Sans_Devanagari } from 'next/font/google';
import '../styles/tailwind.css';
import JsonLd from '@/components/JsonLd';
import FloatingContact from '@/components/FloatingContact';
import LeadTracking from '@/components/LeadTracking';
import { organizationSchema, websiteSchema, SITE_URL } from '@/lib/structured-data';
import { HTML_LANG, OG_LOCALE, type Locale } from '@/i18n/config';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

// Tamil and Hindi script fonts. Not preloaded: each is split by unicode-range, so a browser
// only downloads it on pages that contain Tamil or Devanagari text.
const notoTamil = Noto_Sans_Tamil({
  subsets: ['tamil'],
  weight: ['400', '600', '700'],
  variable: '--font-tamil',
  display: 'swap',
  preload: false,
});
const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '600', '700'],
  variable: '--font-devanagari',
  display: 'swap',
  preload: false,
});

/** Marks JS as available before paint, so scroll-reveal content is only hidden when it can be revealed. */
const JS_SCRIPT = "document.documentElement.classList.add('js')";

// GA4 measurement ID (public by design). Only live production builds report, so previews and local runs don't skew the data.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || (process.env.VERCEL_ENV === 'production' ? 'G-WELJVNRDWP' : undefined);

export const rootViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
};

const DEFAULTS: Record<Locale, { title: string; description: string }> = {
  en: {
    title: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, India',
    description:
      'Henel Engineers, est. 1999: lightning arresters, earthing, surge protection, solar installation and windmill maintenance across India. TOPBAS supplier.',
  },
  ta: {
    title: 'ஹெனல் இன்ஜினியர்ஸ் | மின்னல் தடுப்பான் (இடிதாங்கி), எர்த்திங் & காற்றாலை பராமரிப்பு',
    description:
      'ஹெனல் இன்ஜினியர்ஸ், 1999 முதல்: மின்னல் தடுப்பான் (இடிதாங்கி), எர்த்திங், சர்ஜ் பாதுகாப்பு, சோலார் நிறுவல் மற்றும் காற்றாலை பராமரிப்பு — இந்தியா முழுவதும்.',
  },
  hi: {
    title: 'हेनेल इंजीनियर्स | लाइटनिंग अरेस्टर (तड़ित चालक), अर्थिंग और पवनचक्की रखरखाव',
    description:
      'हेनेल इंजीनियर्स, स्थापना 1999: लाइटनिंग अरेस्टर (तड़ित चालक), अर्थिंग, सर्ज प्रोटेक्शन, सोलर इंस्टॉलेशन और पवनचक्की रखरखाव — पूरे भारत में।',
  },
};

/** Site-wide metadata defaults for one language. Pages override title, description and alternates. */
export function rootMetadata(locale: Locale): Metadata {
  const d = DEFAULTS[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: d.title, template: '%s | Henel Engineers' },
    description: d.description,
    applicationName: 'Henel Engineers',
    authors: [{ name: 'Henel Engineers Pvt. Ltd.', url: SITE_URL }],
    creator: 'Henel Engineers Pvt. Ltd.',
    publisher: 'Henel Engineers Pvt. Ltd.',
    category: 'Engineering Services',
    formatDetection: { telephone: true, email: true, address: true },
    alternates: { canonical: locale === 'en' ? '/' : `/${locale}` },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[locale],
      alternateLocale: (Object.keys(OG_LOCALE) as Locale[]).filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      siteName: 'Henel Engineers Pvt. Ltd.',
      title: d.title,
      description: d.description,
      url: locale === 'en' ? '/' : `/${locale}`,
    },
    twitter: { card: 'summary_large_image', title: d.title, description: d.description },
    icons: { icon: [{ url: '/favicon.ico', type: 'image/x-icon' }] },
    // Search engine ownership verification — set these in your hosting environment variables.
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
      other: {
        ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
          ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
          : {}),
      },
    },
    other: {
      // Local SEO geo tags (registered office)
      'geo.region': 'IN-TN',
      'geo.placename': 'Aralvaimozhi, Kanyakumari District, Tamil Nadu, India',
    },
  };
}

/**
 * The <html> document for one language. Each language has its own root layout, so the
 * server-rendered HTML already carries the right `lang` (crawlers that don't run
 * JavaScript, such as Bing and AI crawlers, read it from the raw HTML).
 */
export default function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${plusJakartaSans.variable} ${notoTamil.variable} ${notoDevanagari.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_SCRIPT }} />
        <link rel="alternate" type="text/plain" title="LLM-readable site summary" href="/llms.txt" />
      </head>
      <body className="font-sans">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <FloatingContact />

        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
            <LeadTracking />
          </>
        )}
      </body>
    </html>
  );
}
