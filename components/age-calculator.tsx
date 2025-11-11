"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("")
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null)

  const calculateAge = () => {
    if (!birthDate) return

    const birth = new Date(birthDate)
    const today = new Date()

    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()

    if (days < 0) {
      months--
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    setAge({ years, months, days })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Date of Birth</label>
        <Input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} onBlur={calculateAge} />
      </div>

      {age && (
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{age.years}</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{age.months}</div>
              <div className="text-sm text-gray-600">Months</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{age.days}</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
