import { ImageResponse } from 'next/og';
import { squareIcon } from '@/lib/og';

const SIZES = ['192', '512'] as const;

export const dynamic = 'force-static';

export function generateStaticParams() {
  return SIZES.map((size) => ({ size }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ size: string }> }) {
  const { size } = await params;
  const px = size === '192' ? 192 : 512;
  return new ImageResponse(await squareIcon(px), { width: px, height: px });
}
