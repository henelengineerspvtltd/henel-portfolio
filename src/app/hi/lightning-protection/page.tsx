import LightningProtectionPage, { lightningProtectionMetadata } from '@/app/_pages/lightning-protection';

export const metadata = lightningProtectionMetadata('hi');

export default function Page() {
  return <LightningProtectionPage locale="hi" />;
}
