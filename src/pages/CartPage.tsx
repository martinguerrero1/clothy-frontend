import CartItemCard from '@/components/cart/CartItemCard';
import CartSummary from '@/components/cart/CartSummary';
import { ErrorState } from '@/components/ui/ErrorState';
import useCart from '@/hooks/cart/useCart';
import { ArrowLeft } from 'lucide-react';

const CartPage = () => {
  const { data: cart, isPending, isError } = useCart();

  if (isPending) {
    return (
      <main className="min-h-screen px-8 py-10">
        <h1 className="text-3xl font-semibold text-neutral-900">Tu Carrito</h1>

        <p className="mt-8 text-stone-500">Cargando carrito...</p>
      </main>
    );
  }

  if (isError) {
    return <ErrorState />;
  }

  const isEmpty = cart.items.length === 0;

  return (
    <main className="min-h-screen bg-[#fdfafa] px-8 py-10 lg:px-12 max-w-7xl mx-auto">
      <div className="mx-auto max-w-[1400px]">
        <h1 className="mb-6 text-4xl font-semibold text-neutral-900">Tu Carrito</h1>

        {isEmpty ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center">
            <h2 className="text-2xl font-medium text-neutral-900">Tu carrito está vacío</h2>

            <p className="mt-2 text-stone-500">Agregá productos para comenzar tu compra.</p>
          </div>
        ) : (
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* Productos */}
            <section className="space-y-6">
              {cart.items.map((item) => (
                <CartItemCard key={item.product.id} item={item} />
              ))}

              {/* Seguir comprando */}
              <button
                type="button"
                className="mt-4 flex items-center gap-2 text-sm font-medium text-[#994f36] transition-colors hover:text-[#7f3e2c]"
              >
                <ArrowLeft size={18} />

                <span>Seguir comprando</span>
              </button>
            </section>

            {/* Resumen */}
            <CartSummary items={cart.items} />
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
