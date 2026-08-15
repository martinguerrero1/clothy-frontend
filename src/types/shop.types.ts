export type HandlerFilterChangeNames = 'search' | 'category' | 'gender' | 'sort';

export type HandlerPricesChangeNames = 'minPrice' | 'maxPrice';

export type ShopFilters = {
  search: string;
  category: string;
  gender: string;
  minPrice: number;
  maxPrice: number;
  sort: string;
};
export type ProductQueryParams = ShopFilters & {
  page: number;
};

export type priceSearchParam = {
  minPrice: number;
  maxPrice: number;
};

export type ProductQueryOptions = {
  limit: number;
};

// HEADER
export type NavigationLinks = {
  label: string;
  to: string;
}[];
