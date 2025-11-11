"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState(100)
  const [discountPercent, setDiscountPercent] = useState(20)

  const discountAmount = (originalPrice * discountPercent) / 100
  const finalPrice = originalPrice - discountAmount
  const savings = discountAmount

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Original Price: ${originalPrice.toFixed(2)}</label>
          <input
            type="range"
            min="1"
            max="10000"
            step="10"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Discount: {discountPercent}%</label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Discount Amount</p>
            <p className="text-3xl font-bold text-foreground">${discountAmount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Final Price</p>
            <p className="text-3xl font-bold text-green-600">${finalPrice.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-accent/5">
        <p className="text-muted-foreground text-sm mb-2">You Save</p>
        <p className="text-2xl font-bold text-green-600">${savings.toFixed(2)}</p>
      </Card>
    </div>
  )
}
