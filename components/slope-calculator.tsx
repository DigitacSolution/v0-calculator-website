"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function SlopeCalculator() {
  const [x1, setX1] = useState(2)
  const [y1, setY1] = useState(3)
  const [x2, setX2] = useState(5)
  const [y2, setY2] = useState(9)

  const slope = (y2 - y1) / (x2 - x1)
  const yIntercept = y1 - slope * x1
  const angle = Math.atan(slope) * (180 / Math.PI)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-semibold">Point 1</h3>
          <div className="space-y-2">
            <Label>x₁:</Label>
            <Input type="number" value={x1} onChange={(e) => setX1(Number(e.target.value))} step={0.1} />
          </div>
          <div className="space-y-2">
            <Label>y₁:</Label>
            <Input type="number" value={y1} onChange={(e) => setY1(Number(e.target.value))} step={0.1} />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Point 2</h3>
          <div className="space-y-2">
            <Label>x₂:</Label>
            <Input type="number" value={x2} onChange={(e) => setX2(Number(e.target.value))} step={0.1} />
          </div>
          <div className="space-y-2">
            <Label>y₂:</Label>
            <Input type="number" value={y2} onChange={(e) => setY2(Number(e.target.value))} step={0.1} />
          </div>
        </div>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="text-lg font-semibold mb-4">Results</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Slope (m):</span>
            <span className="text-2xl font-bold text-primary">{isFinite(slope) ? slope.toFixed(4) : "Undefined"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Y-intercept (b):</span>
            <span className="text-xl font-bold">{isFinite(yIntercept) ? yIntercept.toFixed(4) : "N/A"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Angle:</span>
            <span className="text-xl font-bold text-accent">{isFinite(angle) ? angle.toFixed(2) : "90"}°</span>
          </div>
          {isFinite(slope) && (
            <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
              <p className="text-sm font-mono">
                y = {slope.toFixed(2)}x + {yIntercept.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
