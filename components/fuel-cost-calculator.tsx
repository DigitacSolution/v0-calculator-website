"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function FuelCostCalculator() {
  const [distance, setDistance] = useState(100)
  const [fuelPrice, setFuelPrice] = useState(3.5)
  const [mpg, setMpg] = useState(25)

  const gallonsNeeded = distance / mpg
  const totalCost = gallonsNeeded * fuelPrice

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Distance (miles)</label>
        <Input type="number" value={distance} onChange={(e) => setDistance(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Fuel Price (per gallon)</label>
        <Input
          type="number"
          value={fuelPrice}
          onChange={(e) => setFuelPrice(Number.parseFloat(e.target.value) || 0)}
          step="0.01"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Fuel Efficiency (MPG)</label>
        <Input type="number" value={mpg} onChange={(e) => setMpg(Number.parseFloat(e.target.value) || 1)} />
      </div>

      <Card className="p-4 bg-orange-50 border-orange-200 space-y-2">
        <div className="flex justify-between">
          <span>Gallons Needed:</span>
          <span className="font-bold">{gallonsNeeded.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t border-orange-200 pt-2">
          <span>Total Cost:</span>
          <span className="font-bold text-lg text-orange-600">${totalCost.toFixed(2)}</span>
        </div>
      </Card>
    </div>
  )
}
