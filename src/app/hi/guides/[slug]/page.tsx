import GuidePage, { guideMetadata, guideStaticParams } from '@/app/_pages/guide';

export const dynamicParams = false;

export function generateStaticParams() {
  return guideStaticParams();
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return guideMetadata(slug, 'hi');
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <GuidePage slug={slug} locale="hi" />;
}
