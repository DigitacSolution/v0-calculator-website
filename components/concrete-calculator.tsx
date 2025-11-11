"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ConcreteCalculator() {
  const [length, setLength] = useState(10)
  const [width, setWidth] = useState(10)
  const [depth, setDepth] = useState(0.33)

  const cubicYards = (length * width * depth) / 27

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
        <label className="block text-sm font-medium mb-2">Depth (ft)</label>
        <Input
          type="number"
          value={depth}
          onChange={(e) => setDepth(Number.parseFloat(e.target.value) || 0)}
          step="0.1"
        />
      </div>

      <Card className="p-4 bg-gray-50 border-gray-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Cubic Yards Needed</div>
          <div className="text-4xl font-bold text-gray-700">{cubicYards.toFixed(2)} yd³</div>
        </div>
      </Card>
    </div>
  )
}
