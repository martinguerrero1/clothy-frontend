import type { CategoryResponse } from './category.types';

//====================================
//PRODUCT RESPONSES
//====================================

export type ProductsApiResponse = {
  message: string;
  products: ProductResponse[];
  totalResults: string;
  page: string;
  limit: string;
};

export type ProductApiResponse = {
  message: string;
  product: ProductResponse;
};

export type ProductResponse = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  images: ProductImage[];
  category: CategoryResponse;
  gender: string;
  unitsSold: number;
  active: boolean;
};

type ProductImage = { url: string; publicId: string };

//====================================
//PRODUCT PARAMS
//====================================

export type GetProductsParams = {
  search?: string;
  category?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
  limit?: number;
};
