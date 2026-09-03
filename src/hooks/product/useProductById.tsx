import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/services/product.service';

export default function useProductById(id: string) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: Boolean(id),
  });
}
