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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, Tamil Nadu, India',
    template: '%s | Henel Engineers Pvt. Ltd.',
  },
  description:
    'Henel Engineers Pvt. Ltd., est. 1999, supplies and installs lightning protection systems, ESE lightning arresters, earthing and surge protection, and provides windmill operation & maintenance services across Tamil Nadu and Karnataka, India. TOPBAS authorised supplier. Call +91 94432 82312.',
  keywords: [
    // Brand
    'Henel Engineers',
    'Henel Engineers Pvt Ltd',
    'Henel Engineers Aralvaimozhi',
    // Lightning protection
    'lightning protection system',
    'lightning protection system India',
    'lightning protection system Tamil Nadu',
    'lightning arrester',
    'lightning arrester for building',
    'lightning arrester installation',
    'ESE lightning arrester',
    'ESE lightning arrester supplier India',
    'ESE lightning arrester Tamil Nadu',
    'early streamer emission lightning arrester',
    'NF C 17-102 lightning arrester',
    'TOPBAS lightning arrester',
    'TOPBAS lightning arrester dealer India',
    'TOPBAS SIRIUS ESE',
    'conventional lightning arrester',
    'copper lightning arrester',
    'lightning arrester Kanyakumari',
    'lightning arrester Nagercoil',
    // Earthing & surge
    'earthing contractor Tamil Nadu',
    'earthing system installation',
    'chemical earthing',
    'copper bonded earth rod',
    'GI earth rod',
    'earthing compound',
    'earth pit cover',
    'FRP earth pit cover',
    'surge protection device',
    'surge protection device Tamil Nadu',
    'Type 1 + 2 SPD',
    // Wind energy
    'windmill maintenance',
    'windmill maintenance Tamil Nadu',
    'windmill operation and maintenance',
    'wind turbine maintenance India',
    'wind turbine maintenance Karnataka',
    'WTG O&M services',
    'wind turbine gearbox repair',
    'wind turbine blade repair',
    'wind turbine generator rewinding',
    'windmill spare parts',
    'windmill erection',
    'wind turbine breakdown service',
    'windmill CMC contract',
    'Aralvaimozhi windmill',
    'Muppandal windmill maintenance',
  ],
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
    title: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, Tamil Nadu, India',
    description:
      'Lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance across Tamil Nadu and Karnataka. Est. 1999. TOPBAS authorised supplier.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, Tamil Nadu, India',
    description:
      'Lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance across Tamil Nadu and Karnataka.',
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
    <html lang="en-IN" className={plusJakartaSans.variable}>
      <head>
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

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fhenelengin8645back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}
