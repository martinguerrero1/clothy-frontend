import { AlertTriangle } from 'lucide-react';

type ConfirmDialogProps = {
  title: string;
  description: string;
  isPending: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export function ConfirmDialog({
  title,
  description,
  isPending,
  onCancel,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        className="w-full max-w-md rounded-2xl bg-surface p-6 shadow-card"
      >
        <AlertTriangle className="mb-4 text-error" size={30} />
        <h2 id="confirm-title" className="text-xl font-bold">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={isPending}
            className="rounded-lg bg-surface-muted px-4 py-2 text-sm font-semibold disabled:opacity-60"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isPending}
            className="rounded-lg bg-error px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
          >
            {isPending ? 'Procesando...' : 'Confirmar'}
          </button>
        </div>
      </section>
    </div>
  );
}
