"use client"

import { useState } from "react"

export default function OvulationCalculator() {
  const [lastPeriod, setLastPeriod] = useState("2024-11-01")
  const [cycleLength, setCycleLength] = useState(28)

  const calculateOvulation = () => {
    const date = new Date(lastPeriod)
    const ovulationDay = cycleLength - 14 // typically 14 days before next period
    date.setDate(date.getDate() + ovulationDay)
    return date
  }

  const calculateFertileWindow = () => {
    const ovulation = calculateOvulation()
    const windowStart = new Date(ovulation)
    windowStart.setDate(windowStart.getDate() - 5)
    const windowEnd = new Date(ovulation)
    windowEnd.setDate(windowEnd.getDate() + 1)
    return { start: windowStart.toLocaleDateString(), end: windowEnd.toLocaleDateString() }
  }

  const fertile = calculateFertileWindow()
  const ovulation = calculateOvulation()

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">First Day of Last Period</label>
        <input
          type="date"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg text-foreground"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Average Cycle Length: {cycleLength} days
        </label>
        <input
          type="range"
          min="21"
          max="35"
          value={cycleLength}
          onChange={(e) => setCycleLength(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="space-y-3">
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <div className="text-xs text-muted-foreground mb-1">Ovulation Date</div>
          <div className="text-2xl font-bold text-purple-600">{ovulation.toLocaleDateString()}</div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <div className="text-xs text-muted-foreground mb-1">Fertile Window</div>
          <div className="text-sm font-bold text-green-600">
            {fertile.start} to {fertile.end}
          </div>
          <div className="text-xs text-muted-foreground mt-1">6 days (5 days before to 1 day after ovulation)</div>
        </div>
      </div>
    </div>
  )
}
