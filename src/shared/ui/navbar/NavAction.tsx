'use client';

import { useState } from 'react';
import { Sun, ChevronDown, LogOut, User, Settings } from 'lucide-react';

export function NavActions() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const user = {
    name: 'reza',
    initial: 'R',
  };

  return (
    <div className="flex items-center gap-5">
      {/* دکمه تغییر تم */}
      <button
        type="button"
        aria-label="Toggle theme"
        className="p-2 text-amber-400 hover:bg-zinc-900 rounded-full transition-colors"
      >
        <Sun className="w-5 h-5" />
      </button>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="flex items-center gap-2.5 text-sm text-zinc-200 hover:text-white focus:outline-none"
        >
          {/* آواتار دایره‌ای زرد */}
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 text-zinc-950 font-bold text-sm">
            {user.initial}
          </span>
          <span className="font-medium hidden sm:inline-block">{user.name}</span>
          <ChevronDown
            className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* محتوای دراپ‌داون */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-3 w-48 rounded-xl bg-zinc-900 border border-zinc-800 shadow-lg py-1.5 z-50">
            <button className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white">
              <User className="w-4 h-4" /> Profile
            </button>
            <button className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white">
              <Settings className="w-4 h-4" /> Settings
            </button>
            <div className="my-1 border-t border-zinc-800" />
            <button className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-400 hover:bg-zinc-800">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}