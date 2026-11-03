import { clsx,ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function FormatNumber(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
}

export function FormatCurrency(num: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
}