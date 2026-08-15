import type { ProductResponse } from '@/types/product.types';
import ProductCardShop from './ProductCardShop';
import ProductCardShopSkeleton from '../skeletons/ProductCardShopSkeleton';
import { ErrorState } from '../ui/ErrorState';

export default function ProductGrid({
  products,
  isPending,
  isError,
}: {
  products: ProductResponse[];
  isPending: boolean;
  isError: boolean;
}) {
  if (isPending) {
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCardShopSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <ErrorState />;
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCardShop key={product.id} product={product} />
      ))}
    </div>
  );
}
