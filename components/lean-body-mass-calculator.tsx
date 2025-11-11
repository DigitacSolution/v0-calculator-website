"use client"

import { useState } from "react"

export default function LeanBodyMassCalculator() {
  const [gender, setGender] = useState("male")
  const [height, setHeight] = useState(70)
  const [weight, setWeight] = useState(180)
  const [bodyFat, setBodyFat] = useState(20)

  const calculateLBM = () => {
    // LBM = Weight - (Weight × (Body Fat % / 100))
    return (weight - weight * (bodyFat / 100)).toFixed(1)
  }

  const lbm = Number.parseFloat(calculateLBM())
  const fatMass = (weight - lbm).toFixed(1)

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Gender</label>
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
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Height: {height} in</label>
        <input
          type="range"
          min="48"
          max="84"
          value={height}
          onChange={(e) => setHeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Weight: {weight} lbs</label>
        <input
          type="range"
          min="75"
          max="450"
          value={weight}
          onChange={(e) => setWeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Body Fat: {bodyFat}%</label>
        <input
          type="range"
          min="5"
          max="50"
          value={bodyFat}
          onChange={(e) => setBodyFat(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <div className="text-sm text-muted-foreground mb-1">Lean Body Mass</div>
          <div className="text-3xl font-bold text-primary">{lbm} lbs</div>
        </div>
        <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
          <div className="text-sm text-muted-foreground mb-1">Fat Mass</div>
          <div className="text-3xl font-bold text-accent">{fatMass} lbs</div>
        </div>
      </div>
    </div>
  )
}
