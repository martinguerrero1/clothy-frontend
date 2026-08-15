import { AlertCircle } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
}

export function ErrorState({
  title = 'Algo salió mal',
  message = 'No pudimos cargar la información. Intentá nuevamente más tarde.',
}: ErrorStateProps) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center text-center">
      <AlertCircle className="mb-4 h-10 w-10 text-red-500" />

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 max-w-md text-sm text-gray-500">{message}</p>
    </div>
  );
}
