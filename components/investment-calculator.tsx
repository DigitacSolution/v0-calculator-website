"use client"

import { useState } from "react"

export default function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(50000)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [years, setYears] = useState(10)

  const monthlyRate = annualReturn / 100 / 12
  const months = years * 12

  let futureValue = initialInvestment * Math.pow(1 + monthlyRate, months)

  if (monthlyContribution > 0) {
    futureValue += (monthlyContribution * (Math.pow(1 + monthlyRate, months) - 1)) / monthlyRate
  }

  const totalContributions = initialInvestment + monthlyContribution * months
  const totalGain = futureValue - totalContributions

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Initial Investment: ${initialInvestment.toLocaleString()}
        </label>
        <input
          type="range"
          min="1000"
          max="500000"
          step="1000"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Monthly Contribution: ${monthlyContribution.toLocaleString()}
        </label>
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Expected Annual Return (%): {annualReturn.toFixed(2)}%
        </label>
        <input
          type="range"
          min="0.1"
          max="30"
          step="0.1"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(Number(e.target.value))}
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
              ${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Investment Gain</p>
            <p className="text-xl font-bold text-accent">
              ${totalGain.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground mb-1">Future Value</p>
            <p className="text-3xl font-bold text-primary">
              ${futureValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
