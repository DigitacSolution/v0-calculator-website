"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HealthyWeightCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male")
  const [heightFeet, setHeightFeet] = useState(5)
  const [heightInches, setHeightInches] = useState(10)
  const [currentWeight, setCurrentWeight] = useState(180)

  const totalHeightInches = heightFeet * 12 + heightInches
  const heightCm = totalHeightInches * 2.54

  // Calculate ideal weight using multiple formulas
  // Devine Formula
  const devineWeight = gender === "male" ? 50 + 2.3 * (totalHeightInches - 60) : 45.5 + 2.3 * (totalHeightInches - 60)

  // Robinson Formula
  const robinsonWeight = gender === "male" ? 52 + 1.9 * (totalHeightInches - 60) : 49 + 1.7 * (totalHeightInches - 60)

  // Miller Formula
  const millerWeight =
    gender === "male" ? 56.2 + 1.41 * (totalHeightInches - 60) : 53.1 + 1.36 * (totalHeightInches - 60)

  // Hamwi Formula
  const hamwiWeight = gender === "male" ? 48 + 2.7 * (totalHeightInches - 60) : 45.5 + 2.2 * (totalHeightInches - 60)

  const averageIdealWeight = (devineWeight + robinsonWeight + millerWeight + hamwiWeight) / 4

  // Healthy weight range (BMI 18.5-24.9)
  const heightMeters = heightCm / 100
  const minHealthyWeight = 18.5 * heightMeters * heightMeters * 2.205
  const maxHealthyWeight = 24.9 * heightMeters * heightMeters * 2.205

  const currentBMI = currentWeight / 2.205 / (heightMeters * heightMeters)
  const weightDifference = currentWeight - averageIdealWeight

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { text: "Underweight", color: "text-blue-600" }
    if (bmi < 25) return { text: "Normal weight", color: "text-green-600" }
    if (bmi < 30) return { text: "Overweight", color: "text-orange-600" }
    return { text: "Obese", color: "text-red-600" }
  }

  const bmiCategory = getBMICategory(currentBMI)

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Gender</Label>
            <Select value={gender} onValueChange={(value: "male" | "female") => setGender(value)}>
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>
              Height: {heightFeet}'{heightInches}"
            </Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <Label className="text-xs">Feet</Label>
                <Slider
                  value={[heightFeet]}
                  onValueChange={([value]) => setHeightFeet(value)}
                  min={4}
                  max={7}
                  step={1}
                  className="mt-2"
                />
              </div>
              <div>
                <Label className="text-xs">Inches</Label>
                <Slider
                  value={[heightInches]}
                  onValueChange={([value]) => setHeightInches(value)}
                  min={0}
                  max={11}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          <div>
            <Label>Current Weight: {currentWeight} lbs</Label>
            <Slider
              value={[currentWeight]}
              onValueChange={([value]) => setCurrentWeight(value)}
              min={80}
              max={400}
              step={1}
              className="mt-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="font-semibold text-lg mb-4">Your Results</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current BMI:</span>
                <span className={`font-semibold ${bmiCategory.color}`}>
                  {currentBMI.toFixed(1)} ({bmiCategory.text})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Ideal Weight:</span>
                <span className="font-semibold">{averageIdealWeight.toFixed(1)} lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weight Difference:</span>
                <span className={`font-semibold ${weightDifference > 0 ? "text-orange-600" : "text-green-600"}`}>
                  {weightDifference > 0 ? "+" : ""}
                  {weightDifference.toFixed(1)} lbs
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-secondary/50">
            <h3 className="font-semibold mb-3">Healthy Weight Range</h3>
            <div className="text-center py-4">
              <div className="text-3xl font-bold text-primary">
                {minHealthyWeight.toFixed(0)} - {maxHealthyWeight.toFixed(0)} lbs
              </div>
              <div className="text-sm text-muted-foreground mt-2">Based on BMI 18.5-24.9</div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-3 text-sm">Formula Results</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Devine:</span>
                <span>{devineWeight.toFixed(1)} lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Robinson:</span>
                <span>{robinsonWeight.toFixed(1)} lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Miller:</span>
                <span>{millerWeight.toFixed(1)} lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hamwi:</span>
                <span>{hamwiWeight.toFixed(1)} lbs</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
