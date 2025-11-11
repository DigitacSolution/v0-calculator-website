"use client"

import { useState } from "react"

export default function PaceCalculator() {
  const [distance, setDistance] = useState(5)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(30)
  const [seconds, setSeconds] = useState(0)
  const [unit, setUnit] = useState("km")

  const getTotalSeconds = () => {
    return hours * 3600 + minutes * 60 + seconds
  }

  const calculatePace = () => {
    const totalSeconds = getTotalSeconds()
    if (totalSeconds === 0 || distance === 0) return { min: 0, sec: 0 }
    const paceSeconds = totalSeconds / distance
    const min = Math.floor(paceSeconds / 60)
    const sec = Math.round(paceSeconds % 60)
    return { min, sec }
  }

  const calculateSpeed = () => {
    const totalSeconds = getTotalSeconds()
    if (totalSeconds === 0) return 0
    const hours_decimal = totalSeconds / 3600
    return (distance / hours_decimal).toFixed(2)
  }

  const pace = calculatePace()

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <button
          onClick={() => setUnit("km")}
          className={`px-4 py-2 rounded-lg font-medium ${unit === "km" ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Kilometers
        </button>
        <button
          onClick={() => setUnit("mi")}
          className={`px-4 py-2 rounded-lg font-medium ${unit === "mi" ? "bg-primary text-primary-foreground" : "bg-slate-100"}`}
        >
          Miles
        </button>
      </div>

      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Distance: {distance} {unit}
        </label>
        <input
          type="range"
          min="0.5"
          max="50"
          step="0.1"
          value={distance}
          onChange={(e) => setDistance(Number.parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1">Hours</label>
          <input
            type="number"
            min="0"
            max="12"
            value={hours}
            onChange={(e) => setHours(Number.parseFloat(e.target.value))}
            className="w-full px-2 py-1 border border-border rounded text-center text-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1">Minutes</label>
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => setMinutes(Number.parseFloat(e.target.value))}
            className="w-full px-2 py-1 border border-border rounded text-center text-foreground"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1">Seconds</label>
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => setSeconds(Number.parseFloat(e.target.value))}
            className="w-full px-2 py-1 border border-border rounded text-center text-foreground"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
          <div className="text-xs text-muted-foreground mb-1">Pace</div>
          <div className="text-2xl font-bold text-primary">
            {pace.min}:{String(pace.sec).padStart(2, "0")} min/{unit}
          </div>
        </div>
        <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
          <div className="text-xs text-muted-foreground mb-1">Speed</div>
          <div className="text-2xl font-bold text-accent">
            {calculateSpeed()} {unit}/h
          </div>
        </div>
      </div>
    </div>
  )
}
