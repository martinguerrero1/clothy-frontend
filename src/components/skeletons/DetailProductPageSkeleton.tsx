import { DetailProductGallerySkeleton } from './DetailProductGallerySkeleton';
import ProductCarouselSkeleton from './ProductCarouselSkeleton';

export function DetailProductPageSkeleton() {
  return (
    <main className="min-h-screen animate-pulse bg-white">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-4 w-12 rounded bg-gray-500" />
          <div className="h-4 w-2 rounded bg-gray-500" />
          <div className="h-4 w-16 rounded bg-gray-500" />
          <div className="h-4 w-2 rounded bg-gray-500" />
          <div className="h-4 w-20 rounded bg-gray-500" />
          <div className="h-4 w-2 rounded bg-gray-500" />
          <div className="h-4 w-32 rounded bg-gray-500" />
        </div>
      </div>

      {/* Product detail */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <DetailProductGallerySkeleton />

          {/* Product information */}
          <div className="flex flex-col">
            {/* Name */}
            <div className="h-10 w-3/4 rounded bg-gray-500 sm:h-11" />

            {/* Price */}
            <div className="mt-4 h-8 w-32 rounded bg-gray-500" />

            <div className="my-8 h-px bg-gray-500" />

            {/* Description */}
            <div className="h-4 w-28 rounded bg-gray-500" />

            <div className="mt-4 space-y-3">
              <div className="h-4 w-full rounded bg-gray-500" />
              <div className="h-4 w-5/6 rounded bg-gray-500" />
              <div className="h-4 w-4/6 rounded bg-gray-500" />
            </div>

            {/* Quantity */}
            <div className="mt-10 h-4 w-20 rounded bg-gray-500" />

            <div className="mt-4 flex gap-3">
              {/* Quantity selector */}
              <div className="flex h-12 overflow-hidden rounded-md border border-stone-200">
                <div className="w-12 bg-gray-500" />
                <div className="w-12 border-x border-stone-200 bg-stone-100" />
                <div className="w-12 bg-gray-500" />
              </div>

              {/* Add to cart */}
              <div className="h-12 w-48 rounded-md bg-gray-500" />
            </div>

            {/* Benefits */}
            <div className="mt-10 border-y border-stone-200 py-8">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-gray-500" />
                    <div className="h-3 w-20 rounded bg-gray-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
        <ProductCarouselSkeleton />
      </section>
    </main>
  );
}
