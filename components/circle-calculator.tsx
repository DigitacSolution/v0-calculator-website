"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function CircleCalculator() {
  const [radius, setRadius] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const r = Number.parseFloat(radius) || 0
    if (r <= 0) return

    const area = Math.PI * r * r
    const circumference = 2 * Math.PI * r
    const diameter = 2 * r

    setResult({
      area: area.toFixed(2),
      circumference: circumference.toFixed(2),
      diameter: diameter.toFixed(2),
      radius: r.toFixed(2),
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Radius</label>
        <Input
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          placeholder="Enter radius"
          onInput={calculate}
        />
      </div>

      {result && (
        <div className="space-y-4">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-xs text-muted-foreground">Area</p>
            <p className="text-2xl font-bold text-foreground">{result.area}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Circumference</p>
            <p className="text-2xl font-bold text-foreground">{result.circumference}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Diameter</p>
            <p className="text-2xl font-bold text-foreground">{result.diameter}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
