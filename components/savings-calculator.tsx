"use client"

import { useState } from "react"

export default function SavingsCalculator() {
  const [currentSavings, setCurrentSavings] = useState(10000)
  const [monthlySavings, setMonthlySavings] = useState(500)
  const [interestRate, setInterestRate] = useState(4)
  const [months, setMonths] = useState(36)

  const monthlyRate = interestRate / 100 / 12

  let totalSavings = currentSavings * Math.pow(1 + monthlyRate, months)
  totalSavings += (monthlySavings * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate

  const totalContributions = currentSavings + monthlySavings * months
  const interest = totalSavings - totalContributions

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Current Savings: ${currentSavings.toLocaleString()}
        </label>
        <input
          type="range"
          min="0"
          max="250000"
          step="1000"
          value={currentSavings}
          onChange={(e) => setCurrentSavings(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Monthly Savings: ${monthlySavings.toLocaleString()}
        </label>
        <input
          type="range"
          min="0"
          max="10000"
          step="50"
          value={monthlySavings}
          onChange={(e) => setMonthlySavings(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Annual Interest Rate (%): {interestRate.toFixed(2)}%
        </label>
        <input
          type="range"
          min="0.1"
          max="10"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Time Period (Months): {months}</label>
        <input
          type="range"
          min="1"
          max="600"
          step="1"
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Contributed</p>
            <p className="text-xl font-bold text-foreground">
              ${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Interest Earned</p>
            <p className="text-xl font-bold text-accent">
              ${interest.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground mb-1">Total Savings</p>
            <p className="text-3xl font-bold text-primary">
              ${totalSavings.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
