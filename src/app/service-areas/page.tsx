import ServiceAreasPage, { serviceAreasMetadata } from '../_pages/service-areas';

export const metadata = serviceAreasMetadata('en');

export default function Page() {
  return <ServiceAreasPage locale="en" />;
}
