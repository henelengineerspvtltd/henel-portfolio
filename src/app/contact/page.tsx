import ContactPage, { contactMetadata } from '../_pages/contact';

export const metadata = contactMetadata('en');

export default function Page() {
  return <ContactPage locale="en" />;
}
