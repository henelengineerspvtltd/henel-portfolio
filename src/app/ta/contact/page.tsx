import ContactPage, { contactMetadata } from '@/app/_pages/contact';

export const metadata = contactMetadata('ta');

export default function Page() {
  return <ContactPage locale="ta" />;
}
