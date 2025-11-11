"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function GolfHandicapCalculator() {
  const [score, setScore] = useState(90)
  const [courseRating, setCourseRating] = useState(72.0)
  const [slope, setSlope] = useState(113)

  const handicap = ((score - courseRating) * 113) / slope

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Golf Score</label>
        <Input type="number" value={score} onChange={(e) => setScore(Number.parseInt(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Course Rating</label>
        <Input
          type="number"
          value={courseRating}
          onChange={(e) => setCourseRating(Number.parseFloat(e.target.value) || 72)}
          step="0.1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Slope Rating</label>
        <Input type="number" value={slope} onChange={(e) => setSlope(Number.parseInt(e.target.value) || 113)} />
      </div>

      <Card className="p-4 bg-green-50 border-green-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Handicap Index</div>
          <div className="text-4xl font-bold text-green-600">{handicap.toFixed(1)}</div>
        </div>
      </Card>
    </div>
  )
}
