import { ScanFace, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const shopLinks = [
  { label: 'Hombre', to: '/tienda?categoria=hombre' },
  { label: 'Mujer', to: '/tienda?categoria=mujer' },
  { label: 'Accesorios', to: '/tienda?categoria=accesorios' },
  { label: 'Colecciones', to: '/colecciones' },
];

const serviceLinks = [
  { label: 'Envío gratis', to: '/envios' },
  { label: 'Devoluciones fáciles', to: '/devoluciones' },
  { label: 'Compra segura', to: '/compra-segura' },
  { label: 'Contacto', to: '/contacto' },
];

function Footer() {
  return (
    <footer className="bg-[#EAD8C5] text-[#5F554D]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr_1.15fr] lg:gap-14">
          <section>
            <Link
              to="/"
              className="inline-block text-2xl font-semibold tracking-tight text-[#5A4A40]"
            >
              Clothy
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#6F6259]">
              Moda consciente y cómoda para el ritmo de vida actual. Calidad que se siente bien.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram de Clothy"
                className="flex size-8 items-center justify-center rounded-full text-[#5A4A40] transition-colors hover:bg-white/40 hover:text-[#A45339]"
              >
                <ScanFace size={18} strokeWidth={1.8} />
              </a>

              <a
                href="#"
                aria-label="Compartir Clothy"
                className="flex size-8 items-center justify-center rounded-full text-[#5A4A40] transition-colors hover:bg-white/40 hover:text-[#A45339]"
              >
                <Share2 size={18} strokeWidth={1.8} />
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B5C52]">
              Tienda
            </h2>

            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Tienda">
              {shopLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="w-fit text-sm transition-colors hover:text-[#A45339]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B5C52]">
              Servicio
            </h2>

            <nav className="mt-4 flex flex-col gap-2.5" aria-label="Servicio">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="w-fit text-sm transition-colors hover:text-[#A45339]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6B5C52]">
              Newsletter
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#6F6259]">
              Suscríbete para recibir ofertas exclusivas.
            </p>

            <form className="mt-4 flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Correo electrónico
              </label>

              <input
                id="newsletter-email"
                type="email"
                placeholder="Tu email"
                className="h-11 rounded-md border border-white/80 bg-white px-4 text-sm text-[#242424] outline-none transition focus:border-[#C97B63] focus:ring-2 focus:ring-[#C97B63]/20"
              />

              <button
                type="submit"
                className="h-11 rounded-md bg-[#A45339] text-sm font-semibold text-white transition-colors hover:bg-[#8F452F]"
              >
                Unirme
              </button>
            </form>
          </section>
        </div>

        <div className="mt-12 border-t border-[#D9C5B1] pt-6">
          <div className="flex flex-col gap-4 text-xs text-[#74675E] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2024 Clothy. Todos los derechos reservados.</p>

            <nav
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
              aria-label="Información legal"
            >
              <Link to="/privacidad" className="hover:text-[#A45339]">
                Privacidad
              </Link>

              <Link to="/terminos" className="hover:text-[#A45339]">
                Términos
              </Link>

              <Link to="/cookies" className="hover:text-[#A45339]">
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
