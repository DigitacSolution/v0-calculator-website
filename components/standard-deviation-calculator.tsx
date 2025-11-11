"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function StandardDeviationCalculator() {
  const [numbers, setNumbers] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const nums = numbers
      .split(",")
      .map((n) => Number.parseFloat(n.trim()))
      .filter((n) => !isNaN(n))

    if (nums.length === 0) return

    const mean = nums.reduce((a, b) => a + b, 0) / nums.length
    const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / nums.length
    const sampleVariance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (nums.length - 1)
    const stdDev = Math.sqrt(variance)
    const sampleStdDev = Math.sqrt(sampleVariance)

    setResult({
      mean: mean.toFixed(4),
      variance: variance.toFixed(4),
      sampleVariance: sampleVariance.toFixed(4),
      stdDev: stdDev.toFixed(4),
      sampleStdDev: sampleStdDev.toFixed(4),
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Enter numbers (comma-separated)</label>
        <Input value={numbers} onChange={(e) => setNumbers(e.target.value)} placeholder="e.g., 10, 20, 30, 40, 50" />
      </div>

      <Button onClick={calculate} className="w-full">
        Calculate
      </Button>

      {result && (
        <div className="space-y-3">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-xs text-muted-foreground">Mean</p>
            <p className="text-xl font-bold text-foreground">{result.mean}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Population Std Dev</p>
            <p className="text-xl font-bold text-foreground">{result.stdDev}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Sample Std Dev</p>
            <p className="text-xl font-bold text-foreground">{result.sampleStdDev}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Variance</p>
            <p className="text-xl font-bold text-foreground">{result.variance}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
