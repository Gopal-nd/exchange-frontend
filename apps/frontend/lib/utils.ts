import { clsx, type ClassValue } from "clsx"
import { ColorType } from "lightweight-charts";
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


export const chartConfig = {
  autoSize: true,
  layout: {
    background: { type: ColorType.Solid, color: '#14151b' },
    textColor: '#969faf',
  },
  grid: {
    vertLines: { color: '#202127' },
    horzLines: { color: '#202127' },
  },
  crosshair: {
    mode: 0, // Normal mode - no snapping to prices
    vertLine: { color: '#758696', labelBackgroundColor: '#4c525e' },
    horzLine: { color: '#758696', labelBackgroundColor: '#4c525e' },
  },
  timeScale: {
    timeVisible: true,
    secondsVisible: false,
    rightOffset: 10,
  },
}

export const candleBarColors = {
      upColor: '#00C278',
      downColor: '#FD4B4E',
      borderUpColor: '#00C278',
      borderDownColor: '#FD4B4E',
      wickUpColor: '#00C278',
      wickDownColor: '#FD4B4E',
      
    }


   export  interface BinanceWsMessage {
      e: string; // Event type
      k: {
        t: number; // Kline start time (ms)
        o: string; // Open price
        h: string; // High price
        l: string; // Low price
        c: string; // Close price
        x: boolean; // Is this kline closed?
      };
    }

    