"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function OhmsLawCalculator() {
  const [voltage, setVoltage] = useState(12)
  const [current, setCurrent] = useState(2)
  const [resistance, setResistance] = useState(6)
  const [mode, setMode] = useState("voltage")

  let V = voltage
  let I = current
  let R = resistance

  if (mode === "voltage") {
    R = V / I
  } else if (mode === "current") {
    I = V / R
  } else {
    V = I * R
  }

  const power = V * I

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Solve For</label>
        <select value={mode} onChange={(e) => setMode(e.target.value)} className="w-full px-3 py-2 border rounded">
          <option value="voltage">Voltage</option>
          <option value="current">Current</option>
          <option value="resistance">Resistance</option>
        </select>
      </div>

      {mode !== "voltage" && (
        <div>
          <label className="block text-sm font-medium mb-2">Voltage (V)</label>
          <Input type="number" value={voltage} onChange={(e) => setVoltage(Number.parseFloat(e.target.value) || 0)} />
        </div>
      )}

      {mode !== "current" && (
        <div>
          <label className="block text-sm font-medium mb-2">Current (A)</label>
          <Input type="number" value={current} onChange={(e) => setCurrent(Number.parseFloat(e.target.value) || 0)} />
        </div>
      )}

      {mode !== "resistance" && (
        <div>
          <label className="block text-sm font-medium mb-2">Resistance (Ω)</label>
          <Input
            type="number"
            value={resistance}
            onChange={(e) => setResistance(Number.parseFloat(e.target.value) || 0)}
          />
        </div>
      )}

      <Card className="p-4 bg-yellow-50 border-yellow-200 space-y-2">
        <div className="flex justify-between">
          <span>Voltage:</span>
          <span className="font-bold">{V.toFixed(2)} V</span>
        </div>
        <div className="flex justify-between">
          <span>Current:</span>
          <span className="font-bold">{I.toFixed(2)} A</span>
        </div>
        <div className="flex justify-between">
          <span>Resistance:</span>
          <span className="font-bold">{R.toFixed(2)} Ω</span>
        </div>
        <div className="flex justify-between border-t border-yellow-200 pt-2">
          <span>Power:</span>
          <span className="font-bold text-yellow-600">{power.toFixed(2)} W</span>
        </div>
      </Card>
    </div>
  )
}
