"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function RentCalculator() {
  const [monthlyRent, setMonthlyRent] = useState(1500)
  const [annualIncrease, setAnnualIncrease] = useState(3)
  const [years, setYears] = useState(5)

  const schedule = []
  let totalRent = 0

  for (let year = 1; year <= years; year++) {
    const yearlyRent = monthlyRent * 12 * Math.pow(1 + annualIncrease / 100, year - 1)
    totalRent += yearlyRent
    schedule.push({
      year,
      monthlyRent: yearlyRent / 12,
      yearlyRent,
    })
  }

  const averageMonthly = totalRent / (years * 12)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Current Monthly Rent: ${monthlyRent}</label>
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
          <label className="block text-sm font-medium mb-2">Annual Increase: {annualIncrease}%</label>
          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={annualIncrease}
            onChange={(e) => setAnnualIncrease(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Years: {years}</label>
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
            <p className="text-muted-foreground text-sm">Total Rent Paid</p>
            <p className="text-3xl font-bold text-foreground">${totalRent.toFixed(0)}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Average Monthly Rent</p>
            <p className="text-3xl font-bold text-foreground">${averageMonthly.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <div>
        <h3 className="font-semibold mb-4">Rent Projection</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="text-left py-2">Year</th>
                <th className="text-right py-2">Monthly</th>
                <th className="text-right py-2">Yearly</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.year} className="border-b">
                  <td className="py-2">{row.year}</td>
                  <td className="text-right">${row.monthlyRent.toFixed(2)}</td>
                  <td className="text-right">${row.yearlyRent.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
