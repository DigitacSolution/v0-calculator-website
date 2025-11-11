"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function TimeCalculator() {
  const [hours1, setHours1] = useState(1)
  const [minutes1, setMinutes1] = useState(30)
  const [operation, setOperation] = useState("add")
  const [hours2, setHours2] = useState(2)
  const [minutes2, setMinutes2] = useState(15)

  const totalMin1 = hours1 * 60 + minutes1
  const totalMin2 = hours2 * 60 + minutes2
  const resultMin = operation === "add" ? totalMin1 + totalMin2 : Math.abs(totalMin1 - totalMin2)

  const resultHours = Math.floor(resultMin / 60)
  const resultMinutes = resultMin % 60

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Hours</label>
          <Input
            type="number"
            value={hours1}
            onChange={(e) => setHours1(Number.parseInt(e.target.value) || 0)}
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Minutes</label>
          <Input
            type="number"
            value={minutes1}
            onChange={(e) => setMinutes1(Number.parseInt(e.target.value) || 0)}
            min="0"
            max="59"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Operation</label>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Hours</label>
          <Input
            type="number"
            value={hours2}
            onChange={(e) => setHours2(Number.parseInt(e.target.value) || 0)}
            min="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Minutes</label>
          <Input
            type="number"
            value={minutes2}
            onChange={(e) => setMinutes2(Number.parseInt(e.target.value) || 0)}
            min="0"
            max="59"
          />
        </div>
      </div>

      <Card className="p-4 bg-green-50 border-green-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Result</div>
          <div className="text-3xl font-bold text-green-600">
            {resultHours}h {resultMinutes}m
          </div>
        </div>
      </Card>
    </div>
  )
}
