"use client"

import { useState } from "react"

export default function OneRepMaxCalculator() {
  const [weight, setWeight] = useState(225)
  const [reps, setReps] = useState(5)
  const [metric, setMetric] = useState(false)

  const calculateORM = () => {
    // Epley formula: 1RM = weight × (1 + reps/30)
    return (weight * (1 + reps / 30)).toFixed(1)
  }

  const orm = Number.parseFloat(calculateORM())

  return (
    <div className="space-y-6">
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
          min={metric ? 10 : 25}
          max={metric ? 300 : 650}
          step="0.5"
          value={weight}
          onChange={(e) => setWeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Reps: {reps}</label>
        <input
          type="range"
          min="1"
          max="30"
          value={reps}
          onChange={(e) => setReps(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Estimated One-Rep Max</div>
          <div className="text-5xl font-bold text-primary mb-2">{orm}</div>
          <div className="text-sm text-muted-foreground">{metric ? "kg" : "lbs"}</div>
        </div>
        <div className="mt-6 space-y-2 text-xs text-muted-foreground">
          <p>
            <strong>Epley Formula:</strong> 1RM = weight × (1 + reps/30)
          </p>
        </div>
      </div>
    </div>
  )
}
