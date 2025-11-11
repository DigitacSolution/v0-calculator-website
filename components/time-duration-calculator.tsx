"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function TimeDurationCalculator() {
  const [seconds, setSeconds] = useState(3661)

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Total Seconds</label>
        <Input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number.parseInt(e.target.value) || 0)}
          min="0"
        />
      </div>

      <Card className="p-4 bg-indigo-50 border-indigo-200 space-y-2">
        <div className="flex justify-between">
          <span>Hours:</span>
          <span className="font-bold">{hours}</span>
        </div>
        <div className="flex justify-between">
          <span>Minutes:</span>
          <span className="font-bold">{minutes}</span>
        </div>
        <div className="flex justify-between">
          <span>Seconds:</span>
          <span className="font-bold">{secs}</span>
        </div>
        <div className="pt-2 border-t border-indigo-200 flex justify-between">
          <span>Total:</span>
          <span className="font-bold text-lg">
            {hours}h {minutes}m {secs}s
          </span>
        </div>
      </Card>
    </div>
  )
}
