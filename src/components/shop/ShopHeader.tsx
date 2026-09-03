import { useState } from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

import type { CategoryResponse } from '@/types/category.types';
import type { HandlerFilterChangeNames } from '@/types/shop.types';
import type { GetProductsParams } from '@/types/product.types';
import { Filters } from './Filters';

type ProductFilters = Pick<GetProductsParams, 'category' | 'gender' | 'minPrice' | 'maxPrice'>;

export function ShopHeader({
  totalResults,
  sort = 'newest',
  onSortChange,
  categories,
  filters,
  onFilterChange,
  onPricesChange,
}: {
  totalResults: string | null;
  sort?: string;
  onSortChange: (filter: 'sort', value: string) => void;

  categories: CategoryResponse[] | null;
  filters: ProductFilters;
  onFilterChange: (filter: HandlerFilterChangeNames, value: string) => void;
  onPricesChange: (values: [number, number]) => void;
}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Todos los productos</h1>

        <p className="mt-1 text-sm text-gray-500">
          {totalResults ? `Mostrando ${totalResults} resultados` : 'No hay ningún resultado'}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Ordenamiento */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-gray-500">
            Ordenar por:
          </label>

          <select
            id="sort"
            value={sort}
            onChange={(event) => onSortChange('sort', event.target.value)}
            className="w-48 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 outline-none transition focus:border-[#9B4F36] focus:ring-1 focus:ring-[#9B4F36]"
          >
            <option value="newest">Más nuevos</option>
            <option value="best-sellers">Más vendidos</option>
          </select>
        </div>

        {/* Filtros: visible hasta antes de lg */}
        <div className="relative md:hidden">
          <button
            type="button"
            onClick={() => setShowFilters((prev) => !prev)}
            className="flex w-full items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 sm:w-auto"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal size={16} />
              Filtros
            </span>

            <ChevronDown
              size={16}
              className={`transition-transform ${showFilters ? 'rotate-180' : ''}`}
            />
          </button>

          {showFilters && (
            <div className="absolute right-0 z-20 mt-2 w-[min(90vw,360px)] rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
              <Filters
                categories={categories}
                filters={filters}
                onFilterChange={onFilterChange}
                onPricesChange={onPricesChange}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
