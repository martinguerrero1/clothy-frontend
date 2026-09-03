import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { addProduct } from '@/services/product.service';

export default function useAddProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProduct,

    onSuccess: () => {
      toast.success('Producto creado correctamente');

      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },

    onError: (error) => {
      toast.error(error instanceof Error ? error.message : 'No se pudo crear el producto');
    },
  });
}
