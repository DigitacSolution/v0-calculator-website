"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function RightTriangleCalculator() {
  const [sideA, setSideA] = useState("")
  const [sideB, setSideB] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const a = Number.parseFloat(sideA) || 0
    const b = Number.parseFloat(sideB) || 0

    if (a > 0 && b > 0) {
      const c = Math.sqrt(a * a + b * b)
      const area = (a * b) / 2
      const perimeter = a + b + c
      const angleA = (Math.atan(a / b) * 180) / Math.PI
      const angleB = (Math.atan(b / a) * 180) / Math.PI

      setResult({
        hypotenuse: c.toFixed(2),
        area: area.toFixed(2),
        perimeter: perimeter.toFixed(2),
        angleA: angleA.toFixed(2),
        angleB: angleB.toFixed(2),
      })
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Side A</label>
        <Input
          type="number"
          value={sideA}
          onChange={(e) => setSideA(e.target.value)}
          placeholder="Enter side length"
          onInput={calculate}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Side B</label>
        <Input
          type="number"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
          placeholder="Enter side length"
          onInput={calculate}
        />
      </div>

      {result && (
        <div className="space-y-3">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-xs text-muted-foreground">Hypotenuse</p>
            <p className="text-xl font-bold text-foreground">{result.hypotenuse}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Area</p>
            <p className="text-xl font-bold text-foreground">{result.area}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Perimeter</p>
            <p className="text-xl font-bold text-foreground">{result.perimeter}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Angle A</p>
            <p className="text-xl font-bold text-foreground">{result.angleA}°</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Angle B</p>
            <p className="text-xl font-bold text-foreground">{result.angleB}°</p>
          </Card>
        </div>
      )}
    </div>
  )
}
