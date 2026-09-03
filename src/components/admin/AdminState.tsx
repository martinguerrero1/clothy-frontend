import { Box, Plus } from 'lucide-react';
import type { ReactNode } from 'react';
import { ErrorState } from '@/components/ui/ErrorState';

export function AdminLoadingRows({ rows = 4 }: { rows?: number }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-soft bg-surface">
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-4 border-b border-border-soft p-5 last:border-0"
        >
          <div className="size-12 animate-pulse rounded-lg bg-surface-muted" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-1/3 animate-pulse rounded bg-surface-muted" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-surface-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AdminEmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: ReactNode;
}) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 text-center">
      <div className="mb-4 rounded-full bg-secondary p-4 text-primary">
        <Box size={28} />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-text-secondary">{description}</p>
      <div className="mt-5">{action}</div>
    </div>
  );
}

export function AdminErrorState() {
  return (
    <ErrorState
      title="No se pudo cargar esta sección"
      message="Intentá recargar la página en unos instantes."
    />
  );
}

export const AddIcon = Plus;
