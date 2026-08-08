import { clothyApi } from '../lib/axios';
import type {
  ProductApiResponse,
  ProductQueryParams,
  ProductResponse,
} from '../types/product.types';

export async function getProducts(
  productsQueryParam?: ProductQueryParams
): Promise<ProductResponse[]> {
  const response = await clothyApi.get<ProductApiResponse>(`/products`, {
    params: productsQueryParam,
  });

  const products = response.data.products;

  return products;
}
