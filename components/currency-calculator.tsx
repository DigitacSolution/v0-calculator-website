"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function CurrencyCalculator() {
  const [amount, setAmount] = useState(100)
  const [rate, setRate] = useState(1.1)

  const converted = amount * rate

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Amount: ${amount.toLocaleString()}</label>
          <input
            type="range"
            min="1"
            max="100000"
            step="100"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Exchange Rate: {rate.toFixed(4)}</label>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">USD Amount</p>
            <p className="text-3xl font-bold text-foreground">${amount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Converted Amount</p>
            <p className="text-3xl font-bold text-foreground">€{converted.toFixed(2)}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
