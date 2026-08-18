import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';
import JsonLd from '@/components/JsonLd';
import { organizationSchema, SITE_URL } from '@/lib/structured-data';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, Tamil Nadu',
    template: '%s | Henel Engineers Pvt. Ltd.',
  },
  description:
    'Henel Engineers Pvt. Ltd., est. 1999, supplies and installs lightning protection systems, ESE lightning arresters, earthing and surge protection, and provides windmill operation & maintenance services across Tamil Nadu and Karnataka. TOPBAS authorised supplier. Call +91 94432 82312.',
  keywords: [
    'lightning protection system Tamil Nadu',
    'ESE lightning arrester Tamil Nadu',
    'TOPBAS lightning arrester dealer India',
    'earthing contractor Tamil Nadu',
    'surge protection device Tamil Nadu',
    'windmill maintenance Tamil Nadu',
    'wind turbine maintenance Karnataka',
    'Henel Engineers',
  ],
  authors: [{ name: 'Henel Engineers Pvt. Ltd.' }],
  creator: 'Henel Engineers Pvt. Ltd.',
  publisher: 'Henel Engineers Pvt. Ltd.',
  category: 'Engineering Services',
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
    title: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, Tamil Nadu',
    description:
      'Lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance across Tamil Nadu and Karnataka. Est. 1999. TOPBAS authorised supplier.',
    url: '/',
    images: [
      {
        url: '/assets/images/henel-logo.png',
        width: 512,
        height: 512,
        alt: 'Henel Engineers Pvt. Ltd. logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henel Engineers Pvt. Ltd. | Lightning Protection & Windmill Maintenance, Tamil Nadu',
    description:
      'Lightning protection systems, ESE arresters, earthing & surge protection, and windmill operation & maintenance across Tamil Nadu and Karnataka.',
    images: ['/assets/images/henel-logo.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        <JsonLd data={organizationSchema()} />
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fhenelengin8645back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}
