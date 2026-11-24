import SolarPage, { solarMetadata } from '../../_pages/solar-panel-installation';

export const metadata = solarMetadata('hi');

export default function Page() {
  return <SolarPage locale="hi" />;
}
