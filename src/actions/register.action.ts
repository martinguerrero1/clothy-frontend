import { registerUser } from '../services/auth.service';
import type { RegisterFormState } from '../types/auth.types';

export default async function registerAction(
  _previousState: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  //CREAMOS LOS ERRORES (con el tipado RegisterFormState['errors'] para que sea del mismo tipo que el objeto errors en RegisterFormState)
  const errors: RegisterFormState['errors'] = {};

  //obtencion y normalizacion de los datos del formulario
  const name = formData.get('name')?.toString().trim() || '';
  const lastName = formData.get('lastName')?.toString().trim() || '';
  const username = formData.get('username')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const password = formData.get('password')?.toString().trim() || '';
  const confirmPassword = formData.get('confirmPassword')?.toString().trim() || '';
  const terms = formData.get('terms')?.toString().trim() || '';

  //validacion de nombre
  if (!name) {
    errors.name = 'El nombre es obligatorio';
  } else {
    if (name.length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (name.length > 30) {
      errors.name = 'El nombre no puede tener más de 30 caracteres';
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
      errors.name = 'El nombre solo puede contener letras y espacios';
    }
  }

  //validacion de apellido
  if (!lastName) {
    errors.lastName = 'El apellido es obligatorio';
  } else {
    if (lastName.length < 2) {
      errors.lastName = 'El apellido debe tener al menos 2 caracteres';
    } else if (lastName.length > 30) {
      errors.lastName = 'El apellido no puede tener más de 30 caracteres';
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(lastName)) {
      errors.lastName = 'El apellido solo puede contener letras y espacios';
    }
  }

  //validacion de username
  if (!username) {
    errors.username = 'El nombre de usuario es obligatorio';
  } else {
    if (username.length < 4) {
      errors.username = 'El nombre de usuario debe tener al menos 4 caracteres';
    } else if (username.length > 18) {
      errors.username = 'El nombre de usuario no puede tener más de 18 caracteres';
    } else if (/\s/.test(username)) {
      errors.username = 'El nombre de usuario no puede contener espacios';
    } else if (!/^[a-zA-Z0-9_.]+$/.test(username)) {
      errors.username = 'El nombre de usuario solo puede contener letras, números y guiones bajos';
    }
  }

  //validacion de email
  if (!email) {
    errors.email = 'El correo electrónico es obligatorio';
  } else {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'El formato del correo electrónico es inválido.';
    }
  }

  //validacion de password
  if (!password) {
    errors.password = 'La contraseña es obligatoria';
  } else {
    if (password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
    } else if (password.length > 20) {
      errors.password = 'La contraseña no puede tener más de 20 caracteres';
    } else if (!/[a-z]/.test(password)) {
      errors.password = 'La contraseña debe contener al menos una letra minúscula.';
    } else if (!/[A-Z]/.test(password)) {
      errors.password = 'La contraseña debe contener al menos una letra mayúscula.';
    } else if (!/\d/.test(password)) {
      errors.password = 'La contraseña debe contener al menos un número.';
    } else if (!/[@$!%*?&]/.test(password)) {
      errors.password =
        'La contraseña debe contener al menos un carácter especial: ( @ $ ! % * ? & . )';
    }
  }

  //validacion de confirmPassword
  if (!confirmPassword) {
    errors.confirmPassword = 'La confirmación de contraseña es obligatoria';
  } else {
    if (!errors.password) {
      if (confirmPassword !== password) {
        errors.confirmPassword = 'Las contraseñas no coinciden';
      }
    }
  }

  //validacion de terms
  if (!terms) {
    errors.terms = 'Debes aceptar los términos y condiciones';
  }

  //si hay errores, retornamos el estado con los errores
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Error: Campos inválidos',
      errors: errors,
      values: {
        name,
        lastName,
        username,
        email,
        terms,
      },
    };
  }

  try {
    const response = await registerUser({ name, lastName, username, email, password });

    return {
      success: true,
      message: response.message,
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
