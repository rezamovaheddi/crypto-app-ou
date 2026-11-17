import Link from 'next/link';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavAction';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0E14] border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* بخش لوگو (سمت چپ) */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* جایگزین SVG لوگوی بال‌دار CryptoPulse */}
          <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-amber-400 text-amber-400 font-black text-lg">
            C
          </div>
          <span className="text-xl font-extrabold tracking-wider text-amber-400">
            CryptoPulse
          </span>
        </Link>

        {/* بخش لینک‌ها و اکشن‌ها (سمت راست) */}
        <div className="flex items-center gap-10">
          <NavLinks className="hidden md:flex" />
          <NavActions />
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}