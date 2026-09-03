import { Link } from 'react-router-dom';
import type { ProductResponse } from '../../types/product.types';

export default function ProductCardBestSeller({
  product,
  position,
}: {
  product: ProductResponse;
  position: number;
}) {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Link
      to={`/tienda/${product.id}`}
      className="flex items-center gap-4 rounded-2xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-sand">
        <img
          src={product.images[0]?.url}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <span className="line-clamp-2 text-lg font-semibold text-text-primary">{product.name}</span>

        <span className="mt-1 text-xl font-bold text-primary">{formattedPrice}</span>

        <span className="mt-2 text-sm font-medium text-text-secondary">
          <span className="border rounded-full px-2 py-1 mr-1">#{position}</span> Más vendido
        </span>
      </div>
    </Link>
  );
}
