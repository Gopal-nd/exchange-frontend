// 'use client'
// import { chartConfig } from '@/lib/utils';
// import { createChart, CandlestickSeries } from 'lightweight-charts';
// import type { CandlestickData, UTCTimestamp } from 'lightweight-charts';
// import { useEffect, useRef } from 'react';
// const Chart = () => {
// // ============================================
// // 1. CREATE THE CHART
// // ============================================
// const chartRef = useRef<HTMLDivElement|null>(null)
// if (!chartRef.current) return;
// const chart = createChart(chartRef.current, chartConfig);

// const candleSeries = chart.addSeries(CandlestickSeries, {
//   upColor: '#26a69a',
//   downColor: '#ef5350',
//   borderUpColor: '#26a69a',
//   borderDownColor: '#ef5350',
//   wickUpColor: '#26a69a',
//   wickDownColor: '#ef5350',
// });


// const SYMBOL = 'BTCUSDT';
// const INTERVAL = '1m';
// const REST_URL = `https://api.binance.com/api/v3/klines?symbol=${SYMBOL}&interval=${INTERVAL}&limit=100`;
// const WS_URL = `wss://stream.binance.com:9443/ws/${SYMBOL.toLowerCase()}@kline_${INTERVAL}`;


// type BinanceKline = [number, string, string, string, string, string, number, ...unknown[]];

// async function fetchHistory(): Promise<CandlestickData[]> {
//   const response = await fetch(REST_URL);
//   const klines: BinanceKline[] = await response.json();

//   return klines.map((k) => ({
//     time: (k[0] / 1000) as UTCTimestamp, // Convert ms to seconds!
//     open: parseFloat(k[1]),
//     high: parseFloat(k[2]),
//     low: parseFloat(k[3]),
//     close: parseFloat(k[4]),
//   }));
// }


// interface BinanceWsMessage {
//   e: string; // Event type
//   k: {
//     t: number; // Kline start time (ms)
//     o: string; // Open price
//     h: string; // High price
//     l: string; // Low price
//     c: string; // Close price
//     x: boolean; // Is this kline closed?
//   };
// }

// function connectWebSocket() {
//   const ws = new WebSocket(WS_URL);

//   ws.onopen = () => console.log('WebSocket connected');

//   ws.onmessage = (event) => {
//     const msg: BinanceWsMessage = JSON.parse(event.data);
//     const k = msg.k;

//     // Update chart with latest candle data
//     candleSeries.update({
//       time: (k.t / 1000) as UTCTimestamp, // Convert ms to seconds!
//       open: parseFloat(k.o),
//       high: parseFloat(k.h),
//       low: parseFloat(k.l),
//       close: parseFloat(k.c),
//     });
//   };

//   ws.onclose = () => {
//     console.log('WebSocket closed, reconnecting...');
//     setTimeout(connectWebSocket, 1000);
//   };

//   ws.onerror = (error) => console.error('WebSocket error:', error);
// }

// // ============================================
// // 6. INITIALIZE
// // ============================================

// async function main() {
//   // Load historical data
//   console.log('Fetching historical data...');
//   const history = await fetchHistory();
//   candleSeries.setData(history);
//   console.log(`Loaded ${history.length} candles`);

//   // Start real-time updates
//   console.log('Connecting to WebSocket...');
//   connectWebSocket();
// }



// useEffect(()=>{
// async function init() {
// main().catch(console.error);
    
// }
// init()
// },[])


//   return (
//     <div id='chart' ref={chartRef} style={{ height: "520px", width: "100%", marginTop: 4 }}> helloo</div>
//   )
// }

// export default Chart




'use client';

import { createChart, ColorType, CandlestickSeries } from 'lightweight-charts';
import type { CandlestickData, UTCTimestamp } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

export default function Chart() {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const candleSeriesRef = useRef<ReturnType<
    ReturnType<typeof createChart>['addSeries']
  > | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // ===============================
    // 1. CREATE CHART (AFTER MOUNT)
    // ===============================
    const chart = createChart(chartRef.current, {
      autoSize: true,
      layout: {
        background: { type: ColorType.Solid, color: '#131722' },
        textColor: '#d1d4dc',
      },
      grid: {
        vertLines: { color: '#1f2943' },
        horzLines: { color: '#1f2943' },
      },
      crosshair: {
        mode: 0,
      },
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
        rightOffset: 10,
      },
    });

    // ===============================
    // 2. ADD CANDLE SERIES
    // ===============================
    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderUpColor: '#26a69a',
      borderDownColor: '#ef5350',
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    candleSeriesRef.current = candleSeries;

    // ===============================
    // 3. BINANCE CONFIG
    // ===============================
    const SYMBOL = 'BTCUSDT';
    const INTERVAL = '1m';

    const REST_URL = `https://api.binance.com/api/v3/klines?symbol=${SYMBOL}&interval=${INTERVAL}&limit=100`;
    const WS_URL = `wss://stream.binance.com:9443/ws/${SYMBOL.toLowerCase()}@kline_${INTERVAL}`;

    type BinanceKline = [
      number,
      string,
      string,
      string,
      string,
      string,
      number,
      ...unknown[]
    ];

    async function fetchHistory(): Promise<CandlestickData[]> {
      const res = await fetch(REST_URL);
      const klines: BinanceKline[] = await res.json();

      return klines.map(k => ({
        time: (k[0] / 1000) as UTCTimestamp,
        open: +k[1],
        high: +k[2],
        low: +k[3],
        close: +k[4],
      }));
    }

    // ===============================
    // 4. WEBSOCKET
    // ===============================
    const ws = new WebSocket(WS_URL);

    ws.onmessage = event => {
      const msg = JSON.parse(event.data);
      const k = msg.k;

      candleSeries.update({
        time: (k.t / 1000) as UTCTimestamp,
        open: +k.o,
        high: +k.h,
        low: +k.l,
        close: +k.c,
      });
    };

    // ===============================
    // 5. INIT
    // ===============================
    fetchHistory().then(data => candleSeries.setData(data));

    // ===============================
    // 6. CLEANUP (VERY IMPORTANT)
    // ===============================
    return () => {
      ws.close();
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      className="h-full w-full"
       style={{ height: "520px", width: "100%", marginTop: 4 }}
    />
  );
}
