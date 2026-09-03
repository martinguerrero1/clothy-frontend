import { Link } from 'react-router-dom';
import type { ProductResponse } from '../../types/product.types';
import { ShoppingBag } from 'lucide-react';
import useAddToCart from '@/hooks/cart/useAddToCart';

function ProductCardNewArrivals({ product }: { product: ProductResponse }) {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(product.price);

  const { mutate: addToCart, isPending } = useAddToCart();

  return (
    <article className="group relative bg-gray-200/20 rounded-xl p-2 shadow-md mb-2">
      <Link
        to={`/tienda/${product.id}`}
        className="absolute inset-0 z-0"
        aria-label={`Ver ${product.name}`}
      />

      <div className="relative z-0 pointer-events-none">
        <div className="relative aspect-3/4 overflow-hidden rounded-xl">
          <img
            src={product.images[0]?.url}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <button
            type="button"
            aria-label={`Agregar ${product.name} al carrito de compras`}
            className="pointer-events-auto absolute bottom-2 left-1/2 z-10 -translate-x-1/2 rounded-xl bg-gray-200 p-2 hover:bg-white"
            disabled={isPending}
            onClick={() => {
              addToCart({ productId: product.id, quantity: 1 });
            }}
          >
            <span className="flex items-center gap-2">
              <ShoppingBag size={20} /> Agregar
            </span>
          </button>
        </div>

        <div className="mt-4">
          <p className="text-sm text-text-secondary">{product.category.name}</p>

          <h3 className="mt-1 font-medium text-text-primary">{product.name}</h3>

          <p className="mt-2 font-semibold text-text-primary">{formattedPrice}</p>
        </div>
      </div>
    </article>
  );
}

export default ProductCardNewArrivals;
