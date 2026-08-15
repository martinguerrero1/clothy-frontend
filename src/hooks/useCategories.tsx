import { useQuery } from '@tanstack/react-query';
import type { CategoryQueryParams } from '../types/category.types';
import { getCategories } from '../services/category.service';

function useCategories(params?: CategoryQueryParams) {
  return useQuery({
    queryKey: ['categories', params],
    queryFn: () => getCategories(params),
  });
}

export default useCategories;
