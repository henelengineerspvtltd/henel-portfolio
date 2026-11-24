import ContactPage, { contactMetadata } from '../../_pages/contact';

export const metadata = contactMetadata('hi');

export default function Page() {
  return <ContactPage locale="hi" />;
}
