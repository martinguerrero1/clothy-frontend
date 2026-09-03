import { useAuthStore } from '@/stores/authStore';
import axios from 'axios';

export const clothyApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//ENVIA AUTOMATICAMENTE EL HEADER AUTHORIZATION EN CADA PETICION
clothyApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// CIERRA LA SESIÓN SI EL BACKEND RECHAZA EL TOKEN
clothyApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
    }

    return Promise.reject(error);
  }
);
