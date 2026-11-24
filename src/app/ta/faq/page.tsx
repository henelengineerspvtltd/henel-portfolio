import FaqPage, { faqMetadata } from '../../_pages/faq';

export const metadata = faqMetadata('ta');

export default function Page() {
  return <FaqPage locale="ta" />;
}
