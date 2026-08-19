import { clothyApi } from '../lib/axios';
import type {
  ProductApiResponse,
  ProductQueryParams,
  ProductResponse,
} from '../types/product.types';

export async function getProducts(
  productsQueryParam?: ProductQueryParams
): Promise<ProductApiResponse> {
  const response = await clothyApi.get<ProductApiResponse>(`/products`, {
    params: productsQueryParam,
  });

  const ProductData = response.data;

  return ProductData;
}

export async function getOneProduct(id: string): Promise<ProductResponse> {
  const response = await clothyApi.get(`/products/${id}`);

  const ProductData = response.data.product;
  return ProductData;
}
