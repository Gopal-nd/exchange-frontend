'use client'
import { Market, TradeWSMessage } from '@/types'
import { getCurrentTokenData } from '@/utils/http'
import { SignalingManager } from '@/utils/SignalingManager'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Overview = ({ token, isPerp,trade }: { token: string, isPerp: boolean,trade?:TradeWSMessage }) => {

    const { data, isLoading, error, isError } = useQuery({ queryKey: ['todos'], queryFn: () => getCurrentTokenData(token.split('_')[0]) })
    // console.log(data)
    if (isLoading) {
        <div>Loading..</div>
    }
    if (isError) {
        <div className="">{JSON.stringify(error)}</div>
    }

    if (!data) {
        return
    }


    return (
        <div className="flex items-center flex-row bg-base-background-l1 relative h-[66px] w-full rounded-lg py-3">
            <div className="flex items-center flex-row no-scrollbar mr-4 ml-4 w-full overflow-auto">
                <div className="flex justify-between flex-row w-full gap-4">
                    <div className="flex flex-row shrink-0 gap-6">
                        <button className='flex gap-2 items-center'>
                            <Image src={data && data[0]?.image || ''} alt='image' width={1000} height={1000} className='h-5 w-5' />
                            <div className='flex'>
                                {data && data[0].symbol.toUpperCase()}/<span className='text-med-emphasis'>USD</span>
                            </div>

                        </button>
                        <div className="flex flex-wrap items-center gap-x-6 text-med-emphasis">
                            {/* Price */}
                            <div className="flex h-full flex-col justify-center gap-0.5 shrink-0">
                                <button
                                    type="button"
                                    className="cursor-help"
                                    aria-label="Current price"
                                >
                                    <p className={`text-base font-medium tabular-nums ${trade?.m  ? 'text-red-500' : 'text-green-500'} `}>
                                        {trade?.p ?? data[0].current_price}
                                    </p>
                                </button>
                            </div>

                            {/* 24H Change */}
                            <div className="relative flex flex-col justify-center gap-1">
                                <p className="text-xs font-light text-med-emphasis">
                                    24H Change
                                </p>
                                <span className={`text-sm font-light tabular-nums ${data[0].price_change_24h >= 0 ? 'text-green-500' : 'text-red-500'} `}>
                                    {data[0].price_change_24h >= 0 ? "+" : "-"}{data[0].price_change_24h} {data[0].price_change_24h >= 0 ? "+" : "-"}{data[0].price_change_percentage_24h.toFixed(2)}%
                                </span>
                            </div>

                            {/* 24H High */}
                            <div className="relative flex flex-col justify-center gap-1">
                                <p className="text-xs font-light text-med-emphasis">
                                    24H High
                                </p>
                                <span className="text-xs font-normal leading-4 tabular-nums text-high-emphasis">
                                    {data[0].high_24h}
                                </span>
                            </div>

                            {/* 24H Low */}
                            <div className="relative flex flex-col justify-center gap-1">
                                <p className="text-xs font-light text-med-emphasis">
                                    24H Low
                                </p>
                                <span className="text-xs font-normal leading-4 tabular-nums text-high-emphasis">
                                    {data[0].low_24h}
                                </span>
                            </div>

                            {/* 24H Volume */}
                            <button
                                type="button"
                                className="text-left text-base font-medium text-accent-blue transition-opacity hover:opacity-80"
                                aria-label="24 hour volume"
                            >
                                <div className="relative flex flex-col justify-center gap-1">
                                    <p className="text-xs font-light text-med-emphasis">
                                        24H Volume (USD)
                                    </p>
                                    <span className="text-xs font-normal leading-4 tabular-nums text-high-emphasis">
                                        {Intl.NumberFormat("en-US").format(data[0].total_volume)}

                                    </span>
                                </div>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview