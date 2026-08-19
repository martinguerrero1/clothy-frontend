import { useQuery } from '@tanstack/react-query';
import { getOneProduct } from '@/services/product.service';

function useOneProduct(id: string | undefined) {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => getOneProduct(id!),
    enabled: !!id,
  });
}

export default useOneProduct;
