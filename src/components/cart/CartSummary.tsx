import type { CartItemType } from '@/types/cart.types';
import { ShieldCheck } from 'lucide-react';

const CartSummary = ({ items }: { items: CartItemType[] }) => {
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <aside className="rounded-xl border border-stone-200 bg-[#f1eeee] p-8">
      <h2 className="text-2xl font-semibold text-neutral-900">Resumen del pedido</h2>

      <div className="my-6 border-t border-[#d8c7c0]" />

      {/* Subtotal */}
      <div className="flex items-center justify-between">
        <span className="text-base text-stone-600">Subtotal</span>

        <span className="text-base text-stone-700">${subtotal.toFixed(2)}</span>
      </div>

      {/* Envío */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-base text-stone-600">Envío</span>

        <span className="text-base text-[#6d7651]">Gratis</span>
      </div>

      {/* Descuento */}
      {/* <div className="mt-12">
        <label
          htmlFor="discount"
          className="mb-2 block text-sm font-medium text-neutral-800"
        >
          Código de descuento
        </label>

        <div className="flex">
          <input
            id="discount"
            type="text"
            placeholder="Ingresa tu código"
            className="min-w-0 flex-1 rounded-l-lg border border-[#d8c7c0] bg-white px-4 py-2 text-sm outline-none placeholder:text-stone-400 focus:border-[#994f36]"
          />

          <button
            type="button"
            className="rounded-r-lg bg-[#e8ddd7] px-5 text-sm text-stone-600 transition-colors hover:bg-[#dfd1ca]"
          >
            Aplicar
          </button>
        </div>
      </div> */}

      <div className="my-8 border-t border-[#d8c7c0]" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold text-neutral-900">Total</span>

        <span className="text-3xl font-semibold text-[#994f36]">${subtotal.toFixed(2)}</span>
      </div>

      {/* Checkout */}
      <button
        type="button"
        className="mt-10 w-full rounded-xl bg-[#994f36] py-5 text-xl font-medium text-white shadow-sm transition-colors hover:bg-[#87442f]"
      >
        Finalizar compra
      </button>

      {/* Compra segura */}
      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-stone-600">
        <ShieldCheck size={17} strokeWidth={1.8} />

        <span>Compra segura y protegida</span>
      </div>
    </aside>
  );
};

export default CartSummary;
