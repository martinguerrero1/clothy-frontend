import { clothyApi } from '../lib/axios';
import type {
  CategoriesApiResponse,
  CategoryQueryParams,
  CategoryResponse,
} from '../types/category.types';

export async function getCategories(
  categoryQueryParams?: CategoryQueryParams
): Promise<CategoryResponse[]> {
  const response = await clothyApi.get<CategoriesApiResponse>('/products/categories', {
    params: categoryQueryParams,
  });

  const categories = response.data.categories;

  return categories;
}
