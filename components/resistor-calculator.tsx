"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ResistorCalculator() {
  const [r1, setR1] = useState(220)
  const [r2, setR2] = useState(330)
  const [config, setConfig] = useState("series")

  const series = r1 + r2
  const parallel = (r1 * r2) / (r1 + r2)
  const result = config === "series" ? series : parallel

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Resistor 1 (Ω)</label>
        <Input type="number" value={r1} onChange={(e) => setR1(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Resistor 2 (Ω)</label>
        <Input type="number" value={r2} onChange={(e) => setR2(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Configuration</label>
        <select value={config} onChange={(e) => setConfig(e.target.value)} className="w-full px-3 py-2 border rounded">
          <option value="series">Series</option>
          <option value="parallel">Parallel</option>
        </select>
      </div>

      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Total Resistance</div>
          <div className="text-4xl font-bold text-yellow-600">{result.toFixed(2)} Ω</div>
        </div>
      </Card>
    </div>
  )
}
