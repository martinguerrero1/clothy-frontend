import { ImagePlus, X } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import useAddCategory from '@/hooks/category/useAddCategory';
import useModifyCategory from '@/hooks/category/useModifyCategory';
import type { CategoryResponse } from '@/types/category.types';

export function CategoryForm({
  category,
  onClose,
}: {
  category?: CategoryResponse;
  onClose: () => void;
}) {
  const [name, setName] = useState(category?.name ?? '');
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState('');
  const addCategory = useAddCategory();
  const modifyCategory = useModifyCategory();
  const isPending = addCategory.isPending || modifyCategory.isPending;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) {
      setError('El nombre de la categoría es obligatorio.');
      return;
    }
    const formData = new FormData();
    formData.append('name', name.trim());
    if (image) formData.append('image', image);
    if (category) modifyCategory.mutate({ id: category.id, formData }, { onSuccess: onClose });
    else addCategory.mutate(formData, { onSuccess: onClose });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="category-form-title"
        className="w-full max-w-xl rounded-2xl bg-surface p-5 shadow-card sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="category-form-title" className="text-2xl font-bold">
              {category ? 'Editar categoría' : 'Nueva categoría'}
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Actualizá los datos disponibles de la colección.
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
        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <label className="block text-sm font-semibold">
            Nombre de la categoría *
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none focus:border-primary"
            />
          </label>
          <label className="block rounded-xl border border-dashed border-border bg-background p-6 text-center text-sm text-text-secondary hover:border-primary">
            <ImagePlus className="mx-auto mb-2 text-primary" size={25} />
            <span className="font-semibold text-text-primary">Seleccionar imagen de portada</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setImage(event.target.files?.[0] ?? null)}
              className="sr-only"
            />
            {(image || category?.image.url) && (
              <span className="mt-2 block text-xs">
                {image?.name ?? 'Se conservará la imagen actual'}
              </span>
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
              disabled={isPending}
              className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover disabled:opacity-60"
            >
              {isPending ? 'Guardando...' : 'Guardar cambios'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
