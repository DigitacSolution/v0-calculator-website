"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BodyTypeCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male")
  const [heightFeet, setHeightFeet] = useState(5)
  const [heightInches, setHeightInches] = useState(10)
  const [weight, setWeight] = useState(180)
  const [waist, setWaist] = useState(34)
  const [hips, setHips] = useState(38)
  const [shoulders, setShoulders] = useState(44)

  const totalHeightInches = heightFeet * 12 + heightInches
  const heightCm = totalHeightInches * 2.54
  const heightMeters = heightCm / 100
  const weightKg = weight / 2.205

  // Calculate BMI
  const bmi = weightKg / (heightMeters * heightMeters)

  // Waist-to-Hip Ratio
  const whr = waist / hips

  // Waist-to-Height Ratio
  const whtr = waist / totalHeightInches

  // Body Frame Size (Wrist method approximation)
  const wristCircumference = totalHeightInches > 65 ? 7 : 6.5
  const frameSize =
    totalHeightInches / wristCircumference > 10.4
      ? "Large"
      : totalHeightInches / wristCircumference > 9.6
        ? "Medium"
        : "Small"

  // Determine body shape
  let bodyShape = ""
  let shapeDescription = ""

  if (gender === "female") {
    const shoulderHipDiff = Math.abs(shoulders - hips)
    const waistHipDiff = hips - waist

    if (shoulders > hips + 2 && waistHipDiff > 7) {
      bodyShape = "Inverted Triangle"
      shapeDescription = "Broader shoulders than hips"
    } else if (shoulderHipDiff <= 2 && waistHipDiff >= 7 && waist < 36) {
      bodyShape = "Hourglass"
      shapeDescription = "Well-defined waist with balanced proportions"
    } else if (shoulderHipDiff <= 2 && waistHipDiff < 7) {
      bodyShape = "Rectangle"
      shapeDescription = "Similar measurements with less definition"
    } else if (hips > shoulders + 2 && waistHipDiff >= 7) {
      bodyShape = "Pear (Triangle)"
      shapeDescription = "Hips wider than shoulders"
    } else {
      bodyShape = "Oval (Apple)"
      shapeDescription = "Weight carried around midsection"
    }
  } else {
    if (whr > 0.95) {
      bodyShape = "Apple"
      shapeDescription = "Weight around midsection"
    } else if (shoulders > waist + 4) {
      bodyShape = "Inverted Triangle"
      shapeDescription = "Broad shoulders, narrow waist"
    } else if (shoulders - waist <= 4 && waist - hips <= 4) {
      bodyShape = "Rectangle"
      shapeDescription = "Even proportions throughout"
    } else {
      bodyShape = "Triangle"
      shapeDescription = "Wider lower body"
    }
  }

  // Health risk assessment based on WHR
  const healthRisk =
    gender === "male"
      ? whr < 0.95
        ? { text: "Low", color: "text-green-600" }
        : whr < 1.0
          ? { text: "Moderate", color: "text-orange-600" }
          : { text: "High", color: "text-red-600" }
      : whr < 0.8
        ? { text: "Low", color: "text-green-600" }
        : whr < 0.85
          ? { text: "Moderate", color: "text-orange-600" }
          : { text: "High", color: "text-red-600" }

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
            <Label>Waist: {waist} inches</Label>
            <Slider
              value={[waist]}
              onValueChange={([value]) => setWaist(value)}
              min={20}
              max={60}
              step={0.5}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Hips: {hips} inches</Label>
            <Slider
              value={[hips]}
              onValueChange={([value]) => setHips(value)}
              min={20}
              max={60}
              step={0.5}
              className="mt-2"
            />
          </div>

          <div>
            <Label>Shoulders: {shoulders} inches</Label>
            <Slider
              value={[shoulders]}
              onValueChange={([value]) => setShoulders(value)}
              min={20}
              max={70}
              step={0.5}
              className="mt-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h3 className="font-semibold text-lg mb-4 text-center">Your Body Type</h3>
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-primary mb-2">{bodyShape}</div>
              <div className="text-sm text-muted-foreground">{shapeDescription}</div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Frame Size:</span>
                <span className="font-semibold">{frameSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">BMI:</span>
                <span className="font-semibold">{bmi.toFixed(1)}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-secondary/50">
            <h3 className="font-semibold mb-3">Body Ratios</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-muted-foreground">Waist-to-Hip Ratio:</span>
                  <span className="font-semibold">{whr.toFixed(2)}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Health Risk: <span className={healthRisk.color}>{healthRisk.text}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Waist-to-Height Ratio:</span>
                  <span className="font-semibold">{whtr.toFixed(2)}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {whtr < 0.5 ? "Healthy range" : "Consider consulting a health professional"}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3 text-sm">Measurements</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shoulders:</span>
                <span>{shoulders}"</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Waist:</span>
                <span>{waist}"</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hips:</span>
                <span>{hips}"</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
