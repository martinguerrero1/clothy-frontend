import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCarousel from './ProductCarousel';
import { products } from '../../data/product.data';

function NewArrivalsSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
              Recién llegados
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              Nuevos ingresos
            </h2>
          </div>

          <Link
            to="/shop"
            className="hidden items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-primary sm:flex"
          >
            Ver todos
            <ArrowRight size={17} />
          </Link>
        </div>

        <ProductCarousel products={products} />

        <Link
          to="/shop"
          className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-text-primary sm:hidden"
        >
          Ver todos
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export default NewArrivalsSection;
