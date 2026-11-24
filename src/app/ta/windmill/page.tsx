import WindmillPage, { windmillMetadata } from '@/app/_pages/windmill';

export const metadata = windmillMetadata('ta');

export default function Page() {
  return <WindmillPage locale="ta" />;
}
