import hoodieImage from '../assets/products/hoodie.jpg';
import jacketImage from '../assets/products/jacket.jpg';
import tshirtImage from '../assets/products/tshirt.jpg';
import jeansImage from '../assets/products/jean.jpg';
import sneakersImage from '../assets/products/sneakers.jpg';
import capImage from '../assets/products/cap.jpg';
import bagImage from '../assets/products/bag.jpg';
import bootsImage from '../assets/products/boots.jpg';
import sweaterImage from '../assets/products/sweater.jpg';
import shirtImage from '../assets/products/shirt.jpg';
import type { Product } from '../types/product.types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Oversized Beige Hoodie',
    description: 'Premium cotton oversized hoodie with adjustable drawstring hood.',
    price: 68999,
    stock: 18,
    images: [
      {
        url: hoodieImage,
        publicId: '',
      },
    ],
    category: 'hombre',
    isActive: true,
    unitsSold: 54,
    createdAt: '2026-07-20T10:30:00Z',
    updatedAt: '2026-07-20T10:30:00Z',
  },
  {
    id: '2',
    name: 'Classic Denim Jacket',
    description: 'Classic denim jacket made from high-quality stretch denim.',
    price: 94999,
    stock: 8,
    images: [
      {
        url: jacketImage,
        publicId: '',
      },
    ],
    category: 'mujer',
    isActive: true,
    unitsSold: 29,
    createdAt: '2026-07-18T09:10:00Z',
    updatedAt: '2026-07-18T09:10:00Z',
  },
  {
    id: '3',
    name: 'Basic White T-Shirt',
    description: 'Soft cotton crew-neck t-shirt, perfect for everyday wear.',
    price: 27999,
    stock: 34,
    images: [
      {
        url: tshirtImage,
        publicId: '',
      },
    ],
    category: 'hombre',
    isActive: true,
    unitsSold: 112,
    createdAt: '2026-07-17T16:00:00Z',
    updatedAt: '2026-07-17T16:00:00Z',
  },
  {
    id: '4',
    name: 'Straight Blue Jeans',
    description: 'Straight-fit jeans with a timeless design and comfortable stretch.',
    price: 59999,
    stock: 14,
    images: [
      {
        url: jeansImage,
        publicId: '',
      },
    ],
    category: 'mujer',
    isActive: true,
    unitsSold: 83,
    createdAt: '2026-07-15T12:00:00Z',
    updatedAt: '2026-07-15T12:00:00Z',
  },
  {
    id: '5',
    name: 'Urban Street Sneakers',
    description: 'Minimalist sneakers with durable rubber soles for everyday comfort.',
    price: 114999,
    stock: 9,
    images: [
      {
        url: sneakersImage,
        publicId: '',
      },
    ],
    category: 'calzado',
    isActive: true,
    unitsSold: 71,
    createdAt: '2026-07-13T14:40:00Z',
    updatedAt: '2026-07-13T14:40:00Z',
  },
  {
    id: '6',
    name: 'Minimal Black Cap',
    description: 'Cotton baseball cap featuring an embroidered minimalist logo.',
    price: 18999,
    stock: 41,
    images: [
      {
        url: capImage,
        publicId: '',
      },
    ],
    category: 'accesorios',
    isActive: true,
    unitsSold: 36,
    createdAt: '2026-07-12T11:15:00Z',
    updatedAt: '2026-07-12T11:15:00Z',
  },
  {
    id: '7',
    name: 'Everyday Backpack',
    description: 'Versatile backpack with a padded compartment for laptops up to 15".',
    price: 52999,
    stock: 12,
    images: [
      {
        url: bagImage,
        publicId: '',
      },
    ],
    category: 'accesorios',
    isActive: true,
    unitsSold: 21,
    createdAt: '2026-07-10T08:20:00Z',
    updatedAt: '2026-07-10T08:20:00Z',
  },
  {
    id: '8',
    name: 'Brown Chelsea Boots',
    description: 'Elegant Chelsea boots crafted from premium synthetic leather.',
    price: 129999,
    stock: 6,
    images: [
      {
        url: bootsImage,
        publicId: '',
      },
    ],
    category: 'calzado',
    isActive: true,
    unitsSold: 17,
    createdAt: '2026-07-08T17:45:00Z',
    updatedAt: '2026-07-08T17:45:00Z',
  },
  {
    id: '9',
    name: 'Olive Knit Sweater',
    description: 'Lightweight knit sweater ideal for cool spring and autumn days.',
    price: 64999,
    stock: 16,
    images: [
      {
        url: sweaterImage,
        publicId: '',
      },
    ],
    category: 'hombre',
    isActive: true,
    unitsSold: 44,
    createdAt: '2026-07-07T09:30:00Z',
    updatedAt: '2026-07-07T09:30:00Z',
  },
  {
    id: '10',
    name: 'Sky Linen Shirt',
    description: 'Long-sleeve linen shirt with a breathable regular-fit design.',
    price: 54999,
    stock: 11,
    images: [
      {
        url: shirtImage,
        publicId: '',
      },
    ],
    category: 'mujer',
    isActive: true,
    unitsSold: 38,
    createdAt: '2026-07-05T13:10:00Z',
    updatedAt: '2026-07-05T13:10:00Z',
  },
];
