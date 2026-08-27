import useRemoveCartItem from '@/hooks/cart/useRemoveCartItem';
import useUpdateCartItem from '@/hooks/cart/useUpdateCartItem';
import type { CartItemType } from '@/types/cart.types';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItemCard = ({ item }: { item: CartItemType }) => {
  const { product, quantity } = item;

  const { mutate: removeCartItemm } = useRemoveCartItem();
  const { mutate: updateCartItem } = useUpdateCartItem();

  return (
    <article className="flex min-h-[200px] gap-6 rounded-xl bg-white p-6 shadow-sm">
      {/* Imagen */}
      <div className="h-[155px] w-[125px] shrink-0 overflow-hidden rounded-lg">
        <img
          src={product.images[0].url}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Información */}
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-medium text-neutral-900">{product.name}</h2>

            {/* Lo dejamos preparado para agregar variantes después */}
            <p className="mt-1 text-sm text-stone-600">Producto de Clothy</p>
          </div>

          <button
            type="button"
            className="text-stone-300 transition-colors hover:text-stone-500"
            aria-label={`Eliminar ${product.name}`}
            onClick={() => removeCartItemm(product.id)}
          >
            <Trash2 size={18} strokeWidth={1.8} />
          </button>
        </div>

        <div className="mt-auto flex items-end justify-between">
          {/* Selector de cantidad */}
          <div className="flex h-8 items-center rounded-full border border-[#e3cfc5]">
            <button
              type="button"
              className="flex h-full w-9 items-center justify-center text-stone-700 transition-colors hover:text-[#994f36] disabled:cursor-not-allowed disabled:hover:text-black"
              aria-label="Disminuir cantidad"
              onClick={() => updateCartItem({ productId: product.id, quantity: quantity - 1 })}
              disabled={quantity <= 1}
            >
              <Minus size={14} />
            </button>

            <span className="w-8 text-center text-sm text-neutral-900">{quantity}</span>

            <button
              type="button"
              className="flex h-full w-9 items-center justify-center text-stone-700 transition-colors hover:text-[#994f36] disabled:cursor-not-allowed disabled:hover:text-black"
              aria-label="Aumentar cantidad"
              onClick={() => updateCartItem({ productId: product.id, quantity: quantity + 1 })}
              disabled={quantity >= product.stock}
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Precio */}
          <span className="text-2xl font-semibold text-[#994f36]">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CartItemCard;
