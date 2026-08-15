import type { priceSearchParam } from '@/types/shop.types';
import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';

export function PriceFilter({
  priceSearchParam,
  onPricesChange,
}: {
  priceSearchParam: priceSearchParam;
  onPricesChange: (values: [number, number]) => void;
}) {
  const { minPrice, maxPrice } = priceSearchParam;

  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  return (
    <section className="border-b border-gray-200 py-6">
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-900">Precio</h3>

      <Slider.Root
        className="relative flex h-5 w-full touch-none select-none items-center"
        value={priceRange}
        onValueChange={(value) => setPriceRange(value as [number, number])}
        onValueCommit={(value) => {
          onPricesChange(value as [number, number]);
        }}
        min={0}
        max={150000}
        step={1000}
        minStepsBetweenThumbs={1}
      >
        <Slider.Track className="relative h-1 grow overflow-hidden rounded-full bg-gray-200">
          <Slider.Range className="absolute h-full bg-[#9B4F36]" />
        </Slider.Track>

        <Slider.Thumb
          className="block h-4 w-4 rounded-full border-2 border-[#9B4F36] bg-white shadow-sm outline-none transition hover:scale-110 focus:ring-2 focus:ring-[#9B4F36]/30"
          aria-label="Precio mínimo"
        />

        <Slider.Thumb
          className="block h-4 w-4 rounded-full border-2 border-[#9B4F36] bg-white shadow-sm outline-none transition hover:scale-110 focus:ring-2 focus:ring-[#9B4F36]/30"
          aria-label="Precio máximo"
        />
      </Slider.Root>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <span>{priceRange[0]}</span>
        <span>{priceRange[1]}</span>
      </div>
    </section>
  );
}
