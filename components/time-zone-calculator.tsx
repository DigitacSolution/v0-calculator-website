"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const timeZones: { [key: string]: number } = {
  "UTC-12": -12,
  "UTC-11": -11,
  "UTC-10": -10,
  "UTC-9": -9,
  "UTC-8": -8,
  "UTC-7": -7,
  "UTC-6": -6,
  "UTC-5": -5,
  "UTC-4": -4,
  "UTC-3": -3,
  "UTC-2": -2,
  "UTC-1": -1,
  UTC: 0,
  "UTC+1": 1,
  "UTC+2": 2,
  "UTC+3": 3,
  "UTC+4": 4,
  "UTC+5": 5,
  "UTC+6": 6,
  "UTC+7": 7,
  "UTC+8": 8,
  "UTC+9": 9,
  "UTC+10": 10,
  "UTC+11": 11,
  "UTC+12": 12,
}

export default function TimeZoneCalculator() {
  const [sourceZone, setSourceZone] = useState("UTC")
  const [targetZone, setTargetZone] = useState("UTC+8")
  const [time, setTime] = useState("12:00")

  const [h, m] = time.split(":").map(Number)
  const offset = timeZones[targetZone] - timeZones[sourceZone]
  let newH = h + offset

  while (newH < 0) newH += 24
  while (newH >= 24) newH -= 24

  const newTime = `${String(newH).padStart(2, "0")}:${String(m).padStart(2, "0")}`

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Source Time Zone</label>
        <select
          value={sourceZone}
          onChange={(e) => setSourceZone(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          {Object.keys(timeZones).map((tz) => (
            <option key={tz}>{tz}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Target Time Zone</label>
        <select
          value={targetZone}
          onChange={(e) => setTargetZone(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          {Object.keys(timeZones).map((tz) => (
            <option key={tz}>{tz}</option>
          ))}
        </select>
      </div>

      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">{targetZone}</div>
          <div className="text-3xl font-bold text-yellow-600">{newTime}</div>
        </div>
      </Card>
    </div>
  )
}
