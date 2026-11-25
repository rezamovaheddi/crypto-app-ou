import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { TopMoversCardProps } from '../types/top-movers.type';
import { TopMoverRow } from './TopMoverRow';

export const TopMoversCard = ({
  title,
  variant,
  data,
  isLoading = false,
}: TopMoversCardProps) => {
  const isGainer = variant === 'gainers';
  const Icon = isGainer ? TrendingUp : TrendingDown;

  return (
    <div className="rounded-2xl p-5 border border-white/10 bg-[#131720]/85 backdrop-blur-md shadow-2xl overflow-clip">
      {/* هدر کارت */}
      <div className="flex items-end gap-4  p-4  py-3.5 border-b border-white/10">
        <Icon
          className={cn(
            'w-3.5 h-3.5',
            isGainer ? 'text-emerald-400' : 'text-rose-400'
          )}
        />
        <h3
          className={cn(
            'text-xs font-semibold uppercase tracking-widest',
            isGainer ? 'text-emerald-400' : 'text-rose-400'
          )}
        >
          {title}
        </h3>
      </div>

      {/* لیست ردیف‌ها */}
      <div className="divide-y divide-white/5">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-5 py-3.5 animate-pulse"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800" />
                <div className="space-y-1.5">
                  <div className="w-24 h-3.5 bg-slate-800 rounded" />
                  <div className="w-12 h-2.5 bg-slate-800/70 rounded" />
                </div>
              </div>
              <div className="space-y-1.5 flex flex-col items-end">
                <div className="w-16 h-3.5 bg-slate-800 rounded" />
                <div className="w-10 h-2.5 bg-slate-800/70 rounded" />
              </div>
            </div>
          ))
        ) : data.length > 0 ? (
          data.map((coin) => (
            <TopMoverRow key={coin.id} coin={coin} variant={variant} />
          ))
        ) : (
          <div className="px-5 py-8 text-center font-bold  text-lg text-slate-500">
            No data available
          </div>
        )}
      </div>
    </div>
  );
};