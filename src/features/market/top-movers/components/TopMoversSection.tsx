'use client';

import { useEffect } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { useTopMoversStore } from '../../hooks/useTopMovers';
import { TopMoversHeader } from './TopMoversHeader';
import { TopMoversCard } from './TopMoversCard';
import { TopMoversSectionProps } from '../types/top-movers.type';

export const TopMoversSection = ({ className }: TopMoversSectionProps) => {
  const { gainers, losers, isLoading, error, fetchTopMovers } =
    useTopMoversStore();

  useEffect(() => {
    fetchTopMovers();
  }, [fetchTopMovers]);

  return (
    <section
      className={cn(
        'relative w-full bg-[#0e1014] overflow-hidden py-16 lg:py-20',
        className
      )}
    >
      {/* افکت‌های نوری پس‌زمینه مطابق تصویر */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-blue-700/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-15 container mx-auto px-14 sm:px-6 lg:px-8 max-w-7xl">
        <TopMoversHeader />

        {error ? (
          <div className="flex flex-col items-center justify-center p-10 rounded-2xl border border-rose-500/20 bg-rose-500/5 text-center">
            <AlertCircle className="w-8 h-8 text-rose-400 mb-3" />
            <p className="text-sm text-slate-300 mb-4">{error}</p>
            <button
              onClick={fetchTopMovers}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Try Again
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <TopMoversCard
              title="Top Gainers"
              variant="gainers"
              data={gainers}
              isLoading={isLoading}
            />
            <TopMoversCard
              title="Top Losers"
              variant="losers"
              data={losers}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </section>
  );
};