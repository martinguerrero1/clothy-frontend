import { clothyApi } from '@/lib/axios';
import type {
  ProductApiResponse,
  ProductsApiResponse,
  GetProductsParams,
  ProductResponse,
} from '@/types/product.types';

export const getProducts = async (
  queryParams?: GetProductsParams
): Promise<ProductsApiResponse> => {
  const { data } = await clothyApi.get<ProductsApiResponse>('/products', { params: queryParams });

  return data;
};

export const getProductById = async (id: string): Promise<ProductResponse> => {
  const { data } = await clothyApi.get<ProductApiResponse>(`/products/${id}`);

  return data.product;
};

export const addProduct = async (formData: FormData): Promise<ProductResponse> => {
  const { data } = await clothyApi.post<ProductApiResponse>('/products', formData);

  return data.product;
};

export const modifyProduct = async (id: string, formData: FormData): Promise<ProductResponse> => {
  const { data } = await clothyApi.patch<ProductApiResponse>(`/products/${id}`, formData);

  return data.product;
};

export const deactivateProduct = async (id: string): Promise<ProductResponse> => {
  const { data } = await clothyApi.delete<ProductApiResponse>(`/products/${id}`);

  return data.product;
};
