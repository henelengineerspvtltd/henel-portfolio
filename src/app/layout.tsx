import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';
import JsonLd from '@/components/JsonLd';
import FloatingContact from '@/components/FloatingContact';
import { organizationSchema, websiteSchema, SITE_URL } from '@/lib/structured-data';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

// GA4 measurement ID (public by design). Only live production builds report, so previews and local runs don't skew the data.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || (process.env.VERCEL_ENV === 'production' ? 'G-WELJVNRDWP' : undefined);

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, India',
    template: '%s | Henel Engineers',
  },
  description:
    'Henel Engineers, est. 1999: lightning arresters, earthing, surge protection, solar installation and windmill maintenance across India. TOPBAS supplier.',
  applicationName: 'Henel Engineers',
  authors: [{ name: 'Henel Engineers Pvt. Ltd.', url: SITE_URL }],
  creator: 'Henel Engineers Pvt. Ltd.',
  publisher: 'Henel Engineers Pvt. Ltd.',
  category: 'Engineering Services',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Henel Engineers Pvt. Ltd.',
    title: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, India',
    description:
      'Lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance across India. Est. 1999. TOPBAS authorised supplier.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, India',
    description:
      'Lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance across India.',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  // Search engine ownership verification — set these in your hosting
  // environment variables after registering the site with each tool.
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={plusJakartaSans.variable} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before paint so scroll-reveal content is only hidden when it can be revealed. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="alternate" type="text/plain" title="LLM-readable site summary" href="/llms.txt" />
      </head>
      <body className={plusJakartaSans.className}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
        <FloatingContact />

        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}

      </body>
    </html>
  );
}
