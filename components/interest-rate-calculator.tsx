"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function InterestRateCalculator() {
  const [principal, setPrincipal] = useState(10000)
  const [finalAmount, setFinalAmount] = useState(12000)
  const [years, setYears] = useState(5)

  const rate = (Math.pow(finalAmount / principal, 1 / years) - 1) * 100
  const interestEarned = finalAmount - principal
  const monthlyRate = rate / 12

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Principal: ${principal.toLocaleString()}</label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Final Amount: ${finalAmount.toLocaleString()}</label>
          <input
            type="range"
            min={principal}
            max={principal * 3}
            step="1000"
            value={finalAmount}
            onChange={(e) => setFinalAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Time Period: {years} years</label>
          <input
            type="range"
            min="1"
            max="50"
            step="0.5"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Annual Interest Rate</p>
            <p className="text-3xl font-bold text-foreground">{rate.toFixed(2)}%</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Monthly Rate</p>
            <p className="text-3xl font-bold text-foreground">{monthlyRate.toFixed(3)}%</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-accent/5">
        <p className="text-muted-foreground text-sm mb-2">Interest Earned</p>
        <p className="text-2xl font-bold">${interestEarned.toFixed(2)}</p>
      </Card>
    </div>
  )
}
