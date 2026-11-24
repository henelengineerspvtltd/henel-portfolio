import ProductsAndServicesPage, { productsAndServicesMetadata } from '@/app/_pages/products-and-services';

export const metadata = productsAndServicesMetadata('hi');

export default function Page() {
  return <ProductsAndServicesPage locale="hi" />;
}
