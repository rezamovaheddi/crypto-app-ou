import { Zap, Coins, ShieldCheck, LucideIcon } from "lucide-react";

export interface HeroFeatureItem {
    id: string;
    label: string;
    icon: LucideIcon;
}

export const HERO_FEATURE: HeroFeatureItem[] = [
    {id:'live-prices', label:'Live prices', icon:Zap},
    {id: 'coins-count', label:'5,000+ coins', icon:Coins},
    {id:'zero-risk',label:'Zero Risk', icon:ShieldCheck}
]