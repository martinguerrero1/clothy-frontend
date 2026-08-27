import { addToCart } from '@/services/cart.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId, quantity }: { productId: string; quantity: number }) =>
      addToCart(productId, quantity),

    onSuccess: () => {
      toast.success('Producto agregado al carrito');
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

export default useAddToCart;
