import { Boxes, LayoutDashboard, LogOut, Menu, Package, Tags, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

const navigationItems = [
  { label: 'Dashboard', to: '/admin', icon: LayoutDashboard, end: true },
  { label: 'Productos', to: '/admin/products', icon: Package },
  { label: 'Categorías', to: '/admin/categories', icon: Tags },
];

export default function AdminLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-background lg:flex">
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={closeMenu}
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-border-soft bg-surface px-5 py-6 transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <div>
            <p className="text-3xl font-bold tracking-tight text-primary">Clothy</p>
            <p className="mt-1 text-sm text-text-secondary">Panel de control</p>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            className="rounded-lg p-2 text-text-secondary lg:hidden"
          >
            <X size={21} />
          </button>
        </div>

        <nav aria-label="Navegación administrativa" className="mt-12 space-y-2">
          {navigationItems.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-secondary text-primary'
                    : 'text-text-warm hover:bg-surface-soft hover:text-primary'
                }`
              }
            >
              <Icon size={20} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t border-border-soft pt-5">
          <div className="mb-4 flex items-center gap-3 px-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-secondary font-semibold text-primary">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-text-primary">
                {user.name} {user.lastName}
              </p>
              <p className="text-xs text-text-secondary">Administrador</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-error transition-colors hover:bg-error-soft"
          >
            <LogOut size={19} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-border-soft bg-background/95 px-5 backdrop-blur lg:px-10">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="rounded-lg p-2 text-text-primary lg:hidden"
          >
            <Menu size={22} />
          </button>
          <div className="hidden items-center gap-2 text-sm text-text-secondary lg:flex">
            <Boxes size={18} className="text-primary" />
            Administración de Clothy
          </div>
          <div className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-primary">
            <Link to="/">Volver a la tienda</Link>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
