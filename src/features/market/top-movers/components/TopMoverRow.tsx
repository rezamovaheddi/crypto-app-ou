import { formatCurrency, cn } from "@/shared/lib/utils";
import { TopMoverRowProps } from "../types/top-movers.type";

export const TopMoverRow = ({ coin, variant }: TopMoverRowProps) => {
  const isGainer = variant === 'gainers';
  const formattedChange = Math.abs(coin.change24h).toFixed(2);
  return (
    <div className="flex items-center justify-between px-5 py-5 hover:bg-white/[0.02] transition-colors">
      {/* سمت چپ: آیکون، نام و نماد */}
      <div className="flex items-center gap-3 min-w-0">
        {coin.iconUrl ? (
          <img
            src={coin.iconUrl}
            alt={coin.name}
            loading="lazy"
            className="w-8 h-8 rounded-full object-cover bg-slate-800 shrink-0"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300 shrink-0">
            {coin.symbol.slice(0, 2)}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">{coin.name}</p>
          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
            {coin.symbol}
          </p>
        </div>
      </div>
      {/* سمت راست: قیمت و درصد تغییر */}
      <div className="text-right tabular-nums shrink-0 pl-4">
        <p className="text-sm font-medium text-white">
          {formatCurrency(coin.price)}
        </p>
        <p
          className={cn(
            'text-xs font-medium mt-0.5',
            isGainer ? 'text-emerald-400' : 'text-rose-400'
          )}
        >
          {isGainer ? `+${formattedChange}%` : `${formattedChange}%`}
        </p>
      </div>
    </div>
  );
};