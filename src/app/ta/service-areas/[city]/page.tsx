import LocationPage, { locationMetadata, locationStaticParams } from '@/app/_pages/location';

export const dynamicParams = false;

export function generateStaticParams() {
  return locationStaticParams();
}

type Params = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Params) {
  const { city } = await params;
  return locationMetadata(city, 'ta');
}

export default async function Page({ params }: Params) {
  const { city } = await params;
  return <LocationPage city={city} locale="ta" />;
}
