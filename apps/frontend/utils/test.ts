import { BinanceWsMessage } from "@/lib/utils";
import { CandlestickData, ISeriesApi, UTCTimestamp } from "lightweight-charts";

const SYMBOL = 'BTCUSDT';
const INTERVAL = '1m';


const REST_URL = `https://api.binance.com/api/v3/klines?symbol=${SYMBOL}&interval=${INTERVAL}&limit=600`;

const WS_URL = `wss://stream.binance.com:9443/ws/${SYMBOL.toLowerCase()}@kline_${INTERVAL}`;
export const BASE_URL = "wss://ws.backpack.exchange/";

type BinanceKline = [number, string, string, string, string, string, number, ...unknown[]];

export async function fetchHistory(): Promise<CandlestickData[]> {
    const response = await fetch(REST_URL);
    const klines: BinanceKline[] = await response.json();

    return klines.map((k) => ({
        time: (k[0] / 1000) as UTCTimestamp, 
        open: parseFloat(k[1]),
        high: parseFloat(k[2]),
        low: parseFloat(k[3]),
        close: parseFloat(k[4]),
    }));
}

export function connectWebSocket(candleSeries?: ISeriesApi<"Candlestick">) {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {console.log('WebSocket connected')
       
    //     ws.send(JSON.stringify(
    //     {
    //     method:"SUBSCRIBE",
    //     params:["bookTicker.SOL_USDC"],
    //     id:2
        
    // }
    // ))
    // ws.send(
    //     JSON.stringify({
    //         method:"SUBSCRIBE",params:["markPrice.BTC_USDC_PERP"],id:3
    //     })
    // )
    

    // ws.send(JSON.stringify({method:"SUBSCRIBE",params:["trade.SOL_USDC"],id:1}))

    ws.send(JSON.stringify({"method":"SUBSCRIBE","params":["depth.200ms.SOL_USDC"],"id":4}))

    }


    ws.onmessage = (event) => {
        // const msg: BinanceWsMessage = JSON.parse(event.data);
        // const k = msg.k;

        // // Update chart with latest candle data
        // candleSeries.update({
        //     time: (k.t / 1000) as UTCTimestamp, // Convert ms to seconds!
        //     open: parseFloat(k.o),
        //     high: parseFloat(k.h),
        //     low: parseFloat(k.l),
        //     close: parseFloat(k.c),
        // });
        const msg = JSON.parse(event.data)
        console.log(msg)
    };
   
    ws.onclose = () => {
        console.log('WebSocket closed, reconnecting...');
        setTimeout(connectWebSocket, 1000);
    };

    ws.onerror = (error) => console.error('WebSocket error:', error);
}


connectWebSocket()