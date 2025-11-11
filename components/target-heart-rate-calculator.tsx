"use client"

import { useState } from "react"

export default function TargetHeartRateCalculator() {
  const [age, setAge] = useState(30)
  const [intensity, setIntensity] = useState("moderate")

  const calculateHeartRate = () => {
    const maxHR = 220 - age
    const intensities = {
      very_light: { min: 0.5, max: 0.6 },
      light: { min: 0.6, max: 0.7 },
      moderate: { min: 0.7, max: 0.8 },
      vigorous: { min: 0.8, max: 0.9 },
      maximum: { min: 0.9, max: 1.0 },
    }
    const range = intensities[intensity]
    return {
      min: Math.round(maxHR * range.min),
      max: Math.round(maxHR * range.max),
      maxHR,
    }
  }

  const hr = calculateHeartRate()

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Age: {age} years</label>
        <input
          type="range"
          min="15"
          max="100"
          value={age}
          onChange={(e) => setAge(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Exercise Intensity</label>
        <select
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground"
        >
          <option value="very_light">Very Light (50-60%)</option>
          <option value="light">Light (60-70%)</option>
          <option value="moderate">Moderate (70-80%)</option>
          <option value="vigorous">Vigorous (80-90%)</option>
          <option value="maximum">Maximum (90-100%)</option>
        </select>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-1">Max Heart Rate</div>
          <div className="text-3xl font-bold text-primary">{hr.maxHR} bpm</div>
        </div>

        <div className="mt-6">
          <div className="text-sm font-semibold text-foreground mb-3">Target Zone</div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="text-sm text-muted-foreground mb-1">Min</div>
              <div className="text-3xl font-bold text-blue-600">{hr.min}</div>
              <div className="text-xs text-muted-foreground">bpm</div>
            </div>
            <div className="text-2xl text-muted-foreground">-</div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground mb-1">Max</div>
              <div className="text-3xl font-bold text-blue-600">{hr.max}</div>
              <div className="text-xs text-muted-foreground">bpm</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
