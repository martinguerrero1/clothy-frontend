import { useActionState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { LoginFormState } from '../types/auth.types';
import loginAction from '../actions/login.action';

export default function LoginPage() {
  const INITIAL_AUTH_STATE: LoginFormState = {
    success: false,
    message: '',
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(loginAction, INITIAL_AUTH_STATE);

  const navigate = useNavigate();
  useEffect(() => {
    if (state.success) {
      navigate('/');
    }
  }, [state.success, navigate]);

  return (
    <main className="bg-background text-text-primary">
      <div className="mx-auto flex w-full max-w-360">
        {/* Lateral visual */}
        <section className="relative hidden max-h-screen w-[52%] overflow-hidden bg-secondary lg:block">
          <img
            src="https://res.cloudinary.com/g8lku7ry/image/upload/v1788455592/rayul-_M6gy9oHgII-unsplash.jpg"
            alt="Portada"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-b from-black/15 via-transparent to-black/10" />
        </section>

        {/* Contenido */}
        <section className="flex lg:max-h-screen flex-1 flex-col px-5 py-8">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-125 rounded-2xl border border-border-soft bg-surface px-6 py-10 shadow-card sm:px-10 lg:px-14 lg:py-12">
              <header className="mb-9">
                <p className="mb-3 text-sm font-medium tracking-[0.08em] uppercase text-primary">
                  Clothy
                </p>

                <h1 className="text-[28px] font-semibold sm:text-[32px]">Bienvenido de nuevo</h1>

                <p className="mt-2 max-w-md text-sm text-text-secondary sm:text-base">
                  Inicia sesión para acceder a tu cuenta y gestionar tus pedidos.
                </p>
              </header>

              <form action={formAction} className="space-y-5">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-warm">
                    Correo electrónico
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="martin.guerrero@ejemplo.com"
                    className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 placeholder:text-border hover:border-primary-soft focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {/* Contraseña */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label htmlFor="password" className="text-sm font-medium text-text-warm">
                      Contraseña
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-primary transition hover:text-primary-hover hover:underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 placeholder:text-border hover:border-primary-soft focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                {/* Recordarme */}
                <label className="flex w-fit cursor-pointer items-center gap-3">
                  <input
                    name="rememberMe"
                    type="checkbox"
                    defaultChecked={state.values?.rememberMe ? true : false}
                    className="size-5 cursor-pointer rounded border-border text-primary accent-primary focus:ring-primary/20"
                  />

                  <span className="text-sm text-text-secondary">Recordarme</span>
                </label>

                {/* Submit */}
                <p className={`text-center ${state.success ? 'text-success' : 'text-error'}`}>
                  {state.message}
                </p>
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-button focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-0"
                >
                  Iniciar sesión
                  <ArrowRightIcon />
                </button>
              </form>

              <div className="my-9 h-px bg-border-soft" />

              <div className="text-center text-sm text-text-secondary">
                <p>¿No tienes una cuenta?</p>
                <Link
                  to="/register"
                  className="font-semibold text-primary transition hover:text-primary-hover hover:underline"
                >
                  Crear una cuenta
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}
