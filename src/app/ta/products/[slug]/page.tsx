import ProductPage, { productMetadata, productStaticParams } from '@/app/_pages/product';

export const dynamicParams = false;

export function generateStaticParams() {
  return productStaticParams();
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return productMetadata(slug, 'ta');
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return <ProductPage slug={slug} locale="ta" />;
}
