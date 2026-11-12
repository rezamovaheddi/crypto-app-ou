export interface CoinMarket {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  priceChangePercentage24h: number;
  marketCap: number;
  totalVolume: number;
}

export interface GetMarketParams {
  page?: number;
  limit?: number;
  currency?: 'usd' | 'eur';
  search?: string;
}