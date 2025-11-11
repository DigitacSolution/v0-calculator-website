"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function PaymentCalculator() {
  const [principal, setPrincipal] = useState(50000)
  const [rate, setRate] = useState(5)
  const [months, setMonths] = useState(60)

  const monthlyRate = rate / 100 / 12
  const payment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) / (Math.pow(1 + monthlyRate, months) - 1)

  const totalPaid = payment * months
  const totalInterest = totalPaid - principal

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Principal: ${principal.toLocaleString()}</label>
          <input
            type="range"
            min="5000"
            max="500000"
            step="5000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Annual Interest Rate: {rate.toFixed(2)}%</label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Payment Period: {months} months</label>
          <input
            type="range"
            min="6"
            max="360"
            step="1"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Monthly Payment</p>
            <p className="text-3xl font-bold text-foreground">${payment.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Interest</p>
            <p className="text-3xl font-bold text-foreground">${totalInterest.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-accent/5">
        <p className="text-muted-foreground text-sm mb-2">Total Amount Paid</p>
        <p className="text-2xl font-bold">${totalPaid.toFixed(2)}</p>
      </Card>
    </div>
  )
}
