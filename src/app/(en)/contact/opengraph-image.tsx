import { ImageResponse } from 'next/og';
import { ogCard, OG_SIZE } from '@/lib/og';

export const alt = 'Contact Henel Engineers Pvt. Ltd. — Aralvaimozhi & Marthandam, Tamil Nadu';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    await ogCard({
      eyebrow: 'Get in Touch',
      title: 'Request a Quote from Henel Engineers',
      subtitle: 'Call or WhatsApp +91 94432 82312 · +91 94436 92711 · Aralvaimozhi & Marthandam, Tamil Nadu',
      accent: '#25D366',
    }),
    OG_SIZE
  );
}
