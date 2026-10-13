import { ImageResponse } from 'next/og';
import { ogCard, OG_SIZE } from '@/lib/og';

export const alt =
  'Henel Engineers Pvt. Ltd. — Lightning Protection & Windmill Maintenance across India, India';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    await ogCard({
      eyebrow: 'Henel Engineers Pvt. Ltd.',
      title: 'Lightning Protection & Windmill Maintenance',
      subtitle:
        'ESE lightning arresters, earthing & surge protection · Wind turbine O&M across India',
    }),
    OG_SIZE
  );
}
