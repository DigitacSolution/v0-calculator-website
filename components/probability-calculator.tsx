"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ProbabilityCalculator() {
  const [favorable, setFavorable] = useState("")
  const [possible, setPossible] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const f = Number.parseFloat(favorable) || 0
    const p = Number.parseFloat(possible) || 0

    if (f > 0 && p > 0 && f <= p) {
      const probability = f / p
      const percentage = (probability * 100).toFixed(2)
      const odds = (f / (p - f)).toFixed(4)

      setResult({
        probability: probability.toFixed(4),
        percentage,
        odds,
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Favorable Outcomes</label>
        <Input
          type="number"
          value={favorable}
          onChange={(e) => setFavorable(e.target.value)}
          placeholder="Number of favorable outcomes"
          onInput={calculate}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Total Possible Outcomes</label>
        <Input
          type="number"
          value={possible}
          onChange={(e) => setPossible(e.target.value)}
          placeholder="Total number of possible outcomes"
          onInput={calculate}
        />
      </div>

      {result && (
        <div className="space-y-3">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-xs text-muted-foreground">Probability</p>
            <p className="text-xl font-bold text-foreground">{result.probability}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Percentage</p>
            <p className="text-xl font-bold text-foreground">{result.percentage}%</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Odds</p>
            <p className="text-xl font-bold text-foreground">{result.odds}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
