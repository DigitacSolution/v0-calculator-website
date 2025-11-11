"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function DistanceCalculator() {
  const [x1, setX1] = useState("")
  const [y1, setY1] = useState("")
  const [x2, setX2] = useState("")
  const [y2, setY2] = useState("")
  const [result, setResult] = useState(null)

  const calculate = () => {
    const px1 = Number.parseFloat(x1) || 0
    const py1 = Number.parseFloat(y1) || 0
    const px2 = Number.parseFloat(x2) || 0
    const py2 = Number.parseFloat(y2) || 0

    const distance = Math.sqrt(Math.pow(px2 - px1, 2) + Math.pow(py2 - py1, 2))
    const midX = (px1 + px2) / 2
    const midY = (py1 + py2) / 2
    const slope = (py2 - py1) / (px2 - px1)

    setResult({
      distance: distance.toFixed(4),
      midX: midX.toFixed(4),
      midY: midY.toFixed(4),
      slope: slope.toFixed(4),
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-4">Point 1</label>
        <div className="grid grid-cols-2 gap-3">
          <Input
            type="number"
            value={x1}
            onChange={(e) => setX1(e.target.value)}
            placeholder="X1"
            onInput={calculate}
          />
          <Input
            type="number"
            value={y1}
            onChange={(e) => setY1(e.target.value)}
            placeholder="Y1"
            onInput={calculate}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-4">Point 2</label>
        <div className="grid grid-cols-2 gap-3">
          <Input
            type="number"
            value={x2}
            onChange={(e) => setX2(e.target.value)}
            placeholder="X2"
            onInput={calculate}
          />
          <Input
            type="number"
            value={y2}
            onChange={(e) => setY2(e.target.value)}
            placeholder="Y2"
            onInput={calculate}
          />
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-xs text-muted-foreground">Distance</p>
            <p className="text-xl font-bold text-foreground">{result.distance}</p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Midpoint</p>
            <p className="text-xl font-bold text-foreground">
              ({result.midX}, {result.midY})
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-xs text-muted-foreground">Slope</p>
            <p className="text-xl font-bold text-foreground">{result.slope}</p>
          </Card>
        </div>
      )}
    </div>
  )
}
