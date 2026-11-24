import GuidesPage, { guidesMetadata } from '../_pages/guides';

export const metadata = guidesMetadata('en');

export default function Page() {
  return <GuidesPage locale="en" />;
}
