"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function GDPCalculator() {
  const [consumption, setConsumption] = useState(5000)
  const [investment, setInvestment] = useState(1500)
  const [government, setGovernment] = useState(2000)
  const [exports, setExports] = useState(800)
  const [imports, setImports] = useState(600)

  const gdp = consumption + investment + government + (exports - imports)

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Consumption ($ billions)</label>
        <Input
          type="number"
          value={consumption}
          onChange={(e) => setConsumption(Number.parseFloat(e.target.value) || 0)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Investment ($ billions)</label>
        <Input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(Number.parseFloat(e.target.value) || 0)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Government Spending ($ billions)</label>
        <Input
          type="number"
          value={government}
          onChange={(e) => setGovernment(Number.parseFloat(e.target.value) || 0)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Exports ($ billions)</label>
        <Input type="number" value={exports} onChange={(e) => setExports(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Imports ($ billions)</label>
        <Input type="number" value={imports} onChange={(e) => setImports(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <Card className="p-4 bg-green-50 border-green-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">GDP</div>
          <div className="text-4xl font-bold text-green-600">${gdp.toFixed(2)}B</div>
        </div>
      </Card>
    </div>
  )
}
