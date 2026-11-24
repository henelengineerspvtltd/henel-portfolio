import SolarPage, { solarMetadata } from '@/app/_pages/solar-panel-installation';

export const metadata = solarMetadata('en');

export default function Page() {
  return <SolarPage locale="en" />;
}
