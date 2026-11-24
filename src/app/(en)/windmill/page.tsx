import WindmillPage, { windmillMetadata } from '@/app/_pages/windmill';

export const metadata = windmillMetadata('en');

export default function Page() {
  return <WindmillPage locale="en" />;
}
