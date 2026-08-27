//====================================
//CATEGORY RESPONSES
//====================================

export type CategoriesApiResponse = {
  message: string;
  categories: CategoryResponse[];
};

export type CategoryApiResponse = {
  message: string;
  categories: CategoryResponse;
};

export type CategoryResponse = {
  id: string;
  name: string;
  slug: string;
  image: { url: string; publicId: string };
  active: boolean;
};

//====================================
//CATEGORY UI
//====================================

export type CategoryCardProps = {
  name: string;
  slug: string;
  imageUrl: string;
  className: string;
};

export type categoriesLayouts = Record<'remera' | 'abrigo' | 'pantalon' | 'accesorios', string>;

//====================================
//CATEGORY PARAMS
//====================================

export type GetCategoriesParams = {
  search?: string;
  name?: string;
  limit?: number;
};
