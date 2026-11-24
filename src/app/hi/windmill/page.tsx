import WindmillPage, { windmillMetadata } from '@/app/_pages/windmill';

export const metadata = windmillMetadata('hi');

export default function Page() {
  return <WindmillPage locale="hi" />;
}
