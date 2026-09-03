import { AtSign, Copy, Mail, ShieldCheck, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import LogoutButton from '@/components/LogoutButton';

function ProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#faf9f7] px-5 py-10 sm:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* =====================================================
            BREADCRUMB
        ===================================================== */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-stone-500">
          <span>Inicio</span>
          <span>/</span>
          <span>Cuenta</span>
          <span>/</span>
          <span className="text-stone-800">Perfil de usuario</span>
        </nav>

        {/* =====================================================
            PROFILE CARD
        ===================================================== */}
        <section className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
          {/* ===================================================
              PROFILE HEADER
          =================================================== */}
          <div className="flex flex-col gap-6 border-b border-stone-200 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            {/* User information */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-[#eee9e3] text-lg font-semibold text-[#a45a42]">
                {user?.name?.charAt(0).toUpperCase() ?? 'U'}
                {user?.lastName?.charAt(0).toUpperCase() ?? ''}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl font-semibold text-stone-900">
                    {user?.name} {user?.lastName}
                  </h1>

                  <span className="rounded-full bg-[#edf1df] px-2.5 py-1 text-[10px] font-medium text-[#657044]">
                    {user?.role === 'admin' ? 'Admin' : 'Cliente'}
                  </span>
                </div>

                <p className="mt-1 text-sm text-stone-500">
                  @{user?.username}
                  <span className="mx-1.5">•</span>
                  Miembro de Clothy
                </p>
              </div>
            </div>

            {/* Logout */}
            <LogoutButton />
          </div>

          {/* ===================================================
              ACCOUNT INFORMATION
          =================================================== */}
          <div className="px-6 py-7 sm:px-8">
            {/* Section header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <UserRound className="h-4 w-4 text-[#a45a42]" />

                <h2 className="text-sm font-semibold text-stone-900">Información de la cuenta</h2>
              </div>

              <span className="w-fit rounded-md border border-stone-200 bg-stone-50 px-2.5 py-1 text-[10px] text-stone-500">
                Datos sincronizados
              </span>
            </div>

            {/* User ID / Role */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* User ID */}
              <div className="rounded-xl border border-stone-200 bg-[#fcfbf9] p-4">
                <p className="text-[10px] font-medium uppercase tracking-wide text-stone-500">
                  ID del usuario
                </p>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <span className="truncate text-sm font-medium text-stone-800">
                    #{user?._id ?? '—'}
                  </span>

                  <button
                    type="button"
                    aria-label="Copiar ID"
                    className="text-stone-500 transition hover:text-[#a45a42]"
                    onClick={() => {
                      if (user?._id) {
                        navigator.clipboard.writeText(user._id);
                      }
                    }}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Role */}
              <div className="rounded-xl border border-stone-200 bg-[#fcfbf9] p-4">
                <p className="text-[10px] font-medium uppercase tracking-wide text-stone-500">
                  Rol en la plataforma
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-medium capitalize text-stone-800">
                    {user?.role === 'admin' ? 'Administrador' : 'Cliente'}
                  </span>

                  <span className="text-xs text-stone-500">
                    {user?.role === 'admin' ? 'Acceso administrativo' : 'Acceso estándar'}
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                PERSONAL INFORMATION
            ================================================= */}
            <div className="mt-6 grid gap-x-6 sm:grid-cols-2">
              {/* Name */}
              <div className="border-b border-stone-200 py-4">
                <p className="text-[10px] font-medium uppercase tracking-wide text-stone-500">
                  Nombre
                </p>

                <p className="mt-1 text-sm text-stone-800">{user?.name ?? '—'}</p>
              </div>

              {/* Last name */}
              <div className="border-b border-stone-200 py-4">
                <p className="text-[10px] font-medium uppercase tracking-wide text-stone-500">
                  Apellido
                </p>

                <p className="mt-1 text-sm text-stone-800">{user?.lastName ?? '—'}</p>
              </div>

              {/* Username */}
              <div className="border-b border-stone-200 py-4">
                <div className="flex items-center gap-1.5">
                  <AtSign className="h-3.5 w-3.5 text-stone-400" />

                  <p className="text-[10px] font-medium uppercase tracking-wide text-stone-500">
                    Nombre de usuario
                  </p>
                </div>

                <p className="mt-1 text-sm text-stone-800">@{user?.username ?? '—'}</p>
              </div>

              {/* Email */}
              <div className="border-b border-stone-200 py-4">
                <div className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-stone-400" />

                  <p className="text-[10px] font-medium uppercase tracking-wide text-stone-500">
                    Correo electrónico
                  </p>
                </div>

                <p className="mt-1 truncate text-sm text-stone-800">{user?.email ?? '—'}</p>
              </div>
            </div>

            {/* =================================================
                SECURITY MESSAGE
            ================================================= */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-stone-200 bg-[#fcfbf9] p-4">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#a45a42]" />

              <div>
                <p className="text-xs font-medium text-stone-700">Sesión protegida.</p>

                <p className="mt-1 text-xs leading-5 text-stone-500">
                  Tu cuenta se encuentra protegida mediante autenticación segura. Si utilizás un
                  equipo compartido o público, asegurate de cerrar sesión al terminar tu visita.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM LINKS
        ===================================================== */}
        <div className="mt-6 flex flex-col gap-3 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={() => navigate('/tienda')}
              className="transition hover:text-[#a45a42]"
            >
              ← Volver a la tienda
            </button>
          </div>

          <span>© 2026 Clothy. Todos los derechos reservados.</span>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
