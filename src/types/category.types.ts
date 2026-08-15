type CategoryImage = { url: string; publicId: string };

type CategorySlug = 'remera' | 'abrigo' | 'pantalon' | 'accesorios' | 'calzado';

//RESPONSE
export type CategoriesApiResponse = {
  message: string;
  categories: CategoryResponse[];
};

export type CategoryResponse = {
  id: string;
  name: string;
  slug: CategorySlug;
  image: CategoryImage;
  active: boolean;
};

//UI
export type CategoryCardProps = {
  name: string;
  slug: CategorySlug;
  image: string;
  className: string;
};

export type categoriesLayouts = Record<'remera' | 'abrigo' | 'pantalon' | 'accesorios', string>;

//PARAMS
export type CategoryQueryParams = {
  search?: string;
  name?: string;
  limit?: number;
};
