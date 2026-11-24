import ServiceAreasPage, { serviceAreasMetadata } from '@/app/_pages/service-areas';

export const metadata = serviceAreasMetadata('hi');

export default function Page() {
  return <ServiceAreasPage locale="hi" />;
}
