export type Category = {
  id: number;
  title: string;
  description: string;
  href: string;
  image: string;
  className: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: {
    url: string;
    publicId: string;
  }[];
  category: 'hombre' | 'mujer' | 'accesorios' | 'calzado';
  isActive: boolean;
  unitsSold: number;
  createdAt: string;
  updatedAt: string;
};
