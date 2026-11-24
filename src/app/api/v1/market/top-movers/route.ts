import { NextRequest } from "next/server";
import { ApiResponse } from "@/shared/api/ApiResponse";
import { CryptoMoverItem } from "@/features/market/top-movers/types/top-movers.type";

export interface TopMoversResponseData {
  gainers: CryptoMoverItem[];
  losers: CryptoMoverItem[];
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number(searchParams.get("limit") || 5);
    const currency = searchParams.get("currency") || "usd";

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!response.ok) {
      return ApiResponse.error(
        "خطا در دریافت اطلاعات بازار از سرور مرجع",
        "EXTERNAL_API_ERROR",
        response.status,
      );
    }

    const rawData = await response.json();

    const validCoins: CryptoMoverItem[] = rawData
      .filter(
        (coin: any) => typeof coin.price_change_percentage_24h === "number",
      )
      .map((coin: any) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
        iconUrl: coin.image,
      }));

    const gainers = [...validCoins]
      .sort((a, b) => b.change24h - a.change24h)
      .slice(0, limit);

    const losers = [...validCoins]
      .sort((a, b) => a.change24h - b.change24h)
      .slice(0, limit);

    return ApiResponse.success<TopMoversResponseData>({
      gainers,
      losers,
    });
  } catch (error) {
    return ApiResponse.error(
      "خطای سرور در محاسبه و دریافت اطلاعات Top Movers",
      "INTERNAL_SERVER_ERROR",
      500,
    );
  }
}
