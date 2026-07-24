import { loginUser } from '../services/auth.service';
import { useAuthStore } from '../stores/authStore';
import type { LoginFormState, LoginResponse } from '../types/auth.types';

export default async function loginAction(
  _previousState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const errors: LoginFormState['errors'] = {};

  const email = formData.get('email')?.toString().trim() || '';
  const password = formData.get('password')?.toString().trim() || '';
  const rememberMe = formData.get('rememberMe') === 'on'; // Convertimos el valor a booleano

  if (!email) {
    errors.email = 'El correo electrónico es obligatorio';
  }

  if (!password) {
    errors.password = 'La contraseña es obligatoria';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Por favor, completa todos los campos',
      errors,
      values: {
        email,
        rememberMe,
      },
    };
  }

  try {
    const loginResponse: LoginResponse = await loginUser({
      email,
      password,
    });

    const { message, user, token } = loginResponse;

    useAuthStore.getState().login(user, token);

    return {
      success: true,
      message: message,
      errors: {},
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Ocurrió un error inesperado',
      errors: {},
    };
  }
}
