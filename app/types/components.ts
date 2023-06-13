export type SortByType = "bestSale" | "newest";
export type ProductsFiltersType = {
  category: number;
  sortBy: SortByType;
  page: string;
};
export type ButtonLinkPropsType = {
  href: string;
  text: string;
};
export type SelectInputPropsType = {
  value: string | number;
  change: (value: string) => void;
  options: SelectInputOptionType[];
};
export type SelectInputOptionType = {
  value: string | number;
  text: string | number;
};
