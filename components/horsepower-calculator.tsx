"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function HorsepowerCalculator() {
  const [torque, setTorque] = useState(300)
  const [rpm, setRpm] = useState(5000)

  const hp = (torque * rpm) / 5252

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Torque (ft-lbs)</label>
        <Input type="number" value={torque} onChange={(e) => setTorque(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">RPM</label>
        <Input type="number" value={rpm} onChange={(e) => setRpm(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <Card className="p-4 bg-red-50 border-red-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Horsepower</div>
          <div className="text-4xl font-bold text-red-600">{hp.toFixed(2)} HP</div>
        </div>
      </Card>
    </div>
  )
}
