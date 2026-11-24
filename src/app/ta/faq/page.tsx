import FaqPage, { faqMetadata } from '@/app/_pages/faq';

export const metadata = faqMetadata('ta');

export default function Page() {
  return <FaqPage locale="ta" />;
}
