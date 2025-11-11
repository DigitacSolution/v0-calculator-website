"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function AnnuityCalculator() {
  const [principal, setPrincipal] = useState(500000)
  const [rate, setRate] = useState(4)
  const [years, setYears] = useState(20)

  const monthlyRate = rate / 100 / 12
  const months = years * 12
  const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
  const totalPaid = monthlyPayment * months

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Principal: ${principal.toLocaleString()}</label>
          <input
            type="range"
            min="50000"
            max="1000000"
            step="50000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Annual Rate: {rate.toFixed(2)}%</label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Payment Period: {years} years</label>
          <input
            type="range"
            min="5"
            max="40"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Payment</p>
            <p className="text-3xl font-bold text-foreground">${monthlyPayment.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Paid Out</p>
            <p className="text-3xl font-bold text-foreground">${totalPaid.toFixed(0)}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
