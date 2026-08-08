import type { CategoryResponse } from './category.types';

type ProductImage = { url: string; publicId: string };

//RESPUESTAS
export type ProductApiResponse = {
  message: string;
  products: ProductResponse[];
};

export type ProductResponse = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: ProductImage[];
  category: CategoryResponse;
  unitsSold: number;
  active: boolean;
};

//PARAMETROS
export type ProductQueryParams = {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: 'best-sellers';
  limit?: number;
};
