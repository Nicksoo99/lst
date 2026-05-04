import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ProductDropdownProps {
  title: string;
  options: string[];
}

export function ProductDropdown({ title, options }: ProductDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownId = `${title.toLowerCase().replace(/\s+/g, '-')}-options`;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border-2 border-green-300 hover:border-yellow-500 rounded-lg px-4 py-3 flex justify-between items-center transition-all touch-manipulation"
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        aria-label={`${isOpen ? 'Close' : 'Open'} ${title} options`}
      >
        <span className="font-semibold text-green-800 text-left">{title}</span>
        <ChevronDown
          className={`text-green-700 transition-transform duration-300 flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      {isOpen && (
        <div
          id={dropdownId}
          role="list"
          className="z-20 w-full mt-2 bg-white border-2 border-green-300 rounded-lg shadow-xl max-h-72 overflow-y-auto md:absolute md:left-0"
        >
          {options.map((option, index) => (
            <button
              type="button"
              role="listitem"
              key={index}
              className="w-full text-left px-4 py-3.5 hover:bg-green-50 active:bg-green-100 transition-colors border-b border-green-100 last:border-b-0 text-sm md:text-base touch-manipulation"
            >
              <span className="text-zinc-700">{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
