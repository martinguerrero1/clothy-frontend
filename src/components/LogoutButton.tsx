import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="
        inline-flex items-center justify-center
        gap-2
        rounded-lg
        border border-red-200
        bg-red-50
        px-4 py-2.5
        text-sm font-medium text-red-600
        shadow-sm
        transition-all duration-200
        hover:border-red-300
        hover:bg-red-100
        hover:text-red-700
        hover:shadow
        active:scale-[0.98]
        cursor-pointer
      "
    >
      <LogOut className="h-4 w-4" />
      Cerrar sesión
    </button>
  );
}

export default LogoutButton;
