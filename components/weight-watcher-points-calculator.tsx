"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WeightWatcherPointsCalculator() {
  const [gender, setGender] = useState<"male" | "female">("female")
  const [age, setAge] = useState(35)
  const [heightFeet, setHeightFeet] = useState(5)
  const [heightInches, setHeightInches] = useState(6)
  const [weight, setWeight] = useState(150)
  const [activityLevel, setActivityLevel] = useState<"sedentary" | "light" | "moderate" | "active">("moderate")

  const totalHeightInches = heightFeet * 12 + heightInches

  // Calculate daily points target (simplified WW-style system)
  let basePoints = 0

  // Gender points
  if (gender === "female") {
    basePoints += 2
  } else {
    basePoints += 8
  }

  // Age points
  if (age >= 18 && age <= 20) {
    basePoints += 5
  } else if (age >= 21 && age <= 35) {
    basePoints += 4
  } else if (age >= 36 && age <= 50) {
    basePoints += 3
  } else if (age >= 51 && age <= 65) {
    basePoints += 2
  } else {
    basePoints += 1
  }

  // Weight points (simplified - 1 point per 10 lbs)
  basePoints += Math.floor(weight / 10)

  // Height points (1 point if over 5'1")
  if (totalHeightInches > 61) {
    basePoints += 2
  } else {
    basePoints += 1
  }

  // Activity level points
  const activityPoints = {
    sedentary: 0,
    light: 2,
    moderate: 4,
    active: 6,
  }

  const dailyPoints = basePoints
  const weeklyPoints = 35 // Standard weekly flex points
  const activityEarned = activityPoints[activityLevel]

  // Food point calculator (simplified)
  const [calories, setCalories] = useState(200)
  const [protein, setProtein] = useState(10)
  const [sugar, setSugar] = useState(5)
  const [saturatedFat, setSaturatedFat] = useState(3)

  const calculateFoodPoints = () => {
    // Simplified points formula
    const points = Math.max(0, Math.round(calories / 50 - protein / 8 + sugar / 10 + saturatedFat / 4))
    return Math.max(0, points)
  }

  const foodPoints = calculateFoodPoints()

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Personal Information</h3>

          <div>
            <Label>Gender</Label>
            <Select value={gender} onValueChange={(value: "male" | "female") => setGender(value)}>
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Age: {age} years</Label>
            <Slider
              value={[age]}
              onValueChange={([value]) => setAge(value)}
              min={18}
              max={80}
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
            <Label>Weight: {weight} lbs</Label>
            <Slider
              value={[weight]}
              onValueChange={([value]) => setWeight(value)}
              min={80}
              max={400}
              step={1}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Activity Level</Label>
            <Select value={activityLevel} onValueChange={(value: any) => setActivityLevel(value)}>
              <SelectTrigger className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                <SelectItem value="active">Active (6-7 days/week)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h3 className="font-semibold text-lg mb-4 text-center">Your Daily Points Budget</h3>
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-primary mb-2">{dailyPoints}</div>
              <div className="text-sm text-muted-foreground">Daily Points</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weekly Flex Points:</span>
                <span className="font-semibold">{weeklyPoints}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Activity Points Earned:</span>
                <span className="font-semibold text-green-600">+{activityEarned}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-secondary/50">
            <h3 className="font-semibold mb-3">How Points Work</h3>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside leading-relaxed">
              <li>Stay within your daily points budget</li>
              <li>Use weekly flex points for special occasions</li>
              <li>Earn activity points through exercise</li>
              <li>Zero-point foods available (most fruits & vegetables)</li>
            </ul>
          </Card>
        </div>
      </div>

      <Card className="p-6 bg-blue-500/5 border-blue-500/20">
        <h3 className="font-semibold text-lg mb-4">Food Points Calculator</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label>Calories: {calories}</Label>
              <Slider
                value={[calories]}
                onValueChange={([value]) => setCalories(value)}
                min={0}
                max={1000}
                step={10}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Protein (g): {protein}</Label>
              <Slider
                value={[protein]}
                onValueChange={([value]) => setProtein(value)}
                min={0}
                max={50}
                step={1}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Sugar (g): {sugar}</Label>
              <Slider
                value={[sugar]}
                onValueChange={([value]) => setSugar(value)}
                min={0}
                max={50}
                step={1}
                className="mt-2"
              />
            </div>
            <div>
              <Label>Saturated Fat (g): {saturatedFat}</Label>
              <Slider
                value={[saturatedFat]}
                onValueChange={([value]) => setSaturatedFat(value)}
                min={0}
                max={30}
                step={1}
                className="mt-2"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Food Points</div>
                <div className="text-7xl font-bold text-accent">{foodPoints}</div>
              </div>
            </Card>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-3">Disclaimer</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This is a simplified points calculator for educational purposes. For the official Weight Watchers program and
          accurate point calculations, please visit the official Weight Watchers website or app.
        </p>
      </Card>
    </div>
  )
}
