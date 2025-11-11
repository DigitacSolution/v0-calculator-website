"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function IRACalculator() {
  const [contribution, setContribution] = useState(6500)
  const [currentBalance, setCurrentBalance] = useState(50000)
  const [years, setYears] = useState(30)
  const [returnRate, setReturnRate] = useState(7)

  const monthlyRate = returnRate / 100 / 12
  const months = years * 12
  let balance = currentBalance * Math.pow(1 + monthlyRate, months)
  balance += contribution * 12 * ((Math.pow(1 + monthlyRate, months) - 1) / (monthlyRate * 12))

  const totalContributed = currentBalance + contribution * years
  const earnings = balance - totalContributed

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Current Balance: ${currentBalance.toLocaleString()}</label>
          <input
            type="range"
            min="0"
            max="200000"
            step="5000"
            value={currentBalance}
            onChange={(e) => setCurrentBalance(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Annual Contribution: ${contribution}</label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={contribution}
            onChange={(e) => setContribution(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Years: {years}</label>
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
          <label className="block text-sm font-medium mb-2">Annual Return: {returnRate.toFixed(2)}%</label>
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
      </div>

      <Card className="p-6 bg-primary/5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Projected Balance</p>
            <p className="text-3xl font-bold text-foreground">${balance.toFixed(0)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Total Earnings</p>
            <p className="text-3xl font-bold text-green-600">${earnings.toFixed(0)}</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-accent/5">
        <p className="text-muted-foreground text-sm mb-2">Total Contributed</p>
        <p className="text-2xl font-bold">${totalContributed.toFixed(0)}</p>
      </Card>
    </div>
  )
}
