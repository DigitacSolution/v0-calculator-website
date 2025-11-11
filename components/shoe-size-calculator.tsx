"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function ShoeSizeCalculator() {
  const [usSize, setUsSize] = useState(10)
  const [gender, setGender] = useState("men")

  const euSize = gender === "men" ? usSize + 31.5 : usSize + 31
  const ukSize = gender === "men" ? usSize - 1 : usSize - 1
  const cmLength = gender === "men" ? (usSize + 11) * 0.8 : (usSize + 11) * 0.8

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full px-3 py-2 border rounded">
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">US Size</label>
        <Input type="number" value={usSize} onChange={(e) => setUsSize(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <Card className="p-4 bg-indigo-50 border-indigo-200 space-y-2">
        <div className="flex justify-between">
          <span>EU Size:</span>
          <span className="font-bold">{euSize.toFixed(1)}</span>
        </div>
        <div className="flex justify-between">
          <span>UK Size:</span>
          <span className="font-bold">{ukSize.toFixed(1)}</span>
        </div>
        <div className="flex justify-between">
          <span>Length (cm):</span>
          <span className="font-bold text-indigo-600">{cmLength.toFixed(1)}</span>
        </div>
      </Card>
    </div>
  )
}
