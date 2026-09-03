import type { NavigationLinks } from '@/types/shop.types';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function MobileMenu({ navLinks }: { navLinks: NavigationLinks }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Botón hamburguesa */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        className="flex items-center justify-center"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} strokeWidth={2.2} />}
      </button>

      {/* Menú */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-primary bg-white p-2 shadow-lg">
          <nav className="flex flex-col">
            {navLinks.map((nav) => (
              <Link to={nav.to} className="rounded-md px-3 py-2 hover:bg-gray-200">
                {nav.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
