import Link from 'next/link';
import { LayoutGrid } from 'lucide-react';
import { HERO_FEATURE } from '@/constant/hero.constant'


export const HeroContent = () => {
  return (
    <div className="flex flex-col items-start space-y-6 z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-medium text-emerald-400 tracking-wide">
          Live Market Data
        </span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
        Welcome Back. <br />
        Let&apos;s <span className="text-amber-400">Trade.</span>
      </h1>

      <p className="text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed">
        Your portfolio is live. Spot the next opportunity and grow your virtual funds.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-400/20"
        >
          <LayoutGrid className="w-4 h-4" />
          Go to Dashboard
        </Link>
        <Link
          href="/markets"
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-sm border border-slate-800 transition-all"
        >
          Explore Markets
        </Link>
      </div>

      {/* Bottom Trust Badges */}
      <div className="flex flex-wrap items-center gap-6 pt-4">
        {HERO_FEATURE.map(({ id, label, icon: Icon }) => (
          <div key={id} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Icon className="w-4 h-4 text-emerald-400" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};