"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function HoursCalculator() {
  const [startTime, setStartTime] = useState("09:00")
  const [endTime, setEndTime] = useState("17:00")
  const [breakMinutes, setBreakMinutes] = useState(60)

  const parseTime = (time: string) => {
    const [h, m] = time.split(":").map(Number)
    return h * 60 + m
  }

  const startMin = parseTime(startTime)
  const endMin = parseTime(endTime)
  const totalMin = endMin - startMin
  const workMin = totalMin - breakMinutes
  const hours = Math.floor(workMin / 60)
  const minutes = workMin % 60

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Start Time</label>
          <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">End Time</label>
          <Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Break Time (minutes)</label>
        <Input
          type="number"
          value={breakMinutes}
          onChange={(e) => setBreakMinutes(Number.parseInt(e.target.value) || 0)}
          min="0"
        />
      </div>

      <Card className="p-4 bg-purple-50 border-purple-200 space-y-2">
        <div className="flex justify-between">
          <span>Total Time:</span>
          <span className="font-bold">
            {Math.floor(totalMin / 60)}h {totalMin % 60}m
          </span>
        </div>
        <div className="flex justify-between">
          <span>Work Time:</span>
          <span className="font-bold text-lg text-purple-600">
            {hours}h {minutes}m
          </span>
        </div>
      </Card>
    </div>
  )
}
