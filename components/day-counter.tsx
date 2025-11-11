"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function DayCounter() {
  const [date1, setDate1] = useState("")
  const [date2, setDate2] = useState("")
  const [dayCount, setDayCount] = useState<number | null>(null)

  const calculate = () => {
    if (!date1 || !date2) return
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const diff = Math.abs(d2.getTime() - d1.getTime())
    setDayCount(Math.ceil(diff / (1000 * 60 * 60 * 24)))
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Date 1</label>
          <Input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Date 2</label>
          <Input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} />
        </div>
      </div>

      <button onClick={calculate} className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Calculate Days
      </button>

      {dayCount !== null && (
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Days Between</div>
            <div className="text-4xl font-bold text-blue-600">{dayCount}</div>
          </div>
        </Card>
      )}
    </div>
  )
}
