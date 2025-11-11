"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function MolarityCalculator() {
  const [moles, setMoles] = useState(1)
  const [volume, setVolume] = useState(1)

  const molarity = moles / volume

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Moles of Solute</label>
        <Input
          type="number"
          value={moles}
          onChange={(e) => setMoles(Number.parseFloat(e.target.value) || 0)}
          step="0.01"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Volume (Liters)</label>
        <Input
          type="number"
          value={volume}
          onChange={(e) => setVolume(Number.parseFloat(e.target.value) || 1)}
          step="0.01"
        />
      </div>

      <Card className="p-4 bg-cyan-50 border-cyan-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Molarity</div>
          <div className="text-4xl font-bold text-cyan-600">{molarity.toFixed(3)} M</div>
        </div>
      </Card>
    </div>
  )
}
