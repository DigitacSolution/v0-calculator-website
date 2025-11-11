"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function GravelCalculator() {
  const [length, setLength] = useState(20)
  const [width, setWidth] = useState(20)
  const [depth, setDepth] = useState(2)

  const cubicFeet = (length * width * depth) / 12
  const cubicYards = cubicFeet / 27
  const tons = cubicYards * 1.35

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
        <label className="block text-sm font-medium mb-2">Depth (inches)</label>
        <Input type="number" value={depth} onChange={(e) => setDepth(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <Card className="p-4 bg-orange-50 border-orange-200 space-y-2">
        <div className="flex justify-between">
          <span>Cubic Yards:</span>
          <span className="font-bold">{cubicYards.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tons:</span>
          <span className="font-bold text-lg text-orange-600">{tons.toFixed(2)}</span>
        </div>
      </Card>
    </div>
  )
}
