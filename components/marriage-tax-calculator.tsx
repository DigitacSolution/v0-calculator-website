"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function MarriageTaxCalculator() {
  const [income1, setIncome1] = useState(50000)
  const [income2, setIncome2] = useState(50000)

  const getTaxRate = (income) => {
    if (income <= 11000) return 0.1
    if (income <= 44725) return 0.12
    if (income <= 95375) return 0.22
    if (income <= 182100) return 0.24
    if (income <= 231250) return 0.32
    if (income <= 578125) return 0.35
    return 0.37
  }

  const singleTax1 = income1 * getTaxRate(income1)
  const singleTax2 = income2 * getTaxRate(income2)
  const totalSingleTax = singleTax1 + singleTax2

  const marriedBracket = (income1 + income2) * 0.22
  const marriedTax = Math.min(marriedBracket, totalSingleTax * 1.1)
  const penalty = Math.max(0, totalSingleTax - marriedTax)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Spouse 1 Income: ${income1.toLocaleString()}</label>
          <input
            type="range"
            min="20000"
            max="200000"
            step="5000"
            value={income1}
            onChange={(e) => setIncome1(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Spouse 2 Income: ${income2.toLocaleString()}</label>
          <input
            type="range"
            min="20000"
            max="200000"
            step="5000"
            value={income2}
            onChange={(e) => setIncome2(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className={`p-6 ${penalty > 0 ? "bg-red-50" : "bg-green-50"}`}>
        <p className="text-muted-foreground text-sm mb-2">Marriage Tax Effect</p>
        <p className={`text-3xl font-bold ${penalty > 0 ? "text-red-600" : "text-green-600"}`}>
          {penalty > 0 ? "+" : "-"}${Math.abs(penalty).toFixed(2)}
        </p>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Filing Single</p>
          <p className="text-2xl font-bold">${totalSingleTax.toFixed(2)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Filing Married</p>
          <p className="text-2xl font-bold">${marriedTax.toFixed(2)}</p>
        </Card>
      </div>
    </div>
  )
}
