import LightningProtectionPage, { lightningProtectionMetadata } from '@/app/_pages/lightning-protection';

export const metadata = lightningProtectionMetadata('en');

export default function Page() {
  return <LightningProtectionPage locale="en" />;
}
