"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function K401Calculator() {
  const [contribution, setContribution] = useState(500)
  const [years, setYears] = useState(30)
  const [returnRate, setReturnRate] = useState(7)
  const [currentBalance, setCurrentBalance] = useState(50000)

  const monthlyReturn = Math.pow(1 + returnRate / 100, 1 / 12) - 1
  let balance = currentBalance

  for (let i = 0; i < years * 12; i++) {
    balance = balance * (1 + monthlyReturn) + contribution
  }

  const totalContributed = currentBalance + contribution * years * 12
  const earnings = balance - totalContributed

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Monthly Contribution: ${contribution}</label>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={contribution}
            onChange={(e) => setContribution(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Investment Years: {years}</label>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Annual Return Rate: {returnRate.toFixed(2)}%</label>
          <input
            type="range"
            min="1"
            max="15"
            step="0.5"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Current Balance: ${currentBalance.toLocaleString()}</label>
          <input
            type="range"
            min="0"
            max="500000"
            step="10000"
            value={currentBalance}
            onChange={(e) => setCurrentBalance(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Final Balance</p>
            <p className="text-3xl font-bold text-foreground">${balance.toFixed(0)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Earnings</p>
            <p className="text-3xl font-bold text-green-600">${earnings.toFixed(0)}</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Contributed</p>
          <p className="text-2xl font-bold">${totalContributed.toFixed(0)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Return on Investment</p>
          <p className="text-2xl font-bold">{((earnings / totalContributed) * 100).toFixed(1)}%</p>
        </Card>
      </div>
    </div>
  )
}
