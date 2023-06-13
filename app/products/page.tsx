import ProductsFilter from "../components/products/Filters";
import { PageProps } from "@/.next/types/app/products/page";
import ProductList from "../components/products/ProductList";

const Products = (props: PageProps) => {
  const { searchParams } = props;

  return (
    <div className="flex flex-col p-24">
      <ProductsFilter filters={searchParams} />
      <ProductList filters={searchParams} />
    </div>
  );
};
export default Products;
