"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function APRCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000)
  const [nominalRate, setNominalRate] = useState(5)
  const [fees, setFees] = useState(500)
  const [loanTerm, setLoanTerm] = useState(24)

  const monthlyRate = nominalRate / 100 / 12
  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm))) / (Math.pow(1 + monthlyRate, loanTerm) - 1)

  const totalPayments = monthlyPayment * loanTerm
  const totalInterest = totalPayments - loanAmount
  const totalCost = totalInterest + fees

  let apr = nominalRate
  for (let i = 0; i < 100; i++) {
    const rate = apr / 100 / 12
    const payment = ((loanAmount + fees) * (rate * Math.pow(1 + rate, loanTerm))) / (Math.pow(1 + rate, loanTerm) - 1)
    const diff = payment - monthlyPayment
    if (Math.abs(diff) < 0.01) break
    apr += diff * 12 * 0.1
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Loan Amount: ${loanAmount.toLocaleString()}</label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Nominal Interest Rate: {nominalRate.toFixed(2)}%</label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.1"
            value={nominalRate}
            onChange={(e) => setNominalRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Fees: ${fees}</label>
          <input
            type="range"
            min="0"
            max="5000"
            step="50"
            value={fees}
            onChange={(e) => setFees(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Loan Term: {loanTerm} months</label>
          <input
            type="range"
            min="6"
            max="84"
            step="1"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">APR</p>
            <p className="text-3xl font-bold text-foreground">{apr.toFixed(2)}%</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Monthly Payment</p>
            <p className="text-3xl font-bold text-foreground">${monthlyPayment.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Interest</p>
          <p className="text-2xl font-bold">${totalInterest.toFixed(2)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Cost</p>
          <p className="text-2xl font-bold">${totalCost.toFixed(2)}</p>
        </Card>
      </div>
    </div>
  )
}
