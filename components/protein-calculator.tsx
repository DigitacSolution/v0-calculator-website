"use client"

import { useState } from "react"

export default function ProteinCalculator() {
  const [weight, setWeight] = useState(180)
  const [goal, setGoal] = useState("maintenance")
  const [metric, setMetric] = useState(false)

  const calculateProtein = () => {
    let w = weight
    if (!metric) {
      w = weight * 0.453592 // lbs to kg
    }

    const ratios = {
      minimal: 0.8,
      light: 1.2,
      moderate: 1.6,
      maintenance: 2.0,
      muscle: 2.2,
      intense: 2.5,
    }

    return (w * (ratios[goal] || 2.0)).toFixed(1)
  }

  return (
    <div className="space-space-y-6">
      <div className="flex gap-4">
        <button
          onClick={() => setMetric(false)}
          className={`px-4 py-2 rounded-lg font-medium ${!metric ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Imperial (lbs)
        </button>
        <button
          onClick={() => setMetric(true)}
          className={`px-4 py-2 rounded-lg font-medium ${metric ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Metric (kg)
        </button>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Weight: {weight} {metric ? "kg" : "lbs"}
        </label>
        <input
          type="range"
          min={metric ? 30 : 75}
          max={metric ? 200 : 450}
          value={weight}
          onChange={(e) => setWeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Training Goal</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground"
        >
          <option value="minimal">Minimal (0.8g/kg)</option>
          <option value="light">Light Activity (1.2g/kg)</option>
          <option value="moderate">Moderate Exercise (1.6g/kg)</option>
          <option value="maintenance">Maintenance (2.0g/kg)</option>
          <option value="muscle">Muscle Building (2.2g/kg)</option>
          <option value="intense">Intense Training (2.5g/kg)</option>
        </select>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Daily Protein Intake</div>
          <div className="text-5xl font-bold text-primary mb-2">{calculateProtein()}</div>
          <div className="text-sm text-muted-foreground">grams per day</div>
          <div className="text-xs text-muted-foreground mt-4">
            (~{(Number.parseFloat(calculateProtein()) * 4).toFixed(0)} kcal from protein)
          </div>
        </div>
      </div>
    </div>
  )
}
