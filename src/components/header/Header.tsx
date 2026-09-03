import { ShoppingBag } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { useAuthStore } from '@/stores/authStore';
import type { NavigationLinks } from '@/types/shop.types';
import UserMenu from './UserMenu';
import HeaderSearch from './HeaderSearch';

const navigationLinks: NavigationLinks = [
  {
    label: 'Tienda',
    to: '/tienda',
  },
  {
    label: 'Hombre',
    to: '/tienda?gender=hombre',
  },
  {
    label: 'Mujer',
    to: '/tienda?gender=mujer',
  },
  {
    label: 'Nosotros',
    to: '/nosotros',
  },
];

function Header() {
  const { user } = useAuthStore();

  return (
    <header className="border-b border-[#DCCEBE]/70 bg-[#FAF8F5]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="font-heading text-[48px] font-semibold tracking-tight text-primary">
          Clothy
        </Link>

        {/* NAV LINKS */}
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `relative py-2 text-sm font-bold transition-colors ${
                  isActive ? 'text-[#C97B63]' : 'text-[#242424] hover:text-[#C97B63]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* ADMIN */}
          {user?.role === 'admin' && (
            <Link
              to="/admin"
              className="hidden rounded-full px-4 py-2 text-sm font-bold text-[#242424] transition-colors hover:bg-[#DCCEBE]/45 hover:text-[#C97B63] sm:block"
            >
              Admin
            </Link>
          )}

          {/* SEARCH */}
          <HeaderSearch />

          {/* USER */}
          <UserMenu />

          {/* CART */}
          <NavLink
            to="/carrito"
            aria-label="Ver carrito"
            className={({ isActive }) =>
              `
              relative flex size-10 items-center justify-center rounded-full
              text-[#242424] transition-colors
              hover:bg-[#DCCEBE]/45 hover:text-[#C97B63]
              ${isActive ? 'bg-secondary text-primary' : ''}
              `
            }
          >
            <ShoppingBag size={20} strokeWidth={1.8} />

            <span className="absolute right-0.5 top-0.5 flex size-4 items-center justify-center rounded-full bg-[#C97B63] text-[10px] font-semibold text-white">
              0
            </span>
          </NavLink>

          {/* MOBILE MENU */}
          <button
            type="button"
            aria-label="Abrir menú"
            className="flex size-10 items-center justify-center rounded-full text-[#242424] transition-colors hover:bg-[#DCCEBE]/45 lg:hidden"
          >
            <MobileMenu navLinks={navigationLinks} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
