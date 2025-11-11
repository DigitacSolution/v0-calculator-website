"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function PercentOffCalculator() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD")
  const [originalPrice, setOriginalPrice] = useState(100)
  const [discountPercent, setDiscountPercent] = useState(20)

  const discountAmount = (originalPrice * discountPercent) / 100
  const finalPrice = originalPrice - discountAmount
  const savings = discountAmount

  const formatCurrency = (value: number) => {
    if (currency === "INR") {
      return `₹${(value * 83).toLocaleString("en-IN", {
        maximumFractionDigits: 2,
      })}`
    }
    return `$${value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }

  return (
    <div className="space-y-8">
      {/* Currency Toggle */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setCurrency("USD")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "USD"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          USD ($)
        </button>
        <button
          onClick={() => setCurrency("INR")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            currency === "INR"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          INR (₹)
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <Label htmlFor="original-price">Original Price</Label>
            <Input
              id="original-price"
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(Number(e.target.value))}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Discount Percentage: {discountPercent}%</Label>
            <Slider
              value={[discountPercent]}
              onValueChange={([value]) => setDiscountPercent(value)}
              min={0}
              max={100}
              step={1}
              className="mt-2"
            />
          </div>

          <Card className="p-6 bg-secondary/50">
            <h3 className="font-semibold mb-3">Calculation Breakdown</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Original Price:</span>
                <span>{formatCurrency(originalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discount Rate:</span>
                <span>{discountPercent}%</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Discount Amount:</span>
                <span>- {formatCurrency(discountAmount)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t font-semibold">
                <span>You Pay:</span>
                <span className="text-green-600">{formatCurrency(finalPrice)}</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 text-center">
            <div className="text-sm text-muted-foreground mb-2">Final Price</div>
            <div className="text-5xl font-bold text-green-600 mb-4">{formatCurrency(finalPrice)}</div>
            <div className="text-sm text-muted-foreground">You save {formatCurrency(savings)}</div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">Common Discounts</h3>
            <div className="grid grid-cols-2 gap-2">
              {[10, 15, 20, 25, 30, 40, 50, 75].map((percent) => {
                const price = originalPrice * (1 - percent / 100)
                return (
                  <button
                    key={percent}
                    onClick={() => setDiscountPercent(percent)}
                    className="p-3 rounded-lg border border-border hover:bg-secondary transition-colors text-left"
                  >
                    <div className="text-sm font-semibold">{percent}% off</div>
                    <div className="text-xs text-muted-foreground">{formatCurrency(price)}</div>
                  </button>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
