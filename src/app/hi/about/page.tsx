import AboutPage, { aboutMetadata } from '../../_pages/about';

export const metadata = aboutMetadata('hi');

export default function Page() {
  return <AboutPage locale="hi" />;
}
