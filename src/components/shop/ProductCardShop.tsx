import { Link } from 'react-router-dom';
import type { ProductResponse } from '../../types/product.types';
import { ShoppingCart } from 'lucide-react';

function ProductCardShop({ product }: { product: ProductResponse }) {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <article className="group bg-gray-200/20 rounded-xl p-2 shadow-md mb-2 h-fit">
      <Link to={`/tienda/${product.id}`} className="block">
        <div className="relative aspect-3/4 overflow-hidden rounded-xl">
          <img
            src={product.images[0]?.url}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <button
            type="button"
            aria-label={`Agregar ${product.name} al carrito de compras`}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-xl p-2 bg-gray-200 hover:bg-white"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <span className="flex gap-2 items-center">
              <ShoppingCart size={20} /> Añadir al carrito
            </span>
          </button>
        </div>

        <div className="mt-4">
          <p className="text-sm text-text-secondary">{product.category.name}</p>

          <h3 className="mt-1 font-medium text-text-primary">{product.name}</h3>

          <p className="mt-2 font-semibold text-text-primary">{formattedPrice}</p>
        </div>
      </Link>
    </article>
  );
}

export default ProductCardShop;
