"use client"

import { useState } from "react"

export default function IdealWeightCalculator() {
  const [gender, setGender] = useState("male")
  const [height, setHeight] = useState(70)
  const [metric, setMetric] = useState(false)

  const calculateIdealWeight = () => {
    const h = height
    let weight

    if (gender === "male") {
      if (metric) {
        const cm = h
        weight = 50 + 2.3 * ((cm - 152.4) / 2.54)
      } else {
        weight = 106 + 6 * (h - 60)
      }
    } else {
      if (metric) {
        const cm = h
        weight = 45.5 + 2.3 * ((cm - 152.4) / 2.54)
      } else {
        weight = 100 + 5 * (h - 60)
      }
    }

    return weight.toFixed(1)
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button
          onClick={() => setGender("male")}
          className={`px-4 py-2 rounded-lg font-medium ${gender === "male" ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Male
        </button>
        <button
          onClick={() => setGender("female")}
          className={`px-4 py-2 rounded-lg font-medium ${gender === "female" ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Female
        </button>
      </div>

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
          min={metric ? 120 : 48}
          max={metric ? 220 : 84}
          value={height}
          onChange={(e) => setHeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="text-center">
          <div className="text-3xl font-semibold text-foreground mb-2">Ideal Weight Range</div>
          <div className="text-5xl font-bold text-primary mb-2">
            {calculateIdealWeight()} {metric ? "kg" : "lbs"}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            This is based on the Devine Formula, which provides an estimate of ideal body weight
          </p>
        </div>
      </div>
    </div>
  )
}
