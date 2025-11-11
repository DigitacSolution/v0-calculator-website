"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function HeatIndexCalculator() {
  const [temp, setTemp] = useState(90)
  const [humidity, setHumidity] = useState(60)

  const c1 = -42.379
  const c2 = 2.04901523
  const c3 = 10.14333127
  const c4 = -0.22475541
  const c5 = -0.00683783
  const c6 = -0.05481717
  const c7 = 0.00122874
  const c8 = 0.00085282
  const c9 = -0.00000199

  const T = temp
  const RH = humidity

  const HI =
    c1 +
    c2 * T +
    c3 * RH +
    c4 * T * RH +
    c5 * T * T +
    c6 * RH * RH +
    c7 * T * T * RH +
    c8 * T * RH * RH +
    c9 * T * T * RH * RH

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Temperature (°F)</label>
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

      <Card className="p-4 bg-red-50 border-red-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Heat Index</div>
          <div className="text-4xl font-bold text-red-600">{HI.toFixed(1)}°F</div>
        </div>
      </Card>
    </div>
  )
}
