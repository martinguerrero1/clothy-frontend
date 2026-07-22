import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-4xl font-bold">Bienvenido a Clothy 👋</h1>

      <p className="max-w-lg text-center text-gray">
        El login fue exitoso. Esta es una página temporal mientras desarrollamos el e-commerce.
      </p>

      <div className="flex gap-4">
        <Link
          to="/profile"
          className="rounded-md bg-primary px-5 py-2 text-white transition hover:opacity-90"
        >
          Ver mi perfil
        </Link>

        <Link
          to="/"
          className="rounded-md border border-primary px-5 py-2 text-primary transition hover:bg-primary hover:text-white"
        >
          Volver al login
        </Link>
      </div>
    </main>
  );
}
