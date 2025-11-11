"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ZScoreCalculator() {
  const [value, setValue] = useState("")
  const [mean, setMean] = useState("")
  const [stdDev, setStdDev] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const v = Number.parseFloat(value) || 0
    const m = Number.parseFloat(mean) || 0
    const s = Number.parseFloat(stdDev) || 0

    if (s > 0) {
      const zScore = (v - m) / s
      setResult(zScore.toFixed(4))
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Data Point Value</label>
        <Input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
          onInput={calculate}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Mean</label>
        <Input
          type="number"
          value={mean}
          onChange={(e) => setMean(e.target.value)}
          placeholder="Enter mean"
          onInput={calculate}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Standard Deviation</label>
        <Input
          type="number"
          value={stdDev}
          onChange={(e) => setStdDev(e.target.value)}
          placeholder="Enter standard deviation"
          onInput={calculate}
        />
      </div>

      {result && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-sm text-muted-foreground mb-2">Z-Score</p>
          <p className="text-3xl font-bold text-foreground">{result}</p>
        </Card>
      )}
    </div>
  )
}
