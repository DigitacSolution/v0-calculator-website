"use client"

import { useState } from "react"

export default function MacroCalculator() {
  const [tdee, setTdee] = useState(2000)
  const [diet, setDiet] = useState("balanced")

  const calculateMacros = () => {
    const splits = {
      balanced: { protein: 0.3, carbs: 0.4, fat: 0.3 },
      lowcarb: { protein: 0.35, carbs: 0.2, fat: 0.45 },
      keto: { protein: 0.25, carbs: 0.05, fat: 0.7 },
      athlete: { protein: 0.3, carbs: 0.5, fat: 0.2 },
    }

    const split = splits[diet]
    const proteinCals = tdee * split.protein
    const carbsCals = tdee * split.carbs
    const fatCals = tdee * split.fat

    return {
      protein: (proteinCals / 4).toFixed(1),
      carbs: (carbsCals / 4).toFixed(1),
      fat: (fatCals / 9).toFixed(1),
      proteinPct: (split.protein * 100).toFixed(0),
      carbsPct: (split.carbs * 100).toFixed(0),
      fatPct: (split.fat * 100).toFixed(0),
    }
  }

  const macros = calculateMacros()

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">TDEE: {tdee} kcal</label>
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
        <label className="block text-sm font-semibold text-foreground mb-2">Diet Type</label>
        <select
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground"
        >
          <option value="balanced">Balanced (30/40/30)</option>
          <option value="lowcarb">Low Carb (35/20/45)</option>
          <option value="keto">Keto (25/5/70)</option>
          <option value="athlete">Athlete (30/50/20)</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="text-xs text-muted-foreground mb-1">Protein</div>
          <div className="text-2xl font-bold text-blue-600">{macros.protein}g</div>
          <div className="text-xs text-muted-foreground">{macros.proteinPct}%</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
          <div className="text-xs text-muted-foreground mb-1">Carbs</div>
          <div className="text-2xl font-bold text-orange-600">{macros.carbs}g</div>
          <div className="text-xs text-muted-foreground">{macros.carbsPct}%</div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <div className="text-xs text-muted-foreground mb-1">Fat</div>
          <div className="text-2xl font-bold text-yellow-600">{macros.fat}g</div>
          <div className="text-xs text-muted-foreground">{macros.fatPct}%</div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
        <p className="text-xs text-muted-foreground">
          <strong>How it works:</strong> Protein = 4 kcal/g, Carbs = 4 kcal/g, Fat = 9 kcal/g
        </p>
      </div>
    </div>
  )
}
