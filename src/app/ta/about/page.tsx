import AboutPage, { aboutMetadata } from '@/app/_pages/about';

export const metadata = aboutMetadata('ta');

export default function Page() {
  return <AboutPage locale="ta" />;
}
