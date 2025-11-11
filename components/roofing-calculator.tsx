"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function RoofingCalculator() {
  const [length, setLength] = useState(30)
  const [width, setWidth] = useState(20)
  const [pitch, setPitch] = useState(6)

  const sqft = length * width
  const pitchMultiplier = 1 + (pitch / 12) ** 2
  const adjustedSqft = sqft * pitchMultiplier
  const squares = adjustedSqft / 100

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Length (ft)</label>
        <Input type="number" value={length} onChange={(e) => setLength(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Width (ft)</label>
        <Input type="number" value={width} onChange={(e) => setWidth(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Roof Pitch (rise/12)</label>
        <Input type="number" value={pitch} onChange={(e) => setPitch(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <Card className="p-4 bg-red-50 border-red-200 space-y-2">
        <div className="flex justify-between">
          <span>Roof Area (sq ft):</span>
          <span className="font-bold">{adjustedSqft.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Roofing Squares:</span>
          <span className="font-bold text-lg text-red-600">{squares.toFixed(2)}</span>
        </div>
      </Card>
    </div>
  )
}
