"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

const conversions: { [key: string]: { [key: string]: number } } = {
  length: {
    "m to ft": 3.28084,
    "ft to m": 0.3048,
    "m to km": 0.001,
    "km to m": 1000,
    "mi to km": 1.60934,
    "km to mi": 0.621371,
  },
  weight: {
    "kg to lb": 2.20462,
    "lb to kg": 0.453592,
    "g to oz": 0.035274,
    "oz to g": 28.3495,
  },
}

export default function ConversionCalculator() {
  const [category, setCategory] = useState("length")
  const [convType, setConvType] = useState("m to ft")
  const [input, setInput] = useState(1)

  const result = (input * conversions[category][convType]).toFixed(4)

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            setConvType(Object.keys(conversions[e.target.value])[0])
          }}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="length">Length</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Conversion Type</label>
        <select
          value={convType}
          onChange={(e) => setConvType(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          {Object.keys(conversions[category]).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Value</label>
        <Input type="number" value={input} onChange={(e) => setInput(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <Card className="p-4 bg-cyan-50 border-cyan-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">{convType}</div>
          <div className="text-3xl font-bold text-cyan-600">{result}</div>
        </div>
      </Card>
    </div>
  )
}
