"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function BandwidthCalculator() {
  const [dataSize, setDataSize] = useState(100)
  const [unit, setUnit] = useState("GB")
  const [speed, setSpeed] = useState(10)

  const bytesMap: { [key: string]: number } = {
    KB: 1000,
    MB: 1000000,
    GB: 1000000000,
    TB: 1000000000000,
  }

  const bytes = dataSize * bytesMap[unit]
  const seconds = bytes / (speed * 1000000)
  const minutes = seconds / 60
  const hours = minutes / 60

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Data Size</label>
          <Input type="number" value={dataSize} onChange={(e) => setDataSize(Number.parseFloat(e.target.value) || 0)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Unit</label>
          <select value={unit} onChange={(e) => setUnit(e.target.value)} className="w-full px-3 py-2 border rounded">
            <option>KB</option>
            <option>MB</option>
            <option>GB</option>
            <option>TB</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Speed (Mbps)</label>
        <Input type="number" value={speed} onChange={(e) => setSpeed(Number.parseFloat(e.target.value) || 1)} />
      </div>

      <Card className="p-4 bg-purple-50 border-purple-200 space-y-2">
        <div className="flex justify-between">
          <span>Seconds:</span>
          <span className="font-bold">{seconds.toFixed(2)}s</span>
        </div>
        <div className="flex justify-between">
          <span>Minutes:</span>
          <span className="font-bold">{minutes.toFixed(2)}m</span>
        </div>
        <div className="flex justify-between">
          <span>Hours:</span>
          <span className="font-bold text-purple-600">{hours.toFixed(2)}h</span>
        </div>
      </Card>
    </div>
  )
}
