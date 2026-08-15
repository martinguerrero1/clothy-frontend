import { ArrowRight, ArrowLeft } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalResults: string | null;
  limit: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalResults, limit, onPageChange }: PaginationProps) {
  const totalPages: number = Math.ceil(Number(totalResults) / limit);

  const isFirstPage = Number(currentPage) === 1;
  const isLastPage = Number(currentPage) === totalPages;

  return (
    <nav aria-label="Paginación" className="flex justify-center mt-10">
      <ul className="flex justify-center items-center gap-2 flex-wrap">
        {/* Página anterior */}
        <li>
          <button
            type="button"
            onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
            disabled={isFirstPage}
            aria-label="Página anterior"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border text-gray-600 transition-colors 
              ${
                isFirstPage
                  ? 'cursor-not-allowed border-gray-200 bg-white text-gray-300'
                  : 'border-[#e5cfc4] bg-white hover:border-[#9b4f36] hover:text-[#9b4f36]'
              }
              `}
          >
            <ArrowLeft />
          </button>
        </li>

        {/* Números de página */}
        {Array.from({ length: totalPages })
          .map((_, index) => index + 1)
          .map((page) => {
            return (
              <li key={page}>
                <button
                  type="button"
                  onClick={() => onPageChange(page)}
                  // aria-current={currentPage === page ? "page" : undefined}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'border-[#9b4f36] bg-[#9b4f36] text-white'
                      : 'border-[#e5cfc4] bg-white text-gray-700 hover:border-[#9b4f36] hover:text-[#9b4f36]'
                  }`}
                >
                  {page}
                </button>
              </li>
            );
          })}

        {/* Página siguiente */}
        <li>
          <button
            type="button"
            onClick={() => !isLastPage && onPageChange(currentPage + 1)}
            disabled={isLastPage}
            aria-label="Página siguiente"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border text-gray-600 transition-colors 
              ${
                isLastPage
                  ? 'cursor-not-allowed border-gray-200 bg-white text-gray-300'
                  : 'border-[#e5cfc4] bg-white hover:border-[#9b4f36] hover:text-[#9b4f36]'
              }
              `}
          >
            <ArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  );
}
