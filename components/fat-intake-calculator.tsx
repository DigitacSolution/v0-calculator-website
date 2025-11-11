"use client"

import { useState } from "react"

export default function FatIntakeCalculator() {
  const [tdee, setTdee] = useState(2000)
  const [fatPercentage, setFatPercentage] = useState(30)

  const calculateFat = () => {
    const fatCals = tdee * (fatPercentage / 100)
    const fatGrams = fatCals / 9
    return fatGrams.toFixed(1)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">TDEE: {tdee} kcal</label>
        <input
          type="range"
          min="1000"
          max="5000"
          step="50"
          value={tdee}
          onChange={(e) => setTdee(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Fat Percentage: {fatPercentage}%</label>
        <input
          type="range"
          min="10"
          max="50"
          value={fatPercentage}
          onChange={(e) => setFatPercentage(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <div className="text-xs text-muted-foreground mb-1">Fat Calories</div>
          <div className="text-2xl font-bold text-yellow-600">{(Number.parseFloat(calculateFat()) * 9).toFixed(0)}</div>
          <div className="text-xs text-muted-foreground">kcal</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <div className="text-xs text-muted-foreground mb-1">Fat Intake</div>
          <div className="text-2xl font-bold text-yellow-600">{calculateFat()}</div>
          <div className="text-xs text-muted-foreground">grams</div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
        <p className="text-xs text-muted-foreground">
          <strong>Note:</strong> Fat provides 9 calories per gram. Typical ranges are 20-35% of total calories.
        </p>
      </div>
    </div>
  )
}
