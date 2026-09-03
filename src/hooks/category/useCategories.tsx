import { useQuery } from '@tanstack/react-query';
import type { GetCategoriesParams } from '../../types/category.types';
import { getCategories } from '../../services/category.service';

function useCategories(params?: GetCategoriesParams) {
  return useQuery({
    queryKey: ['categories', params],
    queryFn: () => getCategories(params),
  });
}

export default useCategories;
