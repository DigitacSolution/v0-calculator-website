"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OverweightCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male")
  const [heightFeet, setHeightFeet] = useState(5)
  const [heightInches, setHeightInches] = useState(10)
  const [weight, setWeight] = useState(200)
  const [age, setAge] = useState(35)

  const totalHeightInches = heightFeet * 12 + heightInches
  const heightCm = totalHeightInches * 2.54
  const heightMeters = heightCm / 100
  const weightKg = weight / 2.205

  // Calculate BMI
  const bmi = weightKg / (heightMeters * heightMeters)

  // Calculate ideal weight range (BMI 18.5-24.9)
  const minHealthyWeight = 18.5 * heightMeters * heightMeters * 2.205
  const maxHealthyWeight = 24.9 * heightMeters * heightMeters * 2.205

  // Overweight threshold (BMI 25)
  const overweightThreshold = 25 * heightMeters * heightMeters * 2.205

  // Obese threshold (BMI 30)
  const obeseThreshold = 30 * heightMeters * heightMeters * 2.205

  // Calculate how much overweight
  const excessWeight = weight - maxHealthyWeight
  const isOverweight = bmi >= 25
  const isObese = bmi >= 30

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { text: "Underweight", color: "text-blue-600", bg: "bg-blue-500/10" }
    if (bmi < 25) return { text: "Normal weight", color: "text-green-600", bg: "bg-green-500/10" }
    if (bmi < 30) return { text: "Overweight", color: "text-orange-600", bg: "bg-orange-500/10" }
    if (bmi < 35) return { text: "Obese Class I", color: "text-red-600", bg: "bg-red-500/10" }
    if (bmi < 40) return { text: "Obese Class II", color: "text-red-700", bg: "bg-red-600/10" }
    return { text: "Obese Class III", color: "text-red-900", bg: "bg-red-700/10" }
  }

  const category = getBMICategory(bmi)

  // Health risk assessment
  const getHealthRisk = () => {
    if (bmi < 18.5) return { text: "Increased risk of nutritional deficiency", level: "Moderate" }
    if (bmi < 25) return { text: "Lowest risk", level: "Low" }
    if (bmi < 30) return { text: "Increased risk of developing health issues", level: "Increased" }
    if (bmi < 35) return { text: "High risk of developing health issues", level: "High" }
    if (bmi < 40) return { text: "Very high risk of health complications", level: "Very High" }
    return { text: "Extremely high risk - medical intervention recommended", level: "Extremely High" }
  }

  const healthRisk = getHealthRisk()

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
            <Label>Age: {age} years</Label>
            <Slider
              value={[age]}
              onValueChange={([value]) => setAge(value)}
              min={18}
              max={100}
              step={1}
              className="mt-2"
            />
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
            <Label>Current Weight: {weight} lbs</Label>
            <Slider
              value={[weight]}
              onValueChange={([value]) => setWeight(value)}
              min={80}
              max={500}
              step={1}
              className="mt-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Card className={`p-6 ${category.bg} border-${category.color.replace("text-", "")}/20`}>
            <h3 className="font-semibold text-lg mb-4">BMI Classification</h3>
            <div className="text-center mb-4">
              <div className="text-5xl font-bold mb-2">{bmi.toFixed(1)}</div>
              <div className={`text-xl font-semibold ${category.color}`}>{category.text}</div>
            </div>
          </Card>

          {isOverweight && (
            <Card className="p-6 bg-orange-500/10 border-orange-500/20">
              <h3 className="font-semibold text-lg mb-4">Weight Analysis</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Excess Weight:</span>
                  <span className="font-semibold text-orange-600">{excessWeight.toFixed(1)} lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Healthy Range:</span>
                  <span className="font-semibold">
                    {minHealthyWeight.toFixed(0)} - {maxHealthyWeight.toFixed(0)} lbs
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weight to Lose:</span>
                  <span className="font-semibold text-primary">{(weight - maxHealthyWeight).toFixed(1)} lbs</span>
                </div>
              </div>
            </Card>
          )}

          <Card className="p-6 bg-secondary/50">
            <h3 className="font-semibold mb-3">Health Risk Assessment</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Risk Level:</span>
                <span className="font-semibold">{healthRisk.level}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{healthRisk.text}</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3 text-sm">BMI Thresholds</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Overweight starts at:</span>
                <span>{overweightThreshold.toFixed(0)} lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Obese starts at:</span>
                <span>{obeseThreshold.toFixed(0)} lbs</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {isOverweight && (
        <Card className="p-6 bg-blue-500/5 border-blue-500/20">
          <h3 className="font-semibold mb-3">Recommendations</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>Consult with a healthcare provider for personalized advice</li>
            <li>Focus on gradual, sustainable weight loss (1-2 lbs per week)</li>
            <li>Combine healthy eating with regular physical activity</li>
            <li>Track your progress and celebrate small victories</li>
            <li>Consider working with a nutritionist or dietitian</li>
          </ul>
        </Card>
      )}
    </div>
  )
}
