import { clothyApi } from '../lib/axios';
import type { ProductApiResponse, ProductQueryParams } from '../types/product.types';

export async function getProducts(
  productsQueryParam?: ProductQueryParams
): Promise<ProductApiResponse> {
  const response = await clothyApi.get<ProductApiResponse>(`/products`, {
    params: productsQueryParam,
  });

  const ProductData = response.data;

  return ProductData;
}
