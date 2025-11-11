"use client"

import { useState } from "react"

export default function CalorieCalculator() {
  const [goal, setGoal] = useState("maintenance")
  const [tdee, setTdee] = useState(2000)

  const calculateCalories = () => {
    const deficits = {
      extreme: -1000,
      aggressive: -750,
      moderate: -500,
      light: -250,
      maintenance: 0,
      light_surplus: 250,
      moderate_surplus: 500,
    }
    return (tdee + (deficits[goal] || 0)).toFixed(0)
  }

  const calculateWeightChange = () => {
    const dailyDeficit = (tdee - Number.parseFloat(calculateCalories())) / 500
    const weeklyLbs = (dailyDeficit * 7).toFixed(1)
    return weeklyLbs
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">TDEE (kcal/day): {tdee}</label>
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
        <label className="block text-sm font-semibold text-foreground mb-3">Goal</label>
        <div className="space-y-2">
          {[
            { id: "extreme", label: "Extreme Deficit (-1000 kcal)" },
            { id: "aggressive", label: "Aggressive Deficit (-750 kcal)" },
            { id: "moderate", label: "Moderate Deficit (-500 kcal)" },
            { id: "light", label: "Light Deficit (-250 kcal)" },
            { id: "maintenance", label: "Maintenance (0 kcal)" },
            { id: "light_surplus", label: "Light Surplus (+250 kcal)" },
            { id: "moderate_surplus", label: "Moderate Surplus (+500 kcal)" },
          ].map((option) => (
            <label key={option.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="goal"
                value={option.id}
                checked={goal === option.id}
                onChange={(e) => setGoal(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-1">Target Daily Calories</div>
          <div className="text-5xl font-bold text-primary">{calculateCalories()}</div>
          <div className="text-sm text-muted-foreground mt-2">kcal per day</div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="text-sm font-semibold text-foreground">Expected Weight Change</div>
          <div className="text-2xl font-bold text-accent">{calculateWeightChange()} lbs/week</div>
          <p className="text-xs text-muted-foreground mt-2">Based on 3,500 calories per pound of body weight</p>
        </div>
      </div>
    </div>
  )
}
