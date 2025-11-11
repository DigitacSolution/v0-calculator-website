"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function DepreciationCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [assetCost, setAssetCost] = useState(50000)
  const [salvageValue, setSalvageValue] = useState(5000)
  const [usefulLife, setUsefulLife] = useState(5)
  const [method, setMethod] = useState<"straight-line" | "declining-balance">("straight-line")

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

  const depreciableAmount = assetCost - salvageValue
  const straightLineDepreciation = depreciableAmount / usefulLife
  const rate = method === "declining-balance" ? 2 / usefulLife : 1 / usefulLife

  const schedule = []
  let bookValue = assetCost

  for (let year = 1; year <= usefulLife; year++) {
    let yearlyDepreciation
    if (method === "straight-line") {
      yearlyDepreciation = straightLineDepreciation
    } else {
      yearlyDepreciation = bookValue * rate
      if (bookValue - yearlyDepreciation < salvageValue) {
        yearlyDepreciation = bookValue - salvageValue
      }
    }
    bookValue -= yearlyDepreciation
    schedule.push({ year, depreciation: yearlyDepreciation, bookValue })
  }

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
            <Label>Asset Cost: {formatCurrency(assetCost)}</Label>
            <Slider
              value={[assetCost]}
              onValueChange={(value) => setAssetCost(value[0])}
              min={1000}
              max={500000}
              step={1000}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Salvage Value: {formatCurrency(salvageValue)}</Label>
            <Slider
              value={[salvageValue]}
              onValueChange={(value) => setSalvageValue(value[0])}
              min={0}
              max={assetCost * 0.3}
              step={500}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Useful Life: {usefulLife} years</Label>
            <Slider
              value={[usefulLife]}
              onValueChange={(value) => setUsefulLife(value[0])}
              min={1}
              max={20}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Depreciation Method</Label>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setMethod("straight-line")}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  method === "straight-line"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Straight-Line
              </button>
              <button
                onClick={() => setMethod("declining-balance")}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  method === "declining-balance"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Declining Balance
              </button>
            </div>
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Depreciation Schedule</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {schedule.map((item) => (
              <div
                key={item.year}
                className="flex justify-between items-center p-2 bg-card rounded border border-border"
              >
                <span className="text-sm font-semibold">Year {item.year}</span>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Depreciation</div>
                  <div className="text-sm font-semibold">{formatCurrency(item.depreciation)}</div>
                  <div className="text-xs text-muted-foreground">Book Value: {formatCurrency(item.bookValue)}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DepreciationCalculator
