"use client"

import { useState } from "react"

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState(75000)
  const [filingStatus, setFilingStatus] = useState("single")

  // 2024 US Tax Brackets (simplified)
  const taxBrackets = {
    single: [
      { limit: 11600, rate: 0.1 },
      { limit: 47150, rate: 0.12 },
      { limit: 100525, rate: 0.22 },
      { limit: 191950, rate: 0.24 },
      { limit: 243725, rate: 0.32 },
      { limit: 609350, rate: 0.35 },
      { limit: Number.POSITIVE_INFINITY, rate: 0.37 },
    ],
    married: [
      { limit: 23200, rate: 0.1 },
      { limit: 94300, rate: 0.12 },
      { limit: 201050, rate: 0.22 },
      { limit: 383900, rate: 0.24 },
      { limit: 487450, rate: 0.32 },
      { limit: 731200, rate: 0.35 },
      { limit: Number.POSITIVE_INFINITY, rate: 0.37 },
    ],
  }

  let tax = 0
  let previousLimit = 0
  const brackets = taxBrackets[filingStatus as keyof typeof taxBrackets]

  for (const bracket of brackets) {
    if (income > previousLimit) {
      const taxableInThisBracket = Math.min(income, bracket.limit) - previousLimit
      tax += taxableInThisBracket * bracket.rate
      previousLimit = bracket.limit
    }
  }

  const effectiveRate = (tax / income) * 100
  const netIncome = income - tax

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Annual Income: ${income.toLocaleString()}
        </label>
        <input
          type="range"
          min="10000"
          max="1000000"
          step="5000"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Filing Status</label>
        <div className="flex gap-2">
          {[
            { value: "single", label: "Single" },
            { value: "married", label: "Married" },
          ].map((status) => (
            <button
              key={status.value}
              onClick={() => setFilingStatus(status.value)}
              className={`py-2 px-4 rounded-lg font-medium transition-all ${
                filingStatus === status.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-slate-100 text-foreground hover:bg-slate-200"
              }`}
            >
              {status.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Federal Tax</p>
            <p className="text-2xl font-bold text-accent">
              ${tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Effective Rate</p>
            <p className="text-2xl font-bold text-foreground">{effectiveRate.toFixed(2)}%</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground mb-1">Net Income</p>
            <p className="text-3xl font-bold text-primary">
              ${netIncome.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
