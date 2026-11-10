import { MarketCoinData } from "../../types/market.types";
export type TimeframeOption = "24H"|"7D"|"1M"|"1Y"

export interface HeroSectionPage {
    coins?: MarketCoinData[]
}

export interface MiniTickerItem {
    symbol: string
    price: number
    change24h: number
}
export interface HeroFeatureItem{
    id: number
    label: string
    iconNumber: 'zap'|'coins'|'shield'
}