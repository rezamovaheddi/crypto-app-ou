import { create } from "zustand";
import { marketApi } from "../api/market.api";
import { CryptoMoverItem } from "../top-movers/types/top-movers.type";

interface TopMoversState {
    gainers: CryptoMoverItem[]
    losers: CryptoMoverItem[]
    isLoading: boolean
    error: string | null
    fetchTopMovers: ()=> Promise<void>
}

export const useTopMoversStore = create<TopMoversState>((set) => ({
  gainers: [],
  losers: [],
  isLoading: false,
  error: null,
  fetchTopMovers: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await marketApi.getCoins({ limit: 20 });
      
   
      const formattedCoins: CryptoMoverItem[] = data.map((coin) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        change24h: coin.pice_change ?? 0,
        iconUrl: coin.image,
      }));
      const sorted = [...formattedCoins].sort((a, b) => b.change24h - a.change24h);
      const gainers = sorted.slice(0, 5);
      const losers = [...sorted].reverse().slice(0, 5);
      set({ gainers, losers, isLoading: false, error: null });
    } catch (err: any) {
      set({
        isLoading: false,
        error: err?.message || 'oh invalid server error try again...',
      });
    }
  },
}));