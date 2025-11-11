"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { BarChart, Percent, Users } from "lucide-react"

export default function SampleSizeCalculator() {
  const [populationSize, setPopulationSize] = useState(10000)
  const [confidenceLevel, setConfidenceLevel] = useState(95)
  const [marginOfError, setMarginOfError] = useState(5)
  const [proportion, setProportion] = useState(50)

  // Z-scores for confidence levels
  const zScores: { [key: number]: number } = {
    90: 1.645,
    95: 1.96,
    99: 2.576,
  }

  const zScore = zScores[confidenceLevel]
  const p = proportion / 100
  const e = marginOfError / 100

  // Sample size calculation
  const numerator = (zScore * zScore * p * (1 - p)) / (e * e)
  const sampleSizeInfinite = Math.ceil(numerator)

  // Adjusted for finite population
  const sampleSize = Math.ceil(numerator / (1 + (numerator - 1) / populationSize))
  const responseRate = 100
  const recommendedSample = Math.ceil(sampleSize * (100 / responseRate))

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Users className="w-4 h-4" />
            Population Size: {populationSize.toLocaleString()}
          </label>
          <Slider
            value={[populationSize]}
            onValueChange={(value) => setPopulationSize(value[0])}
            min={100}
            max={100000}
            step={100}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <BarChart className="w-4 h-4" />
            Confidence Level: {confidenceLevel}%
          </label>
          <Slider
            value={[confidenceLevel]}
            onValueChange={(value) => {
              const validLevels = [90, 95, 99]
              const closest = validLevels.reduce((prev, curr) =>
                Math.abs(curr - value[0]) < Math.abs(prev - value[0]) ? curr : prev,
              )
              setConfidenceLevel(closest)
            }}
            min={90}
            max={99}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Percent className="w-4 h-4" />
            Margin of Error: {marginOfError}%
          </label>
          <Slider
            value={[marginOfError]}
            onValueChange={(value) => setMarginOfError(value[0])}
            min={1}
            max={10}
            step={0.5}
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
            <Percent className="w-4 h-4" />
            Expected Proportion: {proportion}%
          </label>
          <Slider
            value={[proportion]}
            onValueChange={(value) => setProportion(value[0])}
            min={10}
            max={90}
            step={5}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <div className="text-sm text-muted-foreground mb-1">Required Sample Size</div>
          <div className="text-3xl font-bold text-foreground">{sampleSize.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground mt-1">Adjusted for population</div>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <div className="text-sm text-muted-foreground mb-1">Sampling Percentage</div>
          <div className="text-3xl font-bold text-foreground">{((sampleSize / populationSize) * 100).toFixed(2)}%</div>
        </Card>
      </div>

      <div className="bg-secondary/50 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">Sample Size Calculation</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Population Size:</span>
            <span className="font-medium text-foreground">{populationSize.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Confidence Level:</span>
            <span className="font-medium text-foreground">{confidenceLevel}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Margin of Error:</span>
            <span className="font-medium text-foreground">±{marginOfError}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Z-Score:</span>
            <span className="font-medium text-foreground">{zScore}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-border">
            <span className="text-muted-foreground">Required Sample:</span>
            <span className="font-bold text-foreground">{sampleSize.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
