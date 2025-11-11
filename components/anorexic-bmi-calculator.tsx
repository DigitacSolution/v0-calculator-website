"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { AlertCircle } from "lucide-react"

export default function AnorexicBMICalculator() {
  const [heightFeet, setHeightFeet] = useState(5)
  const [heightInches, setHeightInches] = useState(6)
  const [weight, setWeight] = useState(100)

  const totalHeightInches = heightFeet * 12 + heightInches
  const heightCm = totalHeightInches * 2.54
  const heightMeters = heightCm / 100
  const weightKg = weight / 2.205

  // Calculate BMI
  const bmi = weightKg / (heightMeters * heightMeters)

  // Calculate weight ranges
  const severelyUnderweight = 16 * heightMeters * heightMeters * 2.205
  const underweight = 17 * heightMeters * heightMeters * 2.205
  const mildlyUnderweight = 18.5 * heightMeters * heightMeters * 2.205
  const normalWeight = 18.5 * heightMeters * heightMeters * 2.205
  const maxNormalWeight = 24.9 * heightMeters * heightMeters * 2.205

  const getBMICategory = (bmi: number) => {
    if (bmi < 15)
      return {
        text: "Severe Anorexia",
        color: "text-red-900",
        bg: "bg-red-900/10",
        severity: "Critical - Immediate medical attention required",
      }
    if (bmi < 16)
      return {
        text: "Moderate Anorexia",
        color: "text-red-700",
        bg: "bg-red-700/10",
        severity: "Severe - Medical intervention needed",
      }
    if (bmi < 17)
      return {
        text: "Mild Anorexia",
        color: "text-red-600",
        bg: "bg-red-600/10",
        severity: "Moderate - Professional help recommended",
      }
    if (bmi < 18.5)
      return {
        text: "Underweight",
        color: "text-orange-600",
        bg: "bg-orange-500/10",
        severity: "Mild - Nutritional counseling advised",
      }
    if (bmi < 25)
      return {
        text: "Normal Weight",
        color: "text-green-600",
        bg: "bg-green-500/10",
        severity: "Healthy range",
      }
    return {
      text: "Overweight",
      color: "text-blue-600",
      bg: "bg-blue-500/10",
      severity: "Above healthy range",
    }
  }

  const category = getBMICategory(bmi)
  const isCritical = bmi < 17.5

  return (
    <div className="space-y-8">
      {isCritical && (
        <Card className="p-6 bg-red-900/10 border-red-900/30">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-red-900 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-2">Critical BMI Warning</h3>
              <p className="text-sm text-red-900/80 leading-relaxed">
                A BMI below 17.5 indicates severe malnutrition and requires immediate medical attention. Please consult
                with a healthcare professional or eating disorder specialist as soon as possible.
              </p>
            </div>
          </div>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
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
              min={60}
              max={300}
              step={1}
              className="mt-2"
            />
          </div>

          <Card className="p-6 bg-secondary/50">
            <h3 className="font-semibold mb-3 text-sm">Weight Ranges for Your Height</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-red-900">Severe Anorexia (&lt;15):</span>
                <span className="font-semibold">&lt;{severelyUnderweight.toFixed(0)} lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-700">Moderate Anorexia (&lt;16):</span>
                <span className="font-semibold">&lt;{severelyUnderweight.toFixed(0)} lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-600">Mild Anorexia (&lt;17):</span>
                <span className="font-semibold">&lt;{underweight.toFixed(0)} lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-600">Underweight (&lt;18.5):</span>
                <span className="font-semibold">&lt;{mildlyUnderweight.toFixed(0)} lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-600">Normal (18.5-24.9):</span>
                <span className="font-semibold">
                  {normalWeight.toFixed(0)} - {maxNormalWeight.toFixed(0)} lbs
                </span>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className={`p-6 ${category.bg} border-${category.color.replace("text-", "")}/20`}>
            <h3 className="font-semibold text-lg mb-4 text-center">BMI Result</h3>
            <div className="text-center mb-4">
              <div className="text-5xl font-bold mb-3">{bmi.toFixed(1)}</div>
              <div className={`text-xl font-semibold ${category.color} mb-2`}>{category.text}</div>
              <div className="text-sm text-muted-foreground">{category.severity}</div>
            </div>
          </Card>

          {bmi < 18.5 && (
            <Card className="p-6 bg-orange-500/10 border-orange-500/20">
              <h3 className="font-semibold mb-3">Weight Needed to Reach Healthy Range</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">+{(normalWeight - weight).toFixed(1)} lbs</div>
                <div className="text-sm text-muted-foreground">Target: {normalWeight.toFixed(0)} lbs (BMI 18.5)</div>
              </div>
            </Card>
          )}

          <Card className="p-6">
            <h3 className="font-semibold mb-3">Important Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside leading-relaxed">
              <li>BMI is a screening tool, not a diagnostic tool</li>
              <li>Eating disorders are serious mental health conditions</li>
              <li>Professional medical and psychological help is essential</li>
              <li>Recovery is possible with proper treatment and support</li>
            </ul>
          </Card>

          <Card className="p-6 bg-blue-500/5 border-blue-500/20">
            <h3 className="font-semibold mb-2 text-sm">Get Help</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              If you or someone you know is struggling with an eating disorder, please reach out to a healthcare
              provider, therapist, or eating disorder hotline for support.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
