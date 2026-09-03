import { useState } from 'react';
import { Minus, Plus, ShoppingCart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { useParams } from 'react-router-dom';
import ProductCarousel from '@/components/ProductCarousel';
import { DetailProductPageSkeleton } from '@/components/skeletons/DetailProductPageSkeleton';
import { ErrorState } from '@/components/ui/ErrorState';
import useProductById from '@/hooks/product/useProductById';
import useProducts from '@/hooks/product/useProducts';

export function ProductDetailPage() {
  const { id = '' } = useParams();

  const { data: product, isPending, isError } = useProductById(id);
  const { data: bestSellersProducts } = useProducts({ sort: 'best-sellers', limit: 5 });

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (isPending) {
    return <DetailProductPageSkeleton />;
  }

  if (isError || !product) {
    return <ErrorState />;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* LINK */}
      {product && (
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-stone-500">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className="transition-colors hover:text-[#995337]">
                  Inicio
                </a>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <a
                  href={`/tienda?gender=${product.gender}`}
                  className="transition-colors hover:text-[#995337] capitalize"
                >
                  {product.gender}
                </a>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <a
                  href={`/tienda?gender=${product.gender}&category=${product.category.slug}`}
                  className="transition-colors hover:text-[#995337] capitalize"
                >
                  {product.category.slug}
                </a>
              </li>

              <li aria-hidden="true">/</li>

              <li className="font-medium text-[#995337]">{product.name}</li>
            </ol>
          </nav>
        </div>
      )}

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ==================== */}
          {/* GALERÍA */}
          {/* ==================== */}
          <div className="flex gap-4">
            <div className="flex w-20 flex-col gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.publicId}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                  className={`
                    aspect-square overflow-hidden rounded-md border
                    transition-all
                    ${
                      selectedImage === index
                        ? 'border-[#995337] ring-1 ring-[#995337]'
                        : 'border-stone-200 hover:border-stone-400'
                    }
                  `}
                >
                  <img
                    src={image.url}
                    alt={`${product.name} - imagen ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="aspect-4/5 flex-1 overflow-hidden rounded-md bg-stone-100">
              <img
                src={product.images[selectedImage].url}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* ==================== */}
          {/* INFORMACIÓN */}
          {/* ==================== */}
          <div className="flex flex-col">
            {/* Product name */}
            <div>
              <h1 className="text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
                {product.name}
              </h1>

              <p className="mt-2 text-2xl font-medium text-[#995337]">
                {formatPrice(product.price)}
              </p>
            </div>

            <div className="my-8 h-px bg-[#eadbd2]" />

            {/* Description */}
            <section aria-labelledby="description-title">
              <h2
                id="description-title"
                className="text-sm font-medium uppercase tracking-wide text-stone-600"
              >
                Descripción
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
                {product.description}
              </p>
            </section>

            {/* Quantity */}
            <section className="mt-10" aria-labelledby="quantity-title">
              <h2
                id="quantity-title"
                className="text-sm font-medium uppercase tracking-wide text-stone-600"
              >
                Cantidad
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {/* Quantity selector */}
                <div className="flex h-12 overflow-hidden rounded-md border border-[#e5d4ca]">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((prev) => {
                        if (prev <= 1) {
                          return prev;
                        }
                        return prev - 1;
                      })
                    }
                    disabled={quantity <= 1}
                    aria-label="Disminuir cantidad"
                    className="flex w-12 items-center justify-center text-stone-700 transition-colors hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="flex w-12 items-center justify-center border-x border-[#e5d4ca] text-sm">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    disabled={quantity >= product.stock}
                    aria-label="Aumentar cantidad"
                    className="flex w-12 items-center justify-center text-stone-700 transition-colors hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Add to cart */}
                <button
                  type="button"
                  disabled={product.stock <= 0}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-[#995337] px-6 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#84452d] disabled:cursor-not-allowed disabled:bg-stone-300 sm:flex-none"
                >
                  <ShoppingCart size={18} />

                  {product.stock > 0 ? 'Añadir al carrito' : 'Sin stock'}
                </button>
              </div>

              {product.stock > 0 && product.stock <= 5 && (
                <p className="mt-3 text-sm text-[#995337]">¡Últimas unidades disponibles!</p>
              )}
            </section>

            {/* Benefits */}
            <div className="mt-10 border-y border-[#eadbd2] py-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-3 text-center">
                  <Truck size={22} strokeWidth={1.5} className="text-[#995337]" />

                  <span className="text-xs uppercase tracking-wide text-stone-600">
                    Envío gratis
                  </span>
                </div>

                <div className="flex flex-col items-center gap-3 text-center">
                  <RotateCcw size={22} strokeWidth={1.5} className="text-[#995337]" />

                  <span className="text-xs uppercase tracking-wide text-stone-600">
                    Devoluciones
                  </span>
                </div>

                <div className="flex flex-col items-center gap-3 text-center">
                  <ShieldCheck size={22} strokeWidth={1.5} className="text-[#995337]" />

                  <span className="text-xs uppercase tracking-wide text-stone-600">
                    Compra segura
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {bestSellersProducts && (
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">
          <ProductCarousel products={bestSellersProducts.products} />
        </section>
      )}
    </main>
  );
}
