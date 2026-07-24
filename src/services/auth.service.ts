import axios from 'axios';
import type { LoginData, LoginResponse, RegisterData, RegisterResponse } from '../types/auth.types';

export async function registerUser(data: RegisterData): Promise<RegisterResponse> {
  const response = await axios.post('http://localhost:3001/api/auth/register', data);
  return response.data;
  //SUCESS: HTTP 201 CREATED {message: string, user: {}, token: string}
  //ERROR: HTTP 40X CONFLICT {message}
}

export async function loginUser(data: LoginData): Promise<LoginResponse> {
  const response = await axios.post('http://localhost:3001/api/auth/login', data);
  return response.data;
  //SUCESS: HTTP 200 OK {message: string, user: {}, token: string}
  //ERROR: HTTP 40X UNAUTHORIZED {message}
}
