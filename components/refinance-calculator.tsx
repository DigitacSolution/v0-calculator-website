"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function RefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState(250000)
  const [currentRate, setCurrentRate] = useState(7)
  const [newRate, setNewRate] = useState(5.5)
  const [remainingYears, setRemainingYears] = useState(25)
  const [closingCosts, setClosingCosts] = useState(3000)

  const monthlyRate = newRate / 100 / 12
  const months = remainingYears * 12
  const newPayment =
    (currentBalance * (monthlyRate * Math.pow(1 + monthlyRate, months))) / (Math.pow(1 + monthlyRate, months) - 1)

  const oldMonthlyRate = currentRate / 100 / 12
  const oldPayment =
    (currentBalance * (oldMonthlyRate * Math.pow(1 + oldMonthlyRate, months))) /
    (Math.pow(1 + oldMonthlyRate, months) - 1)

  const mouthlyDifference = oldPayment - newPayment
  const totalSavings = mouthlyDifference * months - closingCosts
  const breakEvenMonths = closingCosts / Math.max(mouthlyDifference, 0.01)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Current Balance: ${currentBalance.toLocaleString()}</label>
          <input
            type="range"
            min="50000"
            max="1000000"
            step="10000"
            value={currentBalance}
            onChange={(e) => setCurrentBalance(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Current Rate: {currentRate.toFixed(2)}%</label>
          <input
            type="range"
            min="2"
            max="10"
            step="0.1"
            value={currentRate}
            onChange={(e) => setCurrentRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">New Rate: {newRate.toFixed(2)}%</label>
          <input
            type="range"
            min="2"
            max="10"
            step="0.1"
            value={newRate}
            onChange={(e) => setNewRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Closing Costs: ${closingCosts}</label>
          <input
            type="range"
            min="0"
            max="10000"
            step="500"
            value={closingCosts}
            onChange={(e) => setClosingCosts(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Current Payment</p>
            <p className="text-3xl font-bold text-foreground">${oldPayment.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">New Payment</p>
            <p className="text-3xl font-bold text-green-600">${newPayment.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Monthly Savings</p>
          <p className="text-2xl font-bold text-green-600">${mouthlyDifference.toFixed(2)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Break-Even</p>
          <p className="text-2xl font-bold">{breakEvenMonths.toFixed(1)} months</p>
        </Card>
      </div>

      <Card className={`p-4 ${totalSavings > 0 ? "bg-green-50" : "bg-red-50"}`}>
        <p className="text-muted-foreground text-sm mb-2">Total Savings (over {remainingYears} years)</p>
        <p className={`text-2xl font-bold ${totalSavings > 0 ? "text-green-600" : "text-red-600"}`}>
          ${totalSavings.toFixed(0)}
        </p>
      </Card>
    </div>
  )
}
