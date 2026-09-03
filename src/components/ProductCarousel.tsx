import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import ProductCardNewArrivals from './new-arrivals/ProductCardNewArrivals';
import type { ProductResponse } from '../types/product.types';

function ProductCarousel({ products }: { products: ProductResponse[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex touch-pan-y">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                min-w-0
                flex-[0_0_85%]
                pl-4
                sm:flex-[0_0_50%]
                md:flex-[0_0_33.333%]
                lg:flex-[0_0_25%]
              "
            >
              <ProductCardNewArrivals product={product} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Ver productos anteriores"
        className="
          absolute left-2 top-1/2 z-10 hidden size-11 -translate-y-1/2
          items-center justify-center rounded-full bg-white shadow-md
          transition-transform hover:scale-105 sm:flex
        "
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Ver productos siguientes"
        className="
          absolute right-2 top-1/2 z-10 hidden size-11 -translate-y-1/2
          items-center justify-center rounded-full bg-white shadow-md
          transition-transform hover:scale-105 sm:flex
        "
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

export default ProductCarousel;
