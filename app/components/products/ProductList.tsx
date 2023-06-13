"use client";
import { ProductsFiltersType } from "@/app/types/components";
import InfiniteScroll from "react-infinite-scroll-component";
import { result } from "@/app/api/muck";
import Loading from "../share/Loading";
import ProductCard from "../cards/Product";
import { ProductType } from "@/app/types/data";
import { sortAscending, sortByDate } from "@/app/utils/sorting";
import { useEffect, useState } from "react";

const ProductList: React.FC<{ filters: ProductsFiltersType }> = ({
  filters,
}) => {
  const [productsToShow, setProductsToShow] = useState<ProductType[]>([]);
  const [page, setPage] = useState<number>(1);
  const filter: ProductsFiltersType = { ...filters, page: filters.page ?? "1" };

  //if url has category query it will be applied here
  let products =
    filter.category && filter.category.toString() !== "0"
      ? result?.products.filter(
          (pro) => pro.categoryId.toString() === filter.category.toString()
        )
      : result?.products;

  //sort query
  switch (filter.sortBy?.toLowerCase()) {
    case "newest":
      products = sortByDate(products, "createDate");
      break;
    case "bestsale":
      products = sortAscending(products, "sale");
      break;

    default:
      break;
  }

  //change products list state with page change
  useEffect(() => {
    let sProduct = products;
    const slicedProducts = sProduct.slice(0, page * 12);
    setProductsToShow(slicedProducts);
  }, [page]);

  //reset page with category change
  useEffect(() => {
    setPage(1);
  }, [filter.category]);

  const nextData = () => {
    setPage((previous) => previous + 1);
  };
  return (
    <div className="mb-10">
      <InfiniteScroll
        dataLength={productsToShow.length}
        next={nextData}
        hasMore={products?.length > productsToShow.length}
        loader={<Loading />}
      >
        <div className="grid grid-cols-4 gap-4">
          {productsToShow?.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default ProductList;
