import { Link } from 'react-router-dom';
import heroImage from '../assets/images/HomePage_Hero.png';
import CategoriesSection from '../components/category/CategorySection';

function HomePage() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden sm:min-h-[620px] lg:min-h-[680px]">
        <img
          src={heroImage}
          alt="Pareja vistiendo prendas casuales de Clothy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/65 to-transparent" />

        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16 sm:min-h-[620px] sm:px-8 lg:min-h-[680px] lg:px-12">
          <div className="max-w-xl">
            <span className="inline-flex rounded-md bg-[#DCCEBE]/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[#6F5E53]">
              Nueva temporada
            </span>

            <h1 className="mt-6 max-w-lg text-4xl font-semibold leading-tight tracking-tight text-[#242424] sm:text-5xl lg:text-6xl">
              Moda para tu día a día
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#5F5A57] sm:text-lg">
              Descubre prendas diseñadas para acompañarte en cada momento, combinando comodidad
              excepcional con un estilo contemporáneo y minimalista.
            </p>

            <Link
              to="/tienda"
              className="mt-8 inline-flex min-h-13 items-center justify-center rounded-md bg-[#A45339] px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8F452F] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A45339]"
            >
              Explorar categorías
            </Link>
          </div>
        </div>
      </section>

      {/* Próximamente */}
      {/* <CategoriesSection /> */}
      <CategoriesSection />
      {/* <NewArrivalsSection /> */}
      {/* <BestSellersSection /> */}
    </>
  );
}

export default HomePage;
