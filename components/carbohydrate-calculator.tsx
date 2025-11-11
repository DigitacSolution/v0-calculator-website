"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function CarbohydrateCalculator() {
  const [weight, setWeight] = useState(70) // kg
  const [activityLevel, setActivityLevel] = useState<"low" | "moderate" | "high">("moderate")
  const [goal, setGoal] = useState<"maintain" | "lose" | "gain">("maintain")

  const activityMultipliers = {
    low: 3,
    moderate: 5,
    high: 7,
  }

  const goalAdjustments = {
    maintain: 0,
    lose: -1,
    gain: 1,
  }

  const carbsPerKg = activityMultipliers[activityLevel] + goalAdjustments[goal]
  const dailyCarbs = weight * carbsPerKg
  const carbCalories = dailyCarbs * 4
  const percentOfDiet = 50 // approximate

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>
              Weight: {weight} kg ({(weight * 2.205).toFixed(1)} lbs)
            </Label>
            <Slider
              value={[weight]}
              onValueChange={(value) => setWeight(value[0])}
              min={40}
              max={150}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Activity Level</Label>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setActivityLevel("low")}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activityLevel === "low"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Low
              </button>
              <button
                onClick={() => setActivityLevel("moderate")}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activityLevel === "moderate"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                Moderate
              </button>
              <button
                onClick={() => setActivityLevel("high")}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activityLevel === "high"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                High
              </button>
            </div>
          </div>

          <div>
            <Label>Goal</Label>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setGoal("lose")}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  goal === "lose" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                Lose Weight
              </button>
              <button
                onClick={() => setGoal("maintain")}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  goal === "maintain" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                Maintain
              </button>
              <button
                onClick={() => setGoal("gain")}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  goal === "gain" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                Gain Weight
              </button>
            </div>
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Daily Carbohydrate Needs</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Daily Carbs</span>
              <span className="font-bold text-xl text-primary">{dailyCarbs.toFixed(0)}g</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Calories from Carbs</span>
              <span className="font-semibold">{carbCalories.toFixed(0)} kcal</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Per kg Body Weight</span>
              <span className="font-semibold text-accent">{carbsPerKg.toFixed(1)}g/kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Approx. % of Diet</span>
              <span className="font-semibold">{percentOfDiet}%</span>
            </div>
            <div className="mt-4 p-3 bg-card rounded border border-border">
              <div className="text-xs text-muted-foreground mb-2">Guidelines</div>
              <div className="text-xs">
                Recommendations vary based on activity level and fitness goals. Adjust based on your individual needs
                and response.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CarbohydrateCalculator
