"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [finalValue, setFinalValue] = useState(15000)
  const [years, setYears] = useState(5)

  const gain = finalValue - initialInvestment
  const roi = (gain / initialInvestment) * 100
  const annualROI = Math.pow(finalValue / initialInvestment, 1 / years) - 1

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Initial Investment: ${initialInvestment.toLocaleString()}
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Final Value: ${finalValue.toLocaleString()}</label>
          <input
            type="range"
            min={initialInvestment}
            max={initialInvestment * 5}
            step="5000"
            value={finalValue}
            onChange={(e) => setFinalValue(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Time Period: {years} years</label>
          <input
            type="range"
            min="1"
            max="30"
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
            <p className="text-muted-foreground text-sm">Total ROI</p>
            <p className="text-3xl font-bold text-green-600">{roi.toFixed(2)}%</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Annual ROI</p>
            <p className="text-3xl font-bold text-green-600">{(annualROI * 100).toFixed(2)}%</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-accent/5">
        <p className="text-muted-foreground text-sm mb-2">Gain</p>
        <p className="text-2xl font-bold text-green-600">${gain.toFixed(2)}</p>
      </Card>
    </div>
  )
}
