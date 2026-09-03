import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deactivateProduct } from '@/services/product.service';

export default function useDeactivateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deactivateProduct,

    onSuccess: () => {
      toast.success('Producto desactivado correctamente');

      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },

    onError: (error) => {
      toast.error(error instanceof Error ? error.message : 'No se pudo desactivar el producto');
    },
  });
}
