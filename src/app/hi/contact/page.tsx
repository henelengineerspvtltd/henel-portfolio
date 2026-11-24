import ContactPage, { contactMetadata } from '@/app/_pages/contact';

export const metadata = contactMetadata('hi');

export default function Page() {
  return <ContactPage locale="hi" />;
}
