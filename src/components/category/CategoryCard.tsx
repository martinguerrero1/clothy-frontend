import { Link } from 'react-router-dom';
import type { CategoryCardProps } from '../../types/category.types';
import { ArrowRight } from 'lucide-react';

function CategoryCard({ category }: { category: CategoryCardProps }) {
  return (
    <Link
      to=""
      className={`
        group relative min-h-55 overflow-hidden rounded-2xl
        ${category.className}
      `}
    >
      <img
        src={category.imageUrl}
        alt={`Categoría ${category.name}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent transition-colors duration-300 group-hover:from-black/75" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
        <h3 className="text-2xl font-semibold tracking-tight">{category.name}</h3>

        <div className="mt-1 flex items-center gap-2">
          <ArrowRight
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
