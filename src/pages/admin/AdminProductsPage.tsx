import { Edit3, Plus, Power, Search } from 'lucide-react';
import { useState } from 'react';
import { AdminEmptyState, AdminErrorState, AdminLoadingRows } from '@/components/admin/AdminState';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import { ProductForm } from '@/components/admin/ProductForm';
import useCategories from '@/hooks/category/useCategories';
import useDeactivateProduct from '@/hooks/product/useDeactiveProduct';
import useProducts from '@/hooks/product/useProducts';
import type { ProductResponse } from '@/types/product.types';

const priceFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

export default function AdminProductsPage() {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | undefined>();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [productToDeactivate, setProductToDeactivate] = useState<ProductResponse | null>(null);
  const productsQuery = useProducts({ limit: 12 });
  const categoriesQuery = useCategories();
  const deactivateProduct = useDeactivateProduct();
  const products = productsQuery.data?.products ?? [];
  const filteredProducts = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  const openNewForm = () => {
    setSelectedProduct(undefined);
    setIsFormOpen(true);
  };
  const openEditForm = (product: ProductResponse) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const action = (
    <button
      type="button"
      onClick={openNewForm}
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
    >
      <Plus size={18} />
      Nuevo producto
    </button>
  );
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
          <p className="mt-2 text-text-secondary">Gestioná el inventario del catálogo.</p>
        </div>
        {action}
      </div>
      {productsQuery.isPending || categoriesQuery.isPending ? (
        <div className="mt-8">
          <AdminLoadingRows />
        </div>
      ) : productsQuery.isError || categoriesQuery.isError ? (
        <AdminErrorState />
      ) : products.length === 0 ? (
        <div className="mt-8">
          <AdminEmptyState
            title="No hay productos"
            description="Creá el primer producto para comenzar a gestionar el catálogo."
            action={action}
          />
        </div>
      ) : (
        <>
          <div className="relative mt-8 max-w-lg">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 text-text-secondary"
              size={19}
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar productos..."
              className="w-full rounded-xl border border-border bg-surface py-3 pr-4 pl-10 outline-none focus:border-primary"
            />
          </div>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-border-soft bg-surface shadow-sm">
            <table className="min-w-200 w-full text-left text-sm">
              <thead className="bg-surface-soft text-text-secondary">
                <tr>
                  <th className="px-5 py-4 font-semibold">Producto</th>
                  <th className="px-5 py-4 font-semibold">Categoría</th>
                  <th className="px-5 py-4 font-semibold">Precio</th>
                  <th className="px-5 py-4 font-semibold">Stock</th>
                  <th className="px-5 py-4 font-semibold">Estado</th>
                  <th className="px-5 py-4 text-right font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-soft">
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.images[0]?.url}
                          alt=""
                          className="size-12 rounded-lg bg-surface-muted object-cover"
                        />
                        <div>
                          <p className="font-semibold text-text-primary">{product.name}</p>
                          <p className="max-w-56 truncate text-xs text-text-secondary">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-text-secondary">{product.category.name}</td>
                    <td className="px-5 py-4 font-semibold">
                      {priceFormatter.format(product.price)}
                    </td>
                    <td className="px-5 py-4">
                      <span className={product.stock === 0 ? 'font-semibold text-error' : ''}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${product.active ? 'bg-success-soft text-success' : 'bg-surface-muted text-text-secondary'}`}
                      >
                        {product.active ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => openEditForm(product)}
                          aria-label={`Editar ${product.name}`}
                          className="rounded-lg p-2 text-primary hover:bg-secondary"
                        >
                          <Edit3 size={18} />
                        </button>
                        {product.active && (
                          <button
                            type="button"
                            onClick={() => setProductToDeactivate(product)}
                            aria-label={`Desactivar ${product.name}`}
                            className="rounded-lg p-2 text-error hover:bg-error-soft"
                          >
                            <Power size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredProducts.length === 0 && (
              <p className="p-8 text-center text-sm text-text-secondary">
                No encontramos productos con esa búsqueda.
              </p>
            )}
          </div>
        </>
      )}
      {isFormOpen && (
        <ProductForm
          product={selectedProduct}
          categories={categoriesQuery.data ?? []}
          onClose={() => setIsFormOpen(false)}
        />
      )}
      {productToDeactivate && (
        <ConfirmDialog
          title="¿Desactivar producto?"
          description={`El producto “${productToDeactivate.name}” dejará de estar disponible en la tienda.`}
          isPending={deactivateProduct.isPending}
          onCancel={() => setProductToDeactivate(null)}
          onConfirm={() =>
            deactivateProduct.mutate(productToDeactivate.id, {
              onSuccess: () => setProductToDeactivate(null),
            })
          }
        />
      )}
    </div>
  );
}
