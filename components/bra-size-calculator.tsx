"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

export default function BraSizeCalculator() {
  const [bust, setBust] = useState(34)
  const [underbust, setUnderbust] = useState(30)

  const bandSize = Math.round(underbust)
  const cupSize = bust - underbust
  const cups = ["AA", "A", "B", "C", "D", "DD", "E", "F", "G"]
  const cup = cups[cupSize] || "AA"
  const size = `${bandSize}${cup}`

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Bust Measurement (inches)</label>
        <Input type="number" value={bust} onChange={(e) => setBust(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Underbust Measurement (inches)</label>
        <Input type="number" value={underbust} onChange={(e) => setUnderbust(Number.parseFloat(e.target.value) || 0)} />
      </div>

      <Card className="p-4 bg-pink-50 border-pink-200">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Bra Size</div>
          <div className="text-4xl font-bold text-pink-600">{size}</div>
        </div>
      </Card>
    </div>
  )
}
