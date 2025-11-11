"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Grade {
  id: string
  course: string
  credit: number
  grade: string
}

const gradePoints: { [key: string]: number } = {
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  D: 1.0,
  F: 0.0,
}

export default function GPACalculator() {
  const [grades, setGrades] = useState<Grade[]>([{ id: "1", course: "", credit: 3, grade: "A" }])

  const addGrade = () => {
    setGrades([
      ...grades,
      {
        id: Math.random().toString(),
        course: "",
        credit: 3,
        grade: "A",
      },
    ])
  }

  const removeGrade = (id: string) => {
    if (grades.length > 1) {
      setGrades(grades.filter((g) => g.id !== id))
    }
  }

  const updateGrade = (id: string, field: string, value: any) => {
    setGrades(grades.map((g) => (g.id === id ? { ...g, [field]: value } : g)))
  }

  const calculateGPA = () => {
    if (grades.length === 0) return 0
    let totalPoints = 0
    let totalCredits = 0

    grades.forEach((g) => {
      const points = gradePoints[g.grade] || 0
      totalPoints += points * g.credit
      totalCredits += g.credit
    })

    return totalCredits > 0 ? totalPoints / totalCredits : 0
  }

  const gpa = calculateGPA()

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {grades.map((grade) => (
          <div key={grade.id} className="flex gap-3 items-end">
            <div className="flex-1">
              <label className="text-xs text-gray-600">Course Name</label>
              <Input
                value={grade.course}
                onChange={(e) => updateGrade(grade.id, "course", e.target.value)}
                placeholder="Course name"
              />
            </div>
            <div className="w-20">
              <label className="text-xs text-gray-600">Credits</label>
              <Input
                type="number"
                value={grade.credit}
                onChange={(e) => updateGrade(grade.id, "credit", Number.parseInt(e.target.value) || 0)}
                min="1"
              />
            </div>
            <div className="w-24">
              <label className="text-xs text-gray-600">Grade</label>
              <select
                value={grade.grade}
                onChange={(e) => updateGrade(grade.id, "grade", e.target.value)}
                className="w-full px-2 py-2 border rounded"
              >
                {Object.keys(gradePoints).map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
            {grades.length > 1 && (
              <Button onClick={() => removeGrade(grade.id)} variant="destructive" size="sm">
                Remove
              </Button>
            )}
          </div>
        ))}
      </div>

      <Button onClick={addGrade} className="w-full">
        Add Course
      </Button>

      <Card className="p-4 bg-purple-50 border-purple-200">
        <div className="text-center">
          <div className="text-sm text-gray-600">GPA</div>
          <div className="text-4xl font-bold text-purple-600">{gpa.toFixed(2)}</div>
        </div>
      </Card>
    </div>
  )
}
