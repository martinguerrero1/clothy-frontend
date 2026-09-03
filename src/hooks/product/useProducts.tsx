import { useQuery } from '@tanstack/react-query';
import type { GetProductsParams } from '@/types/product.types';
import { getProducts } from '@/services/product.service';

function useProducts(productParams: GetProductsParams) {
  return useQuery({
    queryKey: ['products', productParams],
    queryFn: () => getProducts(productParams),
  });
}

export default useProducts;
