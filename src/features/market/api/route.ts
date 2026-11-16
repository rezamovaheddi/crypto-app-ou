import { NextRequest } from 'next/server';
import { ApiResponse } from '@/shared/api/ApiResponse';
import { MarketCoinData } from '@/features/market/types/market.types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get('page') || 1);
    const limit = Number(searchParams.get('limit') || 10);
    const currency = searchParams.get('currency') || 'usd';

  
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${limit}&page=${page}&sparkline=false`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      return ApiResponse.error('خطا در دریافت اطلاعات بازار از سرور مرجع', 'EXTERNAL_API_ERROR', response.status);
    }

    const rawData = await response.json();

    const formattedData: MarketCoinData[] = rawData.map((coin: any) => ({
      id: coin.id,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      image: coin.image,
      currentPrice: coin.current_price,
      priceChangePercentage24h: coin.price_change_percentage_24h,
      marketCap: coin.market_cap,
      totalVolume: coin.total_volume,
    }));

    return ApiResponse.success(formattedData, 200, { page, limit });
  } catch (error) {
    return ApiResponse.error('خطای داخلی سرور در پردازش اطلاعات مارکت', 'INTERNAL_SERVER_ERROR', 500);
  }
}