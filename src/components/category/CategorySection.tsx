import CategoryCard from './CategoryCard';
import CategoryCardSkeleton from '../skeletons/CategoryCardSkeleton';
import type { categoriesLayouts } from '../../types/category.types';
import { getCategories } from '../../services/category.service';
import { useQuery } from '@tanstack/react-query';

//COMO YA NO ME FUNCIONA ESTA FORMA LO TENGO QUE HACER DINAMICO. QUIERO QUE EL SERVICIO DE OBTENER CATEGORIAS LE PASE LIMIT DE 4, Y QUE POR CARD VERIFIQUE SI ES X CATEGORIA TENGA CIERTAS CLASES, O SINO "".
const categoriesLayouts: categoriesLayouts = {
  remera: 'lg:row-span-2',
  abrigo: 'lg:col-span-2 lg:row-span-2',
  accesorios: '',
  calzado: '',
  pantalon: '',
};

function CategoriesSection() {
  //PETICION Y MANEJO ESTADOS ASINCRONICO
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ['CategoriesSection'], //la key verifica estado en cache
    queryFn: () => getCategories({ limit: 4 }), //servicio
    select: (categoriesResponse) => {
      return categoriesResponse.map((category) => {
        return {
          name: category.name,
          slug: category.slug,
          image: category.image.url,
          className: categoriesLayouts[category.slug],
        };
      });
    },
  });

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            Encuentra tu estilo
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Explora nuestras categorías
          </h2>
        </div>

        {/* CATEGORIES */}
        <div className="grid auto-rows-55 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-57.7">
          {isPending &&
            Object.entries(categoriesLayouts).map(([slug, layout]) => {
              return <CategoryCardSkeleton key={slug} layout={layout} />;
            })}

          {isError && (
            <div className="col-span-full flex min-h-72 flex-col items-center justify-center rounded-xl border p-6 text-center">
              <p className="font-medium">No pudimos cargar las categorías.</p>

              <button type="button" onClick={() => refetch()}>
                Reintentar
              </button>
            </div>
          )}

          {data?.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default CategoriesSection;
