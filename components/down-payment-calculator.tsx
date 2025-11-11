"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function DownPaymentCalculator() {
  const [homePrice, setHomePrice] = useState(300000)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)

  const downPayment = (homePrice * downPaymentPercent) / 100
  const loanAmount = homePrice - downPayment
  const pmiNeeded = downPaymentPercent < 20
  const monthlyPMI = pmiNeeded ? (homePrice * 0.0055) / 12 : 0

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Home Price: ${homePrice.toLocaleString()}</label>
          <input
            type="range"
            min="100000"
            max="1000000"
            step="50000"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Down Payment: {downPaymentPercent}%</label>
          <input
            type="range"
            min="3"
            max="50"
            step="1"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Down Payment Amount</p>
            <p className="text-3xl font-bold text-foreground">${downPayment.toFixed(0)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Loan Amount</p>
            <p className="text-3xl font-bold text-foreground">${loanAmount.toFixed(0)}</p>
          </div>
        </div>
      </Card>

      {pmiNeeded && (
        <Card className="p-4 bg-yellow-50 border border-yellow-200">
          <p className="text-sm text-yellow-800">
            PMI Required: ${monthlyPMI.toFixed(2)}/month until 20% equity reached
          </p>
        </Card>
      )}
    </div>
  )
}
