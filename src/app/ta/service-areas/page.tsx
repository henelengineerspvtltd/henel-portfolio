import ServiceAreasPage, { serviceAreasMetadata } from '@/app/_pages/service-areas';

export const metadata = serviceAreasMetadata('ta');

export default function Page() {
  return <ServiceAreasPage locale="ta" />;
}
