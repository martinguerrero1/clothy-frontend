import { clearCart } from '@/services/cart.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'sonner';

const useClearCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: clearCart,

    onSuccess: () => {
      toast.success('Carrito vaciado correctamente');
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

export default useClearCart;
