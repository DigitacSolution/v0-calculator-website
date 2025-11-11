"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function DateCalculator() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [result, setResult] = useState<{ days: number; weeks: number; months: number } | null>(null)

  const calculate = () => {
    if (!startDate || !endDate) return

    const start = new Date(startDate)
    const end = new Date(endDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30)

    setResult({ days, weeks, months })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Start Date</label>
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">End Date</label>
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
      </div>

      <button onClick={calculate} className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Calculate
      </button>

      {result && (
        <Card className="p-4 bg-blue-50 border-blue-200 space-y-2">
          <div className="flex justify-between">
            <span>Days:</span>
            <span className="font-bold">{result.days}</span>
          </div>
          <div className="flex justify-between">
            <span>Weeks:</span>
            <span className="font-bold">{result.weeks}</span>
          </div>
          <div className="flex justify-between">
            <span>Months (approx):</span>
            <span className="font-bold">{result.months}</span>
          </div>
        </Card>
      )}
    </div>
  )
}
