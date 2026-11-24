import LandingPage, { landingMetadata, landingStaticParams } from '@/app/_pages/landing';

export const dynamicParams = false;

export function generateStaticParams() {
  return landingStaticParams();
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return landingMetadata(slug, 'hi');
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <LandingPage slug={slug} locale="hi" />;
}
