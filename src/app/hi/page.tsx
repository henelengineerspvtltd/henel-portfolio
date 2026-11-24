import HomePage, { homeMetadata } from '@/app/_pages/home';

export const metadata = homeMetadata('hi');

export default function Page() {
  return <HomePage locale="hi" />;
}
