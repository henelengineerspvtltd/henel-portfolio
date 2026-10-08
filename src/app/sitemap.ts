import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/structured-data';

const img = (path: string) => `${SITE_URL}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
      images: [img('/assets/images/henel-logo.png')],
    },
    {
      url: `${SITE_URL}/lightning-protection`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [
        img('/assets/images/lightning-protection/hero-storm.jpg'),
        img('/assets/images/sirius-ese-lightning-arrester.webp'),
        img('/assets/images/lyra-ese-lightning-arrester.webp'),
        img('/assets/images/type-1-2-spd.webp'),
        img('/assets/images/copper-earth-rod.webp'),
        img('/assets/images/gi-earth-rod.webp'),
        img('/assets/images/carbomaxx-earthing-compound.webp'),
        img('/assets/images/copper-spike-lightning-arrester.webp'),
        img('/assets/images/earth-pit-cover.webp'),
        img('/assets/images/frp-earth-pit-cover.webp'),
        img('/assets/images/lightning-protection/work/install-1.jpg'),
        img('/assets/images/lightning-protection/work/install-new-2.jpg'),
        img('/assets/images/lightning-protection/work/install-new-3.jpg'),
        img('/assets/images/lightning-protection/work/install-new-4.jpg'),
        img('/assets/images/lightning-protection/work/install-5.jpg'),
        img('/assets/images/lightning-protection/work/install-6.jpg'),
      ],
    },
    {
      url: `${SITE_URL}/windmill`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [
        img('/assets/images/windmill/hero-green-hills.jpg'),
        img('/assets/images/windmill/gearbox-repair.jpg'),
        img('/assets/images/windmill/generator-rewinding.jpg'),
        img('/assets/images/windmill/blade-patching.jpg'),
        img('/assets/images/windmill/hydraulic-servicing.jpg'),
        img('/assets/images/windmill/nacelle-erection-1.jpg'),
        img('/assets/images/windmill/nacelle-erection-2.jpg'),
        img('/assets/images/windmill/tower-technician.jpg'),
        img('/assets/images/windmill/gallery-1.jpg'),
        img('/assets/images/windmill/tn-karnataka-coverage-map.png'),
      ],
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        img('/assets/images/director-rajesh.jpg'),
        img('/assets/images/director-raajadhas.jpg'),
      ],
    },
  ];
}
