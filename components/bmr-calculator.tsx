"use client"

import { useState } from "react"

export default function BMRCalculator() {
  const [gender, setGender] = useState("male")
  const [age, setAge] = useState(30)
  const [height, setHeight] = useState(70)
  const [weight, setWeight] = useState(180)

  const calculateBMR = () => {
    // Mifflin-St Jeor equation
    let bmr
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }
    return bmr.toFixed(0)
  }

  const calculateTDEE = (activityLevel) => {
    const bmr = Number.parseFloat(calculateBMR())
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      intense: 1.9,
    }
    return (bmr * multipliers[activityLevel]).toFixed(0)
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

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Age: {age}</label>
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

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-1">Basal Metabolic Rate (BMR)</div>
          <div className="text-4xl font-bold text-primary">{calculateBMR()} kcal/day</div>
        </div>

        <div className="space-y-3 mt-6">
          <div className="text-sm font-semibold text-foreground mb-3">TDEE by Activity Level</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-white rounded p-2 border border-border">
              <div className="text-muted-foreground">Sedentary</div>
              <div className="font-bold text-foreground">{calculateTDEE("sedentary")} kcal</div>
            </div>
            <div className="bg-white rounded p-2 border border-border">
              <div className="text-muted-foreground">Lightly Active</div>
              <div className="font-bold text-foreground">{calculateTDEE("light")} kcal</div>
            </div>
            <div className="bg-white rounded p-2 border border-border">
              <div className="text-muted-foreground">Moderate</div>
              <div className="font-bold text-foreground">{calculateTDEE("moderate")} kcal</div>
            </div>
            <div className="bg-white rounded p-2 border border-border">
              <div className="text-muted-foreground">Very Active</div>
              <div className="font-bold text-foreground">{calculateTDEE("active")} kcal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
