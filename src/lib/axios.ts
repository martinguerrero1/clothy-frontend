import axios from 'axios';

export const clothyApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
