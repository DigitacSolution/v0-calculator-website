"use client"

import { useState } from "react"

export default function TDEECalculator() {
  const [gender, setGender] = useState("male")
  const [age, setAge] = useState(30)
  const [height, setHeight] = useState(70)
  const [weight, setWeight] = useState(180)
  const [activity, setActivity] = useState("moderate")

  const calculateBMR = () => {
    let bmr
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }
    return bmr
  }

  const calculateTDEE = () => {
    const bmr = calculateBMR()
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      intense: 1.9,
    }
    return (bmr * multipliers[activity]).toFixed(0)
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

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Activity Level</label>
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground"
        >
          <option value="sedentary">Sedentary (little/no exercise)</option>
          <option value="light">Lightly active (light exercise 1-3 days/week)</option>
          <option value="moderate">Moderately active (moderate exercise 3-5 days/week)</option>
          <option value="active">Very active (hard exercise 6-7 days/week)</option>
          <option value="intense">Intense (very hard exercise 2x/day or sports)</option>
        </select>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Total Daily Energy Expenditure</div>
          <div className="text-5xl font-bold text-primary mb-2">{calculateTDEE()}</div>
          <div className="text-sm text-muted-foreground">kcal per day</div>
        </div>
      </div>
    </div>
  )
}
