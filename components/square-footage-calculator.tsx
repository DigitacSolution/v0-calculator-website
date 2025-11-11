"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function SquareFootageCalculator() {
  const [length, setLength] = useState(10)
  const [width, setWidth] = useState(10)

  const sqft = length * width

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Length (ft): {length}</label>
        <Input type="number" value={length} onChange={(e) => setLength(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Width (ft): {width}</label>
        <Input type="number" value={width} onChange={(e) => setWidth(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <Card className="p-4 bg-amber-50 border-amber-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Square Footage</div>
          <div className="text-4xl font-bold text-amber-600">{sqft.toFixed(2)} ft²</div>
        </div>
      </Card>
    </div>
  )
}
