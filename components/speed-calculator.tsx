"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function SpeedCalculator() {
  const [distance, setDistance] = useState(100)
  const [time, setTime] = useState(2)
  const [unit, setUnit] = useState("mph")

  const speed = distance / time
  const kmh = unit === "mph" ? speed * 1.60934 : speed / 1.60934

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Distance (miles)</label>
        <Input type="number" value={distance} onChange={(e) => setDistance(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Time (hours)</label>
        <Input
          type="number"
          value={time}
          onChange={(e) => setTime(Number.parseFloat(e.target.value) || 1)}
          min="0.1"
          step="0.1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Unit</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value)} className="w-full px-3 py-2 border rounded">
          <option value="mph">MPH</option>
          <option value="kmh">KM/H</option>
        </select>
      </div>

      <Card className="p-4 bg-red-50 border-red-200 space-y-2">
        <div className="flex justify-between">
          <span>Speed:</span>
          <span className="font-bold text-lg">
            {speed.toFixed(2)} {unit}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Equivalent:</span>
          <span className="font-bold">
            {unit === "mph" ? kmh.toFixed(2) + " KM/H" : (speed / 1.60934).toFixed(2) + " MPH"}
          </span>
        </div>
      </Card>
    </div>
  )
}
