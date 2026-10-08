import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Henel Engineers Pvt. Ltd. — Lightning Protection & Windmill Maintenance',
    short_name: 'Henel Engineers',
    description:
      'Lightning protection systems, ESE lightning arresters, earthing, surge protection and windmill operation & maintenance in Tamil Nadu and Karnataka. Est. 1999.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0A1628',
    lang: 'en-IN',
    categories: ['business', 'utilities'],
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/pwa-icon/192', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/pwa-icon/512', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}
