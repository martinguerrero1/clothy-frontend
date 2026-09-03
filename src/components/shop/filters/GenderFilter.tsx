import type { HandlerFilterChangeNames } from '@/types/shop.types';

export function GenderFilter({
  genderSearchParam,
  onFilterChange,
}: {
  genderSearchParam?: string;
  onFilterChange: (filter: HandlerFilterChangeNames, value: string) => void;
}) {
  const genders = ['hombre', 'mujer', 'unisex'];

  return (
    <section className="border-b border-gray-200 py-6">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">Género</h3>

      <div className="space-y-3">
        {genders.map((gender) => (
          <label
            key={gender}
            className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
          >
            <input
              type="checkbox"
              value={gender}
              checked={genderSearchParam === gender}
              onChange={(e) => onFilterChange('gender', e.target.checked ? e.target.value : '')}
              className="h-4 w-4 rounded border-gray-300 text-[#9b4f36] accent-[#9b4f36] focus:ring-[#9b4f36]"
            />

            <span className="capitalize">{gender}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
