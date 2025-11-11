"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function VoltageDropCalculator() {
  const [voltage, setVoltage] = useState(120)
  const [current, setCurrent] = useState(10)
  const [distance, setDistance] = useState(50)
  const [wireGauge, setWireGauge] = useState(12)

  const resistance: { [key: number]: number } = {
    10: 1.018,
    12: 1.588,
    14: 2.525,
    16: 4.016,
    18: 6.385,
  }

  const R = resistance[wireGauge] || 1.588
  const totalResistance = (2 * distance * R) / 1000
  const voltageDrop = current * totalResistance
  const percentDrop = (voltageDrop / voltage) * 100

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Voltage (V)</label>
          <Input type="number" value={voltage} onChange={(e) => setVoltage(Number.parseFloat(e.target.value) || 0)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Current (A)</label>
          <Input type="number" value={current} onChange={(e) => setCurrent(Number.parseFloat(e.target.value) || 0)} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Distance (ft)</label>
          <Input type="number" value={distance} onChange={(e) => setDistance(Number.parseFloat(e.target.value) || 0)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Wire Gauge</label>
          <select
            value={wireGauge}
            onChange={(e) => setWireGauge(Number.parseInt(e.target.value))}
            className="w-full px-3 py-2 border rounded"
          >
            <option value={10}>10 AWG</option>
            <option value={12}>12 AWG</option>
            <option value={14}>14 AWG</option>
            <option value={16}>16 AWG</option>
            <option value={18}>18 AWG</option>
          </select>
        </div>
      </div>

      <Card className="p-4 bg-orange-50 border-orange-200 space-y-2">
        <div className="flex justify-between">
          <span>Voltage Drop:</span>
          <span className="font-bold">{voltageDrop.toFixed(2)}V</span>
        </div>
        <div className="flex justify-between">
          <span>Percent Drop:</span>
          <span className="font-bold text-lg text-orange-600">{percentDrop.toFixed(2)}%</span>
        </div>
      </Card>
    </div>
  )
}
