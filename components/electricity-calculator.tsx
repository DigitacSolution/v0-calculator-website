"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ElectricityCalculator() {
  const [power, setPower] = useState(1000)
  const [hours, setHours] = useState(24)
  const [rate, setRate] = useState(0.12)

  const kwh = (power / 1000) * hours
  const cost = kwh * rate

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Power (Watts)</label>
        <Input type="number" value={power} onChange={(e) => setPower(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Hours Used</label>
        <Input type="number" value={hours} onChange={(e) => setHours(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Rate ($/kWh)</label>
        <Input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number.parseFloat(e.target.value) || 0)}
          step="0.01"
        />
      </div>

      <Card className="p-4 bg-yellow-50 border-yellow-200 space-y-2">
        <div className="flex justify-between">
          <span>Energy Used:</span>
          <span className="font-bold">{kwh.toFixed(2)} kWh</span>
        </div>
        <div className="flex justify-between">
          <span>Cost:</span>
          <span className="font-bold text-lg text-yellow-600">${cost.toFixed(2)}</span>
        </div>
      </Card>
    </div>
  )
}
