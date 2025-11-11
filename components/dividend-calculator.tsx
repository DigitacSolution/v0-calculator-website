"use client"

import { useState } from "react"

export default function DividendCalculator() {
  const [sharePrice, setSharePrice] = useState(100)
  const [sharesOwned, setSharesOwned] = useState(100)
  const [annualDividend, setAnnualDividend] = useState(5)
  const [years, setYears] = useState(5)

  const totalInvested = sharePrice * sharesOwned
  const annualDividendAmount = (annualDividend / 100) * totalInvested
  const totalDividends = annualDividendAmount * years
  const dividendYield = annualDividend

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Share Price: ${sharePrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </label>
        <input
          type="range"
          min="1"
          max="1000"
          step="0.5"
          value={sharePrice}
          onChange={(e) => setSharePrice(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Number of Shares: {sharesOwned}</label>
        <input
          type="range"
          min="1"
          max="10000"
          step="1"
          value={sharesOwned}
          onChange={(e) => setSharesOwned(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Annual Dividend Yield (%): {annualDividend.toFixed(2)}%
        </label>
        <input
          type="range"
          min="0.1"
          max="20"
          step="0.1"
          value={annualDividend}
          onChange={(e) => setAnnualDividend(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Time Period (Years): {years}</label>
        <input
          type="range"
          min="1"
          max="50"
          step="1"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
            <p className="text-xl font-bold text-foreground">
              ${totalInvested.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Annual Dividend</p>
            <p className="text-xl font-bold text-accent">
              ${annualDividendAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground mb-1">Total Dividends ({years} years)</p>
            <p className="text-3xl font-bold text-primary">
              ${totalDividends.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
