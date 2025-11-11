"use client"

import { useState } from "react"

export default function CaloriesBurnedCalculator() {
  const [weight, setWeight] = useState(180)
  const [activity, setActivity] = useState("running")
  const [duration, setDuration] = useState(30)
  const [metric, setMetric] = useState(false)

  const calculateCalories = () => {
    let w = weight
    if (!metric) {
      w = weight * 0.453592 // lbs to kg
    }

    const mets = {
      walking: 3.5,
      running: 9.8,
      cycling: 8.0,
      swimming: 8.0,
      elliptical: 6.0,
      yoga: 2.5,
      weight_training: 6.0,
      hiit: 12.0,
      basketball: 8.0,
      soccer: 10.0,
    }

    const met = mets[activity] || 5.0
    return ((met * w * duration) / 60).toFixed(0)
  }

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
          min={metric ? 30 : 75}
          max={metric ? 200 : 450}
          value={weight}
          onChange={(e) => setWeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Activity</label>
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground"
        >
          <option value="walking">Walking (3.5 MET)</option>
          <option value="running">Running (9.8 MET)</option>
          <option value="cycling">Cycling (8.0 MET)</option>
          <option value="swimming">Swimming (8.0 MET)</option>
          <option value="elliptical">Elliptical (6.0 MET)</option>
          <option value="yoga">Yoga (2.5 MET)</option>
          <option value="weight_training">Weight Training (6.0 MET)</option>
          <option value="hiit">HIIT (12.0 MET)</option>
          <option value="basketball">Basketball (8.0 MET)</option>
          <option value="soccer">Soccer (10.0 MET)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Duration: {duration} minutes</label>
        <input
          type="range"
          min="5"
          max="180"
          value={duration}
          onChange={(e) => setDuration(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Calories Burned</div>
          <div className="text-5xl font-bold text-primary">{calculateCalories()}</div>
          <div className="text-sm text-muted-foreground mt-2">kcal</div>
        </div>
      </div>
    </div>
  )
}
