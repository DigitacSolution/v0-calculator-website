"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function HeightCalculator() {
  const [feet, setFeet] = useState(5)
  const [inches, setInches] = useState(10)

  const totalInches = feet * 12 + inches
  const cm = totalInches * 2.54
  const meters = feet * 0.3048 + inches * 0.0254

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Feet</label>
          <Input type="number" value={feet} onChange={(e) => setFeet(Number.parseInt(e.target.value) || 0)} min="0" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Inches</label>
          <Input
            type="number"
            value={inches}
            onChange={(e) => setInches(Number.parseInt(e.target.value) || 0)}
            min="0"
            max="11"
          />
        </div>
      </div>

      <Card className="p-4 bg-blue-50 border-blue-200 space-y-2">
        <div className="flex justify-between">
          <span>Centimeters:</span>
          <span className="font-bold">{cm.toFixed(1)} cm</span>
        </div>
        <div className="flex justify-between">
          <span>Meters:</span>
          <span className="font-bold text-blue-600">{meters.toFixed(2)} m</span>
        </div>
      </Card>
    </div>
  )
}
