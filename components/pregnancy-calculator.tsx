"use client"

import { useState } from "react"

export default function PregnancyCalculator() {
  const [lastPeriod, setLastPeriod] = useState("2024-11-01")

  const calculateDueDate = () => {
    const date = new Date(lastPeriod)
    date.setDate(date.getDate() + 280) // ~40 weeks
    return date.toLocaleDateString()
  }

  const calculateWeeksPregnant = () => {
    const lastDate = new Date(lastPeriod)
    const today = new Date()
    const diff = today - lastDate
    const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000))
    const days = Math.floor((diff % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000))
    return { weeks, days }
  }

  const trimester = () => {
    const { weeks } = calculateWeeksPregnant()
    if (weeks < 13) return "First"
    if (weeks < 27) return "Second"
    return "Third"
  }

  const preg = calculateWeeksPregnant()

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

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
          <div className="text-xs text-muted-foreground mb-1">Weeks Pregnant</div>
          <div className="text-3xl font-bold text-pink-600">{preg.weeks}</div>
          <div className="text-xs text-muted-foreground">weeks + {preg.days} days</div>
        </div>
        <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
          <div className="text-xs text-muted-foreground mb-1">Trimester</div>
          <div className="text-2xl font-bold text-pink-600">{trimester()}</div>
          <div className="text-xs text-muted-foreground">trimester</div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Estimated Due Date</div>
          <div className="text-3xl font-bold text-foreground mb-2">{calculateDueDate()}</div>
          <p className="text-xs text-muted-foreground">
            Based on Naegele's Rule: Add 280 days to first day of last period
          </p>
        </div>
      </div>
    </div>
  )
}
