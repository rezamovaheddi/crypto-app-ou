import Link from 'next/link';
import { NavLinks } from './NavLinks';
import { NavActions } from './NavAction';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#05090f] border-b border-zinc-600/55">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        
        {/* بخش لوگو (سمت چپ) */}
        <Link href="/" className=" flex items-center gap-1 group">
          {/* جایگزین SVG لوگوی بال‌دار CryptoPulse */}
          <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-amber-400 text-amber-400 font-black text-lg">
            C
          </div>
          <span className="text-xl extrabold tracking-wider text-amber-400 font-orbitron">
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