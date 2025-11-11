"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function DewPointCalculator() {
  const [temp, setTemp] = useState(70)
  const [humidity, setHumidity] = useState(60)

  const a = 17.27
  const b = 237.7

  const alpha = (a * temp) / (b + temp) + Math.log(humidity / 100)
  const dewPoint = (b * alpha) / (a - alpha)

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Temperature (°C)</label>
        <Input type="number" value={temp} onChange={(e) => setTemp(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Humidity (%)</label>
        <Input
          type="number"
          value={humidity}
          onChange={(e) => setHumidity(Number.parseFloat(e.target.value) || 0)}
          min="0"
          max="100"
        />
      </div>

      <Card className="p-4 bg-cyan-50 border-cyan-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Dew Point</div>
          <div className="text-4xl font-bold text-cyan-600">{dewPoint.toFixed(1)}°C</div>
        </div>
      </Card>
    </div>
  )
}
