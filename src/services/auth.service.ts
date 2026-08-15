import type { LoginData, LoginResponse, RegisterData, RegisterResponse } from '../types/auth.types';
import { clothyApi } from '@/lib/axios';

export async function registerUser(data: RegisterData): Promise<RegisterResponse> {
  const response = await clothyApi.post('/auth/register', data);
  return response.data;
  //SUCESS: HTTP 201 CREATED {message: string, user: {}, token: string}
  //ERROR: HTTP 40X CONFLICT {message}
}

export async function loginUser(data: LoginData): Promise<LoginResponse> {
  const response = await clothyApi.post('/auth/login', data);
  return response.data;
  //SUCESS: HTTP 200 OK {message: string, user: {}, token: string}
  //ERROR: HTTP 40X UNAUTHORIZED {message}
}
