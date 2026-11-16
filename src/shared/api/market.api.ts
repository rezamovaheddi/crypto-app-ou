import { httpClient } from '@/shared/api/client';
import { CoinMarket, GetMarketParams } from '@/types/market.types';

export const marketApi = {
  getCoins: (params?: GetMarketParams) => {
    return httpClient<CoinMarket[]>('/api/market', {
      method: 'GET',
      params: {
        page: params?.page ?? 1,
        limit: params?.limit ?? 10,
        currency: params?.currency ?? 'usd',
        ...(params?.search !== undefined ? { search: params.search } : {}),
      },
    });
  },

  getCoinById: (id: string) => {
    return httpClient<CoinMarket>(`/api/market/${id}`, {
      method: 'GET',
    });
  },
};