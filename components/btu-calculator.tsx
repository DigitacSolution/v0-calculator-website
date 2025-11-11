"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function BTUCalculator() {
  const [squareFeet, setSquareFeet] = useState(400)
  const [insulation, setInsulation] = useState("medium")

  const btuMap: { [key: string]: number } = {
    poor: 60,
    medium: 45,
    good: 35,
    excellent: 25,
  }

  const btuNeeded = squareFeet * btuMap[insulation]

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Square Feet</label>
        <Input
          type="number"
          value={squareFeet}
          onChange={(e) => setSquareFeet(Number.parseFloat(e.target.value) || 0)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Insulation Level</label>
        <select
          value={insulation}
          onChange={(e) => setInsulation(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="poor">Poor</option>
          <option value="medium">Medium</option>
          <option value="good">Good</option>
          <option value="excellent">Excellent</option>
        </select>
      </div>

      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">BTU Required</div>
          <div className="text-4xl font-bold text-yellow-600">{btuNeeded.toLocaleString()} BTU</div>
        </div>
      </Card>
    </div>
  )
}
