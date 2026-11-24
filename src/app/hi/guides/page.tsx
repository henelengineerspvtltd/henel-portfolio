import GuidesPage, { guidesMetadata } from '../../_pages/guides';

export const metadata = guidesMetadata('hi');

export default function Page() {
  return <GuidesPage locale="hi" />;
}
