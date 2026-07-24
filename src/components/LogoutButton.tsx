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
      border border-red-300
      bg-white
      px-4 py-2
      text-sm font-medium text-red-600
      transition-colors
      duration-200
      hover:bg-red-50
      hover:border-red-400
      hover:text-red-700
      active:scale-[0.98]
      cursor-pointer
    "
    >
      Cerrar sesión
    </button>
  );
}

export default LogoutButton;
