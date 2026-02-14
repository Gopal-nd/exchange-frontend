import Overview from '@/components/Trade/Overview'
import React from 'react'
import { Minus, Plus, AlignLeft, AlignRight, AlignJustify } from "lucide-react";
import Chart from '@/components/Trade/Chart';

const Trade =async ({ params }: { params: Promise<{ id: string }> }) => {
    const {id} = await params
    const isPerp =id&& id.includes('PERP')?true:false
    return (
        <div className='bg-base-background-l0 text-high-emphasis flex flex-1 flex-col justify-between overflow-auto'>
            <div className='flex-col flex flex-1 gap-2'>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-row h-full w-full flex-1 gap-2 px-4">
                        <div className='flex flex-col flex-1'>
                            <div className="flex flex-col relative h-full w-full">
                                <div className="flex flex-col absolute inset-0 overflow-x-hidden overflow-y-auto">
                                    <div className="flex flex-col h-full w-full flex-1">
                                        <div className="flex flex-col">
                                            <div className="flex flex-col flex-1">
                                                <div className="flex flex-col flex-1 gap-2">
                                                   <Overview token={id} isPerp={isPerp} />
                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row relative gap-2 h-[500px]">
                                                            <div className="flex flex-col bg-base-background-l1 flex-1 overflow-hidden rounded-lg">
                                                                <div className="flex h-full flex-col">
                                                                    <div className="flex items-center justify-between p-3">
                                                                        <div className="flex items-center gap-2">
                                                                            {/* Active tab */}
                                                                            <div className="flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-base-background-l2 px-3 text-[13px] font-semibold text-high-emphasis hover:opacity-90">
                                                                            Chart
                                                                            </div>

                                                                            {/* Inactive tabs */}
                                                                            {["Depth", "Margin", "Market Info"].map((label) => (
                                                                                <div
                                                                                    key={label}
                                                                                    className="flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg px-3 text-[13px] font-semibold text-med-emphasis hover:opacity-90"
                                                                                >
                                                                                    {label}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    <div className="items-center justify-start flex-row flex gap-2">
                                                                        <div className="relative h-full ">
                                                                            <Chart token={id} isPerp={isPerp} />
                                                                    
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col bg-base-background-l1 w-1/3 max-w-[300px] min-w-[260px] overflow-hidden rounded-lg">
                                                            <div className="flex flex-col h-full">
                                                                <div className="p-3">
      <div className="flex items-center gap-2">
        {/* Active */}
        <div className="flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-base-background-l2 px-3 text-[13px] font-semibold text-high-emphasis hover:opacity-90">
          Book
        </div>

        {/* Inactive */}
        <div className="flex h-8 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg px-3 text-[13px] font-semibold text-med-emphasis hover:opacity-90">
          Trades
        </div>
      </div>
    </div>
    <div className="flex flex-col grow overflow-y-hidden">
        <div className="flex flex-col h-full grow overflow-x-hidden">
<div className="flex items-center justify-between pl-2">
      {/* View mode buttons */}
      <div className="flex items-center gap-2">
        {/* Buy only */}
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-sm bg-base-background-l1 hover:brightness-125 focus:outline-none"
          aria-label="Buy orders"
        >
          <AlignLeft className="h-4 w-4 text-green-text" />
        </button>

        {/* Sell only */}
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-sm bg-base-background-l1 hover:brightness-125 focus:outline-none"
          aria-label="Sell orders"
        >
          <AlignRight className="h-4 w-4 text-red-text" />
        </button>

        {/* Both (active) */}
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-sm bg-base-background-l2 hover:brightness-125 focus:outline-none"
          aria-label="Buy and sell orders"
        >
          <AlignJustify className="h-4 w-4 text-high-emphasis" />
        </button>
      </div>

      {/* Step size control */}
      <div className="flex items-center px-3">
        <button
          type="button"
          disabled
          className="rounded-md p-1 text-base-icon transition hover:bg-base-background-l2 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Decrease step"
        >
          <Minus className="h-4 w-4" />
        </button>

        <p className="mx-0.5 w-[4ch] select-none text-center text-xs text-high-emphasis">
          0.01
        </p>

        <button
          type="button"
          className="rounded-md bg-base-background-l2 p-1 text-base-icon transition hover:bg-base-background-l2 hover:text-white"
          aria-label="Increase step"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
    <div className="flex min-w-0 gap-1 px-3 py-2">
      {/* Left section */}
      <div className="flex w-2/3 min-w-0 items-center justify-between gap-1">
        <p className="truncate text-xs text-high-emphasis">
          Price (USD)
        </p>

        <button
          type="button"
          className="truncate text-right text-xs font-medium text-med-emphasis transition-opacity hover:opacity-80"
        >
          Size (SOL)
        </button>
      </div>

      {/* Right section */}
      <button
        type="button"
        className="w-1/3 truncate text-right text-xs font-medium text-med-emphasis transition-opacity hover:opacity-80"
      >
        Total (SOL)
      </button>
    </div>

            //////
            <div className="relative mx-3 my-1 overflow-hidden">
      {/* Labels */}
      <div className="relative z-10 flex justify-between">
        <p className="bg-[#18372C] py-1 pl-2 text-xs font-normal text-green-text/90">
          {40}%
        </p>
        <p className="bg-[#422024] py-1 pr-2 text-xs font-normal text-red-text/90">
          {60}%
        </p>
      </div>

      {/* Background bars */}
      <div className="absolute inset-0">
        {/* Buy */}
        <div
          className="absolute left-0 top-0 h-full -skew-x-25 bg-[#18372C] border-r-2 border-base-background-l0 transition-all duration-300"
          style={{ width: `${40}%` }}
        />

        {/* Sell */}
        <div
          className="absolute right-0 top-0 h-full -skew-x-25 bg-[#422024] border-l-2 border-base-background-l0 transition-all duration-300"
          style={{ width: `${60}%` }}
        />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-[344px] shrink-0">

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
                                        <div className="flex flex-col gap-2 rounded-lg bg-base-background-l1 p-3">
                                            {/* Title */}
                                            <p className="text-sm text-high-emphasis">
                                                Market Reputation
                                            </p>

                                            {/* Header */}
                                            <div className="mt-2 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    {/* Token */}
                                                    <div className="flex items-center gap-2">
                                                        <img
                                                            src="/coins/sol.png"
                                                            alt="SOL Logo"
                                                            width={20}
                                                            height={20}
                                                            className="shrink-0 rounded-full"
                                                        />
                                                        <p className="text-sm font-semibold text-high-emphasis">
                                                            SOL
                                                        </p>
                                                    </div>

                                                    {/* Status */}
                                                    <div className="rounded-md bg-yellow-500/20 px-2 py-0.5 text-[11px] font-normal tracking-wide text-yellow-400">
                                                        Neutral
                                                    </div>
                                                </div>

                                                {/* Info icon */}
                                                <button
                                                    type="button"
                                                    className="cursor-help text-base-icon hover:opacity-80"
                                                    aria-label="Market reputation info"
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
                                                    >
                                                        <circle cx="12" cy="12" r="10" />
                                                        <path d="M12 16v-4" />
                                                        <path d="M12 8h.01" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Progress bar */}
                                            <button type="button" className="cursor-help -mb-2 -mt-3 w-full">
                                                <div className="h-1 w-full overflow-hidden rounded-full bg-base-background-l3">
                                                    <div
                                                        className="h-full bg-yellow-400 transition-all duration-300"
                                                        style={{ width: "0%" }}
                                                    />
                                                </div>
                                            </button>

                                            {/* Levels */}
                                            <div className="flex justify-between gap-2">
                                                <div className="flex flex-col">
                                                    <p className="text-[11px] font-normal text-high-emphasis">
                                                        Level 1
                                                    </p>
                                                    <p className="text-[11px] font-normal text-med-emphasis">
                                                        $0
                                                    </p>
                                                </div>

                                                <div className="flex flex-col text-right">
                                                    <p className="text-[11px] font-normal text-high-emphasis">
                                                        Level 2
                                                    </p>
                                                    <p className="text-[11px] font-normal text-med-emphasis">
                                                        $20
                                                    </p>
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