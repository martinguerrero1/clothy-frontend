//DATOS DEL FORMULARIO
export type RegisterFormState = {
  success: boolean;
  message: string;
  errors: {
    name?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  };
  values?: {
    name: string;
    lastName: string;
    username: string;
    email: string;
    terms: string;
  };
};

export type LoginFormState = {
  success: boolean;
  message: string;
  errors: {
    email?: string;
    password?: string;
  };
  values?: {
    email: string;
    rememberMe: boolean;
  };
};

//DATOS QUE ENVIO AL BACKEND
export type RegisterData = {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

//DATOS QUE RECIBO DEL BACKEND
export type UserResponse = {
  id: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  role: 'cliente' | 'vendedor' | 'admin';
};

export type RegisterResponse = {
  message: string;
  user: UserResponse;
};

export type LoginResponse = {
  message: string;
  user: UserResponse;
  token: string;
};

export type ProfileResponse = {
  message: string;
  user: UserResponse;
};
