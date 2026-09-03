import axios from 'axios';
import type { ProfileResponse, User } from '../types/auth.types';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import LogoutButton from '@/components/LogoutButton';

export default function ProfilePage() {
  const [usuario, setUsuario] = useState<User | null>(null);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get<ProfileResponse>('http://localhost:3001/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsuario(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    getUser();
  }, [token]);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center justify-center px-6 flex-col gap-4">
      <section className="w-full rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-3xl font-bold">Mi perfil</h1>

        <div className="space-y-4">
          <div>
            <span className="font-semibold">ID:</span> {usuario?.id}
          </div>

          <div>
            <span className="font-semibold">Nombre:</span> {usuario?.name}
          </div>

          <div>
            <span className="font-semibold">Apellido:</span> {usuario?.lastName}
          </div>

          <div>
            <span className="font-semibold">Usuario:</span> @{usuario?.username}
          </div>

          <div>
            <span className="font-semibold">Email:</span> {usuario?.email}
          </div>

          <div>
            <span className="font-semibold">Rol:</span>{' '}
            <span className="rounded bg-primary/10 px-2 py-1 text-sm text-primary">
              {usuario?.role}
            </span>
          </div>
        </div>
      </section>

      <LogoutButton />
    </main>
  );
}
