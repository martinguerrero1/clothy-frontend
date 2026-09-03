import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    const query = search.trim();

    if (!query) {
      setIsOpen(false);
      return;
    }

    navigate(`/tienda?search=${encodeURIComponent(query)}`);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleToggle = () => {
    if (isOpen) {
      handleSearch();
      return;
    }

    setIsOpen(true);
  };

  return (
    <div
      className={`flex items-center overflow-hidden rounded-full transition-all duration-200 ${
        isOpen ? 'w-52 bg-[#DCCEBE]/45' : 'w-10'
      }`}
    >
      {isOpen && (
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Buscar productos..."
          autoFocus
          className="min-w-0 flex-1 bg-transparent px-4 text-sm text-[#242424] outline-none placeholder:text-[#777]"
        />
      )}

      <button
        type="button"
        onClick={handleToggle}
        aria-label={isOpen ? 'Buscar' : 'Abrir búsqueda'}
        className="flex size-10 shrink-0 items-center justify-center rounded-full text-[#242424] transition-colors hover:bg-[#DCCEBE]/45 hover:text-[#C97B63]"
      >
        <Search size={20} strokeWidth={1.8} />
      </button>
    </div>
  );
}

export default HeaderSearch;
