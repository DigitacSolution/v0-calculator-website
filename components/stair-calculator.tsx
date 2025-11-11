"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function StairCalculator() {
  const [totalRise, setTotalRise] = useState(108)
  const [preferredRise, setPreferredRise] = useState(7)

  const numSteps = Math.round(totalRise / preferredRise)
  const actualRise = totalRise / numSteps
  const run = 10

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Total Rise (inches)</label>
        <Input type="number" value={totalRise} onChange={(e) => setTotalRise(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Preferred Rise per Step (inches)</label>
        <Input
          type="number"
          value={preferredRise}
          onChange={(e) => setPreferredRise(Number.parseFloat(e.target.value) || 1)}
        />
      </div>

      <Card className="p-4 bg-blue-50 border-blue-200 space-y-2">
        <div className="flex justify-between">
          <span>Number of Steps:</span>
          <span className="font-bold">{numSteps}</span>
        </div>
        <div className="flex justify-between">
          <span>Actual Rise/Step:</span>
          <span className="font-bold">{actualRise.toFixed(2)}"</span>
        </div>
        <div className="flex justify-between">
          <span>Run/Step:</span>
          <span className="font-bold text-blue-600">{run}"</span>
        </div>
      </Card>
    </div>
  )
}
