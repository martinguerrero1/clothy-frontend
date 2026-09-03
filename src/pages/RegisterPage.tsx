import { useActionState, useEffect } from 'react';
import type { RegisterFormState } from '../types/auth.types';
import { Link, useNavigate } from 'react-router-dom';
import registerAction from '../actions/register.action';
export default function RegisterPage() {
  const INITIAL_AUTH_STATE: RegisterFormState = {
    success: false,
    message: '',
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(registerAction, INITIAL_AUTH_STATE);

  const navigate = useNavigate();
  useEffect(() => {
    if (state.success) {
      navigate('/login');
    }
  }, [state.success, navigate]);

  return (
    <main className="min-h-screen  bg-background text-text-primary">
      <div className="mx-auto flex min-h-screen w-full max-w-360">
        {/* Lateral visual */}
        <section className="relative hidden min-h-screen w-[52%] overflow-hidden bg-secondary lg:block">
          <img
            src="https://res.cloudinary.com/g8lku7ry/image/upload/v1788455592/rayul-_M6gy9oHgII-unsplash.jpg"
            alt="Portada"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/15 via-transparent to-black/10" />
        </section>

        {/* Contenido */}
        <section className="flex min-h-screen flex-1 flex-col px-5 py-8">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-125 rounded-2xl border border-border-soft bg-surface px-6 py-10 shadow-card sm:px-10 lg:px-14 lg:py-12">
              <header className="mb-9">
                <p className="mb-3 text-sm font-medium tracking-[0.08em] uppercase text-primary">
                  Clothy
                </p>

                <h1 className="text-[28px] font-semibold sm:text-[32px]">Crea tu cuenta</h1>

                <p className="mt-2 max-w-md text-sm text-text-secondary sm:text-base">
                  Regístrate para gestionar tus pedidos y recibir ofertas exclusivas.
                </p>
              </header>

              <form action={formAction} className="space-y-5">
                {/* Nombre y apellido */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-warm">
                      Nombre
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Martin"
                      defaultValue={state.values?.name}
                      required
                      className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 placeholder:text-border hover:border-primary-soft focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                    {state.errors?.name && (
                      <span className="text-xs text-error">{state.errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium text-text-warm"
                    >
                      Apellido
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Guerrero"
                      defaultValue={state.values?.lastName}
                      required
                      className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 placeholder:text-border hover:border-primary-soft focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                    {state.errors?.lastName && (
                      <span className="text-xs text-error">{state.errors.lastName}</span>
                    )}
                  </div>
                </div>

                {/* Nombre de usuario */}
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-text-warm"
                  >
                    Nombre de usuario{' '}
                    <span className="text-xs text-text-secondary">
                      (los demás verán este nombre)
                    </span>
                  </label>

                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Martin_Guerrero"
                    defaultValue={state.values?.username}
                    required
                    className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 placeholder:text-border hover:border-primary-soft focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                  {state.errors?.username && (
                    <span className="text-xs text-error">{state.errors.username}</span>
                  )}
                </div>

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
                    defaultValue={state.values?.email}
                    required
                    className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 placeholder:text-border hover:border-primary-soft focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                  {state.errors?.email && (
                    <span className="text-xs text-error">{state.errors.email}</span>
                  )}
                </div>

                {/* Contraseña */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-text-warm"
                  >
                    Contraseña
                  </label>

                  <div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Mínimo 8 caracteres"
                      required
                      className="h-12 w-full rounded-lg border border-border bg-surface px-4 pr-12 text-sm text-text-primary outline-none transition duration-200 placeholder:text-border hover:border-primary-soft focus:border-primary focus:ring-4 focus:ring-primary/10"
                    />
                    {state.errors?.password && (
                      <span className="text-xs text-error">{state.errors.password}</span>
                    )}
                  </div>
                </div>

                {/* Confirmación contraseña */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-text-warm"
                  >
                    Confirmar contraseña
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Repite tu contraseña"
                    required
                    className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 placeholder:text-border hover:border-primary-soft focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                  {state.errors?.confirmPassword && (
                    <span className="text-xs text-error">{state.errors.confirmPassword}</span>
                  )}
                </div>

                {/* Términos */}
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    name="terms"
                    type="checkbox"
                    defaultChecked={state.values?.terms ? true : false}
                    required
                    className="mt-0.5 size-5 shrink-0 cursor-pointer rounded border-border text-primary accent-primary focus:ring-primary/20"
                  />

                  <span className="text-sm leading-snug text-text-secondary">
                    Acepto los{' '}
                    <a
                      href="/terms"
                      className="font-medium text-primary hover:text-primary-hover hover:underline"
                    >
                      términos y condiciones
                    </a>{' '}
                    y la{' '}
                    <a
                      href="/privacy"
                      className="font-medium text-primary hover:text-primary-hover hover:underline"
                    >
                      política de privacidad
                    </a>
                    .
                  </span>
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
                  Crear cuenta
                  <ArrowRightIcon />
                </button>
              </form>

              <div className="my-9 h-px bg-border-soft" />

              <div className="text-center text-sm text-text-secondary">
                <p>¿Ya tienes una cuenta?</p>
                <Link
                  to="/login"
                  className="font-semibold text-primary transition hover:text-primary-hover hover:underline"
                >
                  Inicia sesión
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
