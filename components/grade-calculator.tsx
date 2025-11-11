"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function GradeCalculator() {
  const [score, setScore] = useState(85)

  const getGrade = (s: number) => {
    if (s >= 90) return "A"
    if (s >= 80) return "B"
    if (s >= 70) return "C"
    if (s >= 60) return "D"
    return "F"
  }

  const grade = getGrade(score)
  const percentage = score

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Test Score</label>
        <Input
          type="number"
          value={score}
          onChange={(e) => setScore(Number.parseInt(e.target.value) || 0)}
          min="0"
          max="100"
        />
      </div>

      <Card className="p-4 bg-blue-50 border-blue-200 space-y-3">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Letter Grade</div>
          <div className="text-5xl font-bold text-blue-600">{grade}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Score: {percentage}%</div>
        </div>
      </Card>
    </div>
  )
}
