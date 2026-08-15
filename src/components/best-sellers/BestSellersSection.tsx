import ProductCardBestSeller from './ProductCardBestSeller';
import ProductCardBestSellerSkeleton from '../skeletons/ProductCardBestSellerSkeleton';
import useProducts from '@/hooks/useProducts';

export default function BestSellersSection() {
  const { data, isPending, isError, refetch } = useProducts({ sort: 'best-sellers' }, { limit: 3 });

  return (
    <section className="flex flex-col gap-12 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-text-primary">Más Vendidos</h2>

        <p className="mt-2 text-lg text-text-secondary">Los favoritos de nuestra comunidad.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 px-16">
        {isPending && [1, 2, 3].map((index) => <ProductCardBestSellerSkeleton key={index} />)}

        {isError && (
          <div className="col-span-full flex min-h-72 flex-col items-center justify-center rounded-xl border p-6 text-center">
            <p className="font-medium">No pudimos cargar los productos.</p>
            <button type="button" onClick={() => refetch()}>
              Reintentar
            </button>
          </div>
        )}

        {data?.products.map((product, index) => (
          <ProductCardBestSeller key={product.id} product={product} position={index + 1} />
        ))}
      </div>
    </section>
  );
}
