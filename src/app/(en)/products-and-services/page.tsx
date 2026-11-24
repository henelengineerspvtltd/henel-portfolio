import ProductsAndServicesPage, { productsAndServicesMetadata } from '@/app/_pages/products-and-services';

export const metadata = productsAndServicesMetadata('en');

export default function Page() {
  return <ProductsAndServicesPage locale="en" />;
}
