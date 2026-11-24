import ProductsAndServicesPage, { productsAndServicesMetadata } from '@/app/_pages/products-and-services';

export const metadata = productsAndServicesMetadata('ta');

export default function Page() {
  return <ProductsAndServicesPage locale="ta" />;
}
