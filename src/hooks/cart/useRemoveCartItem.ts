import { removeCartItem } from '@/services/cart.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: string) => removeCartItem(productId),

    onSuccess: () => {
      toast.success('Producto eliminado del carrito');
      queryClient.invalidateQueries({ queryKey: ['cart'] });
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

export default useRemoveCartItem;
