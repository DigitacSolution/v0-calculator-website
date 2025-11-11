"use client"

import { useState } from "react"

export default function BodySurfaceAreaCalculator() {
  const [height, setHeight] = useState(70)
  const [weight, setWeight] = useState(180)
  const [metric, setMetric] = useState(false)

  const calculateBSA = () => {
    let h = height
    let w = weight

    if (!metric) {
      // Convert to metric
      h = h * 2.54 // inches to cm
      w = w * 0.453592 // lbs to kg
    }

    // Mosteller formula: BSA = sqrt((height(cm) × weight(kg)) / 3600)
    return Math.sqrt((h * w) / 3600).toFixed(2)
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button
          onClick={() => setMetric(false)}
          className={`px-4 py-2 rounded-lg font-medium ${!metric ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Imperial
        </button>
        <button
          onClick={() => setMetric(true)}
          className={`px-4 py-2 rounded-lg font-medium ${metric ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Metric
        </button>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Height: {height} {metric ? "cm" : "in"}
        </label>
        <input
          type="range"
          min={metric ? 100 : 48}
          max={metric ? 250 : 84}
          value={height}
          onChange={(e) => setHeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
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

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Body Surface Area (BSA)</div>
          <div className="text-5xl font-bold text-primary mb-2">{calculateBSA()}</div>
          <div className="text-sm text-muted-foreground">m²</div>
          <p className="text-xs text-muted-foreground mt-4">
            BSA is used in medicine to calculate dosages and assess metabolic rate
          </p>
        </div>
      </div>
    </div>
  )
}
