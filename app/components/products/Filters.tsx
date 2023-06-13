"use client";
import { ProductsFiltersType } from "@/app/types/components";
import ButtonLink from "../share/ButtonLink";
import SelectInput from "../share/SelectInput";
import { categories } from "@/app/api/muck";
import { useRouter } from "next/navigation";
import { generateGetParams } from "@/app/utils/urls";

const ProductsFilter: React.FC<{ filters: ProductsFiltersType }> = ({
  filters,
}) => {
  const router = useRouter();

  const categoriesOptions = [
    { value: 0, text: "All Categories" },
    ...categories.map((category) => ({
      text: category.name,
      value: category.id,
    })),
  ];

  const onChange = (value: string) => {
    const newParams = generateGetParams({
      ...filters,
      category: value === "0" ? undefined : value,
    });
    router.push(`/products${newParams}`);
  };

  return (
    <div className="mb-10">
      <ButtonLink
        text="Newest"
        href={`/products${generateGetParams({
          ...filters,
          sortBy: "newest",
        })}`}
      />
      <ButtonLink
        text="Best Sale"
        href={`/products${generateGetParams({
          ...filters,
          sortBy: "bestSale",
        })}`}
      />
      <SelectInput
        options={categoriesOptions}
        value={filters.category || 0}
        change={onChange}
      />
    </div>
  );
};
export default ProductsFilter;
