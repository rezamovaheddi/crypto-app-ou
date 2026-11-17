'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/shared/config/navbar.config';

interface NavLinksProps {
  className?: string;
  onItemClick?: () => void;
}

export function NavLinks({ className = '', onItemClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      {NAV_LINKS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={`text-sm font-medium transition-colors duration-200 hover:border-b${
              isActive
                ? 'text-amber-400 font-semibold'
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}