"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function CashBackCalculator() {
  const [purchaseAmount, setPurchaseAmount] = useState(1000)
  const [cashBackPercent, setCashBackPercent] = useState(2)
  const [interestRate, setInterestRate] = useState(18)
  const [monthlyPayment, setMonthlyPayment] = useState(100)

  const cashbackEarned = (purchaseAmount * cashBackPercent) / 100
  const monthsToPayoff = Math.ceil(purchaseAmount / monthlyPayment)
  const interestPaid = monthlyPayment * monthsToPayoff - purchaseAmount
  const netBenefit = cashbackEarned - interestPaid

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Purchase Amount: ${purchaseAmount.toLocaleString()}</label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={purchaseAmount}
            onChange={(e) => setPurchaseAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Cashback Rate: {cashBackPercent}%</label>
          <input
            type="range"
            min="0.5"
            max="10"
            step="0.5"
            value={cashBackPercent}
            onChange={(e) => setCashBackPercent(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Monthly Payment: ${monthlyPayment}</label>
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Cashback Earned</p>
            <p className="text-3xl font-bold text-green-600">${cashbackEarned.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Interest Paid</p>
            <p className="text-3xl font-bold text-red-600">${interestPaid.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <Card className={`p-4 ${netBenefit >= 0 ? "bg-green-50" : "bg-red-50"}`}>
        <p className="text-muted-foreground text-sm mb-2">Net Benefit</p>
        <p className={`text-2xl font-bold ${netBenefit >= 0 ? "text-green-600" : "text-red-600"}`}>
          ${netBenefit.toFixed(2)}
        </p>
      </Card>
    </div>
  )
}
