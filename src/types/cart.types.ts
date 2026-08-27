import type { User } from './auth.types';
import type { ProductResponse } from './product.types';

export type CartApiResponse = {
  message: string;
  cart: CartResponse;
};

export type CartResponse = {
  _id: string;
  user: User;
  items: CartItemType[];
};

export type CartItemType = {
  product: ProductResponse;
  quantity: number;
};
