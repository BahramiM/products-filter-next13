export type CategoryType = {
  id: number;
  enabled: boolean;
  name: string;
};

export type ProductType = {
  id: number;
  enabled: boolean;
  name: string;
  image: string;
  price: number;
  createDate: string;
  sale: number;
  categoryId: number;
};
export type SearchResultType = {
  max_price: number;
  min_price: number;
  page_number: number;
  page_size: number;
  error: string;
  error_code: number;
  status: number;
  products: ProductType[];
};
