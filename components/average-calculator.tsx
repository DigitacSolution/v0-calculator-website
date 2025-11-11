"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AverageCalculator() {
  const [numbers, setNumbers] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const nums = numbers
      .split(",")
      .map((n) => Number.parseFloat(n.trim()))
      .filter((n) => !isNaN(n))

    if (nums.length === 0) return

    const sum = nums.reduce((a, b) => a + b, 0)
    const average = sum / nums.length
    const sorted = [...nums].sort((a, b) => a - b)
    const median =
      sorted.length % 2 === 0
        ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
        : sorted[Math.floor(sorted.length / 2)]

    const frequency = {}
    nums.forEach((n) => {
      frequency[n] = (frequency[n] || 0) + 1
    })
    const mode = Object.keys(frequency).reduce((a, b) => (frequency[a] > frequency[b] ? a : b))

    setResult({
      average,
      sum,
      count: nums.length,
      median,
      mode: Number.parseFloat(mode),
      min: Math.min(...nums),
      max: Math.max(...nums),
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Enter numbers (comma-separated)</label>
        <Input
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          placeholder="e.g., 10, 20, 30, 40, 50"
          className="text-sm"
        />
      </div>

      <Button onClick={calculate} className="w-full">
        Calculate
      </Button>

      {result && (
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Average (Mean)</p>
            <p className="text-2xl font-bold text-foreground">{result.average.toFixed(2)}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Median</p>
            <p className="text-2xl font-bold text-foreground">{result.median.toFixed(2)}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Mode</p>
            <p className="text-2xl font-bold text-foreground">{result.mode}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Sum</p>
            <p className="text-2xl font-bold text-foreground">{result.sum.toFixed(2)}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Count</p>
            <p className="text-2xl font-bold text-foreground">{result.count}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Range</p>
            <p className="text-2xl font-bold text-foreground">{(result.max - result.min).toFixed(2)}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
