"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function SleepCalculator() {
  const [bedTime, setBedTime] = useState("22:00")
  const [cycles, setCycles] = useState(6)

  const [h, m] = bedTime.split(":").map(Number)
  const cycleMinutes = cycles * 90
  let wakeH = h
  let wakeM = m + cycleMinutes

  while (wakeM >= 60) {
    wakeH++
    wakeM -= 60
  }

  if (wakeH >= 24) wakeH -= 24

  const wakeTime = `${String(wakeH).padStart(2, "0")}:${String(wakeM).padStart(2, "0")}`
  const sleepHours = Math.floor(cycleMinutes / 60)
  const sleepMins = cycleMinutes % 60

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Bed Time</label>
        <input
          type="time"
          value={bedTime}
          onChange={(e) => setBedTime(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Sleep Cycles (90 min each)</label>
        <Input
          type="number"
          value={cycles}
          onChange={(e) => setCycles(Math.max(1, Number.parseInt(e.target.value) || 1))}
          min="1"
          max="8"
        />
      </div>

      <Card className="p-4 bg-blue-50 border-blue-200 space-y-3">
        <div className="flex justify-between">
          <span>Wake Time:</span>
          <span className="font-bold text-lg">{wakeTime}</span>
        </div>
        <div className="flex justify-between">
          <span>Sleep Duration:</span>
          <span className="font-bold">
            {sleepHours}h {sleepMins}m
          </span>
        </div>
      </Card>
    </div>
  )
}
