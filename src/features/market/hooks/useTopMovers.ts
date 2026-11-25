import { create } from "zustand";
import { marketApi } from "../api/market.api";
import { CryptoMoverItem } from "../top-movers/types/top-movers.type";

interface TopMoversState {
  gainers: CryptoMoverItem[];
  losers: CryptoMoverItem[];
  isLoading: boolean;
  error: string | null;
  fetchTopMovers: () => Promise<void>;
}

export const useTopMoversStore = create<TopMoversState>((set) => ({
  gainers: [],
  losers: [],
  isLoading: false,
  error: null,
  fetchTopMovers: async () => {
    set({ isLoading: true, error: null });
    try {
      const data = await marketApi.getTopMovers({ limit: 4 });

      set({
        gainers: data.gainers,
        losers: data.losers,
        isLoading: false,
        error: null,
      });
    } catch (err: any) {
      set({
        isLoading: false,
        error: err?.message || "خطا در دریافت اطلاعات بازار",
      });
    }
  },
}));
