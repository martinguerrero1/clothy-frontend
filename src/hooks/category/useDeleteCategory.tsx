import { deleteCategory } from '@/services/category.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),

    onSuccess: () => {
      toast.success('Categoría eliminada correctamente');

      queryClient.invalidateQueries({
        queryKey: ['categories'],
      });
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message;

        if (message) {
          toast.error(message);
          return;
        }

        toast.error('Ocurrió un error inesperado');
      }
    },
  });
};

export default useDeleteCategory;
