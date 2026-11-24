import ServiceAreasPage, { serviceAreasMetadata } from '@/app/_pages/service-areas';

export const metadata = serviceAreasMetadata('en');

export default function Page() {
  return <ServiceAreasPage locale="en" />;
}
