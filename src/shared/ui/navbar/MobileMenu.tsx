'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLinks } from './NavLinks';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Menu"
        className="p-2 text-zinc-400 hover:text-amber-400 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0B0E14] border-b border-zinc-800/80 px-6 py-4 shadow-xl z-40">
          <NavLinks
            className="flex-col items-start gap-4"
            onItemClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
}