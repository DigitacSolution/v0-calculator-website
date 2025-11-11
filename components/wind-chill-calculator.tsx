"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function WindChillCalculator() {
  const [temp, setTemp] = useState(32)
  const [windSpeed, setWindSpeed] = useState(10)

  const windChill =
    35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Temperature (°F)</label>
        <Input type="number" value={temp} onChange={(e) => setTemp(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Wind Speed (mph)</label>
        <Input type="number" value={windSpeed} onChange={(e) => setWindSpeed(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <Card className="p-4 bg-blue-50 border-blue-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Wind Chill</div>
          <div className="text-4xl font-bold text-blue-600">{windChill.toFixed(1)}°F</div>
        </div>
      </Card>
    </div>
  )
}
