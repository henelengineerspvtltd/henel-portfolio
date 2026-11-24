import FaqPage, { faqMetadata } from '@/app/_pages/faq';

export const metadata = faqMetadata('hi');

export default function Page() {
  return <FaqPage locale="hi" />;
}
