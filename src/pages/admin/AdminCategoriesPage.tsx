import { Edit3, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { AdminEmptyState, AdminErrorState, AdminLoadingRows } from '@/components/admin/AdminState';
import { CategoryForm } from '@/components/admin/CategoryForm';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import useCategories from '@/hooks/category/useCategories';
import useDeleteCategory from '@/hooks/category/useDeleteCategory';
import type { CategoryResponse } from '@/types/category.types';

export default function AdminCategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryResponse | undefined>();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<CategoryResponse | null>(null);
  const categoriesQuery = useCategories();
  const deleteCategory = useDeleteCategory();
  const categories = categoriesQuery.data ?? [];
  const openNewForm = () => {
    setSelectedCategory(undefined);
    setIsFormOpen(true);
  };
  const openEditForm = (category: CategoryResponse) => {
    setSelectedCategory(category);
    setIsFormOpen(true);
  };
  const action = (
    <button
      type="button"
      onClick={openNewForm}
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
    >
      <Plus size={18} />
      Nueva categoría
    </button>
  );

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Categorías</h1>
          <p className="mt-2 text-text-secondary">
            Gestioná las colecciones de productos de la tienda.
          </p>
        </div>
        {action}
      </div>
      {categoriesQuery.isPending ? (
        <div className="mt-8">
          <AdminLoadingRows rows={3} />
        </div>
      ) : categoriesQuery.isError ? (
        <AdminErrorState />
      ) : categories.length === 0 ? (
        <div className="mt-8">
          <AdminEmptyState
            title="No hay categorías"
            description="Creá la primera categoría para organizar el catálogo."
            action={action}
          />
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border-soft bg-surface shadow-sm">
          <table className="min-w-175 w-full text-left text-sm">
            <thead className="bg-surface-soft text-text-secondary">
              <tr>
                <th className="px-5 py-4 font-semibold">Imagen</th>
                <th className="px-5 py-4 font-semibold">Nombre</th>
                <th className="px-5 py-4 font-semibold">Estado</th>
                <th className="px-5 py-4 text-right font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-5 py-4">
                    <img
                      src={category.image.url}
                      alt=""
                      className="size-15 rounded-lg bg-surface-muted object-cover"
                    />
                  </td>
                  <td className="px-5 py-4 font-semibold text-text-primary">{category.name}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${category.active ? 'bg-success-soft text-success' : 'bg-surface-muted text-text-secondary'}`}
                    >
                      {category.active ? 'Activa' : 'Inactiva'}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => openEditForm(category)}
                        aria-label={`Editar ${category.name}`}
                        className="rounded-lg p-2 text-primary hover:bg-secondary"
                      >
                        <Edit3 size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCategoryToDelete(category)}
                        aria-label={`Eliminar ${category.name}`}
                        className="rounded-lg p-2 text-error hover:bg-error-soft"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isFormOpen && (
        <CategoryForm category={selectedCategory} onClose={() => setIsFormOpen(false)} />
      )}
      {categoryToDelete && (
        <ConfirmDialog
          title="¿Eliminar categoría?"
          description={`La categoría “${categoryToDelete.name}” se eliminará de forma permanente.`}
          isPending={deleteCategory.isPending}
          onCancel={() => setCategoryToDelete(null)}
          onConfirm={() =>
            deleteCategory.mutate(categoryToDelete.id, {
              onSuccess: () => setCategoryToDelete(null),
            })
          }
        />
      )}
    </div>
  );
}
