import { ImageResponse } from 'next/og';
import { ogCard, OG_SIZE } from '@/lib/og';

export const alt = 'Henel Engineers FAQ — lightning arresters, earthing, surge protection and windmill maintenance';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    await ogCard({
      eyebrow: 'Frequently Asked Questions',
      title: 'Lightning Protection & Windmill Maintenance FAQ',
      subtitle: 'ESE arresters · Earthing · Surge protection · Wind turbine O&M',
    }),
    OG_SIZE
  );
}
