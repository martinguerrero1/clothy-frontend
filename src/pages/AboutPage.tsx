// AboutPage.tsx

import { Leaf, Recycle, ShieldCheck, HandHeart, ArrowRight } from 'lucide-react';

function AboutPage() {
  return (
    <main className="bg-white text-stone-800">
      {/* =========================================================
          HERO — Nuestra esencia
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Texto */}
          <div className="max-w-xl">
            <span className="inline-block rounded-md bg-lime-100 px-3 py-1 text-xs font-medium uppercase tracking-widest text-lime-800">
              Nuestra esencia
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Creamos prendas que abrazan tu día a día.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg">
              En Clothy, creemos que la moda no debería ser una complicación, sino un refugio.
              Diseñamos para personas que buscan la belleza en lo cotidiano y la comodidad en lo
              auténtico.
            </p>

            <a
              href="/tienda"
              className="mt-8 inline-flex items-center rounded-lg bg-[#9b4f36] px-7 py-4 text-base font-medium text-white shadow-sm transition hover:bg-[#843f2b]"
            >
              Explorar la colección
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Imagen */}
          <div className="overflow-hidden rounded-[2rem] bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85"
              alt="Mujer disfrutando de un momento de tranquilidad"
              className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          VALORES
      ========================================================= */}
      <section className="bg-stone-50 px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Título */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              Nuestros Valores
            </h2>

            <p className="mt-3 text-stone-600">El compromiso que tenemos en cada hilo.</p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Valor 1 */}
            <article className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 text-lime-800">
                <Leaf className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-stone-900">Materiales de calidad</h3>

              <p className="mt-3 text-sm leading-6 text-stone-600">
                Fibras naturales seleccionadas por su suavidad y resistencia al tiempo.
              </p>
            </article>

            {/* Valor 2 */}
            <article className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 text-lime-800">
                <Recycle className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-stone-900">Prácticas sostenibles</h3>

              <p className="mt-3 text-sm leading-6 text-stone-600">
                Minimizamos nuestra huella hídrica y eliminamos plásticos de un solo uso.
              </p>
            </article>

            {/* Valor 3 */}
            <article className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 text-lime-800">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-stone-900">Diseñado para durar</h3>

              <p className="mt-3 text-sm leading-6 text-stone-600">
                Aislados de las tendencias pasajeras para crear piezas atemporales.
              </p>
            </article>

            {/* Valor 4 */}
            <article className="rounded-xl bg-white p-8 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 text-lime-800">
                <HandHeart className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-stone-900">Producción responsable</h3>

              <p className="mt-3 text-sm leading-6 text-stone-600">
                Colaboramos con talleres locales que garantizan el bienestar humano.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARTESANÍA / CERCANÍA
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Imagen */}
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
              alt="Trabajo artesanal con textiles"
              className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[500px]"
            />
          </div>

          {/* Texto */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold leading-tight text-[#9b4f36] sm:text-4xl lg:text-5xl">
              Cercanía en cada detalle.
            </h2>

            <p className="mt-6 leading-7 text-stone-600">
              Nuestra sede está en un pequeño rincón donde el tiempo parece detenerse. Desde allí,
              supervisamos que cada botón, cada costura y cada empaque llegue a tus manos con el
              cariño con el que fue concebido.
            </p>

            <a
              href="/nosotros"
              className="mt-8 inline-flex items-center text-sm font-semibold text-[#9b4f36] transition hover:text-[#843f2b]"
            >
              Conoce a nuestro equipo
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
