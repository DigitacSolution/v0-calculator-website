"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function MolecularWeightCalculator() {
  const [element, setElement] = useState("H2O")

  const weights: { [key: string]: number } = {
    H: 1.008,
    C: 12.01,
    N: 14.01,
    O: 16.0,
    S: 32.06,
    P: 30.97,
    Cl: 35.45,
  }

  const calculateWeight = (formula: string) => {
    let weight = 0
    const regex = /([A-Z][a-z]?)(\d*)/g
    let match

    while ((match = regex.exec(formula)) !== null) {
      const elem = match[1]
      const count = match[2] ? Number.parseInt(match[2]) : 1
      weight += (weights[elem] || 0) * count
    }

    return weight
  }

  const mw = calculateWeight(element)

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Chemical Formula</label>
        <Input value={element} onChange={(e) => setElement(e.target.value)} placeholder="H2O" />
      </div>

      <Card className="p-4 bg-purple-50 border-purple-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Molecular Weight</div>
          <div className="text-4xl font-bold text-purple-600">{mw.toFixed(2)} g/mol</div>
        </div>
      </Card>
    </div>
  )
}
