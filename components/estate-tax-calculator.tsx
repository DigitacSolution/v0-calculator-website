"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function EstateTaxCalculator() {
  const [estateValue, setEstateValue] = useState(1000000)
  const [year, setYear] = useState(2024)

  const exemptionAmount = 13610000
  const taxableEstate = Math.max(0, estateValue - exemptionAmount)
  const estateTax = taxableEstate * 0.4

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Estate Value: ${estateValue.toLocaleString()}</label>
          <input
            type="range"
            min="500000"
            max="50000000"
            step="500000"
            value={estateValue}
            onChange={(e) => setEstateValue(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tax Year: {year}</label>
          <input
            type="range"
            min="2020"
            max="2030"
            step="1"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Estate Tax</p>
            <p className="text-3xl font-bold text-red-600">${estateTax.toFixed(0)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">After Tax Estate</p>
            <p className="text-3xl font-bold text-foreground">${(estateValue - estateTax).toFixed(0)}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-accent/5">
        <p className="text-muted-foreground text-sm mb-2">Exemption Amount ({year})</p>
        <p className="text-2xl font-bold">${exemptionAmount.toLocaleString()}</p>
      </Card>
    </div>
  )
}
