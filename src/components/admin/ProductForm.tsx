import { ImagePlus, X } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import useAddProduct from '@/hooks/product/useAddProduct';
import useModifyProduct from '@/hooks/product/useModifyProduct';
import type { CategoryResponse } from '@/types/category.types';
import type { ProductResponse } from '@/types/product.types';

type ProductFormProps = {
  categories: CategoryResponse[];
  product?: ProductResponse;
  onClose: () => void;
};

type ProductFormValues = {
  name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
  gender: string;
};

function getInitialValues(product?: ProductResponse): ProductFormValues {
  return {
    name: product?.name ?? '',
    description: product?.description ?? '',
    price: product ? String(product.price) : '',
    stock: product ? String(product.stock) : '0',
    category: product?.category.id ?? '',
    gender: product?.gender ?? 'unisex',
  };
}

export function ProductForm({ categories, product, onClose }: ProductFormProps) {
  const [values, setValues] = useState(() => getInitialValues(product));
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState('');
  const addProduct = useAddProduct();
  const modifyProduct = useModifyProduct();
  const isEditing = Boolean(product);
  const isPending = addProduct.isPending || modifyProduct.isPending;

  const updateValue = (field: keyof ProductFormValues, value: string) =>
    setValues((current) => ({ ...current, [field]: value }));

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    setFiles(Array.from(fileList).slice(0, 5));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !values.name.trim() ||
      !values.description.trim() ||
      !values.price ||
      !values.stock ||
      !values.category ||
      !values.gender
    ) {
      setError('Completá todos los campos obligatorios.');
      return;
    }

    const formData = new FormData();
    formData.append('name', values.name.trim());
    formData.append('description', values.description.trim());
    formData.append('price', values.price);
    formData.append('stock', values.stock);
    formData.append('category', values.category);
    formData.append('gender', values.gender);
    files.forEach((file) => formData.append('images', file));

    if (product) {
      modifyProduct.mutate({ id: product.id, formData }, { onSuccess: onClose });
    } else {
      addProduct.mutate(formData, { onSuccess: onClose });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 p-4 sm:p-8">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-form-title"
        className="mx-auto w-full max-w-4xl rounded-2xl bg-surface p-5 shadow-card sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="product-form-title" className="text-2xl font-bold">
              {isEditing ? 'Editar producto' : 'Nuevo producto'}
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Completá la información disponible para el catálogo.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted"
          >
            <X size={21} />
          </button>
        </div>

        <form className="mt-7 space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold">
              Nombre del producto *
              <input
                value={values.name}
                onChange={(event) => updateValue('name', event.target.value)}
                maxLength={50}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none focus:border-primary"
              />
            </label>
            <label className="text-sm font-semibold">
              Categoría *
              <select
                value={values.category}
                onChange={(event) => updateValue('category', event.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none focus:border-primary"
              >
                <option value="">Seleccioná una categoría</option>
                {categories
                  .filter((category) => category.active)
                  .map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <label className="block text-sm font-semibold">
            Descripción *
            <textarea
              value={values.description}
              onChange={(event) => updateValue('description', event.target.value)}
              maxLength={1000}
              rows={4}
              className="mt-2 w-full resize-y rounded-lg border border-border bg-background px-3 py-2.5 outline-none focus:border-primary"
            />
          </label>
          <div className="grid gap-5 sm:grid-cols-3">
            <label className="text-sm font-semibold">
              Precio *
              <input
                type="number"
                min="0"
                step="0.01"
                value={values.price}
                onChange={(event) => updateValue('price', event.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none focus:border-primary"
              />
            </label>
            <label className="text-sm font-semibold">
              Stock *
              <input
                type="number"
                min="0"
                step="1"
                value={values.stock}
                onChange={(event) => updateValue('stock', event.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none focus:border-primary"
              />
            </label>
            <label className="text-sm font-semibold">
              Género *
              <select
                value={values.gender}
                onChange={(event) => updateValue('gender', event.target.value)}
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none focus:border-primary"
              >
                <option value="mujer">Mujer</option>
                <option value="hombre">Hombre</option>
                <option value="unisex">Unisex</option>
              </select>
            </label>
          </div>
          <label className="block rounded-xl border border-dashed border-border bg-background p-5 text-center text-sm text-text-secondary hover:border-primary">
            <ImagePlus className="mx-auto mb-2 text-primary" size={25} />
            <span className="font-semibold text-text-primary">Seleccionar imágenes</span> (máximo 5)
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(event) => handleFiles(event.target.files)}
              className="sr-only"
            />
            {files.length > 0 && (
              <span className="mt-2 block text-xs">{files.length} archivo(s) seleccionado(s)</span>
            )}
          </label>
          {error && <p className="text-sm text-error">{error}</p>}
          <div className="flex justify-end gap-3 border-t border-border-soft pt-5">
            <button
              type="button"
              onClick={onClose}
              disabled={isPending}
              className="rounded-lg bg-surface-muted px-4 py-2.5 text-sm font-semibold disabled:opacity-60"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isPending || categories.length === 0}
              className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover disabled:opacity-60"
            >
              {isPending ? 'Guardando...' : isEditing ? 'Guardar cambios' : 'Crear producto'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
