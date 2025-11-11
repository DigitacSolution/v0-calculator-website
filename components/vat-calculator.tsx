"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function VATCalculator() {
  const [netAmount, setNetAmount] = useState(100)
  const [vatRate, setVatRate] = useState(20)

  const vatAmount = (netAmount * vatRate) / 100
  const grossAmount = netAmount + vatAmount

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Net Amount: ${netAmount.toFixed(2)}</label>
          <input
            type="range"
            min="1"
            max="10000"
            step="10"
            value={netAmount}
            onChange={(e) => setNetAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">VAT Rate: {vatRate}%</label>
          <input
            type="range"
            min="0"
            max="25"
            step="1"
            value={vatRate}
            onChange={(e) => setVatRate(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">VAT Amount</p>
            <p className="text-3xl font-bold text-foreground">${vatAmount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Gross Amount</p>
            <p className="text-3xl font-bold text-foreground">${grossAmount.toFixed(2)}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
