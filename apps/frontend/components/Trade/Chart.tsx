'use client'
import { candleBarColors, chartConfig, updateCandle } from '@/lib/utils';
import { ChartManager } from '@/utils/ChartManager';
import { getKLines } from '@/utils/http';
import { SignalingManager } from '@/utils/SignalingManager';
import { connectWebSocket, fetchHistory } from '@/utils/test';
import { createChart, CandlestickSeries, ColorType } from 'lightweight-charts';
import type { CandlestickData, ISeriesApi, UTCTimestamp } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

const Chart = ({ token, isPerp }: { token: string, isPerp: boolean }) => {

  const chartRef = useRef<HTMLDivElement | null>(null)
  const candleSeriesRef = useRef<ISeriesApi<'Candlestick'>>(null);

  useEffect(() => {


    if (!chartRef.current) return;

    const chart = new ChartManager(chartRef.current)

    const ws = SignalingManager.getInstance()
    async function main() {
      // ws.registerCallback('',)

      const history = await getKLines(token + 'C')

      chart.setData(history)


    }
  const onTrade = (trade: any) => {
  const candle = updateCandle(trade);
  if (!candle) return;

  chart.update(candle);
};

    main().catch(console.error)
    ws.sendMessage({ method: "SUBSCRIBE", params: [`trade.${token}C`] })
    ws.registerCallback('trade', (data: any) => {
      onTrade(data)
    }, `trade-${token}`)

    return () => {
      chart.destroy()
      ws.sendMessage({ method: "UNSUBSCRIBE", params: [`trade.${token}C`] })
      ws.deRegisterCallback('trade', `trade.${token}C`)

    }

  }, [])

  return (
    <div id='chart' ref={chartRef} className='w-full h-full' style={{ height: '440px', width: '840px' }}> </div>
  )
}

export default Chart