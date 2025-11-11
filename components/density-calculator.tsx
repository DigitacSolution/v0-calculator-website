"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function DensityCalculator() {
  const [mass, setMass] = useState(100)
  const [volume, setVolume] = useState(50)
  const [unit, setUnit] = useState("g/cm3")

  let density = mass / volume
  if (unit === "kg/m3") density *= 1000

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Mass (grams)</label>
        <Input type="number" value={mass} onChange={(e) => setMass(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Volume (cubic cm)</label>
        <Input type="number" value={volume} onChange={(e) => setVolume(Number.parseFloat(e.target.value) || 1)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Unit</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value)} className="w-full px-3 py-2 border rounded">
          <option value="g/cm3">g/cm³</option>
          <option value="kg/m3">kg/m³</option>
        </select>
      </div>

      <Card className="p-4 bg-purple-50 border-purple-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Density</div>
          <div className="text-3xl font-bold text-purple-600">
            {density.toFixed(4)} {unit}
          </div>
        </div>
      </Card>
    </div>
  )
}
