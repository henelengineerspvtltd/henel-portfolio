import FaqPage, { faqMetadata } from '@/app/_pages/faq';

export const metadata = faqMetadata('en');

export default function Page() {
  return <FaqPage locale="en" />;
}
