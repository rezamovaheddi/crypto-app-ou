export interface MarketCoinData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_value: number;
    high_24h: number;
    low_24h: number;
    pice_change: number;
    sparkline_in_7d?:{
        price: number[];
    };
}

export type ShortField = 'market_cap_desc' | 'price_desc' | 'price_asc' | 'change_desc';

