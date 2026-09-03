import type { HandlerFilterChangeNames } from '@/types/shop.types';
import type { CategoryResponse } from '../../../types/category.types';

export function CategoryFilter({
  categories,
  categorySearchParam,
  onFilterChange,
}: {
  categories: CategoryResponse[] | null;
  categorySearchParam?: string;
  onFilterChange: (filter: HandlerFilterChangeNames, value: string) => void;
}) {
  return (
    <section className="border-b border-[#e5d8ce] py-6">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
        Categoría
      </h3>

      <div className="space-y-3">
        {categories ? (
          categories.map((category) => (
            <label
              key={category.id}
              className="flex cursor-pointer items-center gap-3 text-sm text-[#6f625b]"
            >
              <input
                type="checkbox"
                value={category.slug}
                checked={categorySearchParam === category.slug}
                onChange={(e) => onFilterChange('category', e.target.checked ? e.target.value : '')}
                className="h-4 w-4 rounded border-[#e2d4ca] text-[#9b4f36] accent-[#9b4f36] focus:ring-[#9b4f36]"
              />

              <span>{category.name}</span>
            </label>
          ))
        ) : (
          <p className="text-sm text-gray-500">Hubo un error en la carga de categorias.</p>
        )}
      </div>
    </section>
  );
}
