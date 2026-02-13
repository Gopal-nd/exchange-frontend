import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateMockSparkline(
  basePrice: number,
  changePct: number,
  points = 20
): number[] {
  const direction = changePct >= 0 ? 1 : -1;
  const volatility = Math.abs(changePct) / 100 || 0.02;

  let price = basePrice;
  const data: number[] = [];

  for (let i = 0; i < points; i++) {
    const noise = (Math.random() - 0.5) * volatility * basePrice;
    price += noise + direction * volatility * basePrice * 0.1;
    data.push(price);
  }

  return data;
}


