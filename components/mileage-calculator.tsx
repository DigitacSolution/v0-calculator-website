"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function MileageCalculator() {
  const [startMiles, setStartMiles] = useState(50000)
  const [endMiles, setEndMiles] = useState(50300)
  const [rate, setRate] = useState(0.655)

  const totalMiles = endMiles - startMiles
  const reimbursement = totalMiles * rate

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Starting Mileage</label>
        <Input type="number" value={startMiles} onChange={(e) => setStartMiles(Number.parseInt(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Ending Mileage</label>
        <Input type="number" value={endMiles} onChange={(e) => setEndMiles(Number.parseInt(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Reimbursement Rate ($/mile)</label>
        <Input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number.parseFloat(e.target.value) || 0)}
          step="0.001"
        />
      </div>

      <Card className="p-4 bg-green-50 border-green-200 space-y-2">
        <div className="flex justify-between">
          <span>Total Miles:</span>
          <span className="font-bold">{totalMiles} miles</span>
        </div>
        <div className="flex justify-between">
          <span>Reimbursement:</span>
          <span className="font-bold text-lg text-green-600">${reimbursement.toFixed(2)}</span>
        </div>
      </Card>
    </div>
  )
}
