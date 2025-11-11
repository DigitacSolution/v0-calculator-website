"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function MarginCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [costPrice, setCostPrice] = useState(50)
  const [sellingPrice, setSellingPrice] = useState(100)

  const formatCurrency = (amount: number) => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(amount * 83)
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const profit = sellingPrice - costPrice
  const marginPercentage = ((sellingPrice - costPrice) / sellingPrice) * 100
  const markupPercentage = ((sellingPrice - costPrice) / costPrice) * 100
  const profitMargin = (profit / sellingPrice) * 100

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
            <Label>Cost Price: {formatCurrency(costPrice)}</Label>
            <Slider
              value={[costPrice]}
              onValueChange={(value) => setCostPrice(value[0])}
              min={1}
              max={500}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Selling Price: {formatCurrency(sellingPrice)}</Label>
            <Slider
              value={[sellingPrice]}
              onValueChange={(value) => setSellingPrice(value[0])}
              min={costPrice}
              max={1000}
              step={1}
              className="mt-2"
            />
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Margin Analysis</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Profit</span>
              <span className="font-bold text-xl text-primary">{formatCurrency(profit)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Margin %</span>
              <span className="font-semibold">{marginPercentage.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Markup %</span>
              <span className="font-semibold">{markupPercentage.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Profit Margin %</span>
              <span className="font-semibold text-accent">{profitMargin.toFixed(2)}%</span>
            </div>
            <div className="mt-4 p-3 bg-card rounded border border-border">
              <div className="text-xs text-muted-foreground mb-2">Formula</div>
              <div className="text-xs">Margin = (Selling - Cost) / Selling × 100</div>
              <div className="text-xs">Markup = (Selling - Cost) / Cost × 100</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MarginCalculator
