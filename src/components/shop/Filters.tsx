import type { CategoryResponse } from '@/types/category.types';
import { CategoryFilter } from './filters/CategoryFilter';
import { GenderFilter } from './filters/GenderFilter';
import { PriceFilter } from './filters/PriceFilter';
import type { HandlerFilterChangeNames } from '@/types/shop.types';
import type { GetProductsParams } from '@/types/product.types';

type ProductFilters = Pick<GetProductsParams, 'category' | 'gender' | 'minPrice' | 'maxPrice'>;

export function Filters({
  categories,
  filters,
  onFilterChange,
  onPricesChange,
}: {
  categories: CategoryResponse[] | null;
  filters: ProductFilters;
  onFilterChange: (filter: HandlerFilterChangeNames, value: string) => void;
  onPricesChange: (values: [number, number]) => void;
}) {
  return (
    <aside className="w-full">
      <div>
        <CategoryFilter
          categories={categories}
          categorySearchParam={filters.category}
          onFilterChange={onFilterChange}
        />

        <GenderFilter genderSearchParam={filters.gender} onFilterChange={onFilterChange} />

        <PriceFilter
          priceParams={{ minPrice: filters.minPrice, maxPrice: filters.maxPrice }}
          onPricesChange={onPricesChange}
        />
      </div>
    </aside>
  );
}
