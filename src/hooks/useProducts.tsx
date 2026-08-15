import { useQuery } from '@tanstack/react-query';
import type { ProductQueryParams } from '@/types/product.types';
import { getProducts } from '@/services/product.service';
import type { ProductQueryOptions } from '@/types/shop.types';

function useProducts(params?: ProductQueryParams, options?: ProductQueryOptions) {
  // console.log({...params, ...options})
  return useQuery({
    queryKey: ['products', { ...params, ...options }],
    queryFn: () => getProducts({ ...params, ...options }),
  });
}

export default useProducts;
