import { addCategory } from '@/services/category.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

const useAddCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => addCategory(formData),

    onSuccess: () => {
      toast.success('Categoría creada correctamente');

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

export default useAddCategory;
