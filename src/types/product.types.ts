import type { CategoryResponse } from './category.types';

type ProductImage = { url: string; publicId: string };

//RESPUESTAS
export type ProductApiResponse = {
  message: string;
  products: ProductResponse[];
  totalResults: string;
  page: string;
  limit: string;
};

export type ProductResponse = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: ProductImage[];
  category: CategoryResponse;
  gender: string;
  unitsSold: number;
  active: boolean;
};

//PARAMETROS
export type ProductQueryParams = {
  search?: string;
  category?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
};
