import { modifyCategory } from '@/services/category.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

interface ModifyCategoryParams {
  id: string;
  formData: FormData;
}

const useModifyCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, formData }: ModifyCategoryParams) => modifyCategory(id, formData),

    onSuccess: () => {
      toast.success('Categoría modificada correctamente');

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

export default useModifyCategory;
