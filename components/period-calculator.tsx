"use client"

import { useState } from "react"

export default function PeriodCalculator() {
  const [lastPeriod, setLastPeriod] = useState("2024-11-01")
  const [cycleLength, setCycleLength] = useState(28)

  const calculateNextPeriod = () => {
    const date = new Date(lastPeriod)
    date.setDate(date.getDate() + cycleLength)
    return date
  }

  const daysUntilNext = () => {
    const nextDate = calculateNextPeriod()
    const today = new Date()
    const diff = nextDate - today
    return Math.floor(diff / (24 * 60 * 60 * 1000))
  }

  const nextDate = calculateNextPeriod()
  const days = daysUntilNext()

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
        <label className="block text-sm font-semibold text-foreground mb-2">Cycle Length: {cycleLength} days</label>
        <input
          type="range"
          min="21"
          max="35"
          value={cycleLength}
          onChange={(e) => setCycleLength(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <div className="text-xs text-muted-foreground mb-1">Next Period</div>
          <div className="text-lg font-bold text-red-600">{nextDate.toLocaleDateString()}</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
          <div className="text-xs text-muted-foreground mb-1">Days Away</div>
          <div className="text-3xl font-bold text-red-600">{Math.max(0, days)}</div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
        <p className="text-xs text-muted-foreground">
          <strong>Note:</strong> This is an estimate. Cycle length and timing can vary. For accurate predictions, track
          multiple cycles.
        </p>
      </div>
    </div>
  )
}
