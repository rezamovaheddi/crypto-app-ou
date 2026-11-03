import { clsx,type,ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function FormatNumber(num: number): string {
    return new Intl.NumberFormat('fa-IR').format(num);
}