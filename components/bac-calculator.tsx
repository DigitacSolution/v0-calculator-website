"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function BACCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male")
  const [weight, setWeight] = useState(70) // kg
  const [drinks, setDrinks] = useState(3)
  const [hours, setHours] = useState(2)

  const weightLbs = weight * 2.205
  const r = gender === "male" ? 0.68 : 0.55
  const alcoholGrams = drinks * 14 // standard drink = 14g alcohol
  const bac = (alcoholGrams / (weightLbs * r * 23.36)) * 100 - 0.015 * hours

  const maxBAC = bac > 0 ? bac : 0

  const getStatus = () => {
    if (maxBAC === 0) return { text: "Sober", color: "text-green-600" }
    if (maxBAC < 0.05) return { text: "Mild Impairment", color: "text-yellow-600" }
    if (maxBAC < 0.08) return { text: "Reduced Coordination", color: "text-orange-600" }
    if (maxBAC < 0.15) return { text: "Significant Impairment", color: "text-red-600" }
    return { text: "Severe Impairment", color: "text-red-800" }
  }

  const status = getStatus()

  return (
    <div className="space-y-8">
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setGender("male")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            gender === "male" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          Male
        </button>
        <button
          onClick={() => setGender("female")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            gender === "female" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}
        >
          Female
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>
              Weight: {weight} kg ({weightLbs.toFixed(1)} lbs)
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
            <Label>Number of Drinks: {drinks}</Label>
            <Slider
              value={[drinks]}
              onValueChange={(value) => setDrinks(value[0])}
              min={0}
              max={15}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Hours Drinking: {hours}</Label>
            <Slider
              value={[hours]}
              onValueChange={(value) => setHours(value[0])}
              min={0}
              max={12}
              step={0.5}
              className="mt-2"
            />
          </div>
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Blood Alcohol Content</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Estimated BAC</span>
              <span className="font-bold text-xl text-primary">{maxBAC.toFixed(3)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Status</span>
              <span className={`font-semibold ${status.color}`}>{status.text}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Legal Limit (US)</span>
              <span className="font-semibold">0.08%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Alcohol</span>
              <span className="font-semibold">{alcoholGrams.toFixed(0)}g</span>
            </div>
            <div className="mt-4 p-3 bg-card rounded border-red-600 border">
              <div className="text-xs text-red-600 font-semibold mb-2">Warning</div>
              <div className="text-xs">
                This is an estimate only. Never drink and drive. BAC can vary based on many factors. For informational
                purposes only.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default BACCalculator
