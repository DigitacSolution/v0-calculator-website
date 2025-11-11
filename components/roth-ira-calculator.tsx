"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function RothIRACalculator() {
  const [annualContribution, setAnnualContribution] = useState(6500)
  const [years, setYears] = useState(30)
  const [returnRate, setReturnRate] = useState(7)

  const monthlyRate = returnRate / 100 / 12
  const months = years * 12
  const futureValue = annualContribution * 12 * ((Math.pow(1 + monthlyRate, months) - 1) / (monthlyRate * 12))
  const totalContributed = annualContribution * years
  const earnings = futureValue - totalContributed

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Annual Contribution: ${annualContribution}</label>
          <input
            type="range"
            min="1000"
            max="25000"
            step="500"
            value={annualContribution}
            onChange={(e) => setAnnualContribution(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Years: {years}</label>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Annual Return: {returnRate.toFixed(2)}%</label>
          <input
            type="range"
            min="1"
            max="15"
            step="0.5"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Account Balance at Retirement</p>
            <p className="text-3xl font-bold text-foreground">${futureValue.toFixed(0)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Tax-Free Earnings</p>
            <p className="text-3xl font-bold text-green-600">${earnings.toFixed(0)}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-accent/5">
        <p className="text-muted-foreground text-sm mb-2">Total Contributions</p>
        <p className="text-2xl font-bold">${totalContributed.toFixed(0)}</p>
      </Card>
    </div>
  )
}
