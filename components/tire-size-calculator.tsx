"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function TireSizeCalculator() {
  const [width, setWidth] = useState(225)
  const [aspectRatio, setAspectRatio] = useState(60)
  const [rimDiameter, setRimDiameter] = useState(16)

  const sidewallHeight = (width * aspectRatio) / 100
  const overallDiameter = (sidewallHeight * 2 + rimDiameter * 25.4) / 25.4
  const circumference = overallDiameter * Math.PI

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Tire Width (mm)</label>
        <Input type="number" value={width} onChange={(e) => setWidth(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Aspect Ratio (%)</label>
        <Input
          type="number"
          value={aspectRatio}
          onChange={(e) => setAspectRatio(Number.parseFloat(e.target.value) || 0)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Rim Diameter (inches)</label>
        <Input
          type="number"
          value={rimDiameter}
          onChange={(e) => setRimDiameter(Number.parseFloat(e.target.value) || 0)}
        />
      </div>

      <Card className="p-4 bg-gray-50 border-gray-200 space-y-2">
        <div className="flex justify-between">
          <span>Overall Diameter:</span>
          <span className="font-bold">{overallDiameter.toFixed(2)}"</span>
        </div>
        <div className="flex justify-between">
          <span>Circumference:</span>
          <span className="font-bold text-gray-700">{circumference.toFixed(2)}"</span>
        </div>
      </Card>
    </div>
  )
}
