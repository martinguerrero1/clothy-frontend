import { categories } from '../../data/categories.data';
import CategoryCard from './CategoryCard';

function CategoriesSection() {
  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#C97B63]">
            Encuentra tu estilo
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#242424] sm:text-4xl">
            Explora nuestras categorías
          </h2>
        </div>

        <div className="grid auto-rows-55 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-57.7">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
