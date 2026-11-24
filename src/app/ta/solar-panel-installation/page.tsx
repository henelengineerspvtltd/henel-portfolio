import SolarPage, { solarMetadata } from '@/app/_pages/solar-panel-installation';

export const metadata = solarMetadata('ta');

export default function Page() {
  return <SolarPage locale="ta" />;
}
