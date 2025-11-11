"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function SalesTaxCalculator() {
  const [subtotal, setSubtotal] = useState(100)
  const [taxRate, setTaxRate] = useState(8.5)

  const taxAmount = (subtotal * taxRate) / 100
  const total = subtotal + taxAmount

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Subtotal: ${subtotal.toFixed(2)}</label>
          <input
            type="range"
            min="1"
            max="1000"
            step="10"
            value={subtotal}
            onChange={(e) => setSubtotal(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tax Rate: {taxRate.toFixed(2)}%</label>
          <input
            type="range"
            min="0"
            max="15"
            step="0.1"
            value={taxRate}
            onChange={(e) => setTaxRate(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Tax Amount</p>
            <p className="text-3xl font-bold text-foreground">${taxAmount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total (with Tax)</p>
            <p className="text-3xl font-bold text-foreground">${total.toFixed(2)}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
