"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export default function PValueCalculator() {
  const [zScore, setZScore] = useState(1.96)

  // Approximation of cumulative distribution function for standard normal distribution
  const normCDF = (z: number): number => {
    const t = 1 / (1 + 0.2316419 * Math.abs(z))
    const d = 0.3989423 * Math.exp((-z * z) / 2)
    const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))))
    return z > 0 ? 1 - prob : prob
  }

  const oneTailedP = 1 - normCDF(Math.abs(zScore))
  const twoTailedP = 2 * oneTailedP

  const getSignificance = (p: number) => {
    if (p < 0.001) return { level: "Extremely Significant", color: "text-green-600" }
    if (p < 0.01) return { level: "Very Significant", color: "text-green-500" }
    if (p < 0.05) return { level: "Significant", color: "text-blue-600" }
    if (p < 0.1) return { level: "Marginally Significant", color: "text-yellow-600" }
    return { level: "Not Significant", color: "text-red-600" }
  }

  const oneTailedSig = getSignificance(oneTailedP)
  const twoTailedSig = getSignificance(twoTailedP)

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label>Z-Score (Test Statistic)</Label>
            <Input
              type="number"
              value={zScore}
              onChange={(e) => setZScore(Number(e.target.value))}
              className="w-24 text-right"
              step="0.01"
            />
          </div>
          <Slider value={[zScore]} onValueChange={(v) => setZScore(v[0])} min={-5} max={5} step={0.01} />
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Z-Score</p>
            <p className="text-4xl font-bold text-primary">{zScore.toFixed(4)}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t">
            <div>
              <p className="text-sm text-muted-foreground mb-2">One-Tailed P-Value</p>
              <p className="text-2xl font-bold">{oneTailedP.toFixed(6)}</p>
              <p className={`text-sm font-semibold mt-2 ${oneTailedSig.color}`}>{oneTailedSig.level}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Two-Tailed P-Value</p>
              <p className="text-2xl font-bold">{twoTailedP.toFixed(6)}</p>
              <p className={`text-sm font-semibold mt-2 ${twoTailedSig.color}`}>{twoTailedSig.level}</p>
            </div>
          </div>

          <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
            <p>• p &lt; 0.001: Extremely significant</p>
            <p>• p &lt; 0.01: Very significant</p>
            <p>• p &lt; 0.05: Significant (commonly used threshold)</p>
            <p>• p &lt; 0.1: Marginally significant</p>
            <p>• p ≥ 0.1: Not significant</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
