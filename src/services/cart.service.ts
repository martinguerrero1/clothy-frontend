import { clothyApi } from '@/lib/axios';
import type { CartApiResponse, CartResponse } from '@/types/cart.types';

export const getCart = async (): Promise<CartResponse> => {
  const { data } = await clothyApi.get<CartApiResponse>('/cart');

  return data.cart;
};

export const addToCart = async (productId: string, quantity: number): Promise<CartResponse> => {
  const { data } = await clothyApi.post<CartApiResponse>('/cart', { productId, quantity });

  return data.cart;
};

export const updateCartItem = async (
  productoId: string,
  quantity: number
): Promise<CartResponse> => {
  const { data } = await clothyApi.patch<CartApiResponse>(`/cart/${productoId}`, { quantity });

  return data.cart;
};

export const removeCartItem = async (productoId: string): Promise<CartResponse> => {
  const { data } = await clothyApi.delete<CartApiResponse>(`/cart/${productoId}`);

  return data.cart;
};

export const clearCart = async (): Promise<CartResponse> => {
  const { data } = await clothyApi.delete<CartApiResponse>('/cart');

  return data.cart;
};
