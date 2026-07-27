import ProductCardBestSeller from './ProductCardBestSeller';
import type { Product } from '../../types/product.types';
import { products } from '../../data/product.data';

export default function BestSellersSection() {
  const productos = products.slice(0, 3);

  return (
    <section className="flex flex-col gap-12 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-text-primary">Más Vendidos</h2>

        <p className="mt-2 text-lg text-text-secondary">Los favoritos de nuestra comunidad.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 px-16">
        {productos.map((product, index) => (
          <ProductCardBestSeller key={product.id} product={product} position={index + 1} />
        ))}
      </div>
    </section>
  );
}
