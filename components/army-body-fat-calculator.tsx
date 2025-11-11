"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ArmyBodyFatCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male")
  const [age, setAge] = useState(30)
  const [height, setHeight] = useState(70) // inches
  const [neck, setNeck] = useState(15) // inches
  const [waist, setWaist] = useState(32) // inches
  const [hip, setHip] = useState(40) // inches (for female)

  // Army body fat formula
  const bodyFat =
    gender === "male"
      ? 86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76
      : 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387

  const maxBodyFat = age <= 20 ? 20 : age <= 27 ? 22 : age <= 39 ? 24 : 26
  const passesStandard = bodyFat <= maxBodyFat

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
            <Label>Age: {age} years</Label>
            <Slider
              value={[age]}
              onValueChange={(value) => setAge(value[0])}
              min={17}
              max={65}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Height: {height} inches</Label>
            <Slider
              value={[height]}
              onValueChange={(value) => setHeight(value[0])}
              min={48}
              max={84}
              step={0.5}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Neck: {neck} inches</Label>
            <Slider
              value={[neck]}
              onValueChange={(value) => setNeck(value[0])}
              min={8}
              max={24}
              step={0.5}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Waist: {waist} inches</Label>
            <Slider
              value={[waist]}
              onValueChange={(value) => setWaist(value[0])}
              min={20}
              max={60}
              step={0.5}
              className="mt-2"
            />
          </div>

          {gender === "female" && (
            <div>
              <Label>Hip: {hip} inches</Label>
              <Slider
                value={[hip]}
                onValueChange={(value) => setHip(value[0])}
                min={24}
                max={60}
                step={0.5}
                className="mt-2"
              />
            </div>
          )}
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-bold text-lg mb-4">Army Body Fat Results</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-muted-foreground">Body Fat Percentage</span>
              <span className="font-bold text-xl text-primary">{bodyFat.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Maximum Allowed</span>
              <span className="font-semibold">{maxBodyFat}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Status</span>
              <span className={`font-semibold ${passesStandard ? "text-green-600" : "text-red-600"}`}>
                {passesStandard ? "Pass" : "Fail"}
              </span>
            </div>
            <div className="mt-4 p-3 bg-card rounded border border-border">
              <div className="text-xs text-muted-foreground mb-2">Army Standard</div>
              <div className="text-xs">Based on AR 600-9 body composition standards for military personnel</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ArmyBodyFatCalculator
