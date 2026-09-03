import type { GetProductsParams } from '@/types/product.types';

export const getProductParamsFromUrl = (urlSearchParams: URLSearchParams): GetProductsParams => {
  const params: GetProductsParams = {};

  const search = urlSearchParams.get('search');
  const category = urlSearchParams.get('category');
  const gender = urlSearchParams.get('gender');
  const minPrice = urlSearchParams.get('minPrice');
  const maxPrice = urlSearchParams.get('maxPrice');
  const sort = urlSearchParams.get('sort');
  const page = urlSearchParams.get('page');

  if (search) params.search = search;
  if (category) params.category = category;
  if (gender) params.gender = gender;
  if (sort) params.sort = sort;

  if (minPrice) params.minPrice = Number(minPrice);
  if (maxPrice) params.maxPrice = Number(maxPrice);
  if (page) params.page = Number(page);

  return params;
};
