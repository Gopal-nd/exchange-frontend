



import Overview from '@/components/Trade/Overview'
import React from 'react'
import { Minus, Plus, AlignLeft, AlignRight, AlignJustify } from "lucide-react";
import Chart from '@/components/Trade/Chart';
import Depth from '@/components/Depth/Depth';
import LeftSidePanle from '@/components/LeftSidePanle';

const Trade = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const isPerp = id?.includes('PERP')

    return (
        <div className="flex flex-1 flex-col bg-base-background-l0 text-high-emphasis overflow-auto">

            {/* MAIN GRID */}
            <div className="flex flex-1 gap-2 px-4">

                {/* LEFT SIDE */}
            <LeftSidePanle id={id} isPerp={isPerp} />

                {/* RIGHT SIDEBAR */}
                <div className="w-[344px] shrink-0 overflow-y-auto">
                    <div className="flex flex-col relative h-full w-full">
                        <div className="flex flex-col absolute inset-0 overflow-x-hidden overflow-y-auto">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col bg-base-background-l1 gap-4 rounded-lg p-3">

                                    <div className="flex flex-col gap-4">
                                        <div className="flex h-[44px] w-full overflow-hidden rounded-xl bg-base-background-l1v2">
                                            {/* Buy (active) */}
                                            <button
                                                type="button"
                                                className="w-full rounded-xl bg-green-background-solid text-sm font-semibold text-green-text"
                                            >
                                                Buy
                                            </button>

                                            {/* Sell */}
                                            <button
                                                type="button"
                                                className="w-full rounded-xl text-sm font-semibold text-low-emphasis hover:text-red-text"
                                            >
                                                Sell
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            {/* Limit / Market */}
                                            <div className="flex items-center">
                                                {/* Active */}
                                                <div className="flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-base-background-l2 px-3 text-[13px] font-semibold text-high-emphasis hover:opacity-90">
                                                    Limit
                                                </div>

                                                {/* Inactive */}
                                                <div className="flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg px-3 text-[13px] font-semibold text-med-emphasis hover:opacity-90">
                                                    Market
                                                </div>
                                            </div>

                                            {/* Conditional dropdown */}
                                            <div className="group flex items-center">
                                                <button
                                                    type="button"
                                                    className="h-8 rounded-l-lg px-3 pr-1 text-[13px] font-semibold text-med-emphasis group-hover:opacity-90"
                                                >
                                                    Conditional
                                                </button>

                                                <button
                                                    type="button"
                                                    className="flex h-8 items-center rounded-r-lg px-2 text-xs font-medium text-med-emphasis group-hover:opacity-90"
                                                    aria-expanded="false"
                                                    aria-label="Toggle conditional options"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-base-icon hover:text-high-emphasis"
                                                    >
                                                        <path d="m6 9 6 6 6-6" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">

                                            <div className="flex flex-1 flex-col gap-3 text-high-emphasis">
                                                {/* Balance */}
                                                <div className="flex justify-between px-[2px]">
                                                    <button type="button" className="cursor-help">
                                                        <p className="relative text-xs font-normal text-med-emphasis">
                                                            Balance
                                                            <span className="absolute bottom-0 left-0 w-full translate-y-full border-b border-dashed border-base-border-med" />
                                                        </p>
                                                    </button>
                                                    <p className="text-xs font-medium text-high-emphasis">-</p>
                                                </div>

                                                {/* Price */}
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center justify-between">
                                                        <p className="text-xs font-normal text-med-emphasis">Price</p>
                                                        <div className="flex items-center text-xs">
                                                            <button className="font-medium text-accent-blue hover:opacity-80">
                                                                Mid
                                                            </button>
                                                            <div className="mx-2 h-4 w-px bg-base-border-med" />
                                                            <button className="font-medium text-accent-blue hover:opacity-80">
                                                                BBO
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            inputMode="numeric"
                                                            value="79.85"
                                                            placeholder="0"
                                                            className="w-full rounded-lg border border-base-background-l2 bg-base-background-l2 pr-10 text-lg placeholder-med-emphasis transition focus:border-accent-blue focus:ring-0"
                                                        />
                                                        <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 p-2">
                                                            <img
                                                                src="https://backpack.exchange/coins/usd.svg"
                                                                alt="USD"
                                                                width={24}
                                                                height={24}
                                                                className="rounded-full"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Quantity */}
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-xs font-normal text-med-emphasis">Quantity</p>

                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            inputMode="numeric"
                                                            placeholder="0"
                                                            className="w-full rounded-lg border border-base-background-l2 bg-base-background-l2 pr-10 text-lg placeholder-med-emphasis transition focus:border-accent-blue focus:ring-0"
                                                        />
                                                        <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 p-2">
                                                            <img
                                                                src="/coins/sol.png"
                                                                alt="SOL"
                                                                width={24}
                                                                height={24}
                                                                className="rounded-full"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Slider */}
                                                    <div className="mt-2">
                                                        <div className="relative mx-2 h-1 cursor-pointer rounded-full bg-base-background-l3">
                                                            <div className="h-full w-0 rounded-full bg-accent-blue" />
                                                            <div
                                                                className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-accent-blue"
                                                                style={{ left: "0%" }}
                                                            />
                                                        </div>

                                                        <div className="mt-2 flex justify-between text-xs text-med-emphasis">
                                                            <span>0</span>
                                                            <span>100%</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Order Value */}
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-xs font-normal text-med-emphasis">Order Value</p>

                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            inputMode="numeric"
                                                            placeholder="0"
                                                            className="w-full rounded-lg border border-base-background-l2 bg-base-background-l2 pr-10 text-lg placeholder-med-emphasis transition focus:border-accent-blue focus:ring-0"
                                                        />
                                                        <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 p-2">
                                                            <img
                                                                src="https://backpack.exchange/coins/usd.svg"
                                                                alt="USD"
                                                                width={24}
                                                                height={24}
                                                                className="rounded-full"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Auth buttons */}
                                                <div className="flex flex-col gap-3">
                                                    <a
                                                        href="/signup"
                                                        className="inline-flex h-10 items-center justify-center rounded-xl bg-button-primary-background px-4 py-2 text-sm font-semibold text-button-primary-text hover:opacity-90"
                                                    >
                                                        Sign up to trade
                                                    </a>

                                                    <a
                                                        href="/login"
                                                        className="inline-flex h-10 items-center justify-center rounded-xl bg-button-secondary-background px-4 py-2 text-sm font-semibold text-button-secondary-text hover:opacity-90"
                                                    >
                                                        Log in to trade
                                                    </a>
                                                </div>

                                                {/* Options */}
                                                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-3">
                                                    {[
                                                        { id: "postOnly", label: "Post Only" },
                                                        { id: "ioc", label: "IOC" },
                                                    ].map(({ id, label }) => (
                                                        <label key={id} className="flex items-center gap-2 text-xs font-medium text-med-emphasis">
                                                            <input
                                                                type="checkbox"
                                                                className="h-4 w-4 cursor-pointer rounded-sm border border-base-border-med bg-base-950 checked:border-high-emphasis checked:bg-high-emphasis focus:ring-0"
                                                            />
                                                            <span className="border-b border-dashed border-base-border-med cursor-help">
                                                                {label}
                                                            </span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Trade
