"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function BusinessLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000)
  const [rate, setRate] = useState(7)
  const [years, setYears] = useState(5)

  const monthlyRate = rate / 100 / 12
  const months = years * 12
  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months))) / (Math.pow(1 + monthlyRate, months) - 1)

  const totalPayment = monthlyPayment * months
  const totalInterest = totalPayment - loanAmount

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Loan Amount: ${loanAmount.toLocaleString()}</label>
          <input
            type="range"
            min="10000"
            max="500000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Interest Rate: {rate.toFixed(2)}%</label>
          <input
            type="range"
            min="3"
            max="15"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Loan Term: {years} years</label>
          <input
            type="range"
            min="1"
            max="20"
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
            <p className="text-muted-foreground text-sm">Total Interest</p>
            <p className="text-3xl font-bold text-foreground">${totalInterest.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-accent/5">
        <p className="text-muted-foreground text-sm mb-2">Total Amount to Pay</p>
        <p className="text-2xl font-bold">${totalPayment.toFixed(2)}</p>
      </Card>
    </div>
  )
}
