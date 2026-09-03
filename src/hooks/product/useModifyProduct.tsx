import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { modifyProduct } from '@/services/product.service';
import type { ProductResponse } from '@/types/product.types';

type ModifyProductVariables = {
  id: string;
  formData: FormData;
};

export default function useModifyProduct() {
  const queryClient = useQueryClient();

  return useMutation<ProductResponse, Error, ModifyProductVariables>({
    mutationFn: ({ id, formData }) => modifyProduct(id, formData),

    onSuccess: (product) => {
      toast.success('Producto actualizado correctamente');

      queryClient.invalidateQueries({
        queryKey: ['products'],
      });

      queryClient.invalidateQueries({
        queryKey: ['product', product.id],
      });
    },

    onError: (error) => {
      toast.error(error.message || 'No se pudo actualizar el producto');
    },
  });
}
