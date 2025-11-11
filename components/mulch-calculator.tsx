"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function MulchCalculator() {
  const [length, setLength] = useState(20)
  const [width, setWidth] = useState(20)
  const [depth, setDepth] = useState(3)

  const cubicFeet = (length * width * depth) / 12
  const cubicYards = cubicFeet / 27
  const bags = Math.ceil(cubicYards * 13.5)

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

      <Card className="p-4 bg-green-50 border-green-200 space-y-2">
        <div className="flex justify-between">
          <span>Cubic Yards:</span>
          <span className="font-bold">{cubicYards.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Bags (2 cu ft):</span>
          <span className="font-bold text-lg text-green-600">{bags}</span>
        </div>
      </Card>
    </div>
  )
}
