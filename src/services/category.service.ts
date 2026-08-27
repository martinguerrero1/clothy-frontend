import { clothyApi } from '@/lib/axios';
import type {
  CategoriesApiResponse,
  CategoryApiResponse,
  GetCategoriesParams,
} from '@/types/category.types';

export const getCategories = async (queryParams?: GetCategoriesParams) => {
  const { data } = await clothyApi.get<CategoriesApiResponse>('/categories', {
    params: queryParams,
  });

  return data.categories;
};

export const addCategory = async (formData: FormData) => {
  const { data } = await clothyApi.post<CategoryApiResponse>('/categories', formData);

  return data;
};

export const modifyCategory = async (id: string, formData: FormData) => {
  const { data } = await clothyApi.put<CategoryApiResponse>(`/categories/${id}`, formData);

  return data;
};

export const deleteCategory = async (id: string) => {
  const { data } = await clothyApi.delete<CategoryApiResponse>(`/categories/${id}`);

  return data;
};
