import type { CategoryResponse } from '@/types/category.types';
import { CategoryFilter } from './filters/CategoryFilter';
import { GenderFilter } from './filters/GenderFilter';
import { PriceFilter } from './filters/PriceFilter';
import type { HandlerFilterChangeNames, priceSearchParam, ShopFilters } from '@/types/shop.types';

export function Filters({
  categories,
  filters,
  onFilterChange,
  onPricesChange,
}: {
  categories: CategoryResponse[] | null;
  filters: ShopFilters;
  onFilterChange: (filter: HandlerFilterChangeNames, value: string) => void;
  onPricesChange: (values: [number, number]) => void;
}) {
  const priceFilters: priceSearchParam = {
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
  };

  return (
    <aside className="w-full">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
      </div>

      <div>
        <CategoryFilter
          categories={categories}
          categorySearchParam={filters.category}
          onFilterChange={onFilterChange}
        />

        <GenderFilter genderSearchParam={filters.gender} onFilterChange={onFilterChange} />

        <PriceFilter priceSearchParam={priceFilters} onPricesChange={onPricesChange} />
      </div>
    </aside>
  );
}
