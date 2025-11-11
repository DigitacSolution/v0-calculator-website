"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Activity } from "lucide-react"

export default function GFRCalculator() {
  const [age, setAge] = useState(45)
  const [creatinine, setCreatinine] = useState(1.2)
  const [gender, setGender] = useState<"male" | "female">("male")
  const [race, setRace] = useState<"african" | "other">("other")

  // CKD-EPI equation
  const calculateGFR = () => {
    const k = gender === "female" ? 0.7 : 0.9
    const alpha = gender === "female" ? -0.329 : -0.411
    const genderFactor = gender === "female" ? 1.018 : 1
    const raceFactor = race === "african" ? 1.159 : 1

    const min = Math.min(creatinine / k, 1)
    const max = Math.max(creatinine / k, 1)

    const gfr = 141 * Math.pow(min, alpha) * Math.pow(max, -1.209) * Math.pow(0.993, age) * genderFactor * raceFactor

    return gfr
  }

  const gfr = calculateGFR()

  const getStage = (gfr: number) => {
    if (gfr >= 90) return { stage: "1", description: "Normal or high", color: "green" }
    if (gfr >= 60) return { stage: "2", description: "Mildly decreased", color: "yellow" }
    if (gfr >= 45) return { stage: "3a", description: "Mild to moderate decrease", color: "orange" }
    if (gfr >= 30) return { stage: "3b", description: "Moderate to severe decrease", color: "orange" }
    if (gfr >= 15) return { stage: "4", description: "Severely decreased", color: "red" }
    return { stage: "5", description: "Kidney failure", color: "red" }
  }

  const stage = getStage(gfr)

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-foreground mb-3 block">Age: {age} years</label>
          <Slider
            value={[age]}
            onValueChange={(value) => setAge(value[0])}
            min={18}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Serum Creatinine (mg/dL)</label>
          <Input
            type="number"
            value={creatinine}
            onChange={(e) => setCreatinine(Number(e.target.value))}
            step={0.1}
            min={0.1}
            max={10}
            className="w-full"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Gender</label>
          <div className="flex gap-2">
            <button
              onClick={() => setGender("male")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                gender === "male"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setGender("female")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                gender === "female"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Female
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">Race</label>
          <div className="flex gap-2">
            <button
              onClick={() => setRace("african")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                race === "african"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              African American
            </button>
            <button
              onClick={() => setRace("other")}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                race === "other"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Other
            </button>
          </div>
        </div>
      </div>

      <Card
        className={`p-6 bg-gradient-to-br from-${stage.color}-50 to-${stage.color}-100 dark:from-${stage.color}-950 dark:to-${stage.color}-900 border-${stage.color}-200 dark:border-${stage.color}-800`}
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Activity className="w-4 h-4" />
          Estimated GFR
        </div>
        <div className="text-4xl font-bold text-foreground mb-2">{gfr.toFixed(1)} mL/min/1.73m²</div>
        <div className="text-sm font-medium">
          Stage {stage.stage}: {stage.description}
        </div>
      </Card>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">CKD Stages</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stage 1 (≥90):</span>
            <span className="font-medium text-foreground">Normal or high</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stage 2 (60-89):</span>
            <span className="font-medium text-foreground">Mildly decreased</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stage 3a (45-59):</span>
            <span className="font-medium text-foreground">Mild to moderate decrease</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stage 3b (30-44):</span>
            <span className="font-medium text-foreground">Moderate to severe decrease</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stage 4 (15-29):</span>
            <span className="font-medium text-foreground">Severely decreased</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Stage 5 (&lt;15):</span>
            <span className="font-medium text-foreground">Kidney failure</span>
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          <p>This calculator uses the CKD-EPI equation. Results should be confirmed by a healthcare professional.</p>
        </div>
      </div>
    </div>
  )
}
