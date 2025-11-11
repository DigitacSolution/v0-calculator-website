"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function TriangleCalculator() {
  const [sideA, setSideA] = useState("")
  const [sideB, setSideB] = useState("")
  const [sideC, setSideC] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const a = Number.parseFloat(sideA) || 0
    const b = Number.parseFloat(sideB) || 0
    const c = Number.parseFloat(sideC) || 0

    if (a <= 0 || b <= 0 || c <= 0) return

    const s = (a + b + c) / 2
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    const perimeter = a + b + c

    setResult({ area: area.toFixed(2), perimeter: perimeter.toFixed(2), semiPerimeter: s.toFixed(2) })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Side A</label>
        <Input
          type="number"
          value={sideA}
          onChange={(e) => setSideA(e.target.value)}
          placeholder="Enter length"
          onInput={calculate}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Side B</label>
        <Input
          type="number"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
          placeholder="Enter length"
          onInput={calculate}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Side C</label>
        <Input
          type="number"
          value={sideC}
          onChange={(e) => setSideC(e.target.value)}
          placeholder="Enter length"
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
            <p className="text-xs text-muted-foreground">Perimeter</p>
            <p className="text-2xl font-bold text-foreground">{result.perimeter}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Semi-Perimeter</p>
            <p className="text-2xl font-bold text-foreground">{result.semiPerimeter}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
