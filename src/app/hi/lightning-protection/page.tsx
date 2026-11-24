import LightningProtectionPage, { lightningProtectionMetadata } from '../../_pages/lightning-protection';

export const metadata = lightningProtectionMetadata('hi');

export default function Page() {
  return <LightningProtectionPage locale="hi" />;
}
