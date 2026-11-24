import HomePage, { homeMetadata } from '@/app/_pages/home';

export const metadata = homeMetadata('ta');

export default function Page() {
  return <HomePage locale="ta" />;
}
