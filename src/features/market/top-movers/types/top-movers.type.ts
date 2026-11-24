export type MoverVariant = 'gainers' | 'losers';

export interface CryptoMoverItem {
    id: string
    name: string
    symbol: string
    price: number
    change24h: number
    iconUrl?: string
}

export interface TopMoverRowProps {
    coin: CryptoMoverItem
    variant: MoverVariant
}

export interface TopMoversCardProps {
  title: string;
  variant: MoverVariant;
  data: CryptoMoverItem[];
  isLoading?: boolean;
}

export interface TopMoversSectionProps {
  gainers?: CryptoMoverItem[];
  losers?: CryptoMoverItem[];
  isLoading?: boolean;
  className?: string;
}