"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function AverageReturnCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [finalValue, setFinalValue] = useState(15000)
  const [years, setYears] = useState(5)

  const formatCurrency = (amount: number) => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(amount * 83)
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const totalReturn = finalValue - initialInvestment
  const totalReturnPercentage = ((finalValue - initialInvestment) / initialInvestment) * 100
  const annualReturn = (Math.pow(finalValue / initialInvestment, 1 / years) - 1) * 100
  const simpleAverage = totalReturnPercentage / years

  return (
    <div className="space-y-8">
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currency === "USD" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          USD ($)
        </button>
        <button
          onClick={() => setCurrency("INR")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            currency === "INR" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          INR (₹)
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Initial Investment: {formatCurrency(initialInvestment)}</Label>
            <Slider
              value={[initialInvestment]}
              onValueChange={(value) => setInitialInvestment(value[0])}
              min={1000}
              max={1000000}
              step={1000}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Final Value: {formatCurrency(finalValue)}</Label>
            <Slider
              value={[finalValue]}
              onValueChange={(value) => setFinalValue(value[0])}
              min={initialInvestment}
              max={initialInvestment * 5}
              step={1000}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Investment Period: {years} years</Label>
            <Slider
              value={[years]}
              onValueChange={(value) => setYears(value[0])}
              min={1}
              max={30}
              step={1}
              className="mt-2"
            />
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Return Analysis</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Total Return</span>
              <span className="font-bold text-xl text-primary">{formatCurrency(totalReturn)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Return %</span>
              <span className="font-semibold">{totalReturnPercentage.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Annual Return (CAGR)</span>
              <span className="font-semibold text-accent">{annualReturn.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Simple Average Return</span>
              <span className="font-semibold">{simpleAverage.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Initial Investment</span>
              <span className="font-semibold">{formatCurrency(initialInvestment)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Final Value</span>
              <span className="font-semibold">{formatCurrency(finalValue)}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AverageReturnCalculator
