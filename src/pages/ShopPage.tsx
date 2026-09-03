import { Filters } from '@/components/shop/Filters';
import { Pagination } from '@/components/shop/Pagination';
import ProductGrid from '@/components/shop/ProductGrid';
import { ShopHeader } from '@/components/shop/ShopHeader';
import useCategories from '@/hooks/category/useCategories';
import useProducts from '@/hooks/product/useProducts';
import type { HandlerFilterChangeNames } from '@/types/shop.types';
import { getProductParamsFromUrl } from '@/utils/productParams';
import { useSearchParams } from 'react-router-dom';

const ShopPage = () => {
  //URL SEARCH PARAMS
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  const filters = getProductParamsFromUrl(urlSearchParams);
  const limit = 12;

  //ESTADO ASYNC DE PRODUCTOS
  const { data: productData, isPending, isError } = useProducts({ ...filters, limit });
  //ESTADO ASYNC DE CATEGORIAS
  const { data: categoryData } = useCategories();

  // HANDLERS
  const handleFilterChange = (filter: HandlerFilterChangeNames, value: string) => {
    setUrlSearchParams((prev) => {
      if (value) {
        prev.set(filter, value);
      } else {
        prev.delete(filter);
      }

      prev.set('page', '1');

      return prev;
    });
  };

  const handlePricesChange = (values: [number, number]) => {
    setUrlSearchParams((prev) => {
      prev.set('minPrice', String(values[0]));
      prev.set('maxPrice', String(values[1]));
      prev.set('page', '1');

      return prev;
    });
  };

  const handlePageChange = (page: number) => {
    setUrlSearchParams((prev) => {
      prev.set('page', String(page));
      return prev;
    });
  };

  return (
    <main className="mx-auto max-w-7xl px-8 py-10 lg:px-12">
      <ShopHeader
        onSortChange={handleFilterChange}
        sort={filters.sort}
        totalResults={productData?.totalResults ?? null}
      />

      <section className="mt-10 grid md:grid-cols-[240px_minmax(0,1fr)] gap-8">
        <Filters
          categories={categoryData ?? null}
          filters={filters}
          onFilterChange={handleFilterChange}
          onPricesChange={handlePricesChange}
        />

        <ProductGrid
          products={productData?.products || []}
          isPending={isPending}
          isError={isError}
        />
      </section>

      {productData && (
        <Pagination
          currentPage={filters.page}
          totalResults={productData.totalResults}
          limit={limit}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
};

export default ShopPage;
