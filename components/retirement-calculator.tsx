"use client"

import { useState } from "react"

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30)
  const [retirementAge, setRetirementAge] = useState(65)
  const [currentSavings, setCurrentSavings] = useState(100000)
  const [annualContribution, setAnnualContribution] = useState(10000)
  const [annualReturn, setAnnualReturn] = useState(7)

  const yearsToRetirement = retirementAge - currentAge
  const annualRate = annualReturn / 100

  let retirementAmount = currentSavings * Math.pow(1 + annualRate, yearsToRetirement)
  retirementAmount += (annualContribution * (Math.pow(1 + annualRate, yearsToRetirement) - 1)) / annualRate

  const totalContributions = currentSavings + annualContribution * yearsToRetirement
  const investmentGains = retirementAmount - totalContributions

  // Rule of 4% for annual spending
  const safeAnnualSpending = retirementAmount * 0.04

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Current Age: {currentAge}</label>
        <input
          type="range"
          min="18"
          max="65"
          step="1"
          value={currentAge}
          onChange={(e) => setCurrentAge(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Retirement Age: {retirementAge}</label>
        <input
          type="range"
          min={currentAge}
          max="100"
          step="1"
          value={retirementAge}
          onChange={(e) => setRetirementAge(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Current Savings: ${currentSavings.toLocaleString()}
        </label>
        <input
          type="range"
          min="0"
          max="500000"
          step="5000"
          value={currentSavings}
          onChange={(e) => setCurrentSavings(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Annual Contribution: ${annualContribution.toLocaleString()}
        </label>
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={annualContribution}
          onChange={(e) => setAnnualContribution(Number(e.target.value))}
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
          max="20"
          step="0.1"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Years to Retirement</p>
            <p className="text-xl font-bold text-foreground">{yearsToRetirement}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Investment Gains</p>
            <p className="text-xl font-bold text-accent">
              ${investmentGains.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-muted-foreground mb-1">Retirement Fund</p>
            <p className="text-3xl font-bold text-primary">
              ${retirementAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
          <div className="col-span-2 pt-4 border-t border-primary/20">
            <p className="text-sm text-muted-foreground mb-1">Safe Annual Spending (4% Rule)</p>
            <p className="text-2xl font-bold text-accent">
              ${safeAnnualSpending.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
