"use client"

import { useState } from "react"

export default function HourlyToSalaryCalculator() {
  const [hourlyRate, setHourlyRate] = useState(25)
  const [hoursPerWeek, setHoursPerWeek] = useState(40)
  const [weeksPerYear, setWeeksPerYear] = useState(52)

  const annualSalary = hourlyRate * hoursPerWeek * weeksPerYear
  const monthlyIncome = annualSalary / 12
  const weeklyIncome = annualSalary / weeksPerYear
  const dailyIncome = hourlyRate * hoursPerWeek

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Hourly Rate: ${hourlyRate.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </label>
        <input
          type="range"
          min="5"
          max="150"
          step="0.5"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Hours Per Week: {hoursPerWeek}</label>
        <input
          type="range"
          min="10"
          max="80"
          step="1"
          value={hoursPerWeek}
          onChange={(e) => setHoursPerWeek(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Weeks Per Year: {weeksPerYear}</label>
        <input
          type="range"
          min="40"
          max="52"
          step="1"
          value={weeksPerYear}
          onChange={(e) => setWeeksPerYear(Number(e.target.value))}
          className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Daily Income</p>
            <p className="text-lg font-bold text-foreground">
              ${dailyIncome.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Weekly Income</p>
            <p className="text-lg font-bold text-foreground">
              ${weeklyIncome.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Monthly Income</p>
            <p className="text-xl font-bold text-accent">
              ${monthlyIncome.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Annual Salary</p>
            <p className="text-xl font-bold text-primary">
              ${annualSalary.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
