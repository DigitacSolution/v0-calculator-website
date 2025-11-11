"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function InflationCalculator() {
  const [amount, setAmount] = useState(1000)
  const [inflation, setInflation] = useState(3)
  const [years, setYears] = useState(10)

  const futureValue = amount / Math.pow(1 + inflation / 100, years)
  const powerOfMoney = ((1 - futureValue / amount) * 100).toFixed(2)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Amount: ${amount.toLocaleString()}</label>
          <input
            type="range"
            min="100"
            max="1000000"
            step="1000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Annual Inflation: {inflation.toFixed(2)}%</label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.5"
            value={inflation}
            onChange={(e) => setInflation(Number(e.target.value))}
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
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Future Value</p>
            <p className="text-3xl font-bold text-foreground">${futureValue.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Loss of Purchasing Power</p>
            <p className="text-3xl font-bold text-red-600">{powerOfMoney}%</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
