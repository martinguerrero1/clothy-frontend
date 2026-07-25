import men from '../assets/categories/men.jpg';
import women from '../assets/categories/women.jpg';
import accessories from '../assets/categories/accesories.jpg';
import shoes from '../assets/categories/shoes.jpg';
import type { Category } from '../types/product.types';

export const categories: Category[] = [
  {
    id: 1,
    title: 'Hombre',
    description: 'Descubre la colección',
    href: '/tienda?categoria=hombre',
    image: men,
    className: 'lg:row-span-2',
  },
  {
    id: 2,
    title: 'Mujer',
    description: 'Nueva temporada',
    href: '/tienda?categoria=mujer',
    image: women,
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    id: 3,
    title: 'Accesorios',
    description: 'Los detalles importan',
    href: '/tienda?categoria=accesorios',
    image: accessories,
    className: '',
  },
  {
    id: 4,
    title: 'Calzado',
    description: 'Comodidad y estilo',
    href: '/tienda?categoria=calzado',
    image: shoes,
    className: '',
  },
];
