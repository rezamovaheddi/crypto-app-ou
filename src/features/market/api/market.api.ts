import { httpClient } from "@/shared/api/client";
import { ApiSuccesResponse } from "@/shared/api/ApiResponse";
import { MarketCoinData, GetMarketParams  } from "../types/market.types";

export const marketApi = {
    getCoins: async (params: GetMarketParams) =>{
        const response = await httpClient<ApiSuccesResponse<MarketCoinData[]>>
        ('/api/v1/market', {
            method: 'GET',
            params: {...params}
        });
        return response.data
    }
}