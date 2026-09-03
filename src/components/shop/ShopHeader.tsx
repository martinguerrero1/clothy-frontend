export function ShopHeader({
  totalResults,
  sort = 'newest',
  onSortChange,
}: {
  totalResults: string | null;
  sort?: string;
  onSortChange: (filter: 'sort', value: string) => void;
}) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Todos los productos</h1>

        <p className="mt-1 text-sm text-gray-500">
          {totalResults ? `Mostrando ${totalResults} resultados` : 'No hay ningún resultado'}
        </p>
      </div>

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
    </header>
  );
}
