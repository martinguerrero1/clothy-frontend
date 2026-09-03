import { UserRound } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

function UserMenu() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return (
      <NavLink
        to="/perfil"
        aria-label="Mi perfil"
        className={({ isActive }) =>
          `
          flex size-10 items-center justify-center rounded-full
          transition-all duration-200
          hover:bg-[#DCCEBE]/45 hover:text-[#C97B63]
          ${isActive ? 'bg-secondary text-primary' : 'text-[#242424]'}
          `
        }
      >
        <UserRound size={20} strokeWidth={1.8} />
      </NavLink>
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        aria-label="Cuenta"
        className="flex size-10 items-center justify-center rounded-full text-[#242424] transition-colors hover:bg-[#DCCEBE]/45 hover:text-[#C97B63]"
      >
        <UserRound size={20} strokeWidth={1.8} />
      </button>

      <div className="invisible absolute right-0 top-full z-50 mt-2 w-40 translate-y-1 rounded-xl border border-[#DCCEBE]/70 bg-[#FAF8F5] p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <Link
          to="/login"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-[#242424] transition-colors hover:bg-[#DCCEBE]/45 hover:text-[#C97B63]"
        >
          Iniciar sesión
        </Link>

        <Link
          to="/register"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-[#242424] transition-colors hover:bg-[#DCCEBE]/45 hover:text-[#C97B63]"
        >
          Registrarse
        </Link>
      </div>
    </div>
  );
}

export default UserMenu;
