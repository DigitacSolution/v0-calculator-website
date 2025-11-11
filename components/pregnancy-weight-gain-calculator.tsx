"use client"

import { useState } from "react"

export default function PregnancyWeightGainCalculator() {
  const [prePregnancyBMI, setPrePregnancyBMI] = useState(22)
  const [currentWeight, setCurrentWeight] = useState(150)
  const [prePregnancyWeight, setPrePregnancyWeight] = useState(145)

  const getRecommendedGain = () => {
    const recommendations = {
      underweight: { min: 28, max: 40 },
      normal: { min: 25, max: 35 },
      overweight: { min: 15, max: 25 },
      obese: { min: 11, max: 20 },
    }

    let category = "normal"
    if (prePregnancyBMI < 18.5) category = "underweight"
    else if (prePregnancyBMI < 25) category = "normal"
    else if (prePregnancyBMI < 30) category = "overweight"
    else category = "obese"

    return recommendations[category]
  }

  const currentGain = currentWeight - prePregnancyWeight
  const recommended = getRecommendedGain()

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Pre-Pregnancy BMI: {prePregnancyBMI.toFixed(1)}
        </label>
        <input
          type="range"
          min="15"
          max="50"
          step="0.1"
          value={prePregnancyBMI}
          onChange={(e) => setPrePregnancyBMI(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Pre-Pregnancy Weight: {prePregnancyWeight} lbs
        </label>
        <input
          type="range"
          min="75"
          max="300"
          value={prePregnancyWeight}
          onChange={(e) => setPrePregnancyWeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Current Weight: {currentWeight} lbs</label>
        <input
          type="range"
          min={prePregnancyWeight}
          max={prePregnancyWeight + 80}
          value={currentWeight}
          onChange={(e) => setCurrentWeight(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
          <div className="text-xs text-muted-foreground mb-1">Current Gain</div>
          <div className="text-3xl font-bold text-pink-600">{currentGain}</div>
          <div className="text-xs text-muted-foreground">lbs</div>
        </div>
        <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
          <div className="text-xs text-muted-foreground mb-1">Recommended Range</div>
          <div className="text-2xl font-bold text-pink-600">
            {recommended.min}-{recommended.max}
          </div>
          <div className="text-xs text-muted-foreground">lbs</div>
        </div>
      </div>
    </div>
  )
}
