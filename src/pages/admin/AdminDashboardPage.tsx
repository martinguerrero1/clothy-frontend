import { FolderKanban, Package, Tags } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdminErrorState, AdminLoadingRows } from '@/components/admin/AdminState';
import useCategories from '@/hooks/category/useCategories';
import useProducts from '@/hooks/product/useProducts';

const formatNumber = (value: number) => new Intl.NumberFormat('es-AR').format(value);

export default function AdminDashboardPage() {
  const productsQuery = useProducts({ limit: 12 });
  const categoriesQuery = useCategories();
  const isPending = productsQuery.isPending || categoriesQuery.isPending;

  if (productsQuery.isError || categoriesQuery.isError) return <AdminErrorState />;

  const products = productsQuery.data?.products ?? [];
  const categories = categoriesQuery.data ?? [];
  const totalProducts = Number(productsQuery.data?.totalResults ?? products.length);

  return (
    <div>
      <p className="text-sm font-semibold text-primary">Panel administrativo</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">Resumen general</h1>
      <p className="mt-2 text-text-secondary">Consultá el estado actual del catálogo de Clothy.</p>

      {isPending ? (
        <div className="mt-8">
          <AdminLoadingRows rows={3} />
        </div>
      ) : (
        <>
          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <DashboardCard
              icon={Package}
              label="Total de productos"
              value={formatNumber(totalProducts)}
              detail={`${products.filter((product) => product.active).length} visibles en esta página`}
            />
            <DashboardCard
              icon={Tags}
              label="Total de categorías"
              value={formatNumber(categories.length)}
              detail={`${categories.filter((category) => category.active).length} activas`}
            />
            <DashboardCard
              icon={FolderKanban}
              label="Stock disponible"
              value={formatNumber(products.reduce((total, product) => total + product.stock, 0))}
              detail="En los productos cargados"
            />
          </section>

          <section className="mt-8 rounded-2xl border border-border-soft bg-surface p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">Productos recientes</h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Últimos productos disponibles en el catálogo.
                </p>
              </div>
              <Link
                to="/admin/products"
                className="text-sm font-semibold text-primary hover:text-primary-hover"
              >
                Gestionar productos
              </Link>
            </div>
            {products.length === 0 ? (
              <p className="py-10 text-center text-sm text-text-secondary">
                Todavía no hay productos cargados.
              </p>
            ) : (
              <div className="mt-5 divide-y divide-border-soft">
                {products.slice(0, 5).map((product) => (
                  <div key={product.id} className="flex items-center gap-4 py-3">
                    <img
                      src={product.images[0]?.url}
                      alt=""
                      className="size-12 rounded-lg bg-surface-muted object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold">{product.name}</p>
                      <p className="text-sm text-text-secondary">{product.category.name}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${product.active ? 'bg-success-soft text-success' : 'bg-surface-muted text-text-secondary'}`}
                    >
                      {product.active ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

function DashboardCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof Package;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="rounded-2xl border border-border-soft bg-surface p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-sm font-semibold text-text-secondary">{label}</p>
        <div className="rounded-xl bg-secondary p-2 text-primary">
          <Icon size={21} />
        </div>
      </div>
      <p className="mt-4 text-4xl font-bold tracking-tight">{value}</p>
      <p className="mt-2 text-xs text-text-secondary">{detail}</p>
    </article>
  );
}
