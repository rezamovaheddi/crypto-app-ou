import Link from 'next/link';
import { LayoutGrid } from 'lucide-react';
import { HERO_FEATURE } from '@/constant/hero.constant'


export const HeroContent = () => {
  return (
    <div className="flex flex-col items-start space-y-7
     z-20">
      {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-medium text-emerald-400 tracking-wide">
          Live Market Data
        </span>
      </div> */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-orbitron tracking-tight text-white leading-[1.15] ">
        Track <span className="text-amber-400">Live.</span> <br />
        Let&apos;s <span className="text-[#22BD5A]">Trade.</span>
      </h1>

      <p className=" font-bold text-lg sm:text-lg text leading-relaxed text-gray-400">
       Get <b className='text-white'>$1,000</b> to start, with unlimited virtual funding. Practice trading on real-time markets with zero risk.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-3 py-3.5 rounded-2xl bg-amber-400  hover:border-white transition-all text-slate-950 font-semibold text-sm shadow-lg shadow-amber-400/20"
        >
          <LayoutGrid className="w-4 h-4" />
          Go to Dashboard
        </Link>
        <Link
          href="/markets"
          className="inline-flex items-center justify-center gap-2 px-3 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-sm border border-slate-800 transition-all"
        >
          Explore Markets
        </Link>
      </div>

      {/* Bottom Trust Badges */}
      <div className="flex flex-wrap items-center gap-6 pt-4">
        {HERO_FEATURE.map(({ id, label, icon: Icon }) => (
          <div key={id} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Icon className="w-4 h-4 text-emerald-800" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};