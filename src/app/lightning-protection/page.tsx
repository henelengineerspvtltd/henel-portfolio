import LightningProtectionPage, { lightningProtectionMetadata } from '../_pages/lightning-protection';

export const metadata = lightningProtectionMetadata('en');

export default function Page() {
  return <LightningProtectionPage locale="en" />;
}
