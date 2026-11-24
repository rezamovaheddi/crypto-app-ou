import { httpClient } from "@/shared/api/client";
import { ApiSuccesResponse } from "@/shared/api/ApiResponse";
import { MarketCoinData, GetMarketParams } from "../types/market.types";
import { TopMoversResponseData } from "@/app/api/v1/market/top-movers/route";
export const marketApi = {
  getCoins: async (params: GetMarketParams) => {
    const response = await httpClient<ApiSuccesResponse<MarketCoinData[]>>(
      "/api/v1/market",
      {
        method: "GET",
        params: { ...params },
      },
    );
    return response.data;
  },
  getTopMovers: async (params?: { limit?: number; currency?: string }) => {
    const response = await httpClient<ApiSuccesResponse<TopMoversResponseData>>(
      "/api/v1/market/top-movers",
      {
        method: "GET",
        params: { ...params },
      },
    );
    return response.data;
  },
};
