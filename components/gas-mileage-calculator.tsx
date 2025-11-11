"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function GasMileageCalculator() {
  const [miles, setMiles] = useState(300)
  const [gallons, setGallons] = useState(12)

  const mpg = miles / gallons

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Miles Driven</label>
        <Input type="number" value={miles} onChange={(e) => setMiles(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Gallons Used</label>
        <Input type="number" value={gallons} onChange={(e) => setGallons(Number.parseFloat(e.target.value) || 1)} />
      </div>

      <Card className="p-4 bg-green-50 border-green-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Miles Per Gallon</div>
          <div className="text-4xl font-bold text-green-600">{mpg.toFixed(2)} MPG</div>
        </div>
      </Card>
    </div>
  )
}
