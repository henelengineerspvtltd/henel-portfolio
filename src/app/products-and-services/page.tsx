import ProductsAndServicesPage, { productsAndServicesMetadata } from '../_pages/products-and-services';

export const metadata = productsAndServicesMetadata('en');

export default function Page() {
  return <ProductsAndServicesPage locale="en" />;
}
