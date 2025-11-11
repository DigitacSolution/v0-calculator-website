"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function RentVsBuyCalculator() {
  const [homePrice, setHomePrice] = useState(300000)
  const [downPercent, setDownPercent] = useState(20)
  const [rate, setRate] = useState(6.5)
  const [years, setYears] = useState(30)
  const [monthlyRent, setMonthlyRent] = useState(2000)
  const [rentIncrease, setRentIncrease] = useState(3)

  const downPayment = (homePrice * downPercent) / 100
  const loanAmount = homePrice - downPayment
  const monthlyRate = rate / 100 / 12
  const months = years * 12

  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months))) / (Math.pow(1 + monthlyRate, months) - 1)

  const totalBuyingCost = downPayment + monthlyPayment * 12 * years
  let totalRentCost = 0

  for (let month = 1; month <= months; month++) {
    const year = Math.floor((month - 1) / 12)
    const rentAtMonth = monthlyRent * Math.pow(1 + rentIncrease / 100, year)
    totalRentCost += rentAtMonth
  }

  const homeValueAtEnd = homePrice * 1.03 ** years
  const netBuyingCost = totalBuyingCost - homeValueAtEnd
  const difference = totalRentCost - netBuyingCost

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
          <label className="block text-sm font-medium mb-2">Down Payment: {downPercent}%</label>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={downPercent}
            onChange={(e) => setDownPercent(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Mortgage Rate: {rate.toFixed(2)}%</label>
          <input
            type="range"
            min="2"
            max="10"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Monthly Rent: ${monthlyRent}</label>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Rent Increase: {rentIncrease}%</label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={rentIncrease}
            onChange={(e) => setRentIncrease(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <Card className={`p-6 ${difference > 0 ? "bg-green-50" : "bg-red-50"}`}>
        <p className="text-muted-foreground text-sm mb-2">Better Option</p>
        <p className={`text-3xl font-bold ${difference > 0 ? "text-green-600" : "text-red-600"}`}>
          {difference > 0 ? "Buy" : "Rent"} Saves ${Math.abs(difference).toFixed(0)}
        </p>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Buying Cost</p>
          <p className="text-2xl font-bold">${netBuyingCost.toFixed(0)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Renting Cost</p>
          <p className="text-2xl font-bold">${totalRentCost.toFixed(0)}</p>
        </Card>
      </div>
    </div>
  )
}
