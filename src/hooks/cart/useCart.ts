import { getCart } from '@/services/cart.service';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: getCart,
  });
};

export default useCart;
